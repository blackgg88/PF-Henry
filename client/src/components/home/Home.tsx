import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import Carrousel from "../carrousel/carrousel";
import Card from "../carrousel/cardCarrousel";
import logoTop from "../../assets/logo_smart_b.png";
import logoWhite from "../../assets/logo_smart_w.png";
import img_home1 from "../../assets/home_img_1.png";
import img_home2 from "../../assets/home_img_2.png";
import img_background_carrucel from "../../assets/images/bacgroundCarrucel.png";
import img_home3 from "../../assets/home_img_3.png";
import { NewsHome } from "../home_news_fake/NewsHome";
import { useAuth0 } from "@auth0/auth0-react"; 
import { NavLink } from "react-router-dom";

const Home = () => {
  const CARDS = 6;
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="home_wrapper">
      <div className="home_all_imageSide">
        <div className="home_image_left">
          <p className="home_text_1">Innovate</p>
          <p className="home_text_2">Home</p>
          {
            !isAuthenticated && <button onClick={() => loginWithRedirect()} className="home_button_li">Login</button>
          }
        </div>
        <div className="home_image_rigth">
          <img className="home_image1" src={img_home1} alt="image-1" />
        </div>
      </div>

      

      <div className="home_container_carrouselSide">
        <div className="home_carrousel_logo">
          <img src={logoWhite} alt="logo" />
        </div>
        <div className="home_container_imagediv">
          <img className="home_carrouselIMG" src={img_home2} alt="image-1" />
        </div>
        <div className="home_carrousel_ContainerDiv">
          <Carrousel>
            {[...new Array(CARDS)].map((_, i) => (
              <Card title={"Card " + (i + 1)} content="Pending..." />
            ))}
          </Carrousel>
        </div>
      </div>

      <div className="home_news_container">
        <div className="home_news_side">
          <div className="news_title">
            <h1 className="title-news">News</h1>
          </div>
          <NewsHome />

          <div className="news_back">
            <NavLink className="news_navLink_readMore" to='/news'>
              <h3 className="read-more-news">Read More...</h3>
            </NavLink>
          </div>
        </div>
        <div className="home_news_image_side">
          <img src={img_home3} alt="home-news-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
