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
        'h-14 flex rounded-xl border border-gray-400 w-full items-center px-4 gap-x-4'

    return (
        <>
            <nav
                id="myNav"
                className={
                    isSmallScreen
                        ? 'overlay'
                        : 'bg-[#CEE1F44D] text-gray-400 py-8 shadow-xl lg:h-full m-6 rounded-3xl'
                }
            >
                <div
                    className={isSmallScreen ? 'grid-cols-2' : 'grid my-8 px-6'}
                >
                    <div className={`${container} justify-center`}>
                        <BsPlusLg size={20} />
                        <p className="">New Requirement</p>
                    </div>
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
                    <div className="grid px-6 gap-y-4 mt-10">
                        <h2 className="text-black font-semibold text-lg">
                            History
                        </h2>
                        <NavLink
                            to="/index"
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
                            to="/complaints"
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
                            to="/complaints"
                            onClick={smallScreenWidth ? closeNav : ''}
                            className={`${container} justify-between mb-8`}
                        >
                            <BsPersonCircle
                                size={smallScreenWidth ? 28 : 22}
                                className="self-center mr-2"
                            />
                            Ayomide
                            <IoMenu
                                size={smallScreenWidth ? 28 : 22}
                                className="justify-self-end"
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
