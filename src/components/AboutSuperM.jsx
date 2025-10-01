import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';

import { HashLink } from 'react-router-hash-link'

import unlimitedhearts from '../assets/unlimitedhearts.svg';
import duogym from '../assets/duogym.svg'
import legendary from '../assets/legendary.svg'
import noads from '../assets/noads.svg'

import '../styles/AboutSuperM.css';

const AboutSuperM = () => {

    const features = [
        { img: unlimitedhearts, title: "Unlimited Hearts / Energy", text: "Practice without restrictions", className: "unlimitedheart" },
        { img: noads, title: "AD-free Learning", text: "Focus fully on your lessons", className: "adfree" },
        { img: legendary, title: "Legendary Challenges", text: "Free entry to Legendary challenges", className: "legendarychallenges" },
        { img: duogym, title: "Personalized Practice", text: "Fix mistakes and improve faster", className: "duogym" },
    ];
    return (
        <main className="aboutsuper" id='aboutsuper'>

            <header className='aboutSuper-header'>
                <h2 className="gradient-text">Why Super Duolingo Family?</h2>

                <p>
                    The <strong>Super Duolingo Family Plan</strong> gives you all the premium benefits of Super Duolingo
                    while making it more affordable.
                </p>
                <p>Instead of paying full price, you can share one subscription with up to
                    <strong> 5 members</strong>. That means ad-free lessons, unlimited hearts, personalized practice, and more all while saving big and learning smarter together.</p>

            </header>


            <Carousel
                autoPlay
                interval={3000}
                animation="slide"       // enables sliding animation
                duration={750}
                navButtonsAlwaysInvisible={true}
                indicators={true}
                indicatorIconButtonProps={{
                    className: "indicator", // add custom class
                }}
                activeIndicatorIconButtonProps={{
                    className: "indicator active-indicator", // custom class for active
                }}
                className='container'
            >
                {features.map((feature, i) => (
                    <section key={i} className="feature-card">

                        <div className='feature-img'>
                            <img src={feature.img} alt={feature.title} className={feature.className} />
                        </div>

                        <div className='feature-text'>
                            <p className='feature-title'>
                                <strong>{feature.title}</strong>
                            </p>
                            <p className='feature-des'>{feature.text}</p>
                        </div>

                    </section>
                ))}
            </Carousel>

            <HashLink className="get-btn view-price" to='/#pricing' smooth>View Price Details</HashLink>
        </main>
    )
}

export default AboutSuperM