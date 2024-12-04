import { useContext, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';

function Register() {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name")
    if (name.length < 5) {
      setError({ ...error, name: "Must be more the 5 character long" });
      return;
    }
    const photo = form.get("photo")
    const email = form.get("email")
    const password = form.get("password")

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        updateUserProfile({ displayName: name, photoURL: photo })
        .then(()=>{
          navigate("/");
        }).catch(error=>{
          console.log(error);
        })
      })

  }
  return (
    <div className='flex justify-center items-center my-10'>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl rounded-none">

        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control mt-6">
            <h2 className="font-semibold text-2xl text-center">Register your account</h2>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input name='photo' type="text" placeholder="Photo-url" className="input input-bordered" required />
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
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register