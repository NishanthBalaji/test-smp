import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';

import { HashLink } from 'react-router-hash-link'

import unlimitedhearts from '../assets/unlimitedhearts.svg';
import duogym from '../assets/duogym.svg'
import legendary from '../assets/legendary.svg'
import noads from '../assets/noads.svg'

import '../styles/AboutSuperPC.css';

const AboutSuperPC = () => {

    const features = [
        { img: unlimitedhearts, title: "Unlimited Hearts / Energy", text: "Practice without restrictions", className: "unlimitedheart" },
        { img: noads, title: "AD-free Learning", text: "Focus fully on your lessons", className: "adfree" },
        { img: legendary, title: "Legendary Challenges", text: "Free entry to Legendary challenges", className: "legendarychallenges" },
        { img: duogym, title: "Personalized Practice", text: "Fix mistakes and improve faster", className: "duogym" },
    ];
    return (
        <main className="aboutsuper-pc" id='aboutsuper'>

            <header className='aboutSuper-header-pc'>
                <h2 className="gradient-text-pc">Why Super Duolingo Family?</h2>

            </header>


            <section className='layout-pc'>



                <div className='aboutsuper-text-pc'>

                    <p className='tagline tagline-pc'>Learn a new language the fun way</p>

                    <p>
                        The <strong>Super Duolingo Family Plan</strong> gives you all the premium benefits of Super Duolingo
                        while making it more affordable.
                    </p>

                    <p>Instead of paying full price, you can share one subscription with up to
                        <strong> 5 members</strong>.</p>

                    <p>That means ad-free lessons, unlimited hearts / energy, personalized practice, and more all while saving big and learning smarter together.</p>

                </div>

                <Carousel
                    autoPlay
                    interval={3000}
                    animation="slide"       // enables sliding animation
                    duration={750}
                    navButtonsAlwaysInvisible={true}
                    indicators={true}
                    indicatorIconButtonProps={{
                        className: "indicator indicator-pc", // add custom class
                    }}
                    activeIndicatorIconButtonProps={{
                        className: "indicator indicator-pc active-indicator active-indicator-pc", // custom class for active
                    }}
                    className='container-pc'
                >
                    {features.map((feature, i) => (
                        <section key={i} className="feature-card-pc">

                            <div className='feature-img-pc'>
                                <img src={feature.img} alt={feature.title} className={feature.className} />
                            </div>

                            <div className='feature-text-pc'>
                                <p className='feature-title-pc'>
                                    <strong>{feature.title}</strong>
                                </p>
                                <p className='feature-des-pc'>{feature.text}</p>
                            </div>

                        </section>
                    ))}
                </Carousel>

            </section>

            <HashLink className="get-btn get-btn-pc view-price view-price-pc" to='/#pricing' smooth>View Price Details</HashLink>
        </main>
    )
}

export default AboutSuperPC