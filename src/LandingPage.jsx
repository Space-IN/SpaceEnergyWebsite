import React, { useState } from 'react'
import Header from './components/Header'
import { MdMailOutline, MdOutlineLocationOn } from 'react-icons/md';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const LandingPage = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message submitted!');
        setEmail('');
        setFirstName('');
        setLastName('');
        setMessage('');
    };

    const position = [12.985404554366152, 77.63478635249442];

    return (
        <div className='flex bg-white text-black font-bold w-screen h-full flex-col overflow-y-auto'>
            <Header value={{ option: 'Home' }} />
            <div className='flex items-center text-center justify-between mt-30 w-screen h-190' style={{ fontFamily: "Roboto Condensed" }}>
                <div className='flex flex-col items-center justify-center gap-5 bg-gradient-to-tr from-indigo-400 via-indigo-300 to-blue-100 h-full w-[50%]'>
                    <h1 className='text-[45px] font-bold text-gray-800' style={{ fontFamily: "Roboto Condensed" }}>Welcome to Space Energy Systems</h1>
                    <p className='text-lg text-gray-800 w-[50%] text-center' style={{ fontWeight: 400, fontFamily: 'Roboto Condensed' }}>
                        Where innovation meets modern convenience. Our services are designed to revolutionize your experiences, bringing you space-age solutions that will revolutionize the way you experience life.
                    </p>
                </div>
                <img src='/wallpaper.jpg' className='h-full w-[50%] object-cover' />
            </div>
            <div className="w-[50%] mx-auto p-4 py-10" style={{ fontFamily: "Roboto Condensed" }}>
                <h2 className="text-4xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-800 text-md" style={{ fontWeight: 400 }}>
                    Space Energy Systems is a innovator in the field of technology. Our mission is to provide the news, research, and development on the latest advancements in the tech world. Specializing in sensors, controls, satellites and its subsystems.
                    <span className={`${isExpanded ? "inline" : "hidden"}`}>
                        {" "}
                        We at SES committed to quality and provide design solutions offering a comprehensive suite of products and services that are designed to meet the needs of both commercial and government customers.

                        We strive to stay ahead of the curve when it comes to new technology, and are committed to providing our customers with the best solutions available. With a team of experts and a commitment to excellence, Space Energy Systems is the go-to source for all your innovation technology needs.                    </span>
                </p>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 text-blue-500 font-semibold hover:underline focus:outline-none"
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            </div>
            <div className="h-125 w-screen rounded shadow-2xl shadow-black/20 overflow-hidden">
                <img
                    src="/wallpaper.jpg"
                    className="w-screen h-full object-cover"
                    alt="Wallpaper"
                />
            </div>
            <div
                className="flex flex-col items-center text-center w-full p-10 bg-gradient-to-tr from-indigo-400 via-indigo-300 to-blue-100"
                style={{ fontFamily: "Roboto Condensed" }}
            >
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                    What we do?
                </h1>

                {/* Description Text */}
                <p className="text-lg text-gray-800 w-full max-w-3xl font-normal px-4 md:px-0 mb-6">
                    At Space Energy Systems (SES), we specialize in nano-satellite technology, offering compact, high-performance solutions for modern space missions. Our systems integrate advanced sensors, communication sub-systems, and energy-efficient designs to meet the demands of cutting-edge exploration and research.
                </p>

                {/* Image Section */}
                <div className="w-full max-w-lg">
                    <img
                        src="/nano_satellite.jpg"
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                        alt="Nano Satellite"
                    />
                </div>

                {/* Quote */}
                <p className="text-xl font-light text-gray-800 italic mt-6">
                    "He who can listen to the music in the midst of noise can achieve great things."
                </p>
                <p className="text-xl font-bold text-gray-800">Vikram Sarabhai</p>

            </div>
            <div className='flex w-full p-10 h-100 flex-col' style={{ fontFamily: "Roboto Condensed" }}>
                <div className='flex gap-15 h-full items-center justify-center'>
                    <ul className='flex flex-col gap-2'>
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h2>
                        <li className='flex gap-2 items-center font-medium text-gray-800'><MdMailOutline />Kadirenapalya, Indiranagar post, opposite Indiranagar bus depot, Bengaluru, Karnataka 560008</li>
                        <li className='flex gap-2 items-center cursor-pointer text-gray-800 underline font-medium'><MdOutlineLocationOn /><a href="mailto:mallikarjun.kande@icloud.com">mallikarjun.kande@icloud.com</a></li>
                    </ul>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                        <div className='flex gap-2'>
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required className="w-full p-2 border border-gray-300 rounded-md" />
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full p-2 border border-gray-300 rounded-md" />
                        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required style={{ maxHeight: '200px', minHeight: '50px' }} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                        <button type="submit" className="w-[50%] self-center mt-3 p-2 bg-blue-500 text-white rounded-md">Submit</button>
                    </form>
                </div>
            </div>
            <div className="w-[80%] flex flex-col self-center rounded shadow-2xl shadow-black/20 overflow-hidden">
                <MapContainer center={position} zoom={15} className="h-96 w-full rounded-lg shadow-lg">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>Space Energy Systems</Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className='flex w-full gap-5 text-center items-center p-10 h-100 mt-20 flex-col' style={{ fontFamily: "Roboto Condensed" }}>
                <h2 className='text-4xl text-gray-800'>Get in touch</h2>
                <p className='font-medium text-gray-800'>Join our email list and get access to specials deals exclusive to our subscribers.</p>
                <div className='flex gap-2 items-center'>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-90 p-2 border border-gray-300 rounded-md" />
                    <button type="submit" className='w-[50%] self-center p-2 bg-blue-500 text-white rounded-md'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage