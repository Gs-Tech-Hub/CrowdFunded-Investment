import React, { useRef, useEffect, useState } from 'react'
import { SideBarData } from '../data/sidebar'
import { Link } from 'react-router-dom'

const SideBar = ({ mobile, setmobile }) => {

    let homeRef = useRef()
    let createCampaignRef = useRef()
    let exploreCampaignRef = useRef()
    let myInvestmentRef = useRef()
    let refs = [homeRef, createCampaignRef, exploreCampaignRef, myInvestmentRef]

    useEffect(() => {
        if (window.location.pathname === '/DashBoard') return
        let allSideBar = SideBarData.map((item) => window.location.pathname.split('/')[2] === item.link)
        let currentSideBarIndex = allSideBar.findIndex((item) => item === true)
        Focus(currentSideBarIndex)
    }, [])

    const Focus = (i) => {
        refs.forEach((item) => { item.current.classList.remove("active") })
        refs[i]?.current.classList.add("active")
        if (mobile) setmobile(false)
    }
    return (
        <div className='w-[100%] h-[100vh] bg-[#60d9fb] overflow-y-auto overflow-x-hidden'>
            <div className='pt-[1rem] px-[1rem] mb-[3rem] hidden max-[883px]:flex max-[883px]:justify-end' onClick={() => setmobile(false)}>cancel menu</div>
            <div>
                {
                    SideBarData.map((item, i) => {
                        return <div key={item.id} className=' border-b-[1px] border-[white] outline-none'>
                            <Link to={item.link}  >
                                <div key={item.id} onClick={(e) => { Focus(i) }} ref={refs[i]} className={i === 0 ? "active p-[0.52rem] py-[0.9rem] flex cursor-pointer items-center text-black/80 " : "p-[0.52rem] py-[0.9rem] text-[#302f2f] flex cursor-pointer items-center"} >
                                    {/* <item.imgComponent className={'img'} /> */}
                                    <h4>{item.text}</h4>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SideBar