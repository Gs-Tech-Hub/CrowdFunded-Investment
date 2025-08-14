import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGeneralContext } from '../context/GlobalContext'
const Login = () => {
    const userData = useGeneralContext()
    const [signin, setsignin] = useState(true)
    const [SMEsOnboarding, setSMEsOnboarding] = useState(true)
    const [loading, setloading] = useState(false)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const { id } = userData
    console.log(id)

    return (
        <div className='pb-[7rem]'>
            <h1 className='text-end text-[1.8rem] mr-[1rem] font-bold'>Crowd Funded Investment</h1>
            <div className='flex justify-center'>
                <div className='border-[1px] border-[lightgray] w-[26rem] mt-[9rem] pb-[2rem] rounded-[0.5rem] max-[493px]:w-[90%]'>
                    <div className='flex items-center justify-evenly mb-[3rem]'>
                        <h1 onClick={(e) => setSMEsOnboarding(!SMEsOnboarding)} className={SMEsOnboarding ? 'bg-[purple] w-[50%] py-[1rem] text-center cursor-pointer rounded-tl-[0.5rem] text-white' : 'w-[50%] py-[1rem] text-center cursor-pointer'} >SMEs</h1>
                        <h1 onClick={(e) => setSMEsOnboarding(!SMEsOnboarding)} className={!SMEsOnboarding ? 'bg-[purple] w-[50%] py-[1rem] text-center cursor-pointer rounded-tr-[0.5rem] text-white' : 'w-[50%] py-[1rem] text-center cursor-pointer'} >Investors</h1>
                    </div>
                    <div className='text-center w-[100%]'>
                        <form action="">
                            <input type='email' placeholder='email' onInput={(e) => setemail(e.target.value)} value={email} className='bg-[none] outline-none pl-[0.7rem] mb-[2.3rem] py-[0.7rem] w-[90%] border-[1px] m-[auto] rounded-md border-[#eae9e9]' />
                            <input type='password' placeholder='password' onInput={(e) => setpassword(e.target.value)} value={password} className='bg-[none] outline-none pl-[0.7rem] mb-[1.3rem] py-[0.7rem] w-[90%] border-[1px] m-[auto] rounded-md border-[#eae9e9]' />
                            {
                                signin ?
                                    <p className='text-center mb-[1.3rem] cursor-pointer' onClick={() => setsignin(false)}>Already have an account? <b className='text-[orange]'>Login</b></p>
                                    :
                                    <p className='text-center mb-[1.3rem] cursor-pointer' onClick={() => setsignin(true)}>Don't have an account? <b className='text-[orange]'>Sign up</b></p>
                            }
                            {
                                loading ?
                                    <button className='cursor pointer w-[90%] bg-[blue] text-white rounded-md py-[0.46rem] cursor-pointer'><div class="round animate-spin h-[1.85rem] w-[1.85rem] m-[auto] border-[3px] rounded-[50%]  border-x-[blue] border-t-[blue] border-[white] "></div></button>
                                    :
                                    <button className='cursor pointer w-[90%] bg-[blue] text-white rounded-md py-[0.5rem] text-[1.2rem] cursor-pointer'>{signin ? 'Create account' : 'Login'}</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
            {!signin && <p className='text-center my-[1rem] cursor-pointer' >Forgot password ? </p>}
        </div>
    )
}

export default Login