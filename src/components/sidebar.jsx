import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { IoClose, IoMenu } from 'react-icons/io5'
import { BsChat, BsPlusLg, BsPersonCircle } from 'react-icons/bs'

const SideBar = () => {
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

    const smallScreenWidth = window.innerWidth < 1024
    let container =
        'lg:h-14 flex rounded-xl border border-gray-400 items-center px-4 gap-x-4'

    return (
        <>
            <nav
                id="myNav"
                className={
                    isSmallScreen
                        ? 'overlay'
                        : 'bg-[#CEE1F44D] text-gray-400 py-4 shadow-xl lg:h-full m-4 rounded-3xl relative'
                }
            >
                <div className={isSmallScreen ? 'grid-cols-2' : ''}>
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
                    <div className="grid px-6 gap-y-4">
                        <NavLink
                            to={'/dashboard'}
                            onClick={smallScreenWidth ? closeNav : ''}
                            className={`${container} justify-center`}
                        >
                            <BsPlusLg
                                size={smallScreenWidth ? 28 : 22}
                                className="self-center mr-2"
                            />
                            New Requirement
                        </NavLink>
                        <h2 className="text-black font-semibold text-lg mt-6">
                            History
                        </h2>
                        <NavLink
                            to={'/dashboard'}
                            onClick={smallScreenWidth ? closeNav : ''}
                            className={'navItems flex'}
                        >
                            <BsChat
                                size={smallScreenWidth ? 28 : 22}
                                className="self-center mr-2"
                            />
                            Functional blah blah
                        </NavLink>
                        <NavLink
                            to={'/dashboard'}
                            onClick={smallScreenWidth ? closeNav : ''}
                            className={'navItems flex'}
                        >
                            <BsChat
                                size={smallScreenWidth ? 28 : 22}
                                className="self-center mr-2"
                            />
                            Functional blah blah
                        </NavLink>
                        <NavLink
                            to="/profile"
                            onClick={smallScreenWidth ? closeNav : ''}
                            className={`${container} absolute bottom-0 justify-self-center w-10/12 mb-8`}
                        >
                            <BsPersonCircle
                                size={smallScreenWidth ? 28 : 22}
                                className="self-center mr-2"
                            />
                            <p className="mx-auto">Ayomide</p>
                            <IoMenu
                                size={smallScreenWidth ? 28 : 22}
                                className="ml-auto"
                            />
                        </NavLink>
                    </div>
                </div>
            </nav>

            <nav className={isSmallScreen ? '-mt-2 py-6 px-6' : 'hidden'}>
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

export default SideBar
