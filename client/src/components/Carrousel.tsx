
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
const Carrousel = () => {
  return <>
  <div>
  <Splide aria-label="My Favorite Images">
  <SplideSlide>
    <img src="https://m.media-amazon.com/images/I/51ugi3mMBgL._AC_SX522_.jpgimage1.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="https://m.media-amazon.com/images/I/51ugi3mMBgL._AC_SX522_.jpg" alt="Image 2"/>
  </SplideSlide>
</Splide>

  </div>
  

  </>
};

export default Carrousel;
