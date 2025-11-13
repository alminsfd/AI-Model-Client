// Common Navbar Component

import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';



const Navbar = () => {
    const [them, setThem] = useState(localStorage.getItem('them') || 'light')

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", them)
        localStorage.setItem('them', them)
    }, [them])
    const handlethem = (chacked) => {
        setThem(chacked ? 'dark' : 'light')
    }
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const handlelogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: "Successfully logout",
                    icon: "success",
                    draggable: true
                });
                navigate('/login')

            }).catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Not Logout",
                    text: errorMessage,

                });

            });
    }
    const links = <>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/addmodel' >Add Model</NavLink></li>
        <li><NavLink to='/viewmodels'>View Models</NavLink></li>
        <li><NavLink to='/mymodel'>My model</NavLink></li>
        <li><NavLink to='/purchase'>My purchase</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }

                        </ul>
                    </div>
                    <img className='w-11 rounded-full bg-white' src={logo} alt="logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-3.5">
                    {user ?
                        <>


                            <div className="dropdown dropdown-end cursor-pointer">
                                <div tabIndex={0} role="button" className=" m-1">
                                    <img className='w-10 rounded-full ' src={user?.photoURL} alt=""
                                        referrerPolicy='no-referrer' />

                                </div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-auto p-2 shadow-sm">
                                    <li><a >{user?.displayName}</a></li>
                                    <li><a>{user?.email}</a></li>
                                    <li><Link to='/purchase' >Model Purchase page</Link></li>
                                    <li><Link to='/mymodel' >My Model page</Link></li>
                                    <li>
                                        <label className="flex cursor-pointer gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="5" />
                                                <path
                                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                            </svg>
                                            <input type="checkbox" value="synthwave" onChange={(e) => handlethem(e.target.checked)}
                                                checked={them === 'dark'}
                                                className="toggle theme-controller" />
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                            </svg>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <button onClick={handlelogout} className="btn bg-info hover:bg-sky-600 text-white ">Logout</button>

                        </>
                        :
                        <>

                            <Link to='/login' className="btn bg-info hover:bg-sky-600 text-white " >Login</Link>
                        </>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;