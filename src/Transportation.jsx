import React from 'react'
import Header from './components/Header'

const Transportation = () => {
    return (
        <>
            <div className='flex bg-white text-black font-bold w-screen h-full flex-col overflow-y-auto'>
                <Header value={{ option: 'Transportation' }} />
                <div className='flex items-center text-center justify-between mt-30 w-screen h-240' style={{ fontFamily: "Roboto Condensed" }}>
                    <div className='flex flex-col items-center justify-center gap-5 bg-gradient-to-tr from-indigo-400 via-indigo-300 to-blue-100 h-full w-[50%]'>
                        <h1 className='text-[45px] font-bold text-gray-800' style={{ fontFamily: "Roboto Condensed" }}>Transportation</h1>
                        <p className='text-lg text-gray-800 w-[50%] text-center' style={{ fontWeight: 400, fontFamily: 'Roboto Condensed' }}>
                            Space Energy Systems is committed to green energy, especially for Electric Vehicle (EV) applications. SES offers niche products for EV and digital services for EV maintenance.
                        </p>
                    </div>
                    <img src='/transportation.jpg' className='h-full w-[50%] object-cover' />
                </div>
            </div>
            <div
                className="flex flex-col items-center text-center w-full p-10 bg-gradient-to-tr from-indigo-400 via-indigo-300 to-blue-100"
                style={{ fontFamily: "Roboto Condensed" }}
            >
                <p className="text-lg text-gray-800 w-full max-w-3xl font-normal px-4 md:px-0 mb-6">
                    At Space Energy Systems (SES), we specialize in cutting-edge Battery Management Systems (BMS) for electric vehicles. Our advanced BMS solutions optimize battery performance, enhance safety, and extend battery life, ensuring reliable and efficient energy management for modern EVs.
                </p>
                <div className="w-350">
                    <img
                        src="/bms.png"
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                        alt="BMS"
                    />
                </div>
            </div>
        </>
    )
}

export default Transportation