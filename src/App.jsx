import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import Steps from './components/Steps'
import AddDetails from './components/AddDetails'
import Checkout from './components/Checkout'
import Payment from './components/Payment'



function App() {

  const [formData, setFormData] = useState({ name: '', email: '' })
  const [usernames, setUsernames] = useState([
    { duolingoUsername: '', confirmDuolingoUsername: '' },
  ])

  const prices = {
    US: {
      currency: "USD", // United States
      currencySymbol: "$",
      actualPrice: 19.99, //19.99
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);  // = 17.98
      }
    }, //approx INR per slot (17.98 * 88 ≈ ₹1582)

    GB: {
      currency: "GBP", // United Kingdom
      currencySymbol: "£",
      actualPrice: 14.99,
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);
      }
    }, //approx INR per slot (13.48 * 112 ≈ ₹1510)

    AU: {
      currency: "AUD", // Australia
      currencySymbol: "A$",
      actualPrice: 29.15,
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);
      }, // = 26.24
    }, //approx INR per slot (26.24 * 55 ≈ ₹1444)

    CH: {
      currency: "CHF", // Switzerland
      currencySymbol: "CHF",
      actualPrice: 20.15,
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);
      }, // = 18.14
    }, //approx INR per slot (18.14 * 97 ≈ ₹1760)

    NO: {
      currency: "NOK", // Norway
      currencySymbol: "kr",
      actualPrice: 215,
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);
      }, // = 193.5
    }, //approx INR per person (193.5 * 8.5 ≈ ₹1645)

    JP: {
      currency: "JPY", // Japan
      currencySymbol: "¥",
      actualPrice: 2200,
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);
      }, // = 1980
    }, //approx INR per person (1980 / 1.6 ≈ ₹1237)

    EU: {
      currency: "EUR", // Eurozone,
      currencySymbol: "€",
      actualPrice: 20.50, // = 20.48
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);
      }, // = 18.43
    }, //approx INR per person (18.43 * 96 ≈ ₹1769)

    CN: {
      currency: "CNY", // China
      currencySymbol: "¥",
      actualPrice: 133, // = 133
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);
      }, // = 119.7
    }, //approx INR per person (119.7 * 11.3 ≈ ₹1353)

    CA: {
      currency: "CAD", // Canada
      currencySymbol: "C$",
      actualPrice: 24.99,
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);
      }, // = 22.48
    }, //approx INR per person (22.48 * 65 ≈ ₹1461)

    KR: {
      currency: "KRW", // South Korea
      currencySymbol: "₩",
      actualPrice: 21500,
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);
      }, // = 19350
    }, //approx INR per person (19350 / 15 ≈ ₹1290)

    PT: {
      currency: "EUR", // Portugal
      currencySymbol: "€",
      actualPrice: 13.99,
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);
      }, // = 12.58
    }, //approx INR per person (12.58 * 96 ≈ ₹1207)

    SG: {
      currency: "SGD", // Singapore
      currencySymbol: "S$",
      actualPrice: 21.65,
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);
      }, // = 19.49
    }, //approx INR per person (19.49 * 61 ≈ ₹1189)

    SE: {
      currency: "SEK", // Sweden
      currencySymbol: "kr",
      actualPrice: 216.5,
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);
      }, // = 194.85
    }, //approx INR per person (194.85 * 8.2 ≈ ₹1598)

    TW: {
      currency: "TWD", // Taiwan
      currencySymbol: "NT$",
      actualPrice: 398.30, // = 
      discountPercent: 5,
      get amount() {
        return +(this.actualPrice * (1 - this.discountPercent / 100)).toFixed(2);
      }, // = 358.49
    }, //approx INR per person (358.49 * 2.6 ≈ ₹932)
  };

  const [location, setLocation] = useState('US')

  // useEffect(() => {
  //   const token = import.meta.env.VITE_IPINFO_TOKEN;
  //   fetch(`https://ipinfo.io/json?token=${token}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("ipinfo response:", data);

  //       const countryCode = data.country || "US"; // ✅ ipinfo gives "country"
  //       let selectedCode = countryCode;

  //       if (!prices[countryCode]) {
  //         // ✅ no continent info in free plan, so just fallback to US
  //         selectedCode = 'US';
  //       }

  //       setLocation(selectedCode);
  //     })
  //     .catch(() => {
  //       setLocation('US');
  //     })
  // }, []);

  const priceData = prices[location]

  console.log("Selected location:", location);
  console.log("Price data:", priceData);


  return (
    <Router>
      <Routes>

        <Route
          path='/'
          element={<Home priceData={priceData} />}

        />

        <Route path='/steps' element={<Steps />} />
        <Route
          path="/add-details"
          element={
            <AddDetails
              formData={formData}
              setFormData={setFormData}
              usernames={usernames}
              setUsernames={setUsernames}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout formData={formData} usernames={usernames} priceData={priceData} />}
        />

        {/* <Route
          path="/payment"
          element={<Payment />}
        /> */}
      </Routes>


    </Router>
  )
}

export default App
