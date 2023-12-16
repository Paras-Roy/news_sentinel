"use client"

import Link from "next/link";
import { FaNewspaper, FaUserGear } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { AiFillPieChart } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
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
                <div className="flex flex-col items-center gap-12 justify-center">
                    <Link href="/dashboard">

                    <div className={pathName.includes("/dashboard") ? "bg-[#F5F6FD] p-4 rounded-xl border-none shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] translate-x-3/4 transition" : "p-2 transition"}>
                        <BiSolidDashboard className={pathName.includes("/dashboard") ? "text-4xl text-[#f51711] transition" : "text-4xl text-white opacity-50 hover:opacity-90 transition"}  />
                    </div>
                    </Link>
                    <Link href="/discussion">

                    <div className={pathName.includes("/discussion") ? "bg-[#F5F6FD] p-4 rounded-xl border-none shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] translate-x-3/4 transition" : "p-2 transition"}>
                        <GoCommentDiscussion className={pathName.includes("/discussion") ? "text-4xl text-[#f51711] transition" : "text-4xl text-white opacity-50 hover:opacity-90 transition"}  />
                    </div>
                    </Link>
                    <Link href="/media">

                    <div className={pathName.includes("/media") ? "bg-[#F5F6FD] p-4 rounded-xl border-none shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] translate-x-3/4 transition" : "p-2 transition"}>
                        <FaNewspaper className={pathName.includes("/media") ? "text-4xl text-[#f51711] transition" : "text-4xl text-white opacity-50 hover:opacity-90 transition"}  />
                    </div>
                    </Link>
                    <Link href="/analysis">

                    <div className={pathName.includes("/analysis") ? "bg-[#F5F6FD] p-4 rounded-xl border-none shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] translate-x-3/4 transition" : "p-2 transition"}>
                        <AiFillPieChart className={pathName.includes("/analysis") ? "text-4xl text-[#f51711] transition" : "text-4xl text-white opacity-50 hover:opacity-90 transition"}  />
                    </div>
                    </Link>
                </div>
                <div className="pb-8">
                    <Link href="/profile">
                    <div className={pathName.includes("/profile") ? "bg-[#F5F6FD] p-4 rounded-xl border-none shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] translate-x-3/4 transition" : "p-2 transition"}>
                        <FaUserGear className={pathName.includes("/profile") ? "text-4xl text-[#f51711] transition" : "text-4xl text-white opacity-50 hover:opacity-90 transition"}  />
                    </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
