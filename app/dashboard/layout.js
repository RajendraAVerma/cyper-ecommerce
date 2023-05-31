'use client'

import Header from "@/components/dashboard/header/header";
import Menu from "@/components/dashboard/menu/menu";
import ContextProviders from "@/contexts/provider";
import { motion } from "framer-motion";

export const metadata = {
    title: 'DASHBOARD | E Commerce',
    description: 'Generated by create next app',
}

export default function DashboardLayout({ children }) {
    return <ContextProviders>
        <div className="flex w-screen h-screen text-[#0c192c]">
            <div className="flex-0">
                <Menu />
            </div>
            <div className="flex-1 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#b4b6b8] scrollbar-track-transparent scrollbar-thumb-rounded-full">
                <div className="sticky top-0 bg-white z-50">
                    <Header />
                </div>
                <motion.div layout>
                    {children}
                </motion.div>
            </div>
        </div>
    </ContextProviders>
}