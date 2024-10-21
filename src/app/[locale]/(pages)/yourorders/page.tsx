"use client"

import { useGetOrders } from "@/app/api/getOrders"
import { useAuthStore } from "@/hooks/auth-store"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ResponseType } from "@/types/response"

export default function YourOrders() {
    const { user, token, isAuthenticated } = useAuthStore()
    const { result, loading }: ResponseType = useGetOrders(user ? JSON.parse(user).id : null)
    const router = useRouter()
    
    const formatDate = (date: string) => {
        const d = new Date(date)
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    }
    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, router])

    return (
        <div className="p-10">
            <h2 className="border border-b-black">Orders</h2>
            {result === null && loading && (
                <p>loading</p>
            )}

            {result !== null && !loading && (
                result.map((order: any) => (
                    <div className="border border-b-black py-5 flex justify-between" key={order.id}>
                        <div>
                            <Link href={`yourorders/${order.attributes.stripeid}`} className="relative">
                                {order.attributes.stripeid} | {formatDate(order.attributes.createdAt)} | {order.attributes.address.name}
                            </Link>
                        </div>
                        <div>
                            <Link href={`yourorders/${order.attributes.stripeid}`} className="relative mx-5">
                                View
                            </Link>
                            <button className="">Download PDF</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}