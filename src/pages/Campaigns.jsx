import { useState } from 'react'
import { categories } from '../data/categories'

const Campaigns = () => {
    const [selectFile, setselectFile] = useState('Browse File')
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSelectCategory = (e) => {
        ;
    };

    return (
        <div>
            <div>
                <h1 className='text-center text-[1.8rem] my-[1rem] font-bold'>Create Campaigns</h1>
                <div className='text-center w-[60%] m-[auto] mt-[9rem]'>
                    <input type='text' placeholder='Campaign Title' className='bg-[none] outline-none px-[1rem] mb-[2.3rem] py-[0.7rem] w-[90%] border-[1px] m-[auto] rounded-[2rem] border-[lightgray]' />
                    <input type='text' placeholder='Campaign goal' className='bg-[none] outline-none px-[1rem] mb-[2.3rem] py-[0.7rem] w-[90%] border-[1px] m-[auto] rounded-[2rem] border-[lightgray]' />
                    <input type='number' placeholder='Campaign amount goal in &#8358;' className='bg-[none] outline-none px-[1rem] mb-[2.3rem] py-[0.7rem] w-[90%] border-[1px] m-[auto] rounded-[2rem] border-[lightgray]' />
                    <textarea type='text' placeholder='Campaign Description' className='bg-[none] h-[10rem] resize-none outline-none px-[1rem] mb-[2.3rem] py-[0.7rem] w-[90%] border-[1px] m-[auto] rounded-[1rem] border-[lightgray]' />
                    <div className='pb-[2rem] w-[90%] m-[auto] border-3 border-dashed border-[lightgray] rounded-[1rem] text-center py-[1.3rem] mb-[2.3rem]'>
                        <p className='mb-[1.3rem] font-bold'>Choose an image(s) to upload</p>
                        <p className='mb-[1.3rem] text-[#908e8e]'>JPG, JPEG, PNG, GIF, BMP, WEBP, SVG, TIFF, ICO, HEIC, AVIF</p>
                        <div id="fileupload " >
                            <label className="border border-[#DCDADA] px-8 py-2 rounded-[0.4rem] cursor-pointer bg-[#fcf8f8]">
                                <span >{selectFile}</span>
                                <input className='opacity-0 w-4 cursor-pointer' id="file" type="file" accept='image/*' onChange={(e) => setselectFile(`${e.target.files.length} files selected`)} multiple name="images[]" />
                            </label>
                        </div>
                    </div>
                    <div className='w-[90%] m-[auto] border-[1px] border-[lightgray] rounded-[1rem] py-[1.3rem] px-[1rem] mb-[2.3rem]'>
                        <h3 className='font-bold mb-[1rem]'>Campaign fundraising period</h3>
                        <div className='flex items-center justify-around'>
                            <div className='text-start '>
                                <p className=' text-[#6d6969]'>start date</p>
                                <input className='cursor-pointer outline-none' type="date" name="" id="" />
                            </div>
                            <div className='text-start '>
                                <p className='text-[#6d6969]'>end date</p>
                                <input className='cursor-pointer outline-none' type="date" name="" id="" />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[none] outline-none px-[1rem] mb-[2.3rem] py-[0.7rem] w-[90%] border-[1px] m-[auto] rounded-[2rem] border-[lightgray]'>
                        <select id="category" className='outline-none w-[100%]' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="">Select Campaign category</option>
                            {categories.map((item) => (
                                <option key={item.toLowerCase()} value={item.toLowerCase()}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className='mb-[9rem] cursor pointer w-[90%] bg-[blue] text-white rounded-[2rem] py-[0.5rem] text-[1.2rem] cursor-pointer'>Publish Campaign</button>
                </div>
            </div>
        </div>
    )
}

export default Campaigns