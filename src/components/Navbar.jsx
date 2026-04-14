'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathname = usePathname();
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href='/' className="btn-ghost">Home</Link></li>
                            <li><Link href='/timeline' className="btn-ghost">Timeline</Link></li>
                            <li><Link href='/stats' className="btn-ghost">Stats</Link></li>


                        </ul>
                    </div>
                    <a className="btn btn-ghost">
                        <Image src='/imgs/logo.png' alt='logo' width={131} height={31} className='w-32.75 h-7.75' />
                    </a>
                </div>

                <div className="navbar-end space-x-2 hidden md:flex">
                    <Link href='/' className={`btn ${pathname === '/' ? 'bg-[#244D3F] text-white font-semibold btn' : 'btn-ghost text-[#64748B]'}`}>Home</Link>
                    <Link href='/timeline' className={`btn ${pathname === '/timeline' ? 'bg-[#244D3F] text-white font-semibold btn' : 'btn-ghost text-[#64748B]'}`}>Timeline</Link>
                    <Link href='/stats' className={`btn ${pathname === '/stats' ? 'bg-[#244D3F] text-white font-semibold btn' : 'btn-ghost text-[#64748B]'}`}>Stats</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;