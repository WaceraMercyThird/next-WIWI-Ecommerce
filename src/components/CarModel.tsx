"use Client"

import Image from "next/image"

const CartModel = () => {

    const carItems = true
    return (
        // <div className="absolute p-4 top-8 rounded-md shadow-[0_4px_16px_0_rgba(31,38,135,0.15)] bg-white right-0 flex flex-col gap-6 z-20">
        <div className="absolute w-max p-4 top-6 text-sm bg-white backdrop-blur-md rounded-md shadow-[0_4px_16px_0_rgba(31,38,135,0.15)] z-20">
            {!carItems ? (
                <div className="">Cart is Empty.</div>
            ) : (
                <>
                    <h2 className="text-xl pb-4">Shopping Cart</h2>
                {/* LIST */}
                <div className=" flex flex-col gap-8">
                    {/* ITEM */}
                <div className=" flex gap-4">
                    <Image src="/pexmic.jpg" alt="" width={72} height={96} className="object-cover rounded-md"/>
                    <div className=" flex flex-col justify-between w-full">
                        {/* TOP */}
                        <div className="">
                        {/* TITLE */}
                            <div className="flex items-center justify-between gap-8">
                                <h3 className="font-semibold">Product Name</h3>
                                <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                            </div>
                        {/* DESCRIPTION */}
                        <div className="test-sm text-gray-500">
                            available
                        </div>
                        </div>
                        {/* BOTTOM */}
                        <div className=" flex justify-between text-sm">
                            <span className="text-gray-500">Qty. 3</span>
                            <span className="text-blue-500">Remove</span>
                        </div>

                    </div>
                </div>

                  {/* ITEM */}
                  <div className=" flex gap-4">
                    <Image src="/pexmic.jpg" alt="" width={72} height={96} className="object-cover rounded-md"/>
                    <div className=" flex flex-col justify-between w-full">
                        {/* TOP */}
                        <div className="">
                        {/* TITLE */}
                            <div className="flex items-center justify-between gap-8">
                                <h3 className="font-semibold">Product Name</h3>
                                <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                            </div>
                        {/* DESCRIPTION */}
                        <div className="test-sm text-gray-500">
                            available
                        </div>
                        </div>
                        {/* BOTTOM */}
                        <div className=" flex justify-between text-sm">
                            <span className="text-gray-500">Qty. 3</span>
                            <span className="text-blue-500">Remove</span>
                        </div>

                    </div>
                </div>

                 {/* ITEM */}
                 <div className=" flex gap-4">
                    <Image src="/pexmic.jpg" alt="" width={72} height={96} className="object-cover rounded-md"/>
                    <div className=" flex flex-col justify-between w-full">
                        {/* TOP */}
                        <div className="">
                        {/* TITLE */}
                            <div className="flex items-center justify-between gap-8">
                                <h3 className="font-semibold">Product Name</h3>
                                <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                            </div>
                        {/* DESCRIPTION */}
                        <div className="test-sm text-gray-500">
                            available
                        </div>
                        </div>
                        {/* BOTTOM */}
                        <div className=" flex justify-between text-sm">
                            <span className="text-gray-500">Qty. 3</span>
                            <span className="text-blue-500">Remove</span>
                        </div>

                    </div>
                </div>

                </div>
                {/* BOTTOM */}
                <div className="">
                    <div className="flex justify-between pt-8 font-semibold">
                        <span className="">Subtotal</span>
                        <span className="">$49</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 mb-4">
                    Shipping and taxes calculated at checkout.
                    </p>
                    <div className="flex justify-between text-sm">
                        <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                        <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
                    </div>

                </div>
                </>
            )}
        </div>
    )
}

export default CartModel