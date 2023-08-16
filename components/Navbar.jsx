import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-3 py-4 bg-slate-800 rounded-md">
            <Link href={'/'} className="text-white font-bold">Blog</Link>
            <Link href={'/addTopic'} className="bg-white p-2 rounded-md">
                Add Topic
            </Link>
        </nav>
    )
}