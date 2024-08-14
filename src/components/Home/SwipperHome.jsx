import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import logoSlider from "../../assets/logoAnandaCarousel.png";
import imagenBanner from "../../assets/imagenBanner.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperNavButtons } from "../SwipperNavButton";
import { Button } from "@nextui-org/react";

const SwipperHome = () => {
  return (
    <div className="w-full flex justify-center items-center relative">
      <img
        className="w-full aspect-video object-cover h-[calc(100vh-100px)] flex opacity-70"
        src={imagenBanner}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[88%] h-full  flex flex-col justify-center gap-5">
          <h2 className="text-white text-6xl font-bold">
            Sabes como empezar <br />
            un tratamiento con cannabis?{" "}
          </h2>
          <p className="text-white text-2xl font-semibold">
            Comunicate con nuestro equipo y sacate todas las dudas.
          </p>
          <Button className="background-gradiente w-[20%] py-2 font-semibold text-lg rounded-full text-white">
            CONTACTANOS
          </Button>
        </div>
      </div>
    </div>
    // <Swiper
    //   className="w-full"
    //   spaceBetween={50}
    //   loop={true}
    //   slidesPerView={1}
    //   pagination={{ clickable: true }}
    //   autoplay={true}
    // >
    //   <SwiperSlide
    //     navigation={true}
    //     modules={[Pagination, Autoplay, Navigation]}
    //     className=" w-full flex justify-center items-center"
    //   >
    //     <div className="w-full  flex justify-center items-center py-2">
    //       <img
    //         className="w-full aspect-video h-[500px] flex rounded-lg"
    //         src={logoSlider}
    //         alt=""
    //       />
    //     </div>
    //   </SwiperSlide>

    //   {/* <SwiperNavButtons /> */}
    // </Swiper>
  );
};

export default SwipperHome;
