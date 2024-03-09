import React from 'react'
import { useLocation, useNavigate } from 'react-router'

function Header() {
  const location =  useLocation();
  const navigate = useNavigate();

  function path(route) {
    if(route === location.pathname){
      console.log(location.pathname);
        return true;
    }
    else {
      return false;
    }
  }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50' >
      <header className='flex justify-between px-3 items-center max-w-6xl mx-auto'>
        <div>
            <img onClick={() => navigate("/")} src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="main logo" className='cursor-pointer h-5'/>

        </div>
        <div>
            <ul className='flex space-x-5'>      
                <li 
                 className={`cursor-pointer py-3 text-sm font-semibold
    
                 ${path("/") ? "text-black border-b-[3px] border-b-red-500" : 'text-gray-400'}`}
                 onClick={() => navigate("/")}
                 >Home</li>
                <li onClick={() => navigate("/offers")} 
                className={`cursor-pointer py-3 text-sm font-semibold
                 
                 ${path("/offers") ? "text-black border-b-[3px] border-b-red-500" : "text-gray-400"} `}
                 >Offers</li>
                <li onClick={() => setTimeout(() => navigate("/sign-in"),20)} 
                className={`cursor-pointer py-3 text-sm font-semibold
                
                 ${path("/sign-in") ? "text-black border-b-[3px] border-b-red-500" : "text-gray-400"} `}
                 >SignIn</li>
            </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
