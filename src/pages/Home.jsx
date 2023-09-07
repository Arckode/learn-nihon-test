import React from 'react';
import '../App.css'
import { HiMenuAlt3 } from 'react-icons/hi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FiUser } from 'react-icons/fi';
import { LuSettings } from 'react-icons/lu';
import { BsMoon } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Home() {
    const menus = [
        { name: "Dashboard", link: '/', icon: LuLayoutDashboard },
        { name: "User", link: '/', icon: FiUser },
        { name: "EX", link: '/', icon: FiUser },
        { name: "Setting", link: '/', icon: LuSettings, margin: true },
        { name: "EX", link: '/', icon: LuSettings },
    ]
    const [open, setOpen] = useState(true)

    const [theme, setTheme] = useState(null)
    useEffect(() => {
        if (window.matchMedia("prefer-color-schema: dark").matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])
    useEffect(() => {
        if (theme == 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])
    const handleThemeSwitch = () => {
        setTheme(theme == 'dark' ? 'light' : 'dark')
    }
    return (
        <>
            <section className="flex gap-6 dark:text-gray-100 dark:bg-slate-900 duration-100">
                <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72' : 'w-16'} duration-500 text-gray-100 px-4`}>
                    <div className="py-3 flex justify-end">
                        <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
                    </div>
                    <div className="mt-4 flex flex-col gap-4 relative">
                        {
                            menus?.map((menu, i) => (
                                <Link
                                    to={menu?.link}
                                    key={i}
                                    className={`${menu?.margin && "mt-5"} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                                >
                                    <div>{React.createElement(menu?.icon, { size: "20 " })}</div>
                                    <h2
                                        style={{
                                            transitionDelay: `${i + 3}00ms`
                                        }}
                                        className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                                    >
                                        {menu?.name}
                                    </h2>
                                    <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}>
                                        {menu?.name}
                                    </h2>
                                </Link>
                            ))
                        }
                        <button className='mt-5 group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md' onClick={handleThemeSwitch}>

                            <div>{React.createElement(theme == 'dark' ? BsMoon : BsSun, { size: '20' })}</div>

                            <h2 style={{
                                transitionDelay: `${menus.length + 3}00ms`
                            }}
                                className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                            >
                                {theme == 'dark' ? 'Dark Mode' : 'Light Mode'}
                            </h2>
                            <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}>
                                {theme == 'dark' ? 'Dark Mode' : 'Light Mode'}
                            </h2>
                        </button>
                    </div>
                </div>
                <div className="m-3 text-xl font-semibold">
                    REACT TAILWIND
                </div>
            </section>
        </>
    )
}

export default Home
