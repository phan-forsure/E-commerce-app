import React, { useEffect } from 'react'

export default function ScrollUp() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior:'instant'
        })
    },[])

    return (
        <></>
    )
}
