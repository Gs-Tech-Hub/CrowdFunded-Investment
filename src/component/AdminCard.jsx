import { useState } from 'react'
import { Link } from 'react-router-dom'
import { adminTableHeader } from '../data/admin'
import { ConfirmationModal } from '../AllFiles'
import LinesEllipsis from 'react-lines-ellipsis'

const AdminCard = ({ adminTableBody, deleteCampaign, saveCampaign }) => {
    const [adminData, setadminData] = useState(adminTableBody)
    return (
        <div className='adminCard w-[100%] overflow-x-auto'>
            <table className='m-[auto]'>
                <thead>
                    {
                        adminTableHeader?.map(item => {
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
                                {/* <td>{item.CampaignName}</td> */}
                                <td>
                                    <LinesEllipsis
                                        text={item.CampaignName}
                                        maxLine='1'
                                        ellipsis='..'
                                        trimRight
                                        basedOn='letters'
                                    />
                                </td>
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
                                <td><button><Link to={`/DashBoard/Campaign/${item.id}`}>view</Link></button></td>
                                <td><ConfirmationModal deleteCampaign={deleteCampaign} /></td>
                                <td><button onClick={saveCampaign}>save</button></td>
                            </tr>
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default AdminCard