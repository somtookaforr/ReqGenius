import React, { useState } from 'react'
import '../../styles/auth.css'
import { toast, ToastContainer } from 'react-toastify'
import { userEndpoint } from '../../App'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [formData, setFormData] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const customId = 99999
        try {
            toast.loading('Loading...', { autoClose: false })
            const response = await axios.post(
                userEndpoint + '/signup',
                formData
            )
            toast.dismiss()
            toast.success(
                'Account created successfully, Please proceed to login!',
                {
                    toastId: customId,
                }
            )
        } catch (error) {
            toast.dismiss()
            console.error('There was a problem with the request:', error)
            toast.error(error.response.data.message, {
                toastId: customId,
            })
        }
    }

    return (
        <>
            <ToastContainer autoClose={8000} />

            <div className="auth grid py-10 lg:my-14 lg:content-center">
                <h1 className="logo my-8">ReqGenius.</h1>
                <form
                    action=""
                    className="grid gap-y-8 w-[32.9375rem] mx-8 p-10 rounded-2xl shadow-lg justify-self-center"
                    onSubmit={handleSubmit}
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-medium">Get Started</h2>
                        <p>Create an account to continue</p>
                    </div>

                    <div>
                        <label htmlFor="name">Full name</label>
                        <input
                            type="text"
                            name="full_name"
                            placeholder="Enter your full name"
                            className="w-full h-14 border border-gray-200 px-5 rounded-lg mt-2"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            name="email_address"
                            placeholder="example@gmail.com"
                            className="w-full h-14 border border-gray-200 px-5 rounded-lg mt-2"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Role</label>
                        <select
                            name="role"
                            id=""
                            className="w-full h-14 border border-gray-200 px-5 rounded-lg mt-2"
                            required
                            onChange={handleChange}
                        >
                            <option value="">-Select-</option>
                            <option value="Requirement Engineer">
                                Requirement Engineer
                            </option>
                            <option value="Stakeholder">Stakeholder</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            minLength={8}
                            placeholder="Enter your password"
                            className="w-full h-14 border border-gray-200 px-5 rounded-lg mt-2"
                            required
                            onChange={handleChange}
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
        </>
    )
}

export default Login
