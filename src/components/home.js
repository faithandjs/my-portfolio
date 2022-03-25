import React from 'react'
import './home.css'
import code from './images/code.png'
import react from './images/react.png'
import bootstrap from './images/bootstrap.png'
import sass from './images/sass.png'
import css from './images/css.png'
import js from './images/js.png'
import phone from './images/phone.png'
import linkedin from './images/linkedin.png'
import twitter from './images/twitter.png'
import email from './images/email.PNG'
import restaurant from './images/restaurant.jpg' 
import restaurant1 from './images/restaurant1.jpg'
import restaurant2 from './images/restaurant2.jpg'
import restaurant3 from './images/restaurant3.jpg'
import './sass/style.scss'

export const Home = () => {
    return (
        <div className='body'>
            <section className='introduction'>
                <div>
                    hi, i'm Faith<br />and I'm a frontend developer
                </div>
                <div className='image'><img src={code} /></div>
            </section>
            <div className='spacer layer'></div>
            <section className='about'>
                <h3>Profile</h3>
                <div className='about-text'>Hey there! My name is Okogbo Faith and I 
                am a  Nigeria-based frontend developer. I had my first coding experience 
                in December 2020 and it has been a wonderful experience so far. 
                As a sociable person, I have been able to connect with other developers 
                that have been able to learn from and to mentor me in my journey. Being 
                a programmer means a lot of learning, practicing and building and I am
                 enjoying improving myself as a developer. Most of the projects I have 
                 worked on in the course of my journey can be found on my 
                 <a href='https://github.com/debaaah' target='_blank'>github</a>.
                </div>

                <div className='skills'>
                    <h4>Skills</h4>
                    <ul className='dev-icons'>
                        <li>
                            <img src={js} />
                            <p>Javascript</p>
                        </li>
                        <li>
                            <img src={css} />
                            <p>CSS</p>
                        </li>
                        <li>
                            <img src={react} />
                            <p>React Js</p>
                        </li>
                        <li>
                            <img src={bootstrap} />
                            <p>Bootstrap</p>
                        </li>
                        <li>
                            <img src={sass} />
                            <p>SASS</p>
                        </li>
                    </ul>
                </div>
                <div className='about-text'>I am open to internship or entry level frontend development jobs. Thanks for getting to know me, <a href='#contact'>do reach out</a>.</div>
            </section>

            <section className='work'>
                <h4>My work</h4>
                <div className='gallery'>
                    <div className='img-box' data-toggle="modal" data-target="#modal">
                        <img src={restaurant} />
                    </div>
                    <div className='see-more'>
                        <a href='https://github.com/debaaah?tab=repositories' target='_blank'>More</a>
                    </div>
                </div>
                <div className='btn'><a href='okogbo-onosedeba-cv.pdf' download>download cv</a></div>
            </section>
            <div className='spacer layer1'></div>
            <section className='contact' id='contact'>
                <h4>contact me</h4>
                <ul>
                    <li>
                        <a href='mailto:okogbofaith@gmail.com' target='_blank' title='okogbofaith@gmail.com'><img src={email} /></a>
                    </li>
                    <li>
                        <a href='tel:+2349043126914' target='_blank' title='+2349043126914'><img src={phone} /></a>
                    </li>
                    {/*<li>
                        <a href='' target='_blank' title=''><img src={twitter} /></a>
                    </li>*/}
                    <li>
                        <a href='https://www.linkedin.com/in/okogbo-faith' target='_blank' title='https://www.linkedin.com/in/okogbo-faith'><img src={linkedin} /></a>
                    </li>
                </ul>
            </section>

            <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="preview of restaurant prompt" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={restaurant} className="d-block w-100" alt="preview of my restaurants website" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={restaurant1} className="d-block w-100" alt="preview of my restaurants website" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={restaurant2} className="d-block w-100" alt="preview of my restaurants website" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={restaurant3} className="d-block w-100" alt="preview of my restaurants website" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className='caption'>This is a website for a restaurant that I designed and developed. It was made with React Js, CSS and Bootstrap</div>
                            <div className='footer-btns'>
                                <a href='https://github.com/debaaah/a-restaurants-website' target='_blank'><button type="button" className="btn">Github</button></a>
                                <button type='button' className='btn close-modal' data-dismiss='modal'>x</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}