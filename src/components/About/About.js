import React from 'react';
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUserSecret} from 'react-icons/fa'
import {RiFolder4Fill} from 'react-icons/ri'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='about me' />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__contents'>
                            <div className='about__cards'>
                                <article className='about__card'>
                                    <FaAward className='about__icon'/>
                                    <h5>Experience</h5>
                                    <small>3+ Years Work Experience</small>
                                </article>
                            </div>
                            <div className='about__cards'>
                                <article className='about__card'>
                                    <FaUserSecret className='about__icon'/>
                                    <h5>Clients</h5>
                                    <small>20+ Clients Nationwide</small>
                                </article>
                            </div>
                            <div className='about__cards'>
                                <article className='about__card'>
                                    <RiFolder4Fill className='about__icon'/>
                                    <h5>Projects</h5>
                                    <small>50+ Completed Projects</small>
                                </article>
                            </div>
                    </div>
                    <p>
                     Im a Fullstack Developer located in Texas. I have a passion to learn UI effects, animations and to create intuitive, dynamic user experiences. Well-organized person, problem solver, independent employee with high attention to detail. Fan of Legos, Space, Netflix and Flavored Tea. Let's make something!
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About