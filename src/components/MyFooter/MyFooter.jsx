import Nav from 'react-bootstrap/Nav';
import './MyFooter.css';

export default function MyFooter(params) {
    return (
        <div className="footer-links">
            <div className="nav-links">
                <Nav.Link classNAme="nav-link" href="#navbar">Home</Nav.Link>
                <Nav.Link classNAme="nav-link" href="#about">About</Nav.Link>
                <Nav.Link classNAme="nav-link" href="#testimonials">Testimonials</Nav.Link>
                <Nav.Link classNAme="nav-link" href="#contact">Contact Us</Nav.Link>
            </div>
            <div className="social-links">
                <p id="copyright">Pastries</p>
                <a href="mailto:gautamdabral1999@gmail.com"><i class="fa-solid fa-envelope"></i> Gautam-Dabral</a>
            </div>
        </div>
    )
};
