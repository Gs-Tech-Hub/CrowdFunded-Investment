import React, { useState } from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import { allcampaigns } from '../data/campaigns'
import { CampaignCard } from '../AllFiles'
import { Link, useParams } from 'react-router-dom'


const AllCampaigns = () => {
    const [campaigns, setcampaigns] = useState(allcampaigns)
    return (
        <div>
            <h1 className='text-center text-[1.8rem] my-[1rem] font-bold'>Explore Campaigns</h1>
            <CampaignCard allcampaigns={allcampaigns} />
        </div>
    )
}

export default AllCampaigns