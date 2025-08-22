import React from 'react'

const Header = ({ setmobile, mobile }) => {

    return (
        <header className='w-[fit-content] hidden max-[883px]:block'>
            <div></div>
            <div className='' onClick={() => setmobile(true)}>menu</div>
        </header>
    )
}

export default Header