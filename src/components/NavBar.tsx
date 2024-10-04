import React, { useState } from 'react'
import Logo from '../assets/imgs/logo.png'
import Icon from '../assets/imgs/notification.png'
import shopping from '../assets/imgs/shopping.png'
import girl from '../assets/imgs/girl.png'


interface props {
  bg: string;
}

const NavBar = ({bg}:props) => {
  const [NavClicked, setNavClicked] = useState(false)
  const handleClick = () => {
    setNavClicked(!NavClicked)
  }
   console.log(NavClicked)
  return (
    <>
        <nav className={` p-[30px] fixed flex lg:items-center flex-col lg:flex-row justify-between w-full z-10 ${bg}`}>
            <div className='flex items-center gap-[30px] '>
               <img src={Logo} alt="" className='' />
               <p className='text-white'>Browse</p> 
            </div>
            
            <ul className={`transition-all duration-[1s] flex gap-[30px] items-center  h-0 ${NavClicked ? 'flex-col translate-y-[0px] h-[200px]' : 'flex-col lg:flex-row translate-y-[-450px] lg:translate-y-0'} md:flex `}>
                <li className='text-white'>Become an Instructor</li>
                <img src={shopping} alt="" className='' />
                <img src={Icon} alt="" className='' />
                <img src={girl} alt="" />
            </ul>
            <img width="32" height="32" src="https://img.icons8.com/stamp/32/FFFFFF/menu.png" onClick={handleClick} alt="menu" className='absolute right-[15px] lg:hidden md:hidden cursor-pointer'/>
        </nav>
    </>
  )
}

export default NavBar