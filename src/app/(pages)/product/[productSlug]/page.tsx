"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug"
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"
import { ImagesProduct } from "./components/ImagesProduct"
import { InfoProduct } from "./components/InfoProduct"


export default function Product() {
    const params = useParams()
    const { productSlug } = params
    const { result, loading }: ResponseType = useGetProductBySlug(productSlug)

    return (
        <div className="p-10">
            {result === null && loading && (
                <p>loading</p>
            )}
            {result !== null && !loading && (
                <div className="flex gap-5 justify-evenly">
                    <div className="w-1/6">
                        <ImagesProduct images={result[0].attributes.images} />
                    </div>
                    <div>
                        <InfoProduct product={result[0]} />
                    </div>
                </div>
            )}
        </div>
    )

}