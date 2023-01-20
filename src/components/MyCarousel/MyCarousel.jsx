import Carousel from 'react-bootstrap/Carousel';
import './MyCarousel.css';

export default function MyCarousel() {
    return (
        <Carousel className='my-carousel'>

            <Carousel.Item interval={4000}>
                < div className='my-carousel-item'>
                    <div className="carousel-info">
                        <h2 className="title">Cakes!</h2>
                        <p className="desc">A wide range of
                            cakes are available. Customize your own now!</p>
                        <button className="btn-order"><a href="#contact">ORDER NOW!</a></button>
                    </div>
                    <div className="carousel-img">
                        <img
                            className="carousel-img"
                            src="/img/cake-img.png"
                            alt="cake-img"
                        />
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item interval={4000}>
                < div className='my-carousel-item'>
                    <div className="carousel-info">
                        <h2 className="title">Donuts!</h2>
                        <p className="desc">A wide range of donuts are available. Go nuts for Donuts!</p>
                        <button className="btn-order"><a href="#contact">ORDER NOW!</a></button>
                    </div>
                    <div className="carousel-img">
                        <img
                            className="carousel-img"
                            src="/img/donuts-img.png"
                            alt="donuts-img"
                        />
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item interval={4000}>
                < div className='my-carousel-item'>
                    <div className="carousel-info">
                        <h2 className="title">Muffins!</h2>
                        <p className="desc">Filled with the goodness of chocolate, caramel and much more.</p>
                        <button className="btn-order"><a href="#contact">ORDER NOW!</a></button>
                    </div>
                    <div className="carousel-img">
                        <img
                            className="carousel-img"
                            src="/img/muffin-img.png"
                            alt="donuts-img"
                        />
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item interval={4000}>
                < div className='my-carousel-item'>
                    <div className="carousel-info">
                        <h2 className="title">Cookies!</h2>
                        <p className="desc">No one can resist chocolate chip cookies, i guess cookies in general.</p>
                        <button className="btn-order"><a href="#contact">ORDER NOW!</a></button>
                    </div>
                    <div className="carousel-img">
                        <img
                            className="carousel-img"
                            src="/img/cookies-img.png"
                            alt="donuts-img"
                        />
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item interval={4000}>
                < div className='my-carousel-item'>
                    <div className="carousel-info">
                        <h2 className="title">Chocolates!</h2>
                        <p className="desc">As long as there is chocolate, there will be happiness.</p>
                        <button className="btn-order"><a href="#contact">ORDER NOW!</a></button>
                    </div>
                    <div className="carousel-img">
                        <img
                            className="carousel-img"
                            src="/img/chocolates-img.png"
                            alt="donuts-img"
                        />
                    </div>
                </div>
            </Carousel.Item>

        </Carousel>
    );
}
