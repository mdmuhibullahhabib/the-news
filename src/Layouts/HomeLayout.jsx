import React from 'react'
import Header from '../Components/Header'
import LatestNews from '../Components/LatestNews'
import Navbar from '../Components/Navbar'
import LeftNavbar from '../Layout Components/LeftNavbar'
import RightNavbar from '../Layout Components/RightNavbar'
import { Outlet } from 'react-router'

function HomeLayout() {
  return (
    <div className='w-11/12 mx-auto font-poppins'>
      <header>
        <Header></Header>
        <section className=''>
          <LatestNews></LatestNews>
        </section>
      </header>

      <nav>
      <section className=''>
          <Navbar></Navbar>
        </section>
      </nav>

      <main className='grid grid-cols-12'>
        <aside className='col-span-3'><LeftNavbar></LeftNavbar></aside>
        <section className='col-span-6'> <Outlet></Outlet></section>
        <aside className='col-span-3'><RightNavbar></RightNavbar></aside>
      </main>
    </div>
  )
}

export default HomeLayout