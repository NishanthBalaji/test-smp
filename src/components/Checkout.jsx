// Checkout.jsx
import React, { useState } from 'react'
import PayPal from './PayPal'

import Navbar from './Navbar'

import { useNavigate } from 'react-router-dom'
import Status from './Status'


import duofly from '../assets/duofly.svg'

import { useMediaQuery } from "react-responsive";

import CheckoutM from './CheckoutM'

import CheckoutPC from './CheckoutPC'

// const prices = {
//     US: { currency: "USD", currencySymbol: "$", amount: 18.99 },
//     JP: { currency: "JPY", currencySymbol: "¥", amount: 2800 },
//     GB: { currency: "GBP", currencySymbol: "£", amount: 9.99 },
//     IN: { currency: "INR", currencySymbol: "₹", amount: 1499 },
// };
const Checkout = ({ formData, usernames, priceData }) => {

    const isValidCheckout =
        formData.name?.trim() &&
        formData.email?.trim() &&
        usernames[0]?.duolingoUsername?.trim() &&
        usernames[0]?.confirmDuolingoUsername?.trim();



    const [orderStatus, setOrderStatus] = useState(null)

    const navigate = useNavigate()

    const totalAmount = parseFloat((priceData.amount * usernames.length).toFixed(2));

    const isMobile = useMediaQuery({ maxWidth: 800 });



    return (
        isValidCheckout ? (
            orderStatus === null ? (
                isMobile ? (
                    <CheckoutM formData={formData} usernames={usernames} priceData={priceData} orderStatus={orderStatus} setOrderStatus={setOrderStatus} />
                ) : (
                    <CheckoutPC formData={formData} usernames={usernames} priceData={priceData} orderStatus={orderStatus} setOrderStatus={setOrderStatus} />
                )
            ) : (
                <Status orderStatus={orderStatus} />
            )
        ) : (
            <div>
                <h1>Invalid Checkout</h1>
                <p>Please fill up all the required details to proceed</p>
            </div>
        )
    );



}

export default Checkout