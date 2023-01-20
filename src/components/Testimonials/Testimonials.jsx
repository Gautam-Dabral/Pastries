import './Testimonials.css';
import Carousel from 'react-bootstrap/Carousel';
import TestimonialContent from './TestimonialContent.jsx';

export default function Testimonials(params) {
    return (
        <Carousel className='testimonial-carousel' id="testimonials">
            <Carousel.Item interval={3000}>
                <TestimonialContent
                    img="/img/testimonial-1.jpg"
                    name="Sara Jones"
                    title="Superb Cakes and timely delivery."
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus aliquid magni, dicta reprehenderit illum totam" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <TestimonialContent
                    img="/img/testimonial-2.jpg"
                    name="John Krasinski"
                    title="My wife loves their chocolates."
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus aliquid magni, dicta reprehenderit" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <TestimonialContent
                    img="/img/testimonial-3.jpg"
                    name="Paul Newman"
                    title="The donuts are superb!"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus aliquid magni, dicta reprehenderit illum totam" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <TestimonialContent
                    img="/img/testimonial-4.jpg"
                    name="Jane Spectre"
                    title="The muffins are heavenly!"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus aliquid magni, dicta reprehenderit illum totam" />
            </Carousel.Item>

        </Carousel>
    )
};
