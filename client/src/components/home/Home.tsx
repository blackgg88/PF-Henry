import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import Carrousel from "../carrousel/carrousel";
import Card from "../carrousel/cardCarrousel";
import logo from "../../assets/logo_smart_b.png";
import img_home1 from "../../assets/home_img_1.png";
import img_home2 from "../../assets/home_img_2.png";

const Home = () => {
  const CARDS = 6;

  return (
    <div className="home_wrapper">
      <div className="home_topLanding">
        <div className="home_container_logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="home_container_navbar">
          <Navbar />
        </div>
      </div>

      <div className="home_all_imageSide">
        <div className="home_image_left">
          <p className="home_text_1">Innovate</p>
          <p className="home_text_2">Home</p>
          <button className="home_button_li" >Login</button>
        </div>
        <div className="home_image_rigth">
          <img className="home_image1" src={img_home1} alt="image-1" />
        </div>
      </div>



      <div className="home_imagepart_1">
      </div>

      <div className="home_container_carrouselSide">
        <div className="home_container_imagediv">
          <img className="home_carrouselIMG" src={img_home2} alt="image-1" />
        </div>
        <div className="home_carrousel_ContainerDiv">
          <Carrousel>
            {[...new Array(CARDS)].map((_, i) => (
              <Card
                title={"Card " + (i + 1)}
                content="Pending..."
              />
            ))}
          </Carrousel>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;