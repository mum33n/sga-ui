'use client';
import React, {useState} from 'react'
import Homepage from "@/app/(student)/(home)/components/Homepage";
import Dashboard from "@/app/(student)/(home)/components/Dashboard";

const Home = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [signedIn, setSignedIn] = useState(true)

    return (
        <>
            { !signedIn
                ? <Homepage />
                : <Dashboard />
            }
        </>

    )
}
export default Home
