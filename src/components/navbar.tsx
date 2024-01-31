"use client"
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { cn } from '@/lib/utils';
import Link from 'next/link';
export default function Navbar() {  
    const [showMenu, setShowMenu] = useState(false);
    
  return (
    <nav className='flex flex-row justify-between items-center pt-7 w-full h-32'>
        <div className="logo text-4xl capitalize">Mohsen Emami</div>
        <div className='md:block hidden'>
            <ul className='flex flex-row list-none items-center '>
                {NavList()}
            </ul>
        </div>
        <div className={cn('md:hidden text-3xl', showMenu ? 'flex self-start' : 'block')} onClick={() => setShowMenu(!showMenu)}>
            <AiOutlineMenu className={showMenu ? 'hidden' : 'block'}/>
            {showMenu && 
                <ul className='list-none flex flex-col items-center justify-start w-20 pt-8'>
                    <AiOutlineClose className='self-end'/>
                    {NavList()}
                </ul>
            }
        </div>
    </nav>
  )
}
function NavList() {
    return <>
        <li>
            <Button variant={'link'} className='text-xl hover:text-blue-400 link-nav' asChild>
                <Link href='#about'>About</Link>
            </Button>
        </li>
         <li>
            <Button variant={'link'} asChild className='text-xl hover:text-blue-400'>
                <Link href='#experience'>Experience</Link>
            </Button>
        </li>
        {/*<li>
            <Button variant={'link'} className='text-xl hover:text-blue-400'>About</Button>
        </li>
        <li>
            <Button variant={'link'} className='text-xl hover:text-blue-400'>About</Button>
        </li> */}
    
    </>
}

