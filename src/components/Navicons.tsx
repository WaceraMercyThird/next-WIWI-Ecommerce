"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CartModel from "./CarModel"

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const router = useRouter();

    const isLoggedIn = false;

    const handleProfile = () => {
        if(!isLoggedIn) {
            router.push(`/login`)
        }
        setIsProfileOpen((prev) => !prev);
    };
    
    return (
        <div className=" flex items-center gap-4 xl:gap-6 relative">
            <Image src="/profile.png" alt="" width={22} height={22} className="cursor-pointer" onClick={handleProfile}/>
            {isProfileOpen && (
                // <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px">
                <div className="absolute p-4 top-12 left-0 text-sm bg-white/10 backdrop-blur-md rounded-md shadow-[0_4px_16px_0_rgba(31,38,135,0.15)] z-20">
                <Link href="/">Profile</Link>
                <div className="mt-2 cursor-pointer">Logout</div>
            </div>)}
            <Image src="/notification.png" alt="" width={22} height={22} className="cursor-pointer"/>
            <div className="relative cursor-pointer">
            <Image
            src="/cart.png"
            alt="Cart"
            width={22}
            height={22}
            className="cursor-pointer"
            onClick={() => setIsCartOpen((prev) => !prev)}
            />
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">
            2
            </div>
            {isCartOpen && (
            <div className="absolute top-8 right-0 z-50">
            <CartModel />
            </div>
            )}
            </div>

        </div>
    )
}

export default NavIcons