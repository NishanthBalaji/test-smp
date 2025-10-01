import React, { useEffect } from 'react'

import sharemyplan from '../assets/sharemyplan.png'
import SuperDuo from '../assets/superduo.png'
import Duo from '../assets/duo.svg'

import '../styles/LandingPC.css'

import { HashLink } from 'react-router-hash-link'


const LandingPC = () => {

    return (
        <section className='landingpage landingpage-pc' id='home'>
            <header className='header header-pc'>
                <img className='header-img header-img-pc' src={sharemyplan} alt="Share My Plan" />

                <nav className='nav-pc'>
                    <HashLink className='nav-link nav-link-pc' to="#aboutsuper" smooth>About Super</HashLink>

                    <HashLink className='nav-link nav-link-pc' to="#whyus" smooth>Why Us?</HashLink>

                    <HashLink className='nav-link nav-link-pc' to="#pricing" smooth>Join Now</HashLink>

                    <HashLink className='nav-link nav-link-pc' to="#contactus" smooth>Contact Us</HashLink>
                </nav>

            </header>

            <p className='tagline tagline-pc'>Supercharge your language learning</p>

            <section className='pc-layout'>

                <main className='landingpage-content landingpage-content-pc'>

                    <p className="subheading subheading-pc">
                        Get <strong>Super Duolingo Family Plan</strong> through Share My Plan.
                    </p>
                    <p className="subheading subheading-pc">Unlock <span>ad free lessons, unlimited hearts / energy, smarter practice</span>,
                        and more, all at a fraction of the cost.
                    </p>


                    {/* <p className="extra-note extra-note-pc">
                        Why pay more alone, when you can learn together?
                    </p >
                    <p className="extra-note extra-note-pc">
                        Share the benefits, stay motivated, and reach your language goals faster.
                    </p> */}

                </main>

                <div className='duologo duologo-pc'>
                    <div className='logo logo-pc logo1 logo1-pc'>
                        <img className='duo duo-pc' src={Duo} alt="Duo" />
                    </div>

                    <div className='arrow-box arrow-box-pc'>
                        <svg className='arrow arrow-pc' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 12L14 5V9H3.8C3.51997 9 3.37996 9 3.273 9.0545C3.17892 9.10243 3.10243 9.17892 3.0545 9.273C3 9.37996 3 9.51997 3 9.8V14.2C3 14.48 3 14.62 3.0545 14.727C3.10243 14.8211 3.17892 14.8976 3.273 14.9455C3.37996 15 3.51997 15 3.8 15H14V19L21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className='logo logo-pc logo2 logo2-pc'>
                        <img className='superduo superduo-pc' src={SuperDuo} alt="Super Duolingo" />
                    </div>

                </div>

            </section>

            <button className='get-btn get-btn-pc'>Join Super Today</button>

            <div className="trust-text-pc">
                <p >
                    ⭐ Trusted by 100+ learners | 💳 Secure checkout
                </p>
            </div>

        </section>

    )
}

export default LandingPC