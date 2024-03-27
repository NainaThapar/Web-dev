"use client"
import useOpenUrlNewTab from '@/Utils/useOpenUrlNewTab';
import { LINKEDIN_URL, GITHUB_URL } from "@/Utils/constants";

const AboutBtn = () => {
    const handleViewLInClick = useOpenUrlNewTab(LINKEDIN_URL);
    const handleViewGitClick = useOpenUrlNewTab(GITHUB_URL);
    return(
        <div className='flex'>
        <button role="link" onClick={handleViewLInClick} className='py-4 px-8 m-4 border-t-transparent bg-orange-600 text-stone-100 rounded-md'>View LinkedIn</button>
        <button role="link" onClick={handleViewGitClick} className='py-4 px-8 m-4  text-orange-600 border-2 border-slate-300 rounded-md'>View Github</button>
    </div>
    )
}

export default AboutBtn;