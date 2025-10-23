import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";   // Naming the component, referencing its location
import About from "./pages/About";
import Contact from "./pages/Contact";
import Houses from "./pages/Houses";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

        <Route index element={<Home />}/>

        <Route path="about" element={<About />}/>

        <Route path="houses" element={<Houses />}/>

        <Route path="contact" element={<Contact />}/>

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);