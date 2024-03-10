import React from 'react'
import '../../styles/auth.css'
import { Link } from 'react-router-dom'

const Login = () => {
    let input = `w-full h-14 border border-gray-200 px-5 rounded-lg mt-2`

    return (
        <div className="auth grid py-10 lg:content-center">
            <h1 className="logo mb-8">ReqGenius.</h1>
            <form
                action=""
                className="grid gap-y-8 w-[32.9375rem] mx-8 p-10 rounded-2xl shadow-lg justify-self-center"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-medium">Get Started</h2>
                    <p>Login to continue</p>
                </div>

                <div>
                    <label htmlFor="name">Full name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className={input}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        className={input}
                        required
                    />
                </div>

                <div className="text-center">
                    <button
                        className="bg-[#007FE0] h-14 text-white w-full rounded-lg my-4"
                        type="submit"
                    >
                        Login
                    </button>
                    <p className="text-[13px]">
                        Don't have an account?{' '}
                        <Link className="text-[#007FE0]" to={'/register'}>
                            Register
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login
