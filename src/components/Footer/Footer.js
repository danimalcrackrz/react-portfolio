import React from 'react';
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'


const Footer = () => {
    return ( 
        <footer>
            <a href='#' className='footer__logo'>DanimalCrackrz</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='footer__socials'>
                <a href='https://www.facebook.com/danimalcrackerz' target='_blank' rel='noreferrer'><FaFacebookSquare /></a>
                <a href='https://www.instagram.com/danimalcrackrz_' target='_blank' rel='noreferrer'><AiFillInstagram /></a>
                <a href='https://twitter.com/danimalcrackrz' target='_blank' rel='noreferrer'><FaTwitter /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; DanimalCrackrz. All rights reserved</small>
            </div>
        </footer>
     );
}
 
export default Footer;