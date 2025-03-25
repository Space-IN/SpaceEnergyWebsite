import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Header = ({value}) => {

    const [selectedOption, setSelectedOption] = useState('Home');
    const { option } = value;
    const navigate = useNavigate();

    return (
        <div className='bg-[#f5f5f5] justify-between shadow-black/20 shadow-lg fixed z-4 h-30 w-full flex items-center px-15'>
            <div className='flex items-center gap-9'>
                <img src='/SES_LOGO.png' className='h-19' />
                <h1 className='text-[40px] text-gray-600' style={{ fontFamily: 'Roboto Condensed', fontWeight: 800 }}>Space Energy Systems</h1>
            </div>
            <div>
                <ul className='flex gap-1'>
                    <li
                        onClick={() => navigate('/')}
                        className={`px-5 py-3 rounded cursor-pointer hover:bg-gray-400 shadow-lg shadow-black/20 border border-gray-400 ${option === 'Home' ? 'bg-gray-600 text-white' : 'bg-[#4a7ac585] text-gray-700'}`}
                        style={{ fontFamily: 'Roboto Condensed' }}
                    >Home</li>
                    <li
                        onClick={() => navigate('/aerospace')}
                        className={`px-5 py-3 rounded cursor-pointer hover:bg-gray-400 shadow-lg shadow-black/20 border border-gray-400 ${option === 'Aerospace' ? 'bg-gray-600 text-white' : 'bg-[#4a7ac585] text-gray-700'}`}
                        style={{ fontFamily: 'Roboto Condensed' }}
                    >Aerospace</li>
                    <li
                        onClick={() => navigate('/transportation')}
                        className={`px-5 py-3 rounded cursor-pointer hover:bg-gray-400 shadow-lg shadow-black/20 border border-gray-400 ${option === 'Transportation' ? 'bg-gray-600 text-white' : 'bg-[#4a7ac585] text-gray-700'}`}
                        style={{ fontFamily: 'Roboto Condensed' }}
                    >Transportation</li>
                </ul>
            </div>
        </div>
    )
}

export default Header