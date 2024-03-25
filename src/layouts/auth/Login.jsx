import React, { useState } from 'react'
import '../../styles/auth.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { userEndpoint } from '../../App'
import axios from 'axios'

const Login = () => {
    let input = `w-full h-14 border border-gray-200 px-5 rounded-lg mt-2`

    const [formData, setFormData] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const customId = 99999

        try {
            toast.loading('Loading...', { autoClose: false })
            const response = await axios.post(
                userEndpoint + '/signin',
                formData
            )
            toast.dismiss()
            toast.success('Success!', {
                toastId: customId,
            })
            localStorage.setItem('accessToken', response.data.token)
            navigate('/dashboard', { replace: true })
        } catch (error) {
            toast.dismiss()
            console.error(
                'There was a problem with the request:',
                error.message
            )
            toast.error(error.response.data, {
                toastId: customId,
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <ToastContainer autoClose={4000} />
            <div className="auth grid py-10 lg:content-center">
                <h1 className="logo mb-8">ReqGenius.</h1>
                <form
                    action=""
                    className="grid gap-y-8 w-[32.9375rem] mx-8 p-10 rounded-2xl shadow-lg justify-self-center"
                    onSubmit={handleSubmit}
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-medium">Get Started</h2>
                        <p>Login to continue</p>
                    </div>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            name="email_address"
                            placeholder="example@gmail.com"
                            className={input}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className={input}
                            required
                            onChange={handleChange}
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
        </>
    )
}

export default Login
