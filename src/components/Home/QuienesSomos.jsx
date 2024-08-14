import React from "react";
import logoAnandaNegro from "../../assets/LogoAnandaNegro.png";
const QuienesSomos = () => {
  return (
    <div className="w-[90%] mx-auto pt-52 pb-10 flex flex-col justify-center gap-5 my-16">
      <div className="w-full h-auto flex lg:flex-row flex-col justify-center gap-10">
        <img
          className="rounded-lg h-[400px] w-[400px] opacity-50"
          src={logoAnandaNegro}
          alt=""
        />
        <div className="w-full flex flex-col h-auto justify-center">
          <div className="flex justify-center h-full mt-[-30px]">
            <p className="text-6xl font-bold text-gradiente text-center uppercase">
              Quienes somos?
            </p>
          </div>
          <div className="flex flex-col gap-16 pb-5 w-">
            <div className="flex gap-3 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 42 42"
              >
                <path
                  className="opacity-50"
                  fill="#000"
                  d="M20.938 10.725C14.51.796 1.5 6.205 1.5 17.021c0 8.122 17.836 20.827 19.438 22.479C22.551 37.848 39.5 25.143 39.5 17.021c0-10.734-12.122-16.225-18.562-6.296"
                />
              </svg>

              <p className="text-xl font-semibold text-[#436854] text-center">
                Somos una ONG de la salud dedicada a investigar, asesorar,
                educar y proveer medicina a los usuarios y usuarias de San Juan.{" "}
                <br />
              </p>
            </div>
            <div className="flex gap-8 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  className="opacity-50"
                  fill="#000"
                  d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2M20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2"
                />
              </svg>

              <p className="text-xl font-semibold text-[#436854] text-center">
                Asumimos un compromiso y ofrecemos un acompañamiento respetuoso
                a nuestros socios y socias.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 256 256"
              >
                <path
                  className="opacity-50"
                  fill="#000"
                  d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-34.34 101.66l-32 32a8 8 0 0 1-11.32-11.32L148.69 136H88a8 8 0 0 1 0-16h60.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"
                />
              </svg>

              <p className="text-xl font-semibold text-[#436854] text-center">
                La ley medicina 27.350 es la que nos ampara, y nos permitió
                asociarnos y formar un equipo interdiciplinario de usuarios
                cultivadores, profesionales de la salud y abogados, y de esta
                manera obtener la contención necesaria para optimizar nuestro
                trabajo y la experiencia de cada uno de los socios.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
        <div className=" border h-[350px] border-[#436854] rounded-lg flex flex-col justify-evenly items-center p-3 shadow-lg">
          <p className="text-2xl font-bold text-gradiente">Mision</p>
          <p className="text-center text-lg font-semibold ">
            Promover la salud y la calidad de vida, favoreciendo la seguridad y
            autonomía en el proceso terapéutico con el uso de hierbas
            medicinales como el cannabis.
          </p>
        </div>
        <div className=" border border-[#436854] rounded-lg flex flex-col justify-evenly items-center p-3 shadow-lg">
          <p className="text-2xl font-bold text-gradiente">Vision</p>
          <p className="text-center text-lg font-semibold ">
            Ser un referente internacional pionero en un paradigma de atención
            integral utilizando alternativas naturales y sostenibles que
            conecten saberes ancestrales y científicos.
          </p>
        </div>
        <div className=" border border-[#436854] rounded-lg flex flex-col justify-evenly items-center p-3 shadow-lg">
          <p className="text-2xl font-bold text-gradiente">Valores</p>
          <p className="text-center text-lg font-semibold ">
            ✓ Compromiso <br /> ✓ Sostenibilidad <br /> ✓ Profesionalismo <br />{" "}
            ✓ Respeto a la diversidad <br />
            ✓ Autonomía <br /> ✓ Transparencia
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
