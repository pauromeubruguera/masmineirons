"use client"
import { useGetCategoryProduct } from "@/app/api/useGetCategoryProduct"
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"
import { FiltersCategory } from "./components/FiltersCategory"
import { ProductCard } from "./components/ProductCard"
import { ProductType } from "@/types/products"
import { useState } from "react"


export default function Category() {
    const params = useParams()
    const { categorySlug } = params
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug)
    const [filterOrigin, setFilterOrigin] = useState('')

    const filteredProducts = result !== null && !loading && (
        filterOrigin === ''
            ? result
            : result.filter((product: ProductType) =>
                product.attributes.origin === filterOrigin)
    )


    return (
        <div className="p-10">
            {result !== null && filteredProducts.length !== 0 && !loading && (
                <h1 className="text-4xl">{result[0].attributes.category.data.attributes.categoryName}</h1>
            )}
            <div className="mt-10">
                <FiltersCategory setFilterOrigin={setFilterOrigin} />
                <div className="flex gap-5 w-full justify-around py-5 px-20">
                    {loading && (
                        <div className="flex gap-5 justify-evenly mt-[-68px] min-h-screen items-center px-[8%]">
                            <p>loading</p>
                        </div>
                    )}
                    {filteredProducts !== null && !loading && (
                        filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                    {filteredProducts !== null && !loading && filteredProducts.length === 0 && (

                        <div className="flex gap-5 justify-evenly mt-[-68px] min-h-screen items-center px-[8%]">
                            <p>No hay este tipo de productos</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}