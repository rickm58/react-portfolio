import React, {useRef} from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {AiOutlinePhone} from 'react-icons/ai'
import emailjs from 'emailjs-com';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n8wchfu', 'template_61o1smx', form.current, '2B5_ykgW79sgw0j3I')
    
    e.target.reset();
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>rick.madison.58@gmail.com</h5>
            <a href='mailto:rick.madison.58@gmail.com' target='_blank'>Send me an email</a>
          </article>
          <article>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Rick Madison</h5>
            <a href='https://m.me/profile.php?id=100004630335978' target='_blank'>Send a message</a>
          </article>
          <article>
            <AiOutlinePhone className='contact_option-icon'/>
            <h4>Text or Call</h4>
            <h5>610-761-4397</h5>
            <a href='tel:6107614397' target='_blank'>Text or call me</a>
          </article>
        </div>
          {/* END OF CONTACT OPTIONS */}        
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>        
      </div>
    </section>
  )
}

export default Contacts