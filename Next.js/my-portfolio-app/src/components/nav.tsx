'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();
    return (
          <nav className="p-4 flex justify-between bg-slate-800 text-gray-200">
            <div>Naina Thapar</div>
            <div className="flex space-x-7"><Link href="/" className={`link ${pathname === '/' ? 'border-b-4 border-green-300' : ''} p-2 no-underline`}>Home</Link>
            <Link href="/about" className={`link ${pathname === '/about' ? 'border-b-4 border-green-300' : ''} p-2 no-underline`}>About</Link>
            <Link href="/projects" className={`link ${pathname === '/project' ? 'border-b-4 border-green-300' : ''} p-2 no-underline`}>Projects</Link>
            <Link href="/contact" className={`link ${pathname === '/contact' ? 'border-b-4 border-green-300' : ''} p-2 no-underline`}>Contact Me</Link></div>
          </nav>
    );
  }