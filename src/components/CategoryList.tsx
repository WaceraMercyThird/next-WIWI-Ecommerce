import Image from "next/image"
import Link from "next/link"

const CategoryList = () => {
    return(
        <div className="px-4 overflow-x-scroll scrollbar-hide">
            <div className="flex gap-4 md:gap-8">
            <Link href="/list?cat=test"className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 xl:w-1/6 block">
                <div className="relative bg-slate-100 w-full h-96 rounded-md overflow-hidden">
                <Image
                    src="https://images.pexels.com/photos/8398911/pexels-photo-8398911.jpeg"
                    alt="Category image"
                    fill
                    sizes="20vw"
                    className="object-cover"
                />
                </div>
                <h1 className="mt-8 font-light text-center tracking-wide">Category Name</h1>
            
            </Link>
            <Link href="/list?cat=test"className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 xl:w-1/6 block">
                <div className="relative bg-slate-100 w-full h-96 rounded-md overflow-hidden">
                <Image
                    src="https://images.pexels.com/photos/4832435/pexels-photo-4832435.jpeg"
                    alt="Category image"
                    fill
                    sizes="20vw"
                    className="object-cover"
                />
                </div>
                <h1 className="mt-8 font-light text-center tracking-wide">Category Name</h1>
            
            </Link><Link href="/list?cat=test"className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 xl:w-1/6 block">
                <div className="relative bg-slate-100 w-full h-96 rounded-md overflow-hidden">
                <Image
                    src="https://images.pexels.com/photos/27849608/pexels-photo-27849608.jpeg"
                    alt="Category image"
                    fill
                    sizes="20vw"
                    className="object-cover"
                />
                </div>
                <h1 className="mt-8 font-light text-center tracking-wide">Category Name</h1>
            
            </Link><Link href="/list?cat=test"className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 xl:w-1/6 block">
                <div className="relative bg-slate-100 w-full h-96 rounded-md overflow-hidden">
                <Image
                    src="https://images.pexels.com/photos/31110082/pexels-photo-31110082.png"
                    alt="Category image"
                    fill
                    sizes="20vw"
                    className="object-cover"
                />
                </div>
                <h1 className="mt-8 font-light text-center tracking-wide">Category Name</h1>
            
            </Link><Link href="/list?cat=test"className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 xl:w-1/6 block">
                <div className="relative bg-slate-100 w-full h-96 rounded-md overflow-hidden">
                <Image
                    src="https://images.pexels.com/photos/27849608/pexels-photo-27849608.jpeg"
                    alt="Category image"
                    fill
                    sizes="20vw"
                    className="object-cover"
                />
                </div>
                <h1 className="mt-8 font-light text-center tracking-wide">Category Name</h1>
            
            </Link>
            <Link href="/list?cat=test"className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 xl:w-1/6 block">
                <div className="relative bg-slate-100 w-full h-96 rounded-md overflow-hidden">
                <Image
                    src="https://images.pexels.com/photos/27520808/pexels-photo-27520808.jpeg"
                    alt="Category image"
                    fill
                    sizes="20vw"
                    className="object-cover"
                />
                </div>
                <h1 className="mt-8 font-light text-center tracking-wide">Category Name</h1>
            
            </Link>
            <Link href="/list?cat=test"className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 xl:w-1/6 block">
                <div className="relative bg-slate-100 w-full h-96 rounded-md overflow-hidden">
                <Image
                    src="https://images.pexels.com/photos/11040881/pexels-photo-11040881.jpeg"
                    alt="Category image"
                    fill
                    sizes="20vw"
                    className="object-cover"
                />
                </div>
                <h1 className="mt-8 font-light text-center tracking-wide">Category Name</h1>
            
            </Link>

                
            </div>
        </div>
    )
}

export default CategoryList