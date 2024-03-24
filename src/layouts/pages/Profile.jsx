import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import profilePhoto from '../../assets/Rectangle 218.png'
import { userEndpoint } from '../../App'
import { jwtDecode } from 'jwt-decode'
import { useData } from '../../components/context'

const Profile = () => {
    // let card = `rounded border p-8 shadow-sm bg-white`
    let button = `bg-[#007FE0] h-14 text-white lg:w-1/4 rounded-lg my-4`
    let input = `w-full h-14 border border-gray-200 px-5 rounded-lg mt-2`
    let accessToken = localStorage.getItem('accessToken')
    const { profile, fetchProfile } = useData()
    const decodedToken = jwtDecode(accessToken)
    const userId = decodedToken.user_id

    useEffect(() => {
        fetchProfile(userEndpoint + `/${userId}`)
    }, [])

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
                            placeholder={profile?.full_name}
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
                            placeholder={profile?.email_address}
                        />
                    </div>

                    <div className="">
                        <label htmlFor="role" className="">
                            Role
                        </label>{' '}
                        <br />
                        <input
                            type="role"
                            className={input}
                            name="rolee"
                            placeholder={profile?.role}
                        />
                    </div>

                    {/* <div className="">
                        <label htmlFor="password" className="">
                            Password
                        </label>{' '}
                        <br />
                        <input
                            type="password"
                            className={input}
                            name="password"
                            placeholder={profile?.password}
                        />
                    </div> */}

                    <button className={button}>Save</button>
                </form>
            </Layout>
        </>
    )
}

export default Profile
