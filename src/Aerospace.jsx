import React from 'react'
import Header from './components/Header'

const Aerospace = () => {
    return (
        <>
            <div className='flex bg-white text-black font-bold w-screen h-full flex-col overflow-y-auto'>
                <Header value={{ option: 'Aerospace' }} />
                <div className='flex flex-col sm:flex-row items-center text-center justify-between mt-20 sm:mt-30 w-screen h-240' style={{ fontFamily: "Roboto Condensed" }}>
                    <div className='flex flex-col items-center justify-center gap-5 bg-gradient-to-tr from-indigo-400 via-indigo-300 to-blue-100 h-full w-full sm:w-[50%] py-10 sm:py-0'>
                        <h1 className='text-4xl font-bold text-gray-800' style={{ fontFamily: "Roboto Condensed" }}>Aerospace</h1>
                        <p className='text-lg text-justify text-gray-800 max-w-sm w-[80%]' style={{ fontWeight: 400, fontFamily: 'Roboto Condensed' }}>
                            Space Energy Systems is a startup in innovation technology for aerospace applications. We are committed to providing our customers with the most advanced software and subsystem solutions for their space and aero applications. Our portfolio is tailored to their end goals, and includes options for sensors, actuators, control, communications, energy, and mission operations.

                            Our team of engineers and professionals are dedicated to staying up-to-date on the latest innovations and developments in the aerospace industry, and we are always striving to provide the best possible solutions to our customers. At Space Energy Systems, we are committed to helping our customers reach their dreams of space exploration.                    </p>
                    </div>
                    {/* <img src='/aerospace.jpg' className='h-full w-[50%] object-cover' /> */}
                    <img src='/nano_full.jpg' className='h-full sm:w-[60%] sm-object-cover' />
                </div>
                <div
                    className="flex flex-col items-center text-center w-full p-10 bg-gradient-to-tr from-indigo-400 via-indigo-300 to-blue-100"
                    style={{ fontFamily: "Roboto Condensed" }}
                >
                    <p className="text-lg text-justify text-gray-800 w-full max-w-3xl font-normal px-4 md:px-0 mb-6">
                        At Space Energy Systems (SES), we design and develop cutting-edge nano-satellite solutions tailored for modern space missions. Our modular Satellite Kit (SK) empowers researchers, institutions, and commercial entities to build their own satellites with specifications that match their unique mission objectives.                </p>
                    <div className="w-full sm:w-350">
                        <img
                            src="/aerospace.jpg"
                            className="w-full h-auto object-contain rounded-lg shadow-lg"
                            alt="Nano satellite"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aerospace