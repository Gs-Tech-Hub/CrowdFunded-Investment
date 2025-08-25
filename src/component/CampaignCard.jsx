import LinesEllipsis from 'react-lines-ellipsis'
import { Link, useParams } from 'react-router-dom'

const CampaignCard = ({ allcampaigns }) => {
    return (
        <div>
            <div className='flex items-center justify-center flex-wrap'>
                {
                    allcampaigns.map(item => {
                        return <div key={item.id} className='w-[28%] mx-[1.5%] my-[2.5rem] border-[1px] m-[auto] rounded-[1rem] border-[lightgray] p-[0.8rem]'>
                            <div className='w-[100%] m-[auto] h-[15rem]'><img className='rounded-[1rem] h-[100%] w-[100%]' src={item.img} alt="" /></div>
                            <div className='px-[0.6rem]'>
                                <h3 className='font-bold text-[1.1rem]'>
                                    {/* {item.title} */}
                                    <LinesEllipsis
                                        text={item.title}
                                        maxLine='1'
                                        ellipsis='...'
                                        trimRight
                                        basedOn='letters'
                                    />
                                </h3>
                                <LinesEllipsis
                                    text={item.description}
                                    maxLine='1'
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters'
                                />
                                <div className='flex items-center'>
                                    <p className='font-bold'>Status: </p>
                                    <p className='ml-[0.3rem]'>Active</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className=' text-end cursor-pointer text-[blue]'>Share </p>
                                    <p className='text-end cursor-pointer text-[blue]'><Link to={`/DashBoard/Campaign/${item.id}`}>View Campaign</Link></p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CampaignCard