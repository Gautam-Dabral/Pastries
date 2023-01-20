
export default function TestimonialContent(props) {
    return (
        <div className='testimonial-item'>
            <div className="testimonial-img">
                <img className='image'
                    src={props.img}
                    alt="testimonial-1"
                />
            </div>
            <h4 className="name">{props.name}</h4>
            <div className="testimonial-info">
                <h2 className="testimonial-title">{props.title}</h2>
                <p className="testimonial-desc">{props.desc}</p>
            </div>
        </div>
    )
}