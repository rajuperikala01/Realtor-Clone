import React from 'react'
import { useLocation, useNavigate } from 'react-router'

function Header() {
  const location =  useLocation();
  const navigate = useNavigate();
  function path(route) {
    if(route === location.pathname){
        return true
    }
    else {
        return false
    }
  }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50 px-10' >
      <header className='flex justify-between px-3 items-center max-w-6xl'>
        <div>
            <img onClick={() => navigate("/")} src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="main logo" className='cursor-pointer h-5'/>

        </div>
        <div>
            <ul className='flex space-x-5'>      
                <li onClick={() => navigate("/")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${path("/") && "text-black border-b-red-500"} `}>Home</li>
                <li onClick={() => navigate("/offers")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${path("/offers") && "text-black border-b-red-500"} `}>Offers</li>
                <li onClick={() => navigate("/signin")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${path("/signin") && "text-black border-b-red-500"} `}>SignIn</li>
            </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
