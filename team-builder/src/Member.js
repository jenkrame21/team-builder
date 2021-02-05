import React from 'react'

export default function Member(props) {
    const { details } = props;

    if (!details) {
        return <h3>Working on getting your fellow member&apos;s details...Please wait.</h3>
    }

    return (
        <div className = 'member container'>
            <h2>{details.firstName}{details.lastName}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
            <p>Unit: {details.unit}</p>
        </div>
    )
}