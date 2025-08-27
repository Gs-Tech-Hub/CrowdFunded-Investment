import { useState } from 'react'
import { adminTableBody } from '../data/admin'
import { Link } from 'react-router-dom'
import { AdminCard, PopUpMessageWithAutoCancel } from '../AllFiles'
import { cancelPopUP, displayPopUpMessage } from '../helper function/pop up'



const Admin = () => {
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('campaign successfully deleted')
    const [popUpType, setpopUpType] = useState('error')
    const deleteCampaign = () => {
        setdisplayPopUp(true)
        cancelPopUP(setdisplayPopUp, 1000)
    }
    const saveCampaign = () => {
        displayPopUpMessage('campaign update successfully saved', setpopUpMsg, setpopUpType, setdisplayPopUp, true)
        cancelPopUP(setdisplayPopUp, 1000)
    }

    return (
        <div className='m-[auto] w-[90%] pt-[2rem]'>
            <h1>Admin</h1>
            <div className=' flex items-center mb-[1.8rem] justify-center'>
                <div className=' flex items-center border-[1px] rounded-[2rem]  border-[grey] w-[24rem]'>
                    <input type="search" placeholder='Search Campaign Name' className='bg-[none] outline-none pl-[0.7rem] py-[0.4rem] w-[85%]  m-[auto] ' />
                    <button className='cursor-pointer bg-[blue] text-white rounded-r-[2rem] py-[0.4rem] px-[0.8rem] text-[1.1rem] '>Search</button>
                </div>
                {/* <div className='ml-[4rem]'>
                    <select name="" id="">
                        <option value=""> filter by</option>
                    </select>
                </div> */}
            </div>
            <AdminCard adminTableBody={adminTableBody} deleteCampaign={deleteCampaign} saveCampaign={saveCampaign} />
            <PopUpMessageWithAutoCancel popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />




        </div>
    )
}

export default Admin