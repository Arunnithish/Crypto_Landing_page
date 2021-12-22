import React from 'react'
import './Signup.css'


import Trade from '../assets/trade.png'
const Signup = () => {
    return (
        <div className='signup'>

            <div className='container'>

                <div className='left'>
                    <img src={Trade} alt=''/>
                </div>


                <div className='right'>
                    <h2>Earn Passive Income with Crypto</h2>
                    <p>Earn some exicting rewards for every purchases on digital assets</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email'/>
                        <button className='btn'>Learn more</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Signup
