'use client'

import { EmailOutlined, GolfCourseSharp, LocationOn, LocationOnOutlined, PublicOffOutlined, PublicOutlined, VerifiedRounded } from "@mui/icons-material";

export default function Page() {
    return <section>
        <div
            style={{
                backgroundImage: "url('https://themesbrand.com/toner/html/assets/images/profile-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            className="relative w-full md:h-[160px] h-[100px] mb-16">
            <div class="bg-opacity-75 absolute start-0 end-0 top-0 bottom-0 bg-[#71a6f4]" ></div>
            <div className="absolute h-[100px] w-[100px] rounded-lg bg-white shadow -bottom-10 left-10">
                <img className="p-6" src="https://themesbrand.com/toner/html/assets/images/companies/img-3.png" alt="" />
            </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-4 items-start px-4 py-2">
            <div>
                <div className="flex gap-2 items-start font-bold pb-2">
                    <h1>Zibra Fashion LTD</h1>
                    <VerifiedRounded className="h-3 w-3 text-[#4b93ff]" />
                </div>
                <h2 className="font-medium text-sm pb-2"><span className="font-bold text-[#333333]">Since: 2015</span> Selling clothes & Other Accessories </h2>
                <h2 className="font-medium text-sm text-[#888888] flex items-center gap-2 pb-1">
                    <span className="">
                        <LocationOnOutlined className="h-4 w-4" />
                    </span>
                    Phoenix, USA
                </h2>
                <h2 className="font-medium text-sm text-[#888888] flex items-center gap-2 pb-1">
                    <span className="">
                        <EmailOutlined className="h-4 w-4" />
                    </span>
                    zibra@fashion.com
                </h2>
                <h2 className="font-medium text-sm text-[#888888] flex items-center gap-2 pb-1">
                    <span className="">
                        <PublicOutlined className="h-4 w-4" />
                    </span>
                    www.zibrafashion.com
                </h2>
            </div>
            <div className="flex flex-col justify-between items-end gap-6">
                <div className="flex gap-2 items-center">
                    <div className="flex flex-col gap-1">
                        <h1 className="font-bold">Edward Diana</h1>
                        <h1 className="text-sm text-[#888888]">Owner & CEO</h1>
                    </div>
                    <img className="rounded-full w-14 h-14" src="https://themesbrand.com/toner/html/assets/images/users/avatar-4.jpg" alt="" />
                </div>
                <div className="rounded hover:bg-[#1a8db3] bg-[#1fabd9] px-3 py-2 text-white font-bold text-sm cursor-pointer">
                    Contact Us
                </div>

            </div>
        </div>

    </section>
}