import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
    return (
        <div className=" flex gap-x-8 gap-y-16 justify-between flex-wrap mt-9">
            <Link href="/" className="relative w-80 h-80">
            <Image src="https://images.pexels.com/photos/32641997/pexels-photo-32641997.jpeg" alt="" fill sizes="25vw"/>            
            </Link>
            <Link href="/" className="relative w-80 h-80">
            <Image src="https://images.pexels.com/photos/32641997/pexels-photo-32641997.jpeg" alt="" fill sizes="25vw"/>            
            </Link>
        </div>
    )
}

export default ProductList