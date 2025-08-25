import React from 'react'
import { adminTableBody, adminTableHeader } from '../data/admin'

const Admin = () => {
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
            <div className='adminCard'>
                <table className='m-[auto]'>
                    <thead>
                        {
                            adminTableHeader.map(item => {
                                return <tr key={item.id}>
                                    <th>{item.number}</th><th>{item.CampaignName}</th><th>{item.date}</th><th>{item.status}</th><th>{item.action}</th><th></th><th></th><th></th>
                                </tr>
                            })
                        }
                    </thead>
                    <tbody>
                        {
                            adminTableBody.map(item => {
                                return <tr key={item.id}>
                                    <td>{item.number}</td>
                                    <td>{item.CampaignName}</td>
                                    <td>{item.date}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <select name="" id="">
                                            <option value="">update status</option>
                                            <option value="pending">pending</option>
                                            <option value="active">active</option>
                                            <option value="rejected">rejected</option>
                                        </select>
                                    </td>
                                    <td><button>view</button></td>
                                    <td><button>delete</button></td>
                                    <td><button>save</button></td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>

            </div>



        </div>
    )
}

export default Admin