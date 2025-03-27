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
    const [subEmail, setSubEmail] = useState('');
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
            <div className='flex flex-col sm:flex-row items-center text-center justify-between mt-20 sm:mt-30 w-screen h-190' style={{ fontFamily: "Roboto Condensed" }}>
                <div className='flex flex-col items-center justify-center gap-5 bg-gradient-to-tr from-indigo-400 via-indigo-300 to-blue-100 h-full w-screen py-10 sm:py-0'>
                    <div className='flex flex-col gap-5 w-[75%] sm:w-[50%]'>
                        <h1 className='text-4xl sm:text-[45px] font-bold text-gray-800' style={{ fontFamily: "Roboto Condensed" }}>Welcome to Space Energy Systems</h1>
                        <p className='text-lg text-gray-800 w-full text-justify' style={{ fontWeight: 400, fontFamily: 'Roboto Condensed' }}>
                            Founded in 2023, we are a team of experienced engineers with a strong background in developing systems and products for the aerospace, energy, and automation industries. We specialize in delivering innovative design services and cutting-edge solutions that drive efficiency and progress for our clients in these dynamic sectors.                    </p>
                    </div>
                </div>
                <img src='/wallpaper.jpg' className='h-full w-[100%] sm:w-[50%] object-cover' />
            </div>
            <div className="w-[80%] sm:w-[50%] mx-auto p-4 py-10 mt-10 sm:mt-0" style={{ fontFamily: "Roboto Condensed" }}>
                <h2 className="text-4xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-800 text-md" style={{ fontWeight: 400 }}>
                    We are a team of engineers dedicated to creating innovative aerospace technologies by combining state-of-the-art solutions from other domains. Our mission is to drive innovation and develop groundbreaking                    <span className={`${isExpanded ? "inline" : "hidden"}`}>
                        {" "}
                        solutions that will shape the future of space platforms, spaceborne applications, transportation, and automation. With each breakthrough, we push the limits of what's possible, creating systems that will define the next era of discovery and advancement.
                    </span>
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
                <div className='flex flex-col gap-5 w-[85%] sm:w-[50%]'>
                    <p className="text-lg text-gray-800 text-justify w-[100%] max-w-[100%] font-normal px-4 md:px-0 mb-6">
                        At Space Energy Systems (SES), we are at the cutting edge of space and energy innovation, delivering tailored, high-performance solutions that empower the future of space exploration and energy management. Our suite of services and products is designed to meet the unique demands of modern missions and applications. These include:
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { text: "Advanced Engineering & System Design", img: "https://blogs.sw.siemens.com/wp-content/uploads/sites/24/2020/02/Car-Digital-UI-smart-3D-car-hands-holding-Adobe-194992198-small-scaled.jpg" },
                            { text: "Custom Satellite Development & Subsystems", img: "https://i0.wp.com/newspaceeconomy.ca/wp-content/uploads/2023/04/img_2656.jpg?fit=960%2C600&quality=89&ssl=1" },
                            { text: "On-Board Software Development", img: "https://blogs.sw.siemens.com/wp-content/uploads/sites/24/2020/11/Code-into-processor-AdobeStock_248768547-scaled.jpeg" },
                            { text: "Innovations for High-Pointing Platforms", img: "https://praxie.com/wp-content/uploads/2024/02/1706194185849x886871372187592000-feature-1792x896.png" },
                            { text: "Unique Communication Payloads", img: "https://data.militaryembedded.com/uploads/resize/1256/756/external/data.militaryembedded.com/uploads/articles/wp/3201/MES6510-figures-3" },
                            { text: "Energy Solutions for a Sustainable Future", img: "https://www.getac.com/content/dam/uploads/2023/08/clean_energy_cover.jpg" },
                            { text: "Radar System Refurbishment", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEaefrQ0yb-YGz3wZDPz5-46lUAml0fDJCg&s" },
                            { text: "Industrial Automation", img: "https://etisystems.com/wp-content/uploads/2023/07/potential-threats-automated-factories-Blog-1024x598-1.png" },
                            { text: "Security Certification & Compliance", img: "https://media.licdn.com/dms/image/v2/D5612AQHtxEvWOm67Fw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691607537567?e=2147483647&v=beta&t=BaTN8fMM-IHjTcMNKSnWLEx3WNXvuavSNpYeYDO_6w4" }
                        ].map((item, index) => (
                            <li key={index} className="flex bg-gradient-to-tr from-[#636bce] to-[a0b1ff] border border-white/10 shadow-black/30 shadow-lg rounded-xl h-22 px-4 items-center gap-3 text-gray-800">
                                {/* <img src={item.img} alt={item.text} className="w-40 h-18 rounded-2xl object-cover" /> */}
                                <span className="text-lg font-bold">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
            <div className='flex w-full p-10 h-100 mt-15 sm:mt-0 flex-col' style={{ fontFamily: "Roboto Condensed" }}>
                <div className='flex flex-col sm:flex-row gap-15 h-full items-center justify-center'>
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
            <div className="w-[80%] z-[1] relative flex flex-col self-center rounded shadow-2xl mt-20 sm:mt-10 shadow-black/20 overflow-hidden">
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
                <div className='flex gap-2 items-center justify-center w-[80%] sm:w-[40%]'>
                    <input type="email" value={subEmail} onChange={(e) => setSubEmail(e.target.value)} placeholder="Email" required className="w-90 p-2 border border-gray-300 rounded-md" />
                    <button type="submit" onClick={() => alert(`Thank you for subscribing ${subEmail}`)} className='w-[50%] sm:w-[20%] self-center p-2 bg-blue-500 text-white rounded-md'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage