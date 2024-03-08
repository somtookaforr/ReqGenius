import React from 'react'
import '../../styles/auth.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="grid place-items-center my-10">
            <h1 className="logo mb-8">ReqGenius.</h1>
            <form
                action=""
                className="grid gap-y-8 w-[32.9375rem] p-10 rounded-2xl shadow-lg"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-medium">Get Started</h2>
                    <p>Create an account to continue</p>
                </div>

                <div>
                    <label htmlFor="name">Full name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full h-14 border border-gray-200 px-5 rounded-lg mt-2"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="w-full h-14 border border-gray-200 px-5 rounded-lg mt-2"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        minLength={8}
                        placeholder="Enter your password"
                        className="w-full h-14 border border-gray-200 px-5 rounded-lg mt-2"
                        required
                    />
                </div>

                <div className="text-center">
                    <button
                        className="bg-[#007FE0] h-14 text-white w-full rounded-lg my-4"
                        type="submit"
                    >
                        Create Account
                    </button>
                    <p className="text-[13px]">
                        Have an account?{' '}
                        <Link className="text-[#007FE0]" to={'/login'}>
                            Log in
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login
