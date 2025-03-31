import React from 'react'
import { Link } from 'react-scroll'

const Navigation = () => {
  return (
    <div>
         <nav  className='fixed top-0 left-0 w-full bg-black py-4 z-50 shadow-lg pr-10 '>
          <ul className=' flex  flex-row justify-end space-x-10 justify-center'>
            <li className='text-xl'><Link to='home' smooth={true} duration={500}>Home</Link></li>
            <li className='text-xl'><Link to='about' smooth={true} duration={500}>About</Link></li>
            <li className='text-xl'>
              <Link to='projects' smooth={true} duration={500}>Projects</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navigation