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
        <nav className={`p-[30px] fixed flex items-center justify-between w-full z-10 ${bg}`}>
            <div className='flex items-center gap-[30px] '>
               <img src={Logo} alt="" className='' />
               <p className='text-white'>Browse</p> 
            </div>
            
            <ul className='flex gap-[30px] items-center'>
                <li className='text-white'>Become an Instructor</li>
                <img src={shopping} alt="" className='' />
                <img src={Icon} alt="" className='' />
                <img src={girl} alt="" />
            </ul>
            <img width="32" height="32" src="https://img.icons8.com/stamp/32/FFFFFF/menu.png" onClick={handleClick} alt="menu" className='lg:hidden'/>
        </nav>
    </>
  )
}

export default NavBar