import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex swiper-btns mx-[2px] sm:mx-1 lg:mx-2">
      <button onClick={() => swiper.slidePrev()}>
        <svg
          className="ml-[5px]"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#559271"
            d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z"
          />
        </svg>
      </button>
      <button onClick={() => swiper.slideNext()}>
        <svg
          className="rotate-180 mr-[5px]"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#559271"
            d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z"
          />
        </svg>
      </button>
    </div>
  );
};
