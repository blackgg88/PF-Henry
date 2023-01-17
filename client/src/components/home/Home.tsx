import Navbar from '../navbar/Navbar';
import Footer from '../Footer';
import Carrousel from '../Carrousel';
import logo from "../../assets/logo_smart_b.png"
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
    <div>
    </div>
      <Carrousel />
      <Footer />
    </div>
  );
};

export default Home;
