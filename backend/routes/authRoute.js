import express from 'express'
import User  from '../models/userModel.js'
import { jwtVerify } from 'jose'
import { JWT_SECRET } from '../utils/getJwtSecret.js'
import { generateToken } from '../utils/generateToken.js'

const router = express.Router()
const getRefreshCookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
})
const refreshTokenMaxAge = 30 * 24 * 60 * 60 * 1000

//route POST api/auth/register
//Register new user
//public

router.post('/register', async (req, res, next) => {
    try {
      const {name, email, password, role}  = req.body || {};

      if (!name || !email || !password || !role) {
        res.status(400)
        throw new Error("All fields are required");
      }
      const existingUser = await User.findOne({email});
      if (existingUser) {
        res.status(400)
        throw new Error("User already exists");
      }
      const user = await User.create({
        name,
        email,
        password,
        role
      })
      //create Token
      const payload = {userId: user._id.toString ()}
      const accessToken = await generateToken(payload, '1m');
      const refreshToken = await generateToken (payload, '30d')

      //Set refresh token in HTTP-Only cookie
      res.cookie('refreshToken', refreshToken, {
        ...getRefreshCookieOptions(),
        maxAge: refreshTokenMaxAge,
      })

      res.status(201).json({
        accessToken,
        user:{
          id:user._id,
          name: user.name,
          email:user.email ,
          role:user.role 
        }
      })
    } catch (err) {
        console.log(err)
       next(err) 
    }
})
     //POST api/auth/login
     //authenticate a user
    //Private

    router.post('/login', async (req, res,next) => {
       try {
        const {email, password} = req.body || {};
        if (!email || !password) {
            res.status(400)
            throw new Error("email and password are required");
            
        }
        //find user
        const user = await User.findOne({email});
        if (!user) {
            res.status(401);
            throw new Error("Inavlid Credentials");
        }
        //check if password matches
        const isMatch = await user.matchPassword(password)
        if (!isMatch) {
            res.status(401);
            throw new Error("Inavlid Credentials");   
        }
        //Create Tokens
    const payload = {userId: user._id.toString ()}
      const accessToken = await generateToken(payload, '1m');
      const refreshToken = await generateToken (payload, '30d')

      //Set refresh token in HTTP-Only cookie
      res.cookie('refreshToken', refreshToken, {
        ...getRefreshCookieOptions(),
        maxAge: refreshTokenMaxAge,
      })
      res.status(201).json({
        accessToken,
        user:{
          id:user._id,
          name: user.name,
          email:user.email ,
          role:user.role 
        }
      })
       } catch (err) {
        console.log(err)
        next(err) 
        
       } 
    })

    //POST api/auth/logout
    //Private
    router.post('/logout',  (req, res) => {
      res.clearCookie('refreshToken', getRefreshCookieOptions())
      res.status(200).json({
        message:'logged out successfully' })
    })
    //POST api/auth/refresh
    //Generate new access token from refresh token
    //Public(Needs valid refresh token in cookie)
    router.post('/refresh', async (req, res, next) => {
        try {
          const token = req.cookies?.refreshToken;
          console.log("Refreshing Token...")

          if (!token) {
            res.status(401);
            throw new Error("no refresh token");  
          }  
          const{payload} = await jwtVerify(token, JWT_SECRET)
          
          const user = await User.findById(payload.userId)
          if (!user) {
            res.status(401)
            throw new Error("No user");
          }
          const newAccessToken = await generateToken({userId: user._id.toString()},'1m')
          res.json({
            accessToken: newAccessToken,
            user:{
                id:user._id,
                name:user.name,
                email: user.email
            }
          })
        } catch (err) {
            res.status(401)
            next(err);
        }
    })
export default router