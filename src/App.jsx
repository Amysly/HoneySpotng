import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

// Pages & Components
import About from './pages/About';
import Product from './pages/Product';
import Faq from './pages/Faq';
import Contact from './pages/Contact'
import Homepage from './components/Homepage'
import NotFoundPage from './pages/NotFoundPage'
import Mainlayout from './components/layout/Mainlayout';

import faqs from './FaqData';

const App = () => {
  const router = createBrowserRouter(
     createRoutesFromElements(
    <>
    {/* ROUTE WITHOUT HEADER & FOOTER */}
     <Route path="*" element={<NotFoundPage />} />
      <Route element={<Mainlayout />}>
        <Route path= "/"element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Product />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="faqs" element={<Faq faqs={faqs} />} />
      </Route>
    
    </>
     )
  );

  return <RouterProvider router={router} />;
};

export default App;