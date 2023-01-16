import Navbar from './Navbar';
import Footer from './Footer';
import Carrousel from './Carrousel';
import { AllProducts } from './AllProducts/AllProducts';

const Home = () => {

  return (
    <div>
      <Navbar />
      <AllProducts/>
      <Carrousel />
      <Footer />
    </div>
  );
};

export default Home;
