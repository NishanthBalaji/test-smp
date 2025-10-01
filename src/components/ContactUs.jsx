import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import "../styles/ContactUs.css";
import emailjs from "@emailjs/browser";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContactUs = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     setTimeout(() => ScrollTrigger.refresh(), 1000);
    // }, []);

    // useGSAP(() => {



    //     const ctx = gsap.context(() => {

    //         gsap.set('.contactus-container .question', {
    //             x: 500, opacity: 0
    //         })

    //         gsap.set('.contactus-container .question span', {
    //             opacity: 0
    //         })

    //         gsap.set('.contactus-container .question-sub', {
    //             x: -500, opacity: 0
    //         })

    //         const tl8 = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".pricing-card .subtitle",
    //                 start: "top 30%",
    //                 end: "top -40%",
    //                 scrub: 2,
    //                 invalidateOnRefresh: true,
    //                 // markers: true
    //             }
    //         });

    //         tl8.to('.contactus-container .question',
    //             { x: 0, opacity: 1, stagger: 0.5, duration: 1, ease: "power3.out" }
    //         ).to('.contactus-container .question-sub',
    //             { x: 0, opacity: 1, stagger: 0.5, duration: 1, ease: "power3.out" }, 0
    //         ).to('.contactus-container .question span', { opacity: 1, duration: 1, ease: "power3.out" });

    //         gsap.set('.contact-form .btn', {
    //             x: 200,
    //             opacity: 0
    //         })


    //         const tl9 = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".contactus-container .question",
    //                 start: "top 30%",
    //                 end: "top 20%",
    //                 scrub: 2,
    //                 invalidateOnRefresh: true,
    //                 // markers: true
    //             }
    //         })

    //         tl9.to('.contact-form .btn', { x: 0, opacity: 1, stagger: 0.5, duration: 1, ease: "power3.out" })


    //     });

    //     return () => ctx.revert(); // ✅ kills only ContactUS’s GSAP/ScrollTrigger
    // }, []);



    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // "success" | "error"

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const googleScriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

        setLoading(true);
        setStatus(null);

        try {
            // 1️⃣ Send email via EmailJS
            await emailjs.send(
                serviceID,
                templateID,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                publicKey
            );

            // 2️⃣ Log data into Google Sheets
            await fetch(googleScriptURL, {
                method: "POST",
                mode: "no-cors", // no-cors = we can’t read response
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData, type: "contact" }), // ✅ Removed secret
            });

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error("FAILED...", err);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contactus" id="contactus">
            {status === null ? (
                <div className="contactus-container">
                    <header>
                        <h2 className="contact-title">Contact Us</h2>
                        <p className="question">Have a question <span>or</span> suggestion?</p>
                        <p className="question-sub">Let us know here.</p>
                    </header>


                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="input-wrapper">
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="input"
                                variant="filled"
                            />
                        </div>

                        <div className="input-wrapper">
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="input"
                                variant="filled"
                            />
                        </div>

                        <div className="input-wrapper">
                            <TextField
                                fullWidth
                                label="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="input"
                                variant="filled"
                            />
                        </div>

                        <div className="input-wrapper">
                            <TextField
                                fullWidth
                                label="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                multiline
                                rows={5}
                                className="input"
                                variant="filled"
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="btn"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Submit"}
                        </Button>
                    </form>
                </div>
            ) : (
                <>
                    {status === "success" && (
                        <p className="success-msg">✅ Message sent & saved successfully!</p>
                    )}
                    {status === "error" && (
                        <>
                            <p className="error-msg">
                                ❌ Something went wrong. Please try again.
                            </p>
                            <button onClick={() => setStatus(null)}>Try Again</button>
                        </>
                    )}
                </>
            )}
        </section>
    );
};

export default ContactUs;
