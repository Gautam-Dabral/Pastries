import './OrderArea.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

export default function OrderArea(params) {
    return (
        <Container fluid className="order-area" id="contact">
            <div className="form">
            
                <div className="form-info">
                <h4 className="form-heading">Fill up this form to reach us!</h4>
                <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label className="label">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label className="label">Contact No.</Form.Label>
                    <Form.Control type="tel" placeholder="Contact No." required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label className="label">Message / Inquiry</Form.Label>
                    <Form.Control placeholder="Your message..." as="textarea" rows={3} required/>
                </Form.Group>
                <Button className='btn-submit' type="submit">
                    Submit
                </Button>
            </Form>
                </div>

                <div className="form-img">
                <h2 className="order-heading">Call Now! - 81939xxxxx</h2>
                <img src="/img/form-img.png" alt="form-img" className="form-image" />
                </div>
            </div>
        </Container>
    )

}
