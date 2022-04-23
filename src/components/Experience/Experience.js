import React from 'react';
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import frontendData from './frontendData';
import backendData from './backendData';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className='container experience__container'>
                <div className='experience__frontend'>

                    <h3>Frontend Development</h3>

                    <div className='experience__content'>
                        {frontendData.map(({skill, level}) => {
                            return (
                                <article className='experience__details'>
                                    <BsFillPatchCheckFill className='experience__details-icon' />
                                    <div>
                                        <h4>{skill}</h4>
                                        <small className='text-light'>{level}</small>
                                    </div>
                                </article>
                            )
                        })}
                    </div>

                </div>
                <div className='experience__backend'>

                    <h3>Backend Development</h3>

                    <div className='experience__content'>
                        {backendData.map(({skill, level}) => {
                            return (
                                <article className='experience__details'>
                                    <BsFillPatchCheckFill className='experience__details-icon' />
                                    <div>
                                        <h4>{skill}</h4>
                                        <small className='text-light'>{level}</small>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
 
export default Experience;