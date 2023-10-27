import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { styled } from "styled-components";
import {Autoplay, Pagination} from 'swiper/modules'

const Swiper = () => {
  return (
    <SwiperContainerStyle spaceBetween={30} slidesPerView={3}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}

    >
      <Slide><img src="https://bkmedia.bakingo.com/regular_desktop_3.jpg"></img></Slide>
      <Slide><img src="https://bkmedia.bakingo.com/birthday_desktop_28.jpg"></img></Slide>
      <Slide><img src="https://bkmedia.bakingo.com/eggless_cake_desktop_0.jpg"></img></Slide>
      <Slide><img src="https://bkmedia.bakingo.com/gourmet_cake_desktop_0.jpg" alt="" /></Slide>
      <Slide><img src="https://bkmedia.bakingo.com/regular_desktop_3.jpg" alt="" /></Slide>
      <Slide><img src="https://bkmedia.bakingo.com/eggless_cake_desktop_0.jpg"></img></Slide>


    </SwiperContainerStyle>
  );
};

export default Swiper;

const SwiperContainerStyle = styled(SwiperContainer)`
    padding: 2rem 1rem;
    width: 90%;
    height: 421px;

    .swiper-pagination-bullet{
        height: 10px;
        width: 10px;
    }
`
const Slide = styled(SwiperSlide)`
  /* background-color: pink; */
  /* width: 600px; */
  height: 420px;
  
  border-radius: 15px;
  overflow: hidden;

  img{
    height: 100%;
  }
`;
