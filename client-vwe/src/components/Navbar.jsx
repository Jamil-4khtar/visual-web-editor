import React from 'react'
import { Link} from 'react-router-dom'
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div>
      <nav className='nav_container'>
        <ul className='flex transition-all'>
          <li className='font-semibold p-4 rounded-2xl hover:bg-slate-600'><Link to={"/library"}>Library</Link></li>
          <li className='font-semibold p-4 rounded-2xl  hover:bg-slate-600'><Link to={"/editor"}>Editor</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar