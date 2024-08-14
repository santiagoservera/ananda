import React from "react";
import NavBar from "../NavBar";
import SwipperHome from "./SwipperHome";
import Footer from "../Footer";
import QuienesSomos from "./QuienesSomos";
import Contenido from "./Contenido";
import Contacto from "./Contacto";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#E6E2D7] flex flex-col">
      <NavBar />
      <SwipperHome />
      <QuienesSomos />
      <Contenido />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Home;
