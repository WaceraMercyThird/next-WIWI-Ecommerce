import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="py-8 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
            {/* TOP */}
            <div className="flex flex-col md:flex-row justify-between gap-24">
                {/* LEFT */}
                <div className="flex flex-col gap-8">
                <Link href="/">
                <div className="text-2xl tracking-wide">WiWi</div>
                </Link> 
                <p>Central Plaza, WestLand, Nairobi, Kenya</p> 
                <span className="font-semibold">hello@WiWi.dev</span>              
                <span className="font-semibold">+254 7 46 755 677</span> 
                <div className="flex gap-6">
                    <Image src="/facebook.png" alt="" width={16} height={16}/>
                    <Image src="/instagram.png" alt="" width={16} height={16}/>
                    <Image src="/youtube.png" alt="" width={16} height={16}/>
                    <Image src="/pinterest.png" alt="" width={16} height={16}/>
                    <Image src="/x.png" alt="" width={16} height={16}/>
                    </div>             
                </div>
                {/* CENTER */}
                <div className="hidden lg:flex justify-between w-1/2">
                <div className="flex flex-col justify-between">
                <h1 className="font-medium text-lg">COMPANY</h1>
                <div className="flex flex-col gap-6">
                    <Link href="/">About Us</Link> 
                    <Link href="/">Careers</Link>
                    <Link href="/">Affiliates</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">Contact Us</Link>
                </div>
                </div>
                <div className="flex flex-col justify-between">
                <h1 className="font-medium text-lg">SHOP</h1>
                <div className="flex flex-col gap-6">
                    <Link href="/">New Arrivals</Link> 
                    <Link href="/">Accessories</Link>
                    <Link href="/">Men</Link>
                    <Link href="/">Women</Link>
                    <Link href="/">All Product</Link>
                </div>
                </div>
                <div className="flex flex-col justify-between">
                <h1 className="font-medium text-lg">HELP</h1>
                <div className="flex flex-col gap-6">
                    <Link href="/">Customer Service</Link> 
                    <Link href="/">My Account</Link>
                    <Link href="/">Find a Store</Link>
                    <Link href="/">Legal & Privacy</Link>
                    <Link href="/">Gift Card</Link>
                </div>
                </div>
                </div>
                {/* RIGHT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                <h1 className="font-medium text-lg">SUBSCRIBE</h1>
                <p>Be the first to get the lastest news about trends, promotion and more!</p>
                <div className="flex">
                <input type="text" placeholder="Email Address" className="p-4 w-3/4"/>
                <button className=" w-1/4 bg-wiw text-white">JOIN</button>
                </div>
                <span className="font-semibold">Secure Payment</span>
                <div className="flex justify-between">
                    <Image src="/discover.png" alt="" width={40} height={28}/>
                    <Image src="/skrill.png" alt="" width={40} height={28}/>
                    <Image src="/paypal.png" alt="" width={40} height={28}/>
                    <Image src="/mastercard.png" alt="" width={40} height={28}/>
                    <Image src="/visa.png" alt="" width={40} height={28}/>
                </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
            <div>&copy; 2024 WiWi Shop</div>
            <div className="flex flex-col gap-8 md:flex-row ">
                <div>
                        <span className="text-gray-500 mr-4">Language</span>
                        <span className="font-medium">Kenya | English</span>
                    </div>
                    <div>
                        <span className="text-gray-500 mr-4">Currecy</span>
                        <span className="font-medium">$ USD</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer 