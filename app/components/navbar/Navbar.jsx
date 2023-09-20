"use client"

import Link from "next/link";
import { FaNewspaper, FaUserGear } from "react-icons/fa6";
import { BiSolidBookContent } from "react-icons/bi";
import { AiFillPieChart, AiFillYoutube } from "react-icons/ai";
import { SiPlausibleanalytics } from "react-icons/si";

import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathName = usePathname();

    return (
        <nav className="rounded-[50px] w-[6%]">
            <div className="flex flex-col w-full h-full items-center justify-between">
                <div className=" pt-8">
                    <Link href="/">
                            <SiPlausibleanalytics className={pathName == "/" ? "text-4xl text-white opacity-100 hover:opacity-50 transition" : "text-4xl text-white opacity-50 hover:opacity-90 transition"} />
                    </Link>
                </div>
                <div className="flex flex-col items-center gap-16 justify-center">
                    <Link href="/webnews">

                    <div className={pathName == "/webnews" ? "bg-[#F5F6FD] p-2 rounded-xl border-none shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] translate-x-3/4 transition" : "p-2 transition"}>
                        <BiSolidBookContent className={pathName == "/webnews" ? "text-4xl text-[#f51711] transition" : "text-4xl text-white opacity-50 hover:opacity-90 transition"}  />
                    </div>
                    </Link>
                    <Link href="/youtube">

                    <div className={pathName == "/youtube" ? "bg-[#F5F6FD] p-2 rounded-xl border-none shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] translate-x-3/4 transition" : "p-2 transition"}>
                        <AiFillYoutube className={pathName == "/youtube" ? "text-4xl text-[#f51711] transition" : "text-4xl text-white opacity-50 hover:opacity-90 transition"}  />
                    </div>
                    </Link>
                    <Link href="/newspaper">

                    <div className={pathName == "/newspaper" ? "bg-[#F5F6FD] p-2 rounded-xl border-none shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] translate-x-3/4 transition" : "p-2 transition"}>
                        <FaNewspaper className={pathName == "/newspaper" ? "text-4xl text-[#f51711] transition" : "text-4xl text-white opacity-50 hover:opacity-90 transition"}  />
                    </div>
                    </Link>
                    <Link href="/analysis">

                    <div className={pathName == "/analysis" ? "bg-[#F5F6FD] p-2 rounded-xl border-none shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] translate-x-3/4 transition" : "p-2 transition"}>
                        <AiFillPieChart className={pathName == "/analysis" ? "text-4xl text-[#f51711] transition" : "text-4xl text-white opacity-50 hover:opacity-90 transition"}  />
                    </div>
                    </Link>
                </div>
                <div className="pb-8">
                    <Link href="/profile">
                    <div className={pathName == "/profile" ? "bg-[#F5F6FD] p-2 rounded-xl border-none shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] translate-x-3/4 transition" : "p-2 transition"}>
                        <FaUserGear className={pathName == "/profile" ? "text-4xl text-[#f51711] transition" : "text-4xl text-white opacity-50 hover:opacity-90 transition"}  />
                    </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
