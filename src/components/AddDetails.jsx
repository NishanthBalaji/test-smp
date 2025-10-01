// AddDetails.jsx
import { TextField, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from './Navbar'

import info from '../assets/info.svg'

import '../styles/AddDetails.css'

import Form from 'react-bootstrap/Form';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const AddDetails = ({ formData, setFormData, usernames, setUsernames }) => {
    const navigate = useNavigate()

    // Handle common fields change
    const handleCommonChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    // Add new duolingo username fields
    const addUser = () => {
        setUsernames([...usernames, { duolingoUsername: '', confirmDuolingoUsername: '' }])
    }

    // Remove user
    const handleRemoveUser = (indexToRemove) => {
        setUsernames(usernames.filter((_, index) => index !== indexToRemove))
    }

    // Handle username fields change
    const handleUsernameChange = (index, e) => {
        const { name, value } = e.target
        const newUsernames = [...usernames]
        newUsernames[index][name] = value
        setUsernames(newUsernames)
    }

    // Check if any username mismatch exists
    const hasMismatch = usernames.some(
        (user) =>
            user.duolingoUsername.length > 0 &&
            user.confirmDuolingoUsername.length > 0 &&
            user.duolingoUsername !== user.confirmDuolingoUsername
    )

    // Submit handler
    const handleSubmit = (e) => {
        e.preventDefault()
        if (hasMismatch) return // Optional: prevent submit if mismatch exists
        // console.log('Common Info:', formData)
        // console.log('Duolingo Users:', usernames)
        navigate('/checkout')
    }

    return (

        <div className='add-details'>
            <Navbar navTitle="Add Details" hashLink="/#pricing" />
            <section className='add-details-container'>

                <form onSubmit={handleSubmit}>
                    <section className='common-details'>

                        <div className='common-title'>
                            <p>Contact Details</p>
                        </div>

                        <div className='input-wrapper'>
                            <TextField
                                className='name input'
                                // fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleCommonChange}
                                required
                                variant="filled"
                            // style={{ marginBottom: '10px' }}
                            />
                        </div>

                        <div className='input-wrapper'>
                            <TextField
                                className='email input'
                                // fullWidth
                                label="Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleCommonChange}
                                required
                                variant="filled"
                            // style={{ marginBottom: '20px' }}
                            />
                        </div>



                        <p>All updates and confirmation email will be sent to this address</p>
                    </section>

                    <div className="details">

                        {/* <p className='upto'>Up to 5 users can be added at once</p>
                    */}

                        <p className='upto'>UP TO 5 USERS CAN BE ADDED AT ONCE</p>

                        <p className='note'>All Usernames below will join the same family plan</p>

                    </div>





                    <section className='user-list'>

                        {/* <div className='already'>
                            <p>Please make sure that the user is not already in a super duolingo plan / free trail</p>
                        </div> */}

                        <div className='find-username'>
                            <p>To find your <strong>Duolingo username</strong> </p>
                            <p>Open Duolingo <span>{'>>'}</span> Settings <span>{'>>'}</span> Profile</p>


                        </div>



                        <div className={`user-grid users-${usernames.length}`}>

                            {usernames.map((user, index) => {
                                const isMismatch =
                                    user.duolingoUsername.length > 0 &&
                                    user.confirmDuolingoUsername.length > 0 &&
                                    user.duolingoUsername !== user.confirmDuolingoUsername
                                return (
                                    <section className='each-user' key={index} >
                                        <div className='user-no'>
                                            <p> User {index + 1}</p>

                                            {index >= 1 && (

                                                <IconButton className='remove-user' onClick={() => handleRemoveUser(index)} aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            )}


                                        </div>

                                        <div className='input-wrapper'>
                                            <TextField
                                                className='duolingo-username input'
                                                label="Duolingo Username"
                                                name="duolingoUsername"
                                                value={user.duolingoUsername}
                                                onChange={(e) => handleUsernameChange(index, e)}
                                                required
                                                variant="filled"
                                                style={{ marginBottom: '10px' }}
                                                error={isMismatch}
                                                autoFocus={index === usernames.length - 1}
                                            />
                                        </div>


                                        <div className='input-wrapper'>
                                            <TextField
                                                className='duolingo-username input'
                                                label="Confirm Duolingo Username"
                                                name="confirmDuolingoUsername"
                                                value={user.confirmDuolingoUsername}
                                                onChange={(e) => handleUsernameChange(index, e)}
                                                required
                                                variant="filled"
                                                error={isMismatch}
                                            />
                                        </div>

                                        <p
                                            className="mismatch"
                                            style={{ visibility: isMismatch ? "visible" : "hidden" }}
                                        >
                                            Confirmation Username do not match for this user.
                                        </p>

                                    </section>
                                )
                            })}
                        </div>



                    </section>
                    <div className='toCheckout-btn' >
                        {usernames.length < 5 && (
                            <Button className='add-user' variant="contained" onClick={addUser}>
                                Add User {usernames.length + 1}
                            </Button>
                        )}

                        <Button className='proceed' type="submit" variant="contained" disabled={hasMismatch}>
                            Review Order to Proceed
                        </Button>
                    </div>

                </form>
            </section>


        </div>



    )
}

export default AddDetails
