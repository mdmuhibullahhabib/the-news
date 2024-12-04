import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation } from 'react-router';

function Login() {
  const { logIn, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password })

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        console.log(user);
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {
        alert("please try with valid email & password")
      });
  }
  return (
    <div className='flex justify-center items-center my-10'>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl rounded-none">

        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control mt-6">
            <h2 className="font-semibold text-2xl text-center">Login your account</h2>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

           
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
          <p className="text-sm">Dont’t Have An Account ? <Link to="/auth/register" className='text-red-500'>Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login