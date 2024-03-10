import React from 'react'
import Layout from '../../components/layout'
import TextField from '../../components/textField'
import profilePhoto from '../../assets/Group 66.svg'
import copyBtn from '../../assets/Copy.svg'
import likeBtn from '../../assets/Facebook Like.svg'
import dislikeBtn from '../../assets/Facebook Like (1).svg'

const Dashboard = () => {
    const screen = localStorage.getItem('screen')

    return (
        <Layout>
            <h1 className="logo mb-20 text-center">ReqGenius.</h1>
            {screen === true ? (
                <div className="grid gap-y-12">
                    <div className="lg:w-1/2 border border-gray-400 rounded-2xl p-6 justify-self-start">
                        <p className="text-[#5D9ADA] text-2xl font-semibold">
                            PRECISION AND CLARITY:{' '}
                        </p>
                        <p>
                            No more ambiguity! ReqGenius ensures that your
                            requirements are crystal clear, leaving no room for
                            misinterpretation or confusion during the
                            development process.
                        </p>
                    </div>

                    <div className="lg:w-1/2 border border-gray-400 rounded-2xl p-6 justify-self-end">
                        <p className="text-[#5D9ADA] text-2xl font-semibold">
                            EFFORTLESS IDEATION:{' '}
                        </p>
                        <p>
                            Express your software ideas naturally, just as you
                            imagine them, and watch ReqGenius seamlessly convert
                            your language into comprehensive functional
                            requirements.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="grid gap-y-4">
                    <div className="grid grid-cols-12 gap-x-4">
                        <div></div>
                        <input
                            type="text"
                            className="border rounded-xl h-16 w-full px-4 col-span-10"
                            placeholder="Generate requirements for an auto company software"
                            disabled
                        />
                        <div className="h-12 w-12 rounded-full bg-gray-300 col-span-1 self-center"></div>
                    </div>

                    <div className="grid grid-cols-12 gap-x-4">
                        <img src={profilePhoto} alt="" className="col-span-1" />
                        <div className="bg-[#CEE1F44D] rounded-2xl p-6 col-span-10">
                            <p className="#989898">
                                blah blah blah blah blah blah blah blah blah
                                blah blah blah blah blah blah blah blah blah
                                blah blah blah blah blah blah blah blah blah
                                blah blah blah blah blah blah blah blah blah
                                blah blah blah blah blah blah blah blah blah
                                blah blah blah blah blah blah blah blah blah
                                blah blah blah blah blah blah blah blah blah
                                blah blah blah blah blah blah blah blah blah
                                blah blah blah blah blah blah blah blah blah
                                blah blah blah
                            </p>
                        </div>
                        <div className="col-span-1 h-min shadow-md rounded-3xl grid gap-4 p-2 w-max items-center">
                            <button>
                                <img src={copyBtn} alt="" />
                            </button>
                            <button>
                                <img src={likeBtn} alt="" />
                            </button>
                            <button>
                                <img src={dislikeBtn} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <TextField />
        </Layout>
    )
}

export default Dashboard
