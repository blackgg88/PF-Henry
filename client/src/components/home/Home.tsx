import Navbar from '../navbar/Navbar';
import Footer from '../Footer';
import Carrousel from '../Carrousel';
import logo from "../../assets/logo_smart_b.png"
import img_home1 from "../../assets/home_img_1.png"

const Home = () => {

  return (
    <div className='home_wrapper'>
      <div className='home_topLanding'>
        <div className='home_container_logo'>
          <img className='logo' src={logo} alt='logo'/>
        </div>
        <div className='home_container_navbar'>
          <Navbar /> 
        </div>
      </div>
      
      <div className='home_imagepart_1'>
        <p className='home_text_1'>Innovate</p>
        <p className='home_text_2'>Home</p>
        <button className="home_button_li">Login</button>
        <img src={img_home1} alt="image-1" />
      </div>
      <div > 
        <button className="home_button_li">Login</button>

      </div>
        
    <div>
    </div>
      <Carrousel />
      <Footer />
    </div>
  );
};

export default Home;
