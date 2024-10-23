import { useGetFeaturedProducts } from "@/app/api/useGetFeaturedProducts"
import { ProductType } from "@/types/products"
import { ResponseType } from "@/types/response"
import Image from "next/image"
import { Link } from '@/i18n/routing'

export const FeaturedProducts = () => {
    const { loading, result, error }: ResponseType = useGetFeaturedProducts()
    return (

        <section className="pt-10 px-[15%] relative">
            <div className="backgroundImage"></div>
            <h2 className="pb-[5%] pr-[0%] pl-[0%]">Productes</h2>
            <div className="flex justify-evenly gap-52 relative">
                {loading && (
                    "loading"
                )}
                {result !== null && (
                    result.map((product: ProductType) => {
                        const { attributes, id } = product
                        return (
                            <div key={id} className="basis-1/3">
                                <div className="text-center flex items-center justify-center flex-col" >
                                    <Link href={`/category/botella-1-l`}>
                                        <Image
                                            width={456}
                                            height={814}
                                            src={`${attributes.images.data[0].attributes.url}`}
                                            alt="" />
                                        <h5>Minairo - {attributes.minairo}</h5>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </section>

    )
}