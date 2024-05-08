import React, { useState, useEffect } from 'react'
import '../styles/components.css'
import { NavLink } from 'react-router-dom'
import { IoClose, IoMenu } from 'react-icons/io5'

const Navbar = () => {
    function openNav() {
        document.getElementById('myNav').style.height = '100%'
        document.getElementById('openNav').classList.add('hidden')
    }

    function closeNav() {
        document.getElementById('myNav').style.height = '0%'
        document.getElementById('openNav').classList.remove('hidden')
    }

    const [isSmallScreen, setIsSmallScreen] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <nav id="myNav" className={isSmallScreen ? 'overlay' : 'lg:flex'}>
                <div className="grid grid-cols-2 -mt-2 py-6 pr-6 pl-0 lg:pr-0 lg:pl-6">
                    <NavLink to="/">
                        <h1 className="logo">ReqGenuis.</h1>
                    </NavLink>
                    <IoClose
                        onClick={closeNav}
                        size={30}
                        className={
                            isSmallScreen
                                ? 'ml-auto cursor-pointer self-center text-white'
                                : 'hidden'
                        }
                    />
                </div>
                <div className="overlay-content cursor-pointer">
                    <div className="lg:float-right lg:flex lg:gap-x-10 lg:mr-10 lg:mt-2">
                        <NavLink to="" onClick={closeNav}>
                            Home
                        </NavLink>
                        <NavLink to="" onClick={closeNav}>
                            Requirements
                        </NavLink>

                        <NavLink to="" onClick={closeNav}>
                            About Us
                        </NavLink>
                        <NavLink
                            to="/login"
                            onClick={closeNav}
                            className={
                                'bg-[#5D9ADA] text-white rounded-lg p-4 lg:-mt-4'
                            }
                        >
                            Sign In / Sign Up
                        </NavLink>
                    </div>
                </div>
            </nav>

            <nav
                className={
                    isSmallScreen
                        ? 'grid grid-cols-2 -mt-2 py-6 px-6'
                        : 'hidden'
                }
            >
                <h1 className="logo">ReqGenuis.</h1>
                <IoMenu
                    onClick={openNav}
                    size={30}
                    className="ml-auto cursor-pointer self-center"
                    id="openNav"
                />
            </nav>
        </>
    )
}

export default Navbar
