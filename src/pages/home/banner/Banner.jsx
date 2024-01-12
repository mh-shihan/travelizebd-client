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
            <img className=" w-full h-[95vh]" src={slider1} />
            <div className="absolute bg-black inset-0 bg-opacity-50"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className=" w-full h-[95vh]" src={slider2} />
            <div className="absolute bg-black inset-0 bg-opacity-50"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className=" w-full h-[95vh]" src={slider3} />
            <div className="absolute bg-black inset-0 bg-opacity-50"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className=" w-full h-[95vh]" src={slider4} />
            <div className="absolute bg-black inset-0 bg-opacity-50"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
