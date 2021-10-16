import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { gsap } from "gsap";

const ContactMe = () => {

    useEffect(() => {
        gsap.from(".inputGroup", { opacity: 0, duration: 1, y: 50, stagger: 0.2 });
        gsap.from(".elem-2", { opacity: 0, duration: 1, y: 50, stagger: 0.4 });
    })

    return (
        <main className="container row home-main mx-auto mt-lg-5 ">
        <div className="col-lg-6 col-md-12 ">
          
  
  <div className="container py-4">
  
  <Form action="https://formspree.io/f/mwkazejb" method="POST" id="contactForm">
        <Form.Group >
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control className="inputGroup" type="text" name="name" placeholder="Enter name" required/>
        </Form.Group>
        <Form.Group >
            <Form.Label htmlFor="emailAddress">Email address</Form.Label>
            <Form.Control className="inputGroup"  id="emailAddress" name="_replyto" type="email" placeholder="Email Address" required />
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control className="inputGroup" id="message" type="text" placeholder="Message" name="message" as="textarea" rows={4} required/>
        </Form.Group>
        <div className="d-grid" >
        <button id="button-teal" className="btn btn-lg inputGroup mt-2" type="submit" name="action">Submit</button>
      </div>
      </Form>
      
    
    </div>
  
  
  
        </div>
        <div className="col-lg-6 col-md-12 p-5">
          <h4 className="mb-3 elem-2">Github: <a href="https://github.com/Muiasar-Al-Ani"><span className="px-2">https://github.com/Muiasar-Al-Ani</span></a></h4>
            <h4 className="mb-3 elem-2">Email: <a href="mailto:muiasar2012@gmail.com"><span className="px-2">muiasar2012@gmail.com</span></a></h4>
              <h4 className="mb-3 elem-2">Phone: <a href="tel:919-931-8429"><span className="px-2">919-931-8429</span></a></h4>
              <h4 className="mb-3 elem-2">LinkedIn: <a href="https://www.linkedin.com/in/muiasar-al-ani-71476420b/"><span className="px-2">https://www.linkedin.com/in/muiasar-al-ani-71476420b/</span></a></h4>
                <a
                  className="text-white elem-2"
                  href="assets/images/Muiasar-Al-Ani-Resume.pdf"
                  download
                  >Download Resume!</a
                >
                
        </div>
        
      </main>
    )
}

export default ContactMe


