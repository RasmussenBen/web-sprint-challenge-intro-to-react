// Write your Character component here
import React, { useState, useEffect } from 'react'
import { BASE_URL } from './constants'
import axios from 'axios'

export default function Details(props) {
    const { characterId, close } = props
    const [details, setDetails] = useState(null)

    useEffect(() => {
        axios.get(`${BASE_URL}`)
            .then(res => { setDetails(res.data)})
            .catch(err => console.log('Error: failed to retrieve', err))
    }, [characterId])

    return (
        <div className='container'>
            <h2></h2>
        </div>
    )
}