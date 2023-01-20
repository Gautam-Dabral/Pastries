import '../../node_modules/react-bootstrap/dist/react-bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './MyNavbar/MyNavbar.jsx';
import MyCarousel from './MyCarousel/MyCarousel.jsx';
import About from './About/About.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import OrderArea from './OrderArea/OrderArea.jsx';
import MyFooter from './MyFooter/MyFooter.jsx';

export default function App() {
  return (
    <>
    <MyNavbar />
    <MyCarousel />
    <About />
    <Testimonials /> 
    <OrderArea /> 
    <MyFooter />
    </>
  )
};

