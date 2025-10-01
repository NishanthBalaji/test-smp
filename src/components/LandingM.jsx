import React from 'react'

import sharemyplan from '../assets/sharemyplan.png'
import SuperDuo from '../assets/superduo.png'
import Duo from '../assets/duo.svg'

import '../styles/LandingM.css'

import header from '../assets/home_header.png'
import { HashLink } from 'react-router-hash-link'

const LandingM = () => {
    return (
        <section className='landingpage' id='home'>
            <header className='header'>
                <img className='header-img' src={sharemyplan} alt="Share My Plan" />

                <nav className='nav'>
                    <HashLink className='nav-link' to="#aboutsuper" smooth>About Super</HashLink>

                    <HashLink className='nav-link' to="#whyus" smooth>Why Us?</HashLink>

                    <HashLink className='nav-link' to="#pricing" smooth>Join Now</HashLink>

                    <HashLink className='nav-link' to="#contactus" smooth>Contact Us</HashLink>
                </nav>

            </header>


            <main className='landingpage-content'>
                <p className='tagline'>Supercharge your language learning</p>


                <p className="subheading">
                    Get <strong>Super Duolingo Family Plan</strong> through Share My Plan.
                    Unlock <span>ad free lessons, unlimited hearts, smarter practice</span>,
                    and more, all at a fraction of the cost.
                </p>

                <p className="extra-note">
                    Why pay more alone, when you can learn together?
                    Share the benefits, stay motivated, and reach your language goals faster.
                </p>




            </main>


            <button className='get-btn'>Join Super Today</button>




            <div className='duologo'>
                <div className='logo logo1'>
                    <img className='duo' src={Duo} alt="Duo" />
                </div>

                <div className='arrow-box'>
                    <svg className='arrow' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12L14 5V9H3.8C3.51997 9 3.37996 9 3.273 9.0545C3.17892 9.10243 3.10243 9.17892 3.0545 9.273C3 9.37996 3 9.51997 3 9.8V14.2C3 14.48 3 14.62 3.0545 14.727C3.10243 14.8211 3.17892 14.8976 3.273 14.9455C3.37996 15 3.51997 15 3.8 15H14V19L21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className='logo logo2'>
                    <img className='superduo' src={SuperDuo} alt="Super Duolingo" />
                </div>

            </div>

            <div className="trust-text">
                <p >
                    ⭐ Trusted by 100+ learners | 💳 Secure checkout
                </p>
            </div>




        </section>
    )
}

export default LandingM