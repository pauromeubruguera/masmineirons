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

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, router])

    return (
        <div className="p-10">
            <h2>Orders</h2>
            {result === null && loading && (
                <p>loading</p>
            )}

            {result !== null && !loading && (
                result.map((order: any) => (
                    <div key={order.id}>
                        <Link href={`yourorders/${order.attributes.stripeid}`} className="relative basis-1/6">
                            {order.attributes.stripeid}, {order.attributes.createdAt}
                        </Link>
                    </div>

                ))
            )}
        </div>
    )
}