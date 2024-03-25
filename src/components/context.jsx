import React, { createContext, useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Create context
const DataContext = createContext()
// Create context provider
export const DataProvider = ({ children }) => {
    const accessToken = localStorage.getItem('accessToken')
    const navigate = useNavigate()
    const [profile, setProfile] = useState(null)
    const [userInput, setUserInput] = useState(null)
    const [specificInput, setSpecificInput] = useState(null)
    const [userRequirements, setUserRequirements] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // Function to fetch data
    const fetchProfile = async (url) => {
        setLoading(true)
        try {
            const response = await axios.get(url, {
                headers: {
                    'x-access-tokens': `${accessToken}`,
                },
            })
            localStorage.setItem('fullName', response.data.full_name)
            setProfile(response.data)
        } catch (error) {
            setError(error)
            console.error('Error fetching data:', error)
            if (error.response && error.response.status === 401) {
                navigate('/')
            }
        } finally {
            setLoading(false)
        }
    }

    const fetchUserInput = async (url) => {
        setLoading(true)
        try {
            const response = await axios.get(url, {
                headers: {
                    'x-access-tokens': `${accessToken}`,
                },
            })
            setUserInput(response.data)
            // const lastElement = response.data[response.data.length - 1]
            // localStorage.setItem('inputId', lastElement.input_id)
        } catch (error) {
            setError(error)
            console.error('Error fetching data:', error)
            if (error.response && error.response.status === 401) {
                navigate('/')
            }
        } finally {
            setLoading(false)
        }
    }

    const fetchSpecificInput = async (url) => {
        setLoading(true)
        try {
            const response = await axios.get(url, {
                headers: {
                    'x-access-tokens': `${accessToken}`,
                },
            })
            setSpecificInput(response.data)
        } catch (error) {
            setError(error)
            console.error('Error fetching data:', error)
            if (error.response && error.response.status === 401) {
                navigate('/')
            }
        } finally {
            setLoading(false)
        }
    }

    const fetchUserRequirements = async (url) => {
        setLoading(true)
        try {
            const response = await axios.get(url, {
                headers: {
                    'x-access-tokens': `${accessToken}`,
                },
            })
            setUserRequirements(response.data)
        } catch (error) {
            setError(error)
            console.error('Error fetching data:', error)
            if (error.response && error.response.status === 401) {
                navigate('/')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <DataContext.Provider
            value={{
                profile,
                userInput,
                specificInput,
                userRequirements,
                loading,
                error,
                fetchProfile,
                fetchUserInput,
                fetchSpecificInput,
                fetchUserRequirements,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

// Custom hook to consume context
export const useData = () => {
    return useContext(DataContext)
}
