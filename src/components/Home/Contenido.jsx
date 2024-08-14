import React, { useState } from "react";
import VideoAniversario from "../../assets/Video Aniversario.mp4";

const Contenido = () => {
  const [seccionActiva, setSeccionActiva] = useState("Novedades");

  const renderSeccion = () => {
    switch (seccionActiva) {
      case "Novedades":
        return (
          <div className="w-full background-gradiente h-auto flex justify-evenly items-center p-4  shadow-lg">
            <div className="flex flex-col items-center gap-6">
              <div className="h-full flex items-center">
                <p className="text-2xl  font-bold text-center">
                  ✨️2do aniversario de ANANDA <br /> y así lo vivimos✨️
                </p>
              </div>

              <div>
                <div className="rounded-lg h-[500px]  flex justify-center items-center">
                  <video
                    className=" h-full rounded-lg"
                    src={VideoAniversario}
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
              </div>
              <div className="h-full flex items-center">
                <p className="text-xl  font-semibold text-center">
                  Gracias a cada socio por ser parte de esto tan especial para
                  nosotros, <br /> lo pasamos increíble y acá les dejamos un
                  pequeño fragmento de todo lo que fue la fiesta 🚀
                </p>
              </div>
            </div>
          </div>
        );
      case "Reels":
        return (
          <div className="w-full background-gradiente h-auto flex justify-evenly items-center p-4 rounded-lg shadow-lg">
            <div className="w-[50%] h-full flex flex-col gap-10">
              <p className="font-semibold text-xl text-center">
                Sumérgete en nuestro mundo con reels llenos de información
                cannábica de calidad y contenido exclusivo diseñado para ti.
                Desde consejos y curiosidades hasta novedades y experiencias, te
                ofrecemos todo lo que necesitas para estar al día y disfrutar
                del fascinante universo del cannabis. ¡No te pierdas ningún
                detalle!
              </p>
              <button className="background-gradiente py-2 rounded-full w-1/2 mx-auto text-white">
                VER
              </button>
            </div>
          </div>
        );
      case "Podcast":
        return (
          <div className="w-full background-gradiente h-auto flex justify-evenly items-center p-4 rounded-lg shadow-lg">
            <div className="w-[50%] h-full flex flex-col gap-10">
              <p className="font-semibold text-xl  text-center">
                Saliendo del Indoor es tu podcast definitivo sobre el mundo del
                cannabis. Cada episodio, exploramos diversas áreas del cannabis
                medicinal conversando con expertos y entusiastas del sector.
              </p>
              <button className="background-gradiente py-2 rounded-full w-1/2 mx-auto text-white">
                ESCUCHAR
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full my-10">
      <div className="w-[90%] mx-auto flex flex-col justify-center rounded-lg my-10">
        <div className="w-full flex justify-around bg-[#496D5F] py-2 rounded-t-lg">
          <button
            onClick={() => setSeccionActiva("Novedades")}
            className={`font-bold text-lg px-4 py-2 rounded ${
              seccionActiva === "Novedades"
                ? "bg-white text-[#496D5F]"
                : "text-[#E7E3D8]"
            }`}
          >
            NOVEDADES
          </button>
          <button
            onClick={() => setSeccionActiva("Reels")}
            className={`font-bold text-lg px-4 py-2 rounded ${
              seccionActiva === "Reels"
                ? "bg-white text-[#496D5F]"
                : "text-[#E7E3D8]"
            }`}
          >
            REELS
          </button>
          <button
            onClick={() => setSeccionActiva("Podcast")}
            className={`font-bold text-lg px-4 py-2 rounded ${
              seccionActiva === "Podcast"
                ? "bg-white text-[#000]"
                : "text-[#E7E3D8]"
            }`}
          >
            PODCAST
          </button>
        </div>
        {renderSeccion()}
      </div>
    </div>
  );
};

export default Contenido;
