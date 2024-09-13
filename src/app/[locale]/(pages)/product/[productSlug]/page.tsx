"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug"
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"
import { ImagesProduct } from "./components/ImagesProduct"
import { InfoProduct } from "./components/InfoProduct"
import { useState } from "react"


export default function Product() {
    const params = useParams()
    const { productSlug } = params
    const { result, loading }: ResponseType = useGetProductBySlug(productSlug)
    const [isClient, setIsClient] = useState(false)

    return (
        <div className="">
            {result === null && loading && (
                <p>loading</p>
            )}
            {result !== null && !loading && (
                <div className="flex gap-5 justify-evenly mt-[-68px] min-h-screen items-center">
                    <div className="w-3/12">
                        <ImagesProduct images={result[0].attributes.images} />
                    </div>
                    <div className="w-5/12">
                        <InfoProduct product={result[0]} />
                    </div>
                </div>
            )}
        </div>
    )

}