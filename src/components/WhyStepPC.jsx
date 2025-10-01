import React, { useEffect } from "react";
import { FaLock, FaCreditCard, FaEnvelope } from "react-icons/fa";
import "../styles/WhyStepPC.css";

import Cart from '../assets/cart.svg'
import Credit from '../assets/creditcard.svg'
import Clock from '../assets/clock.svg'
import Tick from '../assets/tick.svg'

import { HashLink } from 'react-router-hash-link'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WhyStepPC = () => {
    return (

        <div className="whystepbtn">
            <section className='whystep-pc' >
                <main className="whyus-pc" id="whyus">
                    <h2 className="gradient-text">
                        Why ShareMyPlan?
                    </h2>
                    <p className="sub-title-pc">
                        Finding it hard to gather 5 members for a Super Duolingo Family Plan?
                    </p>

                    <p className="whydes-pc"> <strong>Share My Plan</strong>  makes it simple,we connect you with active, motivated learners worldwide.
                        Save money, skip the hassle, and start learning right away.</p>

                    <ul className="features-list-pc">

                        <li>
                            <h4>Worldwide Access</h4>

                            <p>No need to search for spots</p>

                            <p>We match you instantly in a Plan</p>

                        </li>
                        <li>
                            <h4>Continue Your Journey</h4>
                            <p>No need for a new account</p>
                            <p>Join a plan with your existing account</p>

                        </li>
                        <li>
                            <h4>Save More</h4>
                            <p> Pay just for your spot!! </p>
                            <p>Instead of the full family plan cost</p>
                        </li>
                        <li>
                            <h4>One Time Payment</h4>
                            <p>Pay once, join the plan</p>
                            <p>Start learning without limitations</p>
                        </li>
                        {/* <li>
                    <h4>Active Plan</h4>
                    <p>Stay in a consistent, reliable family plan with motivated learners.</p>
                </li> */}

                    </ul>
                </main>

                <div className="smp-steps-pc">
                    <h2>How ShareMyPlan Works</h2>
                    <p className="sub-title-pc">
                        We’ll guide you through the simple steps to join and save with a
                        <strong> Super Duolingo Family Plan!</strong>
                    </p>

                    <div className="steps-pc">
                        <div className="now step-pc">

                            <div className="logo-title logo-title-pc">
                                <img style={{ width: '22px' }} src={Cart} alt="lock" />
                                <p>Add Details</p>
                            </div>

                            <ul>
                                <li>Click on <strong>Join a Family Plan Button</strong></li>
                                <li>Enter Contact <strong>Name</strong> and <strong>Email ID</strong></li>
                                <li>
                                    Add up to <strong>5 Duolingo usernames</strong>
                                    <p className="note">
                                        (All users added in a single transaction will be grouped under the same family plan, so they can learn and save together.)
                                    </p>
                                </li>
                            </ul>

                        </div>

                        <div className="next step-pc">
                            <div className="logo-title logo-title-pc">
                                <img style={{ width: '22px' }} src={Credit} alt="card" />
                                <p>Make Payment</p>
                            </div>

                            <ul>
                                <li>Pay the amount based on the number of users you’ve added.</li>
                                <li>Receive an <strong>Order Confirmation Mail</strong></li>
                            </ul>

                        </div>

                        <div className="within-3hrs step-pc">
                            <div className="logo-title logo-title-pc">
                                <img style={{ width: '22px' }} src={Clock} alt="mail" />
                                <p>Receive Invitations (Within 3 Hours)</p>
                            </div>

                            <ul>
                                <li>
                                    Invitations will be sent to all the Duolingo usernames provided during checkout.
                                </li>
                            </ul>

                        </div>

                        <div className="accepts step-pc">
                            <div className="logo-title logo-title-pc">
                                <img style={{ width: '22px' }} src={Clock} alt="mail" />
                                <p>Accept Invite & Start Learning</p>
                            </div>

                            <ul>
                                <li className="last-list">
                                    Accept the invite to Super Duolingo Family Plan and Start Learing without limitations
                                </li>

                            </ul>

                        </div>
                    </div>

                    {/* <button onClick={() => navigate('/add-details')} className="get-btn view-price">Add Details</button> */}


                </div>

            </section>

            <div className="viewPrice-pc">
                <HashLink className="get-btn view-price" to='/#pricing' smooth>View Price Details</HashLink>
            </div>


        </div>

    )
}

export default WhyStepPC