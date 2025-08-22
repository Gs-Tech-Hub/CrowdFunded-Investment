import React from 'react'
import { useParams } from 'react-router-dom'
const Campaign = () => {
    const data = useParams()
    const { id } = data
    console.log(id)

    return (
        <div>
            <div className='w-[95%] m-[auto]'>
                <div className='w-[100%] m-[auto] h-[35rem] mt-[3rem] mb-[2rem]'><img className='rounded-[1rem] h-[100%] w-[100%]' src='/image/pexels-pixabay-416405.jpg' alt="" /></div>
                <div className='flex items-start justify-between mb-[1.3rem]'>
                    <h2 className='font-bold text-[1.4rem]'>An AI aided alternative to figma</h2>
                    <button className='cursor pointer bg-[blue] text-white rounded-[0.5rem] py-[0.38rem] px-[2.8rem] text-[1.2rem] cursor-pointer'>Invest</button>

                </div>
                <p>long long text lorem45 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eum tenetur necessitatibus at ut mollitia voluptatum minima excepturi iste obcaecati cum corporis doloremque quia, maiores id quod illo nemo enim assumenda ipsam iure? Aut, ex voluptate fugiat ullam deserunt eum veniam commodi obcaecati.</p>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Campaign goal</h3>
                    <p>To raise funding for An AI aided creative software</p>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Campaign Status</h3>
                    <p>Active</p>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Campaign Amount goal</h3>
                    <p>&#8358;50,000,000 </p>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Amount raised</h3>
                    <p>&#8358;0.00 </p>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Campaign fundraising period</h3>
                    <div className='flex items-center'>
                        <div>20/08/2025 -</div>
                        <div>12/02/2026</div>
                    </div>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Campaign category</h3>
                    <p>Software</p>
                </div>

            </div>
        </div>
    )
}

export default Campaign