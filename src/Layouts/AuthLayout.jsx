import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

function AuthLayout() {
  return (
   <div className="bg-[#F3F3F3]">
     <div className='w-11/12 mx-auto '>
        <header>
            <Navbar></Navbar>
        </header>
        <Outlet></Outlet>
    </div>
   </div>
  )
}

export default AuthLayout