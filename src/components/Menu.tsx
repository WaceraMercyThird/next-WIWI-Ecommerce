"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className="">
            <Image src="/menu.png" 
            alt="menu Image" 
            width={28} 
            height={28} 
            className="cursor-pointer" 
            onClick={() => setOpen((prev) => !prev)} 
            />{open && (
                    <div className="absolute left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10
                                    bg-black/30 backdrop-blur-md rounded-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] text-white">
                      <Link href="/">Home</Link>
                      <Link href="/">Shop</Link>
                      <Link href="/">Deals</Link>
                      <Link href="/">About</Link>
                      <Link href="/">Contact</Link>
                      <Link href="/">Logout</Link>
                      <Link href="/">Cart<span className="ml-1">(1)</span></Link>
                    </div>
                  )}
                  
        </div>
    )
}

export default Menu