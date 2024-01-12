import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import slider1 from "../../../assets/banner/slider-1.jpg";
import slider2 from "../../../assets/banner/slider-2.jpg";
import slider3 from "../../../assets/banner/slider-3.jpg";
import slider4 from "../../../assets/banner/slider-4.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img className=" w-full h-[100vh]" src={slider1} />
            <div className="absolute bg-black inset-0 bg-opacity-50"></div>
            <div className="absolute inset-10 top-32 lg:inset-52 ">
              <h1 className="text-2xl md:text-6xl font-extrabold md:font-extrabold text-white text-center">
                Discover Bangladesh
              </h1>
              <h3 className="text-xl md:text-4xl font-medium md:font-extrabold text-yellow text-center mt-2 md:mt-4">
                Where Culture Meets Adventure!
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className=" w-full h-[100vh]" src={slider2} />
            <div className="absolute bg-black inset-0 bg-opacity-50"></div>
            <div className="absolute inset-10 top-32 lg:inset-52 ">
              <h1 className="text-2xl md:text-6xl font-extrabold md:font-extrabold text-white text-center">
                Discover Bangladesh
              </h1>
              <h3 className="text-xl md:text-4xl font-medium md:font-extrabold text-yellow text-center mt-2 md:mt-4">
                Where Culture Meets Adventure!
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className=" w-full h-[100vh]" src={slider3} />
            <div className="absolute bg-black inset-0 bg-opacity-50"></div>
            <div className="absolute inset-10 top-32 lg:inset-52 ">
              <h1 className="text-2xl md:text-6xl font-extrabold md:font-extrabold text-white text-center">
                Discover Bangladesh
              </h1>
              <h3 className="text-xl md:text-4xl font-medium md:font-extrabold text-yellow text-center mt-2 md:mt-4">
                Where Culture Meets Adventure!
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className=" w-full h-[100vh]" src={slider4} />
            <div className="absolute bg-black inset-0 bg-opacity-50"></div>
            <div className="absolute inset-10 top-32 lg:inset-52 ">
              <h1 className="text-2xl md:text-6xl font-extrabold md:font-extrabold text-white text-center">
                Discover Bangladesh
              </h1>
              <h3 className="text-xl md:text-4xl font-medium md:font-extrabold text-yellow text-center mt-2 md:mt-4">
                Where Culture Meets Adventure!
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
