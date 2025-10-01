import React from 'react'

import LandingPage from './LandingPage';
import AboutSuper from './AboutSuper';
import WhyUs from './WhyUs';
import Steps from './Steps'
import Pricing from './Pricing';
import ContactUs from './ContactUs';
import Footer from './Footer';



const home = ({ priceData }) => {
    return (
        <main>
            <LandingPage />
            <AboutSuper />
            <WhyUs />
            {/* <Steps /> */}
            <Pricing priceData={priceData} />
            <ContactUs />
            <Footer />
        </main>
    )
}

export default home