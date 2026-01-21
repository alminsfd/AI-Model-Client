import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import Navbar from '../components/Navbar';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

const Registration = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from=location.state?.from || '/'
    const { register, setUser, GooglesignIN, Userpadate } = useAuth()
    const [show, setShow] = useState(true)
    const togglingeye = () => {
        setShow(!show)
    }
    const demoUser = {
        name:'Demo',
        email: "demo@user.com",
        password: "Demo123",
        photo:'https://img.icons8.com/?size=100&id=13519&format=png&color=000000',

    };
    const handleForm = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Invalid email ",
            });
            return
        }
        const password = e.target.password.value
        const uppercasePattern = /[A-Z]/;
        const lowercasePattern = /[a-z]/;
        const lengthPattern = /.{6,}/;
        if (!uppercasePattern.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Password must contain at least one uppercase letter.",
            });

            return
        }

        if (!lowercasePattern.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Password must contain at least one lowercase letter.",
            });
            return
        }

        if (!lengthPattern.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Password must be at least 6 characters long. ",
            });
            return
        }

        const photo = e.target.photo.value
        const name = e.target.name.value

        const Updatedata = {
            displayName: name,
            photoURL: photo
        }

    

        register(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                Userpadate(Updatedata)
                    .then(() => {
                        setUser({ ...Updatedata, user })
                        Swal.fire({
                            title: "Complete Registration",
                            icon: "success",
                            draggable: true
                        });
                        navigate(from)

                    }).catch((error) => {
                        const errorMessage = error.message;
                        Swal.fire({
                            icon: "error",
                            title: "Email already in use",
                            text: errorMessage,

                        });

                    });


            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Email already in use",
                    text: errorMessage,

                });
            });

        e.target.reset()

    }
    const LoginWithgoogle = () => {
        GooglesignIN()
            .then((result) => {
                const user = result.user;
                setUser(user)
                Swal.fire({
                    title: "Complete Registration",
                    icon: "success",
                    draggable: true
                });
                navigate(from)


            }).catch((error) => {

                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Invalid your gmail account",
                    text: errorMessage,

                });


            });


    }
    return (
        <div>
            <header>
                <title>ai-model-manager</title>
                <Navbar></Navbar>
            </header>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl md:text-5xl  font-bold">Register for AI Model Inventory Manager</h1>
                        <p className="py-6  text-sm md:text-base ">
                            Your AI Models Deserve Better!
                            Keep every version, dataset, and experiment beautifully organized.
                            Manage your AI journey — faster, smarter, and effortlessly.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className='text-lg md:text-3xl font-semibold text-center ' >Register Now!</h1>
                            <p className='text-center font-medium' > Have an account?<Link className='hover:underline text-cyan-500 hover:text-cyan-800' to='/login' >Login Now</Link></p>
                            <form onSubmit={handleForm} >
                                <fieldset className="fieldset">
                                    {/* name */}
                                    <label className="label">Name</label>
                                    <input id='name' type="text" className="input" placeholder="Enter your name" name='name' required />
                                    {/* photo */}
                                    <label className="label">Photo URL</label>
                                    <input id='photo' type="url" className="input" placeholder="Enter your photo url" name='photo' required />
                                    {/* email */}
                                    <label className="label">Email</label>
                                    <input id='email' type="email" className="input" placeholder="Enter your email" name='email' required />
                                    <label className="label">Password</label>
                                    <div className='relative' >
                                        <input id='password' type={show ? "password" : "text"} className="input" placeholder="Enter your password " required name='password' />

                                        <button type='button' className='  btn btn-xs absolute top-2 right-9 cursor-pointer ' onClick={togglingeye} >
                                            {
                                                show ? <FaRegEye /> : <FaEyeSlash />
                                            }
                                        </button>


                                    </div>
                                    <button className=" btn w-full bg-cyan-500 hover:bg-cyan-600 text-white ">Register</button>
                                </fieldset>
                                <p className='text-center  text-xl font-medium' >OR</p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        document.getElementById("name").value = demoUser.name;
                                        document.getElementById("email").value = demoUser.email;
                                        document.getElementById("photo").value = demoUser.photo;
                                        document.getElementById("password").value = demoUser.password;
                                    }}
                                    className="btn w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                                >
                                  demo  credential 
                                </button>
                                <button type='button' onClick={LoginWithgoogle} className="btn w-full hover:shadow hover:bg-[#e0d7d7] bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Sign up with Google
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;