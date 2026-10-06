import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./main";
import About from "./about";
import Career from "./career";
import Contact from "./contact";
import Digital from "./digitalmarketing";
import AI from "./ai";
import Web from "./web";
import Graphics from "./graphic";
import Software from "./software";
import Ecommerce from "./e-commerce";

const Routers = () => {
  return (
    <Routes>

      <Route path="/" element={<Main />} />

      <Route path="/about" element={<About />} />

      <Route path="/career" element={<Career />} />

      <Route path="/contact" element={<Contact />} />

      <Route
        path="/digital"
        element={<Digital />}
      />

      <Route
        path="/ai"
        element={<AI />}
      />

      <Route
        path="/web"
        element={<Web />}
      />

      <Route
        path="/graphic"
        element={<Graphics />}
      />

      <Route
        path="/software"
        element={<Software />}
      />

      <Route
        path="/ecommerce"
        element={<Ecommerce />}
      />

    </Routes>
  );
};

export default Routers;