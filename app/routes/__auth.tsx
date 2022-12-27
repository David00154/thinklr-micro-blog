import { Outlet } from '@remix-run/react'
import React from 'react'

const __auth = () => {
    return (
        <>
            <h1>Auth Layout</h1>
            <Outlet />
        </>
    )
}

export default __auth