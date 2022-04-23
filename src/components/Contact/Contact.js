import React, {useRef} from 'react';
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jzkzqjo', 'template_x33e1n7', form.current, 'QV7-9vvdYO_oabMbl')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      };

    return(
        <section id='contact'>

            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>shaw.j.daniel@gmail.com</h5>
                        <a href='mailto: shaw.j.daniel@gmail.com' target='_blank' rel='noreferrer'>Email Me</a>
                    </article>
                    <article className='contact__option'>
                        <FaFacebookMessenger className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>DanimalCrackerz</h5>
                        <a href='https://m.me/danimalcrackerz' target='_blank' rel='noreferrer'>Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <MdEmail className='contact__option-icon'/>
                        <h4>Phone</h4>
                        <h5>469.505.7215</h5>
                        <a href='tel:4695057215' target='_blank' rel='noreferrer'>Give me a Call</a>
                    </article>
                </div>

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

export default Contact

