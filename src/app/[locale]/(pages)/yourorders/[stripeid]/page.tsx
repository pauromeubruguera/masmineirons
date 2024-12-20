"use client"
import { useGetOrderById } from "@/app/api/getOrderById"
import { useAuthStore } from "@/hooks/auth-store"
import { formatPrice } from "@/lib/formatPrice"
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
                <div>
                    <div className="flex gap-5">
                        <p>{result[0].attributes.address.name}</p>
                        <p>{result[0].attributes.address.address}</p>
                        <p>{result[0].attributes.address.city}</p>
                        <p>{result[0].attributes.address.country}</p>
                        <p>{result[0].attributes.address.postalCode}</p>
                    </div>
                    {result[0].attributes.products.map((product: any) => (
                        <div className="my-5" key={product.id}>
                            <p className="flex justify-between border border-b-black p-1">
                                <span>
                                    {product.attributes.productName}
                                </span>
                                <span>
                                    {product.attributes.quantity} uds
                                </span>
                                <span>
                                    {formatPrice(product.attributes.price)}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}