import React, { useEffect, useState } from "react";
import "../styles/Pricing.css";

import { useNavigate } from 'react-router-dom'

import best from '../assets/best.png'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import SuperDuo from '../assets/superduo.png'
import Duo from '../assets/duo.svg'

import { useMediaQuery } from "react-responsive";

const Pricing = ({ priceData }) => {

    const navigate = useNavigate()

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     setTimeout(() => ScrollTrigger.refresh(), 1000);
    // }, []);

    // useGSAP(() => {

    //     gsap.set('.card-header h3', {
    //         x: 300, opacity: 0
    //     })

    //     gsap.set('.card-header p', {
    //         x: -300, opacity: 0
    //     })

    //     const ctx = gsap.context(() => {
    //         const tl6 = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".smp-steps",
    //                 start: "center 30%",
    //                 end: "center -40%",
    //                 scrub: 2,
    //                 invalidateOnRefresh: true,
    //                 // markers: true
    //             }
    //         });

    //         tl6.to('.card-header h3',
    //             { x: 0, opacity: 1, stagger: 0.5, duration: 1, ease: "power3.out" }, 0
    //         ).to('.card-header p',
    //             { x: 0, opacity: 1, stagger: 0.5, duration: 1, ease: "power3.out" }, 0
    //         );

    //         gsap.set('.pricing-card li', {
    //             x: -300, opacity: 0
    //         })

    //         const tl7 = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".smp-steps",
    //                 start: "center 10%",
    //                 end: "center -40%",
    //                 scrub: 2,
    //                 invalidateOnRefresh: true,
    //                 // markers: true
    //             }
    //         });

    //         tl7.to('.pricing-card li',
    //             { x: 0, opacity: 1, stagger: 0.5, duration: 1, ease: "power3.out" }, 0
    //         )

    //         const tl8 = gsap.timeline()

    //         tl8.to('.actualPrice span', {
    //             textDecorationColor: 'transparent', // hide line
    //             duration: 0.75,
    //             ease: "power1.inOut",
    //             repeat: -1,
    //             yoyo: true
    //         }).to('.discount', {
    //             scale: 0.95,
    //             duration: 0.75,
    //             yoyo: true,
    //             repeat: -1,
    //             ease: "power1.inOut",
    //         });


    //     });

    //     return () => ctx.revert(); // ✅ kills only Pricing’s GSAP/ScrollTrigger
    // }, []);


    const formatPrice = (amount) => amount.toLocaleString();

    const isMobile = useMediaQuery({ maxWidth: 800 });

    return (
        <main className="pricing" id="pricing">

            <header>
                <h2 className="gradient-text">Pricing</h2>

                <p className="sub-text">Grab Super Duolingo Family Plan spots for up to 5 people in one go!</p>




            </header>

            <div className="logo-price">

                {!isMobile && <div className="price-logo">
                    <img src={Duo} alt="Duo" />

                </div>}

                <section className="pricing-card highlighted">



                    <div className="best">
                        <img src={best} alt="Best Choice" />
                    </div>

                    <div className="card-header">
                        <h3>Super Duolingo Family Plan</h3>

                        <p className="subtitle">Share the plan, share the savings.</p>
                    </div>

                    <ul>
                        <li><span>✔️</span> No ads</li>
                        <li><span>✔️</span> Unlimited Hearts / Energy</li>

                        <li><span>✔️</span> Full access to lessons</li>
                        <li><span>✔️</span> Personalized practice</li>
                        <li><span>✔️</span> Try Legendary without gems</li>
                        <li><span>✔️</span> Pay just for your spot</li>
                        <li><span>✔️</span> Save more with family plan</li>
                    </ul>
                </section>

                {!isMobile && <div className="price-logo">
                    <img src={SuperDuo} alt="Duo" />
                </div>}

            </div>




            {priceData ? (
                <>
                    <p className="actualPrice">{priceData.currencySymbol}<span className="strike">{priceData.actualPrice}</span> / year</p>
                    <span className="discount">(Save an extra {priceData.discountPercent}%)</span>


                    <p className="price">
                        {priceData.currencySymbol}{formatPrice(priceData.
                            amount)} / year <span className="perspot">(per spot)</span>
                    </p>



                </>

            ) : (
                <p className="price">Loading...</p>
            )}


            <button className="get-btn" onClick={() => navigate('/add-details')}>Join a Family Plan</button>

            {/* <div className="duolingoMax">
                Duolingo Max Family Plan will be available soon
            </div> */}
        </main>
    );
};

export default Pricing;





// import React, { useEffect, useState } from "react";
// import "../styles/Pricing.css";

// const prices = {
//     US: { currency: "USD", amount: 18.99, symbol: "$" },
//     JP: { currency: "JPY", amount: 7500, symbol: "¥" },
//     GB: { currency: "GBP", amount: 10, symbol: "£" },
//     IN: { currency: "INR", amount: 1499, symbol: "₹" },
//     DEFAULT: { currency: "USD", amount: 18.99, symbol: "$" }
// };

// const Pricing = () => {
//     const [priceData, setPriceData] = useState(null); // start with null
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const token = import.meta.env.VITE_IPINFO_TOKEN;
//         fetch(`https://ipinfo.io/json?token=${token}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log("ipinfo country code:", data.country); // should be "IN" in India
//                 const countryCode = data.country || "DEFAULT";
//                 setPriceData(prices[countryCode] || prices.DEFAULT);
//             })
//             .catch(() => setPriceData(prices.DEFAULT))
//             .finally(() => setLoading(false));
//     }, []);

//     const formatPrice = (amount) => amount.toLocaleString();

//     return (
//         <main className="pricing">
//             <h2 className="gradient-text">Super Duolingo Family Plan</h2>
//             <p className="subtitle">
//                 One subscription, up to <strong>6 members</strong>. Save more and learn smarter together.
//             </p>

//             <section className="pricing-card highlighted">
//                 <div className="badge">Best Value</div>
//                 <h3>Family Plan</h3>

//                 {loading ? (
//                     <p className="price skeleton">Fetching price...</p>
//                 ) : (
//                     <p className="price">
//                         {priceData.symbol}{formatPrice(priceData.amount)} / year
//                     </p>
//                 )}

//                 <p className="sub-text">Up to 6 members</p>
//                 <ul>
//                     <li>✔️ Ad-free learning</li>
//                     <li>✔️ Unlimited hearts</li>
//                     <li>✔️ Streak repair</li>
//                     <li>✔️ Personalized practice</li>
//                     <li>✔️ Share with family & friends</li>
//                 </ul>
//                 <button className="cta-btn">Get Family Plan</button>
//             </section>
//         </main>
//     );
// };

// export default Pricing;




