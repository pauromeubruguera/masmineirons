import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/products"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type ProductCardProps = {
    product: ProductType
}

export const ProductCard = (props: ProductCardProps) => {
    const { product } = props
    return (
        <Link href={`/product/${product.attributes.slug}`} className="w-1/6">
            <div>
                <p>{product.attributes.productName}</p>
                <p>{product.attributes.description}</p>
                <p>{formatPrice(product.attributes.price)}</p>
            </div>
            <div className="carrousel">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={true}
                    pagination={true}
                    modules={[Navigation, Pagination]}
                >
                    {product.attributes.images.data.map((image) => (
                        <SwiperSlide key={image.id}>
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`} alt="img" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Link>
    )
}