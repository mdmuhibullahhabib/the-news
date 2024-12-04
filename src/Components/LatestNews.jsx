import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router'

function LatestNews() {
    return (
        <div className='bg-gray-200 flex gap-2 my-6 p-2'>
            <p className="py-1 px-3 bg-[#D72050] text-white font-semibold">Latest</p>
           <Marquee pauseOnHover={true} speed={100} className=''>
            <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>

        </div>
    )
}

export default LatestNews