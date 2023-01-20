import './About.css';

export default function About(props) {
    return (
        <div className="about" id='about'>
            <img src="/img/about-img.png" alt="about-img" className="about-img" />
            <div className="about-info">
                <div className="about-card">
                    <img src="/img/about-1.png" alt="about-1" className="about-card-img" />
                    <h4 className="about-card-title">Delivery</h4>
                    <p className="about-card-desc">Fast and timely delivery. We'll never keep you waiting.</p>
                </div>
                <div className="about-card">
                    <img src="/img/about-2.png" alt="about-2" className="about-card-img" />
                    <h4 className="about-card-title">Quality</h4>
                    <p className="about-card-desc">Best quality raw materials used to produce the best of delicacies.</p>
                </div>
                <div className="about-card">
                    <img src="/img/about-3.png" alt="about-3" className="about-card-img" />
                    <h4 className="about-card-title">Price</h4>
                    <p className="about-card-desc">A lot of sweetness at an affordable price ? We are the place.</p>
                </div>
            </div>
        </div>
    )
};
