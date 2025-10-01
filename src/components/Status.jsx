import React from "react";
import Navbar from "./Navbar";
import "../styles/Status.css";
import { useNavigate } from "react-router-dom";

const Status = ({ orderStatus }) => {
    const navigate = useNavigate();
    const isSuccess = orderStatus === "Success";

    return (
        <div className="status">
            {isSuccess ? (
                <>
                    <Navbar navTitle={"Order Status"} navTo={"/"} />

                    <div className="svg-text">
                        <div className="wrapper">
                            <svg
                                className="checkmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                            >
                                <circle
                                    className="checkmark__circle"
                                    cx="26"
                                    cy="26"
                                    r="25"
                                    fill="none"
                                />
                                <path
                                    className="checkmark__check"
                                    fill="none"
                                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                />
                            </svg>
                        </div>

                        <h1>Order Placed Successfully!</h1>
                        <p>Please check order confirmation mail for more details</p>
                    </div>

                    <div className="status-button">
                        <button className="green-btn" onClick={() => navigate("/")}>Home</button>
                    </div>



                </>
            ) : (
                <>
                    <Navbar navTitle={"Order Status"} navTo={"/checkout"} />

                    <div className="svg-text">
                        <div className="wrapper">
                            <svg
                                className="crossmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                            >
                                <circle
                                    className="crossmark__circle"
                                    cx="26"
                                    cy="26"
                                    r="25"
                                    fill="none"
                                />
                                <path
                                    className="crossmark__cross crossmark__cross--left"
                                    fill="none"
                                    d="M16 16 36 36"
                                />
                                <path
                                    className="crossmark__cross crossmark__cross--right"
                                    fill="none"
                                    d="M36 16 16 36"
                                />
                            </svg>
                        </div>

                        <h1>Order Failed</h1>
                        <p>Any amount debited will be refunded within 3–5 business days</p>
                    </div>

                    <div className="status-button">
                        <button className="red-btn" onClick={() => navigate("/checkout")}>Try Again</button>
                    </div>

                </>
            )}
        </div>
    );
};

export default Status;
