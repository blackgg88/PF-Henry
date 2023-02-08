import { useEffect } from 'react';
import Carrousel from '../carrousel/carrousel';
import Card from '../carrousel/cardCarrousel';
import logoWhite from '../../assets/logo_smart_b.png';
import img_home1 from '../../assets/home_img_1.png';
import img_home2 from '../../assets/home_img_2.png';
// import img_home3 from '../../assets/home_img_3.png';
import img_home3 from '../../assets/home/cameraHome.png';
import { NewsHome } from '../home_news_fake/NewsHome';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../Redux/hook';
import { userFetch } from '../../Redux/slice/user/userController';
import { getUserLogin } from '../../Redux/slice/user/user.slice';
import { productNews } from './productNews';
import { ProductState } from '../../Redux/slice/product/product.slice';

import colorBackgroundpar1_w from "../../assets/home/difuminadoFondoHome_w.png"
import colorBackgroundpar1_b from "../../assets/home/difuminadoFondoHome_b.png"
import colorBackgroundSugestionsProduct_w from "../../assets/home/difuminadoFondoHomeSuggestionProduct_w.png"
import colorBackgroundSugestionsProduct_b from "../../assets/home/difuminadoFondoHomeSuggestionProduct_b.png"
import colorBackgroundpar2_w from "../../assets/home/difuminadoFondoHome2_w.png"
import colorBackgroundpar2_b from "../../assets/home/difuminadoFondoHome2_b.png"
import tvHome from "../../assets/home/tvCHome.png"
import ps5Home from "../../assets/home/ps5Home.png"
import lamparaHome from "../../assets/home/lamparaHome.png"
import alexaHome from "../../assets/home/alexaHome.png"
import aprilHome from "../../assets/home/aprilHome.png"

const Home = () => {
  const dispatch = useAppDispatch();
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    const getUserByBd = async () => {
      if (isAuthenticated) {
        const userByBd = await userFetch(user as any);
        dispatch(getUserLogin(userByBd));
      }
    };

    getUserByBd();
  }, [isAuthenticated]);

  return (
    <div className='home_wrapper'>
      {/* Image And Title */}
      <div className='home_imageTitlteContainer'>
        <div className='home_imageTitleDiv'
          style={{
            backgroundImage: `url(${colorBackgroundpar1_w})`,
            // backgroundImage: `url(${colorBackgroundpar1_b})`,
          }}
        >
          <div className='home_titleContainer'>
            <p className='home_text_1'>Innovate</p>
            <p className='home_text_2'>Smart Home whith Smart Nest </p>
            {!isAuthenticated && (
              <button onClick={() => loginWithRedirect()} className='home_button_li'>
                Login
              </button>
            )}
          </div>
          <div className='home_imageContainer'>
          <NavLink to="/shop">
            <img className='tv-home' src={tvHome} alt='logo' />
          </NavLink>
          <NavLink to="/shop">
            <img className='alexa-home' src={img_home1} alt='logo' />
          </NavLink>
          <NavLink to="/shop">
            <img className='ps5-home' src={ps5Home} alt='logo' />
          </NavLink>
          <NavLink to="/shop">
            <img className='alexa-home-movil' src={img_home1} alt='logo' />
          </NavLink>
            
          </div>
        </div>
      </div>

      {/* Carrousel Side */}
      <div className='home_container_carrouselSide'
        style={{
          backgroundImage: `url(${colorBackgroundSugestionsProduct_w})`,
          // backgroundImage: `url(${colorBackgroundSugestionsProduct_b})`,
        }}
      >
        <div className='title-products'> Suggestions Products </div>
        <div className="container-imagen-description-carrucel">
          <img className='home_carrouselIMG' src={aprilHome} alt='image-1' />
          <div className="description-carrucel">

            <div className='carrucel-detail'> Encuentra los mejores productos de alta calidad y a un excelente precio  encuentra los mejores productos de alta calidad y a un excelente precio </div>
            <div className='carrucel'>
              <Carrousel>
                {productNews.map((e: ProductState, i) => (
                  <Card key={i} product={e} />
                ))}
              </Carrousel>

            </div>

          </div>
        </div>
        <div className='home_carrousel_logo'>
          <img src={logoWhite} alt='logo' />
        </div>

        {/* 
        <div className='home_container_imagediv'>
        </div>
        <div className='home_carrousel_ContainerDiv'>

          <div className='detail'> Gatget  week</div>
          <div className='carrousel'>

          </div>
        </div>
        <div className='description'>
        </div>
        */}
      </div>

      {/* News Section */}
      <div className='home_news_container'
        style={{
          backgroundImage: `url(${colorBackgroundpar2_w})`,
          // backgroundImage: `url(${colorBackgroundpar2_b})`,
        }}
      >
        <h1 className='title-news'>News</h1>


        <div className='home_news_side'>
          <div className='news_title'>


            <div className='title'>
              <p>Mantente informado de las ultimas noticias destacadas en el mundo de la tecnologia </p>
              <br />
              <p>Informacion tecnologica al alcance de tu mano.</p>
            </div>

            {/* <div className='home_news_image_side'>
              <img src={img_home3} alt='home-news-image' />
            </div> */}
          </div>


          <div className='side_news'>

            <div className='news_sections_present'>
              <NewsHome />
              <NavLink className='title_news_sections_present' to='/news'>
                Noticias de la semana
              </NavLink>
            </div>
            <div className='news_back'>
              <NavLink className='news_navLink_readMore' to='/news'>
                <h3 className='read-more-news'>Read More...</h3>
              </NavLink>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
