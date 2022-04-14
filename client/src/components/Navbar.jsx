import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

// Logo
import logo from './images/logo.png'
import { useState } from 'react';

// Outputs the Items in the Navbar
const NavbarItems = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}

const Navbar = () => {
    // For Responsivness
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='w-full flex md: justify-center justify-between items-center p-4'>
            {/* Logo */}
            <div className='md: flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt="logo" className='w-40 cursor-pointer' />
            </div>

            {/* Tabs */}
            <ul className='text-white md:flex hidden list-none flex-row justify-betwen items-center flex-initial'>
                {["Market", "Exchange", "Tutorials", "Wallet"].map((item, index) => (<NavbarItems key={item + index} title={item} />))}

                {/* Login Button */}
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]' >
                    Login
                </li>
            </ul>

            {/* Mobile View */}
            <div className="flex relative">
                {toggleMenu
                ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(false)} /> 
                : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(true)} />
                }

                {toggleMenu && (
                    <ul>
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={()=> setToggleMenu(false)} />
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallet"].map((item, index)=>(<NavbarItems key={item + index} title={item} classProps ="my-2 text-lg" />))}
                    </ul>
                )}
            </div>

        </nav>
    )
}

export default Navbar;