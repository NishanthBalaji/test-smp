import React from 'react'

import PayPal from './PayPal'

import Navbar from './Navbar'

import { useNavigate } from 'react-router-dom'
import Status from './Status'


import '../styles/CheckoutPC.css'

import duofly from '../assets/duofly.svg'

const CheckoutPC = ({ formData, usernames, priceData, orderStatus, setOrderStatus }) => {

    const totalAmount = parseFloat((priceData.amount * usernames.length).toFixed(2));

    const navigate = useNavigate();

    return (
        <>
            <Navbar navTitle="Checkout" navTo="/add-details" color='#0c0c84' />
            <div className="checkout-pc">

                <header>
                    <h2 className="review-pc">Review Order</h2>
                </header>

                <main className='layout-pc'>
                    <div className='order-details-pc'>
                        <section className="contact-details-pc">
                            <div className="contact-title-pc">
                                <p>Contact Details</p>
                            </div>

                            <div className='details-row-pc'>
                                <div className='customer-details-pc'>

                                    <p>{formData.name}</p>
                                    <p>{formData.email}</p>
                                </div>
                            </div>

                            <div className='email-update-pc'>
                                <p>Updates and confirmation email will be sent to this mail</p>
                            </div>

                        </section>


                        <main className="main-details-pc">

                            <div className="duolingo-details-pc">
                                <h3>Super Duolingo Family Spot <span>x </span>{usernames.length}</h3>
                                <ol>
                                    {usernames.map((user, index) => (
                                        <li key={index}>{user.duolingoUsername}</li>
                                    ))}
                                </ol>
                            </div>
                        </main>

                        <div className='order-detail-bottom'>
                            {usernames.length > 1 ? (
                                <p className="checkout-info-pc">
                                    Invites will be sent to all the above usernames
                                </p>
                            ) : (
                                <p className="checkout-info-pc">
                                    Invite will be sent to the above username
                                </p>
                            )}

                            <p className="dont-pc">

                                ⚠️ Don’t change usernames until the plan is joined
                            </p>

                            {usernames.length < 5 ? (
                                <button
                                    className="edit-btn-pc"
                                    onClick={() => navigate("/add-details")}
                                >
                                    Change / Add User
                                </button>
                            ) : (
                                <button
                                    className="edit-btn-pc"
                                    onClick={() => navigate("/add-details")}
                                >
                                    Change User Details
                                </button>
                            )}




                        </div>

                    </div>

                    <div className="payment-pc">
                        <h2>Payment summary</h2>
                        <div>
                            <p className='amount-to-pay-pc'>
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

                    </div>
                </main>


            </div>
        </>

    )

    // return (
    //     <div className="checkout-pc">
    //         <Navbar navTitle="Checkout" navTo="/add-details" />

    //         <div className="checkout-container-pc">

    //             <div className='main-layout-pc'>
    //                 <h2 className="review-pc">Review your order</h2>

    //                 <section className="contact-details-pc">


    //                     <div className="contact-title-pc">
    //                         <p>Contact Details</p>
    //                     </div>

    //                     <div className='details-row-pc'>
    //                         <div className='customer-details-pc'>

    //                             <p>{formData.name}</p>
    //                             <p>{formData.email}</p>
    //                         </div>
    //                     </div>

    //                     <div className='email-update-pc'>
    //                         <p>Updates and confirmation email will be sent to this mail</p>
    //                     </div>

    //                 </section>

    //                 <main className="main-details-pc">

    //                     <div className="duolingo-details-pc">
    //                         <h3>Super Duolingo Family Spot <span>x </span>{usernames.length}</h3>
    //                         <ol>
    //                             {usernames.map((user, index) => (
    //                                 <li key={index}>{user.duolingoUsername}</li>
    //                             ))}
    //                         </ol>
    //                     </div>

    //                     {usernames.length > 1 ? (
    //                         <p className="checkout-info-pc">
    //                             Invites will be sent to all the above usernames
    //                         </p>
    //                     ) : (
    //                         <p className="checkout-info-pc">
    //                             Invite will be sent to the above username
    //                         </p>
    //                     )}

    //                     {usernames.length < 5 ? (
    //                         <button
    //                             className="edit-btn-pc"
    //                             onClick={() => navigate("/add-details")}
    //                         >
    //                             Change / Add User
    //                         </button>
    //                     ) : (
    //                         <button
    //                             className="edit-btn-pc"
    //                             onClick={() => navigate("/add-details")}
    //                         >
    //                             Change User Details
    //                         </button>
    //                     )}



    //                     <p className="dont-pc">

    //                         ⚠️ Don’t change usernames until the plan is joined
    //                     </p>
    //                 </main>
    //             </div>



    //             <section className="payment-pc-pc">
    //                 <h2>Payment summary</h2>
    //                 <div>
    //                     <p className='amount-to-pay-pc'>
    //                         Amount to be paid:{" "}
    //                         <span>{priceData.currencySymbol}{totalAmount}</span>
    //                     </p>
    //                 </div>

    //                 <PayPal
    //                     priceData={{ ...priceData, totalAmount: totalAmount }}
    //                     formData={formData}
    //                     usernames={usernames}
    //                     orderStatus={orderStatus}
    //                     setOrderStatus={setOrderStatus}
    //                 />

    //             </section>
    //         </div>
    //     </div>
    // )
}

export default CheckoutPC