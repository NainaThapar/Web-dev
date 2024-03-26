'use client'
import { Inter, Play, Bungee_Spice, Pacifico } from 'next/font/google';
import Image from 'next/image'
import profilePic from '../../public/images/user.jpeg';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoMail } from "react-icons/io5";
import useBlink from '../Utils/useBlink';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
const pacifico = Pacifico({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
const name = 'Naina';

const Homepage = () => {
    const [typedName, settypedName] = useState('');
    const a = useBlink(name);
    
 
    setTimeout(() => {
        settypedName(a);
    }, 250)
    
    
    return(
        <div className='flex'>
        <Image
      src={profilePic}
      className="border border-gray-300 p-2 rounded-[20%] w-12/12 mr-28"
      alt="Picture of the author"
      height={400} 
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    <div>
        <h1 className={`${pacifico.className} text-6xl font-extrabold`}>Hi, I am <span className='bg-yellow-200 px-4 blinking-cursor'>{typedName}</span></h1>
        <p className='mt-4 text-xl mt-20'>I'm a Vancouver-based Software Developer with over 7 years of experience creating enriched, user-centric web products.</p>
        <p className='mt-4 text-xl'>Passionate about solving complex problems through innovative solutions, I specialize in crafting seamless and engaging experiences for users.</p>
        <p className='mt-4 text-xl'>I have recently graduated from Simon Fraser University, eager to embark on a new journey as a developer. </p>
        <p className='mt-4 text-xl'>Take a look at my portfolio to explore my skills and projects. Let's collaborate and create something amazing together. Ready to hire me for your next development role?</p>
        <p className='mt-8 text-lg text-slate-700 font-bold'>🌱 Let's work together!</p>
        <p className='m-4 flex cursor-pointer'>
        <FaLinkedin size={30} className='mr-2'/>
        <GrInstagram size={30} className='mr-2'/>
        <FaGithub size={30} className='mr-2'/>
        <IoMail size={30} className='mr-2'/>
        </p>
        {/* <div className={caveat.className}><h2 className="text-4xl my-12">Creating <span className={bungee.className}>code</span>, <span className={bungee.className}>artwork</span>, <span className={bungee.className}>culinary delights</span>, and <span className={bungee.className}>fitness highs</span>!</h2></div> */}
      </div>
        </div>
        
    )
}

export default Homepage;