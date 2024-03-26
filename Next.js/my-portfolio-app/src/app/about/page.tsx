import Image from 'next/image'
import codePic from '../../../public/images/code.png';
import { Merienda } from 'next/font/google';

const sansita = Merienda({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })

export default function About() {
    return(
        <div className='mx-48'>
            <div className='flex space-x-16'>
             <div className='mt-48'>
            <Image
      src={codePic}
      className="border border-gray-300 p-2 rounded-sm"
      alt="About Coding Image"
      height={800} 
      width={1700}
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
        </div>
        <div className={`${sansita.className} my-40 text-2xl`}>
        <div className='mb-4'>🌻 Recently graduated from Simon Fraser University with a Masters in Professional Computer Science, specializing in Big Data.</div>
    <div className='mb-4'>🌻 Currently working as a Teaching Assistant for an Advanced Web Development course at SFU. Previously worked as a Software Developer for Bank of America and Visible Alpha.</div>
    <div className='mb-4'>🌻 Previously worked as a Software Developer for Bank of America and Visible Alpha.</div>
        <div className='mb-4'>🌻 I am looking for new ways to improve my skills and go beyond my comfort zone.</div>
        </div>

        </div>
        <div>
            <h2 className='text-3xl font-bold'>Skills</h2>
        </div>
        </div>
        
    )
        
       
}