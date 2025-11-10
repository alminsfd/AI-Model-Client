import React from 'react';
import Navbar from '../components/Navbar';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'
    const { login, setUser, GooglesignIN } = useAuth()
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
        login(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user)
                Swal.fire({
                    title: "Successfully login",
                    icon: "success",
                    draggable: true
                });
                navigate(from,{replace:true})

            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Invalid email or password",
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
                    title: "Successfully login",
                    icon: "success",
                    draggable: true
                });
                 navigate(from,{replace:true})

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
                <title>ai-model-manager-login</title>
                <Navbar></Navbar>
            </header>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="  text-2xl md:text-5xl font-bold" >Login to AI Model Inventory Manager</h1>
                        <p className="py-6 text-sm md:text-base ">
                            Empower Your AI Workflow
                            Store, manage, and collaborate on your AI models with ease.
                            Let your ideas turn into intelligent solutions.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className=' text-lg md:text-3xl font-semibold text-center ' >Login Now!</h1>
                            <p className='text-center font-medium' >Don't have an account?<Link state={{from}} className='hover:underline text-cyan-500 hover:text-cyan-800' to='/register' >Register Now</Link></p>
                            <form onSubmit={handleForm} >
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Enter your email" name='email' required />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Enter your password " required name='password' />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn simple-btn ">Login</button>
                                </fieldset>
                                <p className='text-center  text-xl font-medium' >OR</p>
                                <button type='button' onClick={LoginWithgoogle} className="btn w-full hover:shadow hover:bg-[#e0d7d7] bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;