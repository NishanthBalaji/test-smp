import React, { useEffect } from 'react'

import '../styles/Footer.css'

import sharemyplan from '../assets/sharemyplan.png'

import { HashLink } from 'react-router-hash-link'

import { useNavigate } from 'react-router-dom'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => ScrollTrigger.refresh(), 1000);
    }, []);

    useGSAP(() => {



        const ctx = gsap.context(() => {

            gsap.set('.footer-title', {
                x: 200, opacity: 0
            })

            gsap.set('.footer-sub', {
                x: -200, opacity: 0
            })

            gsap.set('.footer-des', {
                x: 200, opacity: 0
            })

            gsap.set('.footerLink', {
                y: -500, opacity: 0
            })



            // gsap.set('.contactus-container .question span', {
            //     opacity: 0
            // })

            // gsap.set('.contactus-container .question-sub', {
            //     x: -500, opacity: 0
            // })

            const tl10 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contact-form",
                    start: "top 25%",
                    end: "top 0%",
                    scrub: 2,
                    invalidateOnRefresh: true,
                    // markers: true
                }
            });

            tl10.to('.footer-title',
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
            ).to('.footer-sub',
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
            ).to('.footer-des',
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
            ).to('.footerLink',
                { y: 0, opacity: 1, stagger: 0.7, duration: 1, ease: "power3.out" }
            )

        });

        return () => ctx.revert(); // ✅ kills only Footer’s GSAP/ScrollTrigger
    }, []);



    return (
        <footer className="footer">

            <div className='footer-text'>
                <HashLink className='footer-title' to='/#home' smooth>
                    <img src={sharemyplan} alt="Share My Plan" />
                </HashLink>


                <p className='footer-sub'>Language learning made affordable</p>

                <p className='footer-des'>Join a shared Super Duolingo Family Plan with ShareMyPlan and unlock premium features at a fraction of the cost</p>
            </div>



            <div className='links'>

                <HashLink className='footerLink' to="#aboutsuper" smooth>About Super</HashLink>

                <HashLink className='footerLink' to="#whyus" smooth>Why ShareMyPlan?</HashLink>

                <HashLink className='footerLink' to="#pricing" smooth>Pricing</HashLink>

                <HashLink className='footerLink' to="#contactus" smooth>Contact Us</HashLink>


            </div>

        </footer>

    )
}

export default Footer