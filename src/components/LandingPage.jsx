import React, { useEffect } from 'react'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useMediaQuery } from "react-responsive";


import LandingM from './LandingM';
import LandingPC from './LandingPC';

gsap.registerPlugin(useGSAP, ScrollTrigger);


const LandingPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => ScrollTrigger.refresh(), 1000);
    }, []);

    useGSAP(() => {
        ScrollTrigger.killAll();

        const tl = gsap.timeline({});
        const ease = "power3.out";

        tl.from(".header-img", { x: -200, opacity: 0, duration: 1, ease })
            .from('.nav', { x: 500, opacity: 0 }, 0)
            .from(".nav-link", { x: -50, opacity: 0, duration: 1, ease, stagger: 0.2, delay: 0.5 }, 0)
            .from('.landingpage-content p', { x: 50, opacity: 0, duration: 1, ease, stagger: 0.2 }, 0)
            .from('.landingpage .get-btn', { x: -300, opacity: 0, duration: 1, ease }, 0)
            .to('.landingpage .get-btn', { scale: 0.9, duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" })
            .from('.arrow-box', { x: 1000, opacity: 0 }, 0)
            .to('.arrow-box', { scale: 1.5, duration: 2, yoyo: true, repeat: -1, ease: "power1.inOut" }, 0)
            .from('.logo1', { x: -100, opacity: 0 }, 0)
            .to('.logo1', { scale: 0.9, duration: 2, yoyo: true, repeat: -1, ease: "power1.inOut" }, 0)
            .from('.logo2', { x: 100, opacity: 0 }, 0)
            .to('.logo2', { scale: 0.9, duration: 2, yoyo: true, repeat: -1, ease: "power1.inOut" }, 0)
            .from('.trust-text', { y: 100, opacity: 0, duration: 1 }, 0)

        tl.call(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".extra-note",
                    start: "bottom 30%",
                    end: "bottom -50%",
                    scrub: 1.5,
                    invalidateOnRefresh: true
                }
            }).to('.logo1', { y: 100, x: -100, opacity: 0 }, 0)
                .to(".logo2", { y: 100, x: 100, opacity: 0 }, 0)
                .to('.arrow-box', { y: 100, opacity: 0 }, 0)
                .to('.trust-text', { y: -200, scale: 1.1, }, 0);
        });

        return () => ScrollTrigger.killAll();
    }, []);

    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        isMobile ? (
            <LandingM />
        ) : (
            <LandingPC />
        )
    );

}
export default LandingPage