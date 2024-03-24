import React, { useState } from 'react'
import { IoSend } from 'react-icons/io5'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { accessToken } from '../App'

const TextField = () => {
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
            const response = await axios.post(
                `https://finalyearproject-n1q1.onrender.com/api/input`,
                formData,
                {
                    headers: {
                        'x-access-tokens': `${accessToken}`,
                    },
                }
            )
            toast.success(response.data.message, {
                toastId: customId,
            })
        } catch (error) {
            console.error(
                'There was a problem with the request:',
                error.message
            )
            toast.error(error.response.data.message, {
                toastId: customId,
            })
        }
    }

    return (
        <>
            <ToastContainer autoClose={4000} />
            <form className="bottom-0 mt-40" onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 gap-2 lg:gap-4 mb-5">
                    <input
                        type="text"
                        name="input"
                        placeholder="ReqGenius will automatically generate requirements."
                        className="border rounded-xl h-16 w-full px-4 col-span-10 lg:col-span-11"
                        onChange={handleChange}
                    />
                    <button
                        className="col-span-2 lg:col-span-1 rounded-xl bg-[#5D9ADA]"
                        type="submit"
                    >
                        <IoSend className="text-white mx-auto" size={25} />
                    </button>
                </div>
                <p className="text-center my-5">
                    All you have to do is just type a couple of words and
                    ReqGenius will handle the rest.
                </p>
            </form>
        </>
    )
}

export default TextField
