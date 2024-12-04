import React, { useContext } from 'react'
import { Link } from 'react-router'
import userIcon from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider'

function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className='flex justify-between py-5 '>
      <div className="flex justify-center item">{user && user.email}</div>
      <div className="space-x-4 flex items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex gap-2 items-center">
        <div className=" ">
          {user && user?.email ? (
            <div>
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        {
          user && user?.email ? (<button onClick={logOut} className="btn btn-neutral rounded-none">Log Out</button>) :
            (<Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>)
        }

      </div>

    </div>
  )
}

export default Navbar 