"use client"
import { useGetOrderById } from "@/app/api/getOrderById"
import { useAuthStore } from "@/hooks/auth-store"
import { ResponseType } from "@/types/response"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"


export default function Category() {
    const { user, isAuthenticated } = useAuthStore()
    const params = useParams()
    const { stripeid } = params
    const { result, loading }: ResponseType = useGetOrderById(stripeid)
    const router = useRouter()

    const userId = user ? JSON.parse(user).id : null
    const orderId = result ? Number(result[0].attributes.stripeid.split('-')[0]) : null

    
    useEffect(() => {
        if (loading) {
            return;
        }
        if (!isAuthenticated || (orderId !== userId)) {
            router.push('/');
        }
    }, [loading])

    return (
        <div className="p-10">
            {result === null && loading && (
                <p>loading</p>
            )}

            {result !== null && !loading && (orderId === userId) && (
                result[0].attributes.products.map((product: any) => (
                    <div key={product.id}>
                        <p>
                            {product.attributes.productName}
                        </p>
                        <p>
                            {product.attributes.price}
                        </p>
                        <p>
                            {product.attributes.quantity}
                        </p>
                    </div>
                ))
            )}
        </div>
    )

}