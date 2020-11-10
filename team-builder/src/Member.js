import React from 'react'

export default function Member(props) {
    const { details } = props

    if (!details) {
        return <h3>Grabbing your Member&apos;s details. Please wait...</h3>
    }

    return (
        <div className='member container'>
            <h1>{details.firstName}{details.lastName}</h1>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
            <p>Unit: {details.unit}</p>
        </div>
    )
}
