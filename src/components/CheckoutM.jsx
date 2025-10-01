import React from 'react'

import PayPal from './PayPal'

import Navbar from './Navbar'

import { useNavigate } from 'react-router-dom'
import Status from './Status'

import '../styles/CheckoutM.css'

import duofly from '../assets/duofly.svg'

const CheckoutM = ({ formData, usernames, priceData, orderStatus, setOrderStatus }) => {

    const totalAmount = parseFloat((priceData.amount * usernames.length).toFixed(2));

    const navigate = useNavigate();

    return (
        <div className="checkout">
            <Navbar navTitle="Checkout" navTo="/add-details" />

            <div className="checkout-container">
                <h2 className="review">Review your order</h2>



                <section className="contact-details">

                    <div className="contact-title">
                        <p >Contact Details</p>
                    </div>

                    <div className='details-row'>
                        <div className='customer-details'>

                            <p>{formData.name}</p>
                            <p>{formData.email}</p>
                        </div>
                    </div>

                    <div className='email-update'>
                        <p>Updates and confirmation email will be sent to this mail</p>
                    </div>

                </section>

                <main className="main-details">

                    <div className="duolingo-details">
                        <h3>Super Duolingo Family Spot <span>x </span>{usernames.length}</h3>
                        <ol>
                            {usernames.map((user, index) => (
                                <li key={index}>{user.duolingoUsername}</li>
                            ))}
                        </ol>
                    </div>

                    {usernames.length > 1 ? (
                        <p className="checkout-info">
                            Invites will be sent to all the above usernames
                        </p>
                    ) : (
                        <p className="checkout-info">
                            Invite will be sent to the above username
                        </p>
                    )}

                    {usernames.length < 5 ? (
                        <button
                            className="edit-btn"
                            onClick={() => navigate("/add-details")}
                        >
                            Change / Add User
                        </button>
                    ) : (
                        <button
                            className="edit-btn"
                            onClick={() => navigate("/add-details")}
                        >
                            Change User Details
                        </button>
                    )}



                    <p className="dont">

                        ⚠️ Don’t change usernames until the plan is joined
                    </p>
                </main>

                <section className="payment">
                    <h2>Payment summary</h2>
                    <div>
                        <p className='amount-to-pay'>
                            Amount to be paid:{" "}
                            <span>{priceData.currencySymbol}{totalAmount}</span>
                        </p>
                    </div>



                    <PayPal
                        priceData={{ ...priceData, totalAmount: totalAmount }}
                        formData={formData}
                        usernames={usernames}
                        orderStatus={orderStatus}
                        setOrderStatus={setOrderStatus}
                    />


                </section>

            </div>
        </div>
    )
}

export default CheckoutM