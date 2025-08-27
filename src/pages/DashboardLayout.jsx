import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { SideBar, Header } from '../AllFiles'

const DashboardLayout = () => {
    const [mobile, setmobile] = useState(false)
    const navigate = useNavigate()

    // useEffect(async () => {
    //     // if (username === '') navigate('/')
    // }, [])
    return (
        <div className='layoutContainer'>
            <div className='flex'>
                <div className={mobile ? "max-[883px]:absolute max-[883px]:left-0 max-[883px]:h-screen max-[883px]:transition max-[883px]:duration-1000 max-[883px]:w-full" : "w-[18vw] max-[1279px]:w-[22vw] max-[883px]:w-screen max-[883px]:absolute max-[883px]:left-[-100%] max-[883px]:transition max-[883px]:duration-1000 max-[883px]:border-t-2 max-[883px]:border-t-white max-[883px]:h-screen"}>
                    <SideBar setmobile={setmobile} mobile={mobile} />
                </div>
                <div className='h-[100vh] overflow-y-auto w-[82vw] m-[auto] max-[1279px]:w-[78vw] max-[883px]:w-[100%]'>
                    <Header setmobile={setmobile} mobile={mobile} />
                    <Outlet setmobile={setmobile} mobile={mobile} />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout