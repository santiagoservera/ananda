import React, { useState } from "react";
import VideoAniversario from "../../assets/Video Aniversario.mp4";
import { FaFilm, FaInstagram, FaPodcast } from "react-icons/fa";
import reelAnanda from "../../assets/reelAnanda.mp4";
const Contenido = () => {
  const [seccionActiva, setSeccionActiva] = useState("Podcast");

  const renderSeccion = () => {
    switch (seccionActiva) {
      case "Podcast":
        return (
          <div className="p-8 background-gradiente rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              🎙️ Saliendo del Indoor - Podcast
            </h2>
            <div className="flex justify-center items-center ">
              <iframe
                className="rounded-lg"
                width="1335"
                height="600"
                src="https://www.youtube.com/embed/_nXJiDqgaw8"
                title="Saliendo del Indoor | T2 | Episodio 01 | C4nn4bis Medicinal"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <p className="text-xl font-semibold text-center text-white my-6">
              Saliendo del Indoor es tu podcast definitivo sobre el mundo del
              cannabis. Exploramos diversas áreas del cannabis medicinal con
              expertos y entusiastas.
            </p>
            <div className="flex justify-center items-center">
              <button className="background-gradiente border border-gray-400 py-2 rounded-full w-1/2 mx-auto text-white font-semibold text-lg shadow-lg transition-transform transform hover:scale-105">
                VER TODOS LOS EPISODIOS
              </button>
            </div>
          </div>
        );

      case "Reels":
        return (
          <div className="p-8 background-gradiente rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-white text-center">
              🌿 Explora nuestros Reels
            </h2>
            <div className="relative rounded-lg overflow-hidden mb-4 h-[600px] flex justify-center items-center">
              <video
                className="w-[70%] h-auto object-cover aspect-video rounded-lg"
                src={reelAnanda}
                autoPlay
                loop
                muted
                aria-label="Video del segundo aniversario de ANANDA"
              ></video>
            </div>
            <p className="text-xl font-semibold text-center text-white mb-6">
              Sumérgete en nuestro mundo con reels llenos de información
              cannábica de calidad y contenido exclusivo diseñado para ti.
            </p>
            <div className="flex justify-center items-center">
              <button className="background-gradiente border border-gray-400 py-2 rounded-full w-1/2 mx-auto text-white transition-transform transform hover:scale-105">
                VER
              </button>
            </div>
          </div>
        );
      case "Novedades":
        return (
          <div className="p-8 background-gradiente rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center text-white">
              ✨️ 2do aniversario de ANANDA y así lo vivimos ✨️
            </h2>
            <div className="relative rounded-lg overflow-hidden mb-4 h-[600px] flex justify-center items-center">
              <video
                className="w-[70%] h-auto object-cover aspect-video rounded-lg"
                src={VideoAniversario}
                autoPlay
                loop
                muted
                aria-label="Video del segundo aniversario de ANANDA"
              ></video>
            </div>
            <p className="text-xl font-semibold text-center text-white">
              Gracias a cada socio por ser parte de esto tan especial para
              nosotros, lo pasamos increíble y acá les dejamos un pequeño
              fragmento de todo lo que fue la fiesta 🚀
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full my-10">
      <div className="w-[90%] mx-auto flex flex-col justify-center">
        <div className="flex justify-around bg-[#496D5F] py-4 rounded-t-lg shadow-md">
          <button
            onClick={() => setSeccionActiva("Podcast")}
            className={`flex items-center gap-2 font-bold text-lg px-4 py-2 rounded transition-colors ${
              seccionActiva === "Podcast"
                ? "bg-white text-[#496D5F]"
                : "text-[#E7E3D8] hover:bg-[#5b8270]"
            }`}
          >
            <FaPodcast />
            PODCAST
          </button>
          <button
            onClick={() => setSeccionActiva("Novedades")}
            className={`flex items-center gap-2 font-bold text-lg px-4 py-2 rounded transition-colors ${
              seccionActiva === "Novedades"
                ? "bg-white text-[#496D5F]"
                : "text-[#E7E3D8] hover:bg-[#5b8270]"
            }`}
          >
            <FaFilm />
            NOVEDADES
          </button>
          <button
            onClick={() => setSeccionActiva("Reels")}
            className={`flex items-center gap-2 font-bold text-lg px-4 py-2 rounded transition-colors ${
              seccionActiva === "Reels"
                ? "bg-white text-[#496D5F]"
                : "text-[#E7E3D8] hover:bg-[#5b8270]"
            }`}
          >
            <FaInstagram />
            REELS
          </button>
        </div>
        <div className="mt-4">{renderSeccion()}</div>
      </div>
    </div>
  );
};

export default Contenido;
