import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function FindUs() {
    return (
        <div className='mt-6'>
            <h2 className="font-semibold mb-2">find Us on</h2>
                <div className="join flex join-vertical *:bg-base-100">
                    <button className="btn join-item justify-start">
                        <FaFacebook></FaFacebook> Facebook
                        </button>
                    <button className="btn join-item justify-start">
                        <FaTwitter></FaTwitter> Twitter
                        </button>
                    <button className="btn join-item justify-start">
                        <FaInstagram></FaInstagram> Instagram
                        </button>
                </div>
        </div>
    )
}

export default FindUs