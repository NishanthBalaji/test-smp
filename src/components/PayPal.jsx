import React from 'react'
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import emailjs from '@emailjs/browser'

const PaypalButtonsWrapper = ({ priceData, formData, usernames, setOrderStatus }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    if (isPending) {
        return <div>Loading payment options...</div>;
    }

    return (
        <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => {

                const customString = `cn:${formData.name};em:${formData.email};un:${usernames.map(u => u.duolingoUsername).join(',')}`;

                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [{
                        amount: {
                            currency_code: priceData.currency,
                            value: priceData.totalAmount.toString(),
                        },
                        description: `Super Duolingo Spot x${usernames.length}`,
                        custom_id: customString, //Short form because of 127 char limitation
                    }],
                });
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log('Order approved:', order);

                const orderDetails = {
                    orderId: order.id,
                    name: formData.name,
                    email: formData.email,
                    usernames: usernames.map(u => u.duolingoUsername),
                    qty: usernames.length,
                    totalAmount: priceData.totalAmount,
                    currency: priceData.currency,
                };

                try {
                    await emailjs.send(
                        import.meta.env.VITE_EMAILJS_SERVICE_ID,
                        import.meta.env.VITE_EMAILJS_ORDER_TEMPLATE_ID,
                        {
                            titleImgUrl: "https://res.cloudinary.com/dkywndf0x/image/upload/v1757659512/sharemyplan_cx9aau.png",
                            name: formData.name,
                            email: formData.email,
                            usernames: `<ul style="padding-left:16px; margin:6px 0;">${usernames.map(u => `<li style="margin:2px 0;">${u.duolingoUsername}</li>`).join('')}</ul>`,
                            orderId: order.id,
                            productImgUrl: "https://res.cloudinary.com/dkywndf0x/image/upload/v1757656744/super_duo_jx3dqr.jpg",
                            symbol: priceData.currencySymbol,
                            amount: priceData.amount,
                            qty: usernames.length,
                            totalAmount: priceData.totalAmount,
                        },
                        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                    );
                    console.log("✅ Order confirmation email sent");
                } catch (err) {
                    console.error("❌ Failed to send confirmation email", err);
                } finally {
                    try {
                        await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
                            method: "POST",
                            mode: "no-cors",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                type: "order",
                                ...orderDetails
                            }),
                        });
                        console.log("✅ Order logged to Google Sheets");
                    } catch (err) {
                        console.error("❌ Failed to log order to Google Sheets", err);
                    }
                    setOrderStatus('Success');
                }
            }}
            onError={(err) => {
                console.error('PayPal Checkout onError', err);
                setOrderStatus('Failure');
            }}
        />
    );
};

const PayPal = ({ priceData, formData, usernames, setOrderStatus }) => {
    const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

    return (
        <PayPalScriptProvider options={{ "client-id": clientId, currency: priceData.currency }}>
            <PaypalButtonsWrapper
                priceData={priceData}
                formData={formData}
                usernames={usernames}
                setOrderStatus={setOrderStatus}
            />
        </PayPalScriptProvider>
    );
};

export default PayPal;





// import React from 'react'
// import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'

// import { useNavigate } from 'react-router-dom'
// import emailjs from '@emailjs/browser'

// const PayPal = ({ priceData, formData, usernames, setOrderStatus }) => {
//     const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID
//     const navigate = useNavigate()

//     // EmailJS IDs from .env
//     const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
//     const templateID = import.meta.env.VITE_EMAILJS_ORDER_TEMPLATE_ID
//     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

//     const googleScriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;


//     return (
//         <PayPalScriptProvider options={{ "client-id": clientId, currency: priceData.currency }}>
//             <PayPalButtons
//                 style={{ layout: 'vertical' }}
//                 createOrder={(data, actions) => {
//                     return actions.order.create({
//                         purchase_units: [{
//                             amount: {
//                                 currency_code: priceData.currency,
//                                 value: priceData.totalAmount.toString(),
//                             },
//                             description: 'Super Duolingo Family Plan Spot',
//                         }],
//                     })
//                 }}
//                 onApprove={async (data, actions) => {
//                     const order = await actions.order.capture()
//                     console.log('Order approved:', order)

//                     const orderDetails = {
//                         orderId: order.id,
//                         name: formData.name,
//                         email: formData.email,
//                         usernames: usernames.map(u => u.duolingoUsername),
//                         qty: usernames.length,
//                         totalAmount: priceData.totalAmount,
//                         currency: priceData.currency,
//                     }

//                     // ✅ Send order confirmation email
//                     try {
//                         await emailjs.send(
//                             serviceID,
//                             templateID,
//                             {
//                                 titleImgUrl: "https://res.cloudinary.com/dkywndf0x/image/upload/v1757659512/sharemyplan_cx9aau.png",
//                                 name: formData.name,
//                                 email: formData.email,

//                                 usernames: `<ul style="padding-left:16px; margin:6px 0;">${usernames.map(u => `<li style="margin:2px 0;">${u.duolingoUsername}</li>`).join('')}</ul>`,

//                                 orderId: order.id,

//                                 productImgUrl: "https://res.cloudinary.com/dkywndf0x/image/upload/v1757656744/super_duo_jx3dqr.jpg",

//                                 symbol: priceData.currencySymbol,
//                                 amount: priceData.amount,
//                                 qty: usernames.length,
//                                 totalAmount: priceData.totalAmount,

//                             },
//                             publicKey
//                         )
//                         console.log("✅ Order confirmation email sent")
//                     } catch (err) {
//                         console.error("❌ Failed to send confirmation email", err)
//                     } finally {

//                         // ✅ Always log order to Google Sheets
//                         try {
//                             await fetch(googleScriptURL, {
//                                 method: "POST",
//                                 mode: "no-cors",
//                                 headers: { "Content-Type": "application/json" },
//                                 body: JSON.stringify({
//                                     type: "order",
//                                     ...orderDetails
//                                 }),
//                             })
//                             console.log("✅ Order logged to Google Sheets")
//                         } catch (err) {
//                             console.error("❌ Failed to log order to Google Sheets", err)
//                         }

//                         setOrderStatus('Success')
//                     }


//                 }}
//                 onError={(err) => {
//                     console.error('PayPal Checkout onError', err)
//                     setOrderStatus('Failure')
//                 }}
//             />
//         </PayPalScriptProvider>
//     )
// }

// export default PayPal




// // PayPal.jsx
// import React from 'react'
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
// import { useNavigate } from 'react-router-dom'

// const PayPal = ({ priceData }) => {
//     const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID
//     const navigate = useNavigate()

//     return (
//         <PayPalScriptProvider options={{ "client-id": clientId, currency: priceData.currency }}>
//             <PayPalButtons
//                 style={{ layout: 'vertical' }}
//                 createOrder={(data, actions) => {
//                     return actions.order.create({
//                         purchase_units: [{
//                             amount: {
//                                 currency_code: priceData.currency,
//                                 value: priceData.amount.toString(),
//                             },
//                             description: 'Super Duolingo Family Plan Spot',
//                         }],
//                     })
//                 }}
//                 onApprove={async (data, actions) => {
//                     const order = await actions.order.capture()
//                     console.log('Order approved:', order)
//                     navigate('/success')
//                 }}
//                 onError={(err) => {
//                     console.error('PayPal Checkout onError', err)
//                     navigate('/failure')
//                 }}
//             />
//         </PayPalScriptProvider>
//     )
// }

// export default PayPal