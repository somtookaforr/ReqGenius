import React from 'react'
import { IoSend } from 'react-icons/io5'

const TextField = () => {
    return (
        <div className="bottom-0 mt-40">
            <div className="grid grid-cols-12 gap-2 lg:gap-4 mb-5">
                <input
                    type="text"
                    placeholder="ReqGenius will automatically generate requirements."
                    className="border rounded-xl h-16 w-full px-4 col-span-10 lg:col-span-11"
                />
                <button
                    className="col-span-2 lg:col-span-1 rounded-xl bg-[#5D9ADA]"
                    onClick={() => localStorage.setItem('screen', true)}
                >
                    <IoSend className="text-white mx-auto" size={25} />
                </button>
            </div>
            <p className="text-center my-5">
                All you have to do is just type a couple of words and ReqGenius
                will handle the rest.
            </p>
        </div>
    )
}

export default TextField
