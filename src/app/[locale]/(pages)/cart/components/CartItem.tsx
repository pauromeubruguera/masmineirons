"use client"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import { cn } from "@/lib/utils"
import { ProductType } from "@/types/products"
import { X } from "lucide-react"
import { Link } from '@/i18n/routing';

interface CartItemProps {
    product: ProductType
}

export default function CartItem(props: CartItemProps) {
    const { product } = props
    const { removeItem } = useCart()
    return (
        <li className="flex p-6 border-b">
            <Link href={`/product/${product.attributes.slug}`}>
                <img
                    src={`${product.attributes.images.data[0].attributes.url}`}
                    alt='product'
                    className="w-24 h-24 overflow-hidden rounded-md" />
            </Link>
            <div className="px-6">
                <h5>{product.attributes.productName}</h5>
                <p>{formatPrice(product.attributes.price)}</p>
                <p>{product.attributes.quantity} uds</p>
            </div>
            <div>
                <button
                    className={cn("rounded-full flex items-center justify-center border bg-white shadow-md p-1 hover:scale-110 transition")}
                    onClick={() => removeItem(product.id)}>
                    <X size={20} />
                </button>
            </div>
        </li>
    )
}