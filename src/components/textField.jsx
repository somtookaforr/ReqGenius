import React from 'react'
import { IoSend } from 'react-icons/io5'

const TextField = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 mt-20 mb-5">
                <input
                    type="text"
                    placeholder="ReqGenius will automatically generate requirements."
                    className="border rounded-xl h-16 w-full px-4 col-span-11"
                />
                <button className="col-span-1 rounded-xl bg-[#5D9ADA]">
                    <IoSend className="text-white mx-auto" size={25} />
                </button>
            </div>
            <p className="text-center my-5">
                All you have to do is just type a couple of words and ReqGenius
                will handle the rest.
            </p>
        </>
    )
}

export default TextField
