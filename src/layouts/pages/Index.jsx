import React from 'react'
import Navbar from '../../components/navbar'
import '../../styles/index.css'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <>
            <Navbar />
            <div className="">
                <section className="one text-center lg:my-14 px-9 lg:px-32">
                    <h1 className="font-semibold leading-normal text-[2.5rem] lg:text-7xl">
                        Transforming Ideas into Functional Realities
                    </h1>
                    <p className="font-medium text-2xl lg:w-1/2 mx-auto">
                        Unleash Ideas, Mold Requirements. We craft
                        functionalities from your vision.
                    </p>
                    <button className="bg-[#5D9ADA] h-14 text-white w-full lg:w-1/5 rounded-lg my-4">
                        <Link to={'/login'}>TRY NOW</Link>
                    </button>
                </section>

                <section className="two bg-[#5D9ADA] px-9 lg:px-32">
                    <h3 className="font-medium text-3xl">
                        We help you craft functional requirements
                    </h3>
                    <div className="grid mt-8 bg-white border border-gray-400 rounded-lg shadow-md">
                        <h3 className="py-4 border-b-2 text-lg border-gray-400">
                            Generate requirements easily
                        </h3>
                        <div className="grid grid-cols-2">
                            <p className="border-r-2 border-gray-400 p-4 lg:p-8 lg:h-60">
                                ReqGenius please generate requirements for a 3d
                                scanner.
                            </p>
                            <p className="p-4 lg:p-8 lg:h-60">
                                A 3D scanner must offer high accuracy and
                                resolution to capture detailed object surfaces,
                                with speed and versatility to accommodate
                                various shapes, sizes, and materials.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="font-medium px-9 lg:px-32">
                    <h3 className="text-3xl p-12">Why ReqGenuis?</h3>
                    <div className="grid gap-y-20 lg:gap-y-32">
                        <div className="grid lg:grid-cols-2 gap-y-12 gap-x-24">
                            <div className="border-2 border-gray-400 rounded-3xl w-full xl:w-[31rem] shadow-xl">
                                <div className="flex p-4 gap-x-4">
                                    <div className="self-center h-5 w-16 bg-gray-300 rounded-3xl"></div>
                                    <div className="h-8 w-44 bg-gray-300 rounded-3xl"></div>
                                </div>
                                <hr />
                                <p className="m-6 text-xl">
                                    All you have to do is just type a couple of
                                    words and ReqGenius will handle the rest.
                                </p>
                            </div>
                            <div className="text-xl">
                                <span className="text-[#5D9ADA] font-semibold text-2xl">
                                    EFFORTLESS IDEATION:{' '}
                                </span>
                                Express your software ideas naturally, just as
                                you imagine them, and watch ReqGenius seamlessly
                                convert your language into comprehensive
                                functional requirements.
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-y-12 gap-x-24">
                            <div className="text-xl order-last lg:order-none">
                                <span className="text-[#5D9ADA] font-semibold text-2xl">
                                    PRECISION AND CLARITY:{' '}
                                </span>
                                No more ambiguity! ReqGenius ensures that your
                                requirements are crystal clear, leaving no room
                                for misinterpretation or confusion during the
                                development process.
                            </div>
                            <div className="border-2 border-gray-400 rounded-3xl w-full xl:w-[31rem] shadow-xl">
                                <div className="flex p-4 gap-x-4">
                                    <div className="self-center h-5 w-16 bg-gray-300 rounded-3xl"></div>
                                    <div className="h-8 w-44 bg-gray-300 rounded-3xl"></div>
                                </div>
                                <hr />
                                <p className="m-6 text-xl">
                                    No hassle, Simplicity at its best.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Index
