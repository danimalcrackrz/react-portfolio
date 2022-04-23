import React from 'react';
import './portfolio.css'
import IMG from '../../assets/portfolioimg.jpeg'

const Portfolio = () => {
    return ( 
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG} alt='portfolio item' />
                    </div>
                    <h3>this is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn' target='_blank' rel='noreferrer'>Github</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG} alt='portfolio item' />
                    </div>
                    <h3>this is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn' target='_blank' rel='noreferrer'>Github</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG} alt='portfolio item' />
                    </div>
                    <h3>this is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn' target='_blank' rel='noreferrer'>Github</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG} alt='portfolio item' />
                    </div>
                    <h3>this is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn' target='_blank' rel='noreferrer'>Github</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG} alt='portfolio item' />
                    </div>
                    <h3>this is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn' target='_blank' rel='noreferrer'>Github</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                    </div>
                </article>
                
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG} alt='portfolio item' />
                    </div>
                    <h3>this is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com' className='btn' target='_blank' rel='noreferrer'>Github</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                    </div>
                </article>
                
            </div>
        </section>
     );
}
 
export default Portfolio;