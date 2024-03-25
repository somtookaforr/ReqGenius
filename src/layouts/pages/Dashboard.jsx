import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import TextField from '../../components/textField'
import profilePhoto from '../../assets/Group 66.svg'
import copyBtn from '../../assets/Copy.svg'
import likeBtn from '../../assets/Facebook Like.svg'
import dislikeBtn from '../../assets/Facebook Like (1).svg'
import Spinner from '../../components/spinner'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { accessToken } from '../../App'
import { useParams, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { FaCheck, FaTrashCan, FaPowerOff } from 'react-icons/fa6'
import { adminEndpoint, userEndpoint } from '../../App'
import { useData } from '../../components/context'

const Dashboard = () => {
    const [updateInputData, setUpdateInputData] = useState('')
    const { specificInput, fetchSpecificInput } = useData()
    const { userInput, fetchUserInput } = useData()
    const [requirements, setRequirements] = useState('')
    const [adminRequirements, setAdminRequirements] = useState('')
    const updateStatusInput = {
        status: 'approved',
    }
    const [loading, setLoading] = useState(true)
    const { profile, fetchProfile } = useData()
    const decodedToken = jwtDecode(accessToken)
    const userId = decodedToken.user_id
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchSpecificInput(userEndpoint + `/inputs/${id}`)
    }, [id])

    useEffect(() => {
        fetchUserInput(userEndpoint + `/inputs`)
    }, [])

    const handleUpdateUserInputsChange = (e) => {
        setUpdateInputData({
            ...updateInputData,
            [e.target.name]: e.target.value,
        })
    }

    const handleUpdateUserInputsSubmit = async (e) => {
        e.preventDefault()
        const customId = 99999

        try {
            const response = await axios.put(
                userEndpoint + `/inputs/${id}`,
                updateInputData,
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

    const handleRequirementChange = (e) => {
        setAdminRequirements(e.target.value)
    }

    const handleRequirementSubmit = async (e) => {
        e.preventDefault()
        const customId = 99999

        try {
            const response = await axios.put(
                adminEndpoint + `/requirements/${id}`,
                { requirement: adminRequirements },
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
            console.error('There was a problem with the request:', error)
            toast.error(error.response.data.message, {
                toastId: customId,
            })
        }
    }

    const handleUpdateStatus = async (e) => {
        e.preventDefault()
        const customId = 99999

        try {
            const response = await axios.put(
                adminEndpoint + `/requirements/${id}/status`,
                updateStatusInput,
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

    const handleDeleteRequirement = async (e) => {
        e.preventDefault()
        const customId = 99999

        try {
            const response = await axios.delete(
                adminEndpoint + `/requirements/${id}`,
                {
                    headers: {
                        'x-access-tokens': `${accessToken}`,
                    },
                }
            )
            toast.success(response.data.message, {
                toastId: customId,
            })
            navigate('/dashboard', window.location.reload())
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

    useEffect(() => {
        setLoading(true)

        axios
            .post(
                userEndpoint + `/inputs/${id}/requirements`,
                updateInputData,
                {
                    headers: {
                        'x-access-tokens': `${accessToken}`,
                    },
                }
            )
            .then((response) => {
                setRequirements(response.data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
                // if (error.response && error.response.status === 401) {
                //     navigate('/')
                // }
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    useEffect(() => {
        setLoading(true)

        axios
            .get(adminEndpoint + `/requirements/${id}`, {
                headers: {
                    'x-access-tokens': `${accessToken}`,
                },
            })
            .then((response) => {
                setAdminRequirements(response.data.requirement)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
                // if (error.response && error.response.status === 401) {
                //     navigate('/')
                // }
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    useEffect(() => {
        fetchProfile(userEndpoint + `/${userId}`)
    }, [])

    useEffect(() => {
        if (userInput?.length === undefined && loading === false) {
            window.location.reload()
        }
    }, [1])

    return (
        <Layout>
            <ToastContainer autoClose={4000} />
            {loading ? (
                <div className="grid mt-40">
                    <div className="place-self-center">
                        <Spinner />
                    </div>
                </div>
            ) : (
                <>
                    <h1 className="logo mb-20 text-center">ReqGenius.</h1>
                    {window.location.pathname ===
                    ('/dashboard' || '/dashboard/') ? (
                        <div className="grid gap-y-12">
                            <div className="lg:w-1/2 border border-gray-400 rounded-2xl p-6 justify-self-start">
                                <p className="text-[#5D9ADA] text-2xl font-semibold">
                                    PRECISION AND CLARITY:{' '}
                                </p>
                                <p>
                                    No more ambiguity! ReqGenius ensures that
                                    your requirements are crystal clear, leaving
                                    no room for misinterpretation or confusion
                                    during the development process.
                                </p>
                            </div>

                            <div className="lg:w-1/2 border border-gray-400 rounded-2xl p-6 justify-self-end">
                                <p className="text-[#5D9ADA] text-2xl font-semibold">
                                    EFFORTLESS IDEATION:{' '}
                                </p>
                                <p>
                                    Express your software ideas naturally, just
                                    as you imagine them, and watch ReqGenius
                                    seamlessly convert your language into
                                    comprehensive functional requirements.
                                </p>
                            </div>
                            {profile?.role === 'Stakeholder' && <TextField />}
                        </div>
                    ) : (
                        <>
                            {profile?.role === 'Stakeholder' ? (
                                <div className="grid gap-y-4">
                                    <form
                                        className="grid grid-cols-12 gap-x-4"
                                        onSubmit={handleUpdateUserInputsSubmit}
                                    >
                                        <div></div>
                                        <input
                                            name="input"
                                            placeholder={specificInput?.input}
                                            onChange={
                                                handleUpdateUserInputsChange
                                            }
                                            className="border rounded-xl h-16 w-full p-4 col-span-10"
                                        />
                                        <div className="h-12 w-12 rounded-full bg-gray-300 col-span-1 self-center"></div>
                                    </form>

                                    <div className="grid grid-cols-12 gap-x-4">
                                        <img
                                            src={profilePhoto}
                                            alt=""
                                            className="col-span-1"
                                        />
                                        <div className="bg-[#CEE1F44D] rounded-2xl p-6 col-span-10">
                                            <p className="">
                                                {requirements
                                                    ?.split('\n')
                                                    .map((part, index) => (
                                                        <span
                                                            key={index}
                                                            style={{
                                                                display:
                                                                    'block',
                                                            }}
                                                        >
                                                            {part}
                                                        </span>
                                                    ))}
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
                            ) : (
                                <form
                                    className="grid grid-cols-12 gap-x-4"
                                    onSubmit={handleRequirementSubmit}
                                >
                                    <img
                                        src={profilePhoto}
                                        alt=""
                                        className="col-span-1"
                                    />
                                    <textarea
                                        className="bg-[#CEE1F44D] rounded-2xl p-6 col-span-10"
                                        rows={25}
                                        type="text"
                                        name="requirement"
                                        value={adminRequirements}
                                        onChange={handleRequirementChange}
                                    />

                                    <div className="col-span-1 h-min shadow-md rounded-3xl grid gap-8 px-2 py-4 w-max items-center">
                                        <button
                                            onClick={handleRequirementSubmit}
                                        >
                                            <FaCheck size={22} />
                                        </button>
                                        <button onClick={handleUpdateStatus}>
                                            <FaPowerOff size={22} />
                                        </button>
                                        <button
                                            onClick={handleDeleteRequirement}
                                        >
                                            <FaTrashCan size={22} />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </>
                    )}{' '}
                </>
            )}
        </Layout>
    )
}

export default Dashboard
