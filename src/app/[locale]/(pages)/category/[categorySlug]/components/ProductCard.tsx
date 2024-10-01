import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/products"
import Image from "next/image";
import { Link } from '@/i18n/routing';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type ProductCardProps = {
    product: ProductType
}

export const ProductCard = (props: ProductCardProps) => {
    const { product } = props
    return (
        <Link href={`/product/${product.attributes.slug}`} className="relative basis-2/6 p-5">
            <div className="carrousel relative">
                <Image
                    src={`${product.attributes.images.data[0].attributes.url}`}
                    alt="img"
                    width={product.attributes.images.data[0].attributes.width}
                    height={product.attributes.images.data[0].attributes.height}
                />
                <div className="absolute hover:bg-opacity-40 top-0 h-full w-full z-10 bg-black bg-opacity-0"></div>
            </div>
            <div>
                <h5 className="text-xl">{product.attributes.productName}</h5>
                <p className="text-xs">{product.attributes.description}</p>
                <p className="text-sm">{formatPrice(product.attributes.price)}</p>
            </div>
        </Link>
    )
}