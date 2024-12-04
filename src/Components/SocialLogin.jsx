import React from 'react'
import { FaFacebook, FaGithub } from 'react-icons/fa'

function SocialLogin() {
  return (
    <div className=''>
        <h2 className="font-semibold mb-2">Login With</h2>
        <div className="*:w-full space-y-2">
            <button className="btn"> <FaFacebook />
            Login With Facebook</button>
            <button className="btn"> <FaGithub />
            Login With Github</button>
        </div>
    </div>
  )
}

export default SocialLogin