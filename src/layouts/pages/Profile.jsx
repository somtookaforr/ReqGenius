import React from 'react'
import Layout from '../../components/layout'
import profilePhoto from '../../assets/Rectangle 218.png'

const Profile = () => {
    let card = `rounded border p-8 shadow-sm bg-white`
    let button = `bg-[#007FE0] h-14 text-white w-1/4 rounded-lg my-4`
    let input = `w-full h-14 border border-gray-200 px-5 rounded-lg mt-2`

    return (
        <>
            <Layout>
                <form action="" className={`py-8 grid gap-8`}>
                    <div className="justify-self-start">
                        <p className="text-2xl mb-6">Profile</p>
                        <img src={profilePhoto} alt="" />
                    </div>
                    <div className="">
                        <label htmlFor="name" className="">
                            Name
                        </label>{' '}
                        <br />
                        <input
                            type="text"
                            className={input}
                            name="name"
                            placeholder="fullname"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="email" className="">
                            Email
                        </label>{' '}
                        <br />
                        <input
                            type="email"
                            className={input}
                            name="email"
                            placeholder="email"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="password" className="">
                            Password
                        </label>{' '}
                        <br />
                        <input
                            type="password"
                            className={input}
                            name="password"
                            placeholder="password"
                        />
                    </div>

                    <button className={button}>Save</button>
                </form>
            </Layout>
        </>
    )
}

export default Profile
