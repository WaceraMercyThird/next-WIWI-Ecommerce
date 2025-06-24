import Link from "next/link"

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
            {/* Modile */}
            <Link href="/"> MAWA</Link>
        </div>
    )
}

export default Navbar