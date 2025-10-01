import React, { useEffect } from 'react';
// import '../styles/WhyUs.css';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import { useMediaQuery } from "react-responsive";
import WhyStepM from './WhyStepM';
import WhyStepPC from './WhyStepPC';

const WhyUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => ScrollTrigger.refresh(), 1000);
    }, []);

    useGSAP(() => {

        gsap.set('.features-list li', {
            x: 500, opacity: 0
        })

        const ctx = gsap.context(() => {
            const tl3 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".feature-card",
                    start: "center 20%",
                    end: "center -40%",
                    scrub: 2,
                    invalidateOnRefresh: true,
                    // markers: true
                }
            });

            tl3.to('.features-list li',
                { x: 0, opacity: 1, stagger: 0.5, duration: 1, ease: "power3.out" }
            );
        });

        return () => ctx.revert(); // ✅ kills only WhyUs’s GSAP/ScrollTrigger
    }, []);

    const isMobile = useMediaQuery({ maxWidth: 800 });

    return (
        isMobile ? (
            <WhyStepM />
        ) : (
            <WhyStepPC />
        )
    );

};

export default WhyUs;
