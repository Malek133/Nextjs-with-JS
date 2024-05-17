"use client"

import Link from "next/link";
import { AlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from "react";
const Header = () => {
  const [toggel,setToggel]=useState(false)
  return (
    <header>
      

      <ul className="flex justify-around text-[#171717] 
      py-2 items-center space-x-2 mx-6 px-6
      border-2 border-b-slate-200 h-20">

         <div className="flex md:hidden">
         
         {
          toggel ? ( < X onClick={() => setToggel(prev => !prev)} />) : 
          (   <AlignJustify onClick={() => setToggel(prev => !prev)} />  )
         }
         </div>

     <div
     className={toggel ? "flex-row justify-center items-center space-y-1" : "hidden md:flex justify-around items-center space-x-16"}
     > 
            <li>
          <Link href={'/'}>Acuiel </Link>
          </li>
        <li>
            <Link href={'/aboute'}>Aboute</Link>
        </li>
        
        <li>
            <Link href={'/blog'}>Blog</Link>
        </li>

          </div> 

      </ul>
    </header>
  )
}

export default Header