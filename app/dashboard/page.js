'use client'

import OverviewCards from "./components/overview-cards";
import { motion } from "framer-motion";
import RecentOrders from "./components/recent-orders";
import StockReport from "./components/stock-report";
import ProductDelivery from "./components/products-delivery";
import NewCustomers from "./components/new-customer";
export default function Dashboard() {
    return <motion.div className="flex flex-col" layout>
        <div className="p-3 space-y-3">
            <OverviewCards />
            <RecentOrders />
            <StockReport />
            <div className="flex flex-col md:flex-row h-96 gap-5">
                <ProductDelivery />
                <NewCustomers />
            </div>
        </div>
    </motion.div>
}