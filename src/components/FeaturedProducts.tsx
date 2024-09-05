import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts"
import { ProductType } from "@/types/products"
import { ResponseType } from "@/types/response"
import Image from "next/image"

export const FeaturedProducts = () => {
    const { loading, result, error }: ResponseType = useGetFeaturedProducts()
    return (
        <>
            <h2 className="pt-[0%] pr-[0%] pl-[11%]">Productes</h2>
            <section className="pt-10 px-[15%] gap-20">
                {loading && (
                    "loading"
                )}
                {result !== null && (
                    result.map((product: ProductType) => {
                        const { attributes, id } = product
                        return (
                            <div key={id} className="basis-1/3">
                                <div className="text-center flex items-center justify-center flex-col" >
                                    <Image
                                        width={456}
                                        height={814}
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${attributes.images.data[0].attributes.url}`}
                                        alt="" />
                                    <h5>Minairo - {attributes.minairo}</h5>
                                </div>
                            </div>
                        )
                    })
                )}
            </section>
        </>
    )
}