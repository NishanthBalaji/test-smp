// import React from 'react';
// import '../styles/AboutSuper.css';

// // Swiper imports
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper/modules';

// import unlimitedhearts from '../assets/unlimitedhearts.png';

// const AboutSuper = () => {

//     const panels = document.querySelectorAll('.panel');

//     panels.forEach(panel => {
//         panel.addEventListener('click', () => {
//             removeActiveClasses();
//             panel.classList.add('active');
//         });
//     });

//     function removeActiveClasses() {
//         panels.forEach(panel => {
//             panel.classList.remove('active');
//         });
//     }

//     return (
//         <main className="aboutsuper">
//             <h2 className="gradient-text">
//                 Why Choose the Super Duolingo Family Plan?
//             </h2>

//             <p>
//                 The <strong>Super Duolingo Family Plan</strong> gives you all the premium benefits of Super Duolingo
//                 while making it more affordable. Instead of paying full price, you can share one subscription with up to
//                 <strong> six members</strong>. That means ad-free lessons, unlimited hearts, personalized practice, and more —
//                 all while saving big and learning smarter together.
//             </p>

//             <section className='container'>
//                 <div className="panel">
//                     <img src={unlimitedhearts} alt="Unlimited Hearts" />
//                     <p>✔️ <strong>Unlimited hearts</strong> – practice without restrictions</p>
//                 </div>
//                 <div className="panel">
//                     <div className="feature-card">
//                         <img src={unlimitedhearts} alt="Ad Free" />
//                         <p>✔️ <strong>Ad-free learning</strong> – focus fully on your lessons</p>
//                     </div>
//                 </div>
//                 <div className="panel active">
//                     <img src={unlimitedhearts} alt="Streak Repair" />
//                     <p>✔️ <strong>Streak repair</strong> – never lose your learning progress</p>
//                 </div>
//                 <div className="panel">
//                     <img src={unlimitedhearts} alt="Personalized Practice" />
//                     <p>✔️ <strong>Personalized practice</strong> – fix mistakes and improve faster</p>
//                 </div>
//                 <div className="panel">
//                     <img src={unlimitedhearts} alt="Unlimited Hearts" />
//                     <p>✔️ <strong>Unlimited hearts</strong> – practice without restrictions</p>
//                 </div>
//             </section>


//             <button className="cta-btn">Join a Family Plan Now</button>
//         </main>
//     );
// };

// export default AboutSuper;


import React, { useEffect } from 'react';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSuperM from './AboutSuperM';
import AboutSuperPC from './AboutSuperPC';

import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(useGSAP, ScrollTrigger);



const AboutSuper = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     setTimeout(() => ScrollTrigger.refresh(), 1000);
    // }, []);

    // useGSAP(() => {

    //     gsap.set('.aboutSuper-header p', {
    //         x: 500, opacity: 0
    //     })

    //     const ctx = gsap.context(() => {
    //         const tl1 = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".nav",
    //                 start: "top top",
    //                 end: "bottom -30%",
    //                 scrub: 1.5,
    //                 invalidateOnRefresh: true,
    //             }
    //         });

    //         tl1.to('.aboutSuper-header p',
    //             { x: 0, opacity: 1, stagger: 0.3 }
    //         );

    //         gsap.to('.feature-img', {
    //             scale: 1.2,
    //             duration: 1.5,
    //             yoyo: true,
    //             repeat: -1,
    //             ease: "power1.inOut"
    //         });
    //     });

    //     return () => ctx.revert(); // ✅ kills only AboutSuper’s GSAP/ScrollTrigger
    // }, []);

    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        isMobile ? (
            <AboutSuperM />
        ) : (
            <AboutSuperPC />
        )
    );
};

export default AboutSuper;

