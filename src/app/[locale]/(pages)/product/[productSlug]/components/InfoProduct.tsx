import { useAuthStore } from "@/hooks/auth-store"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/products"
import { Heart } from 'lucide-react'

export type InfoProductProps = {
    product: ProductType
}

export const InfoProduct = (props: InfoProductProps) => {
    const { addItem, items } = useCart()
    const { product } = props
    const { isAuthenticated, user, logout } = useAuthStore()
    return (
        <div>
            <div className="">
                <h1 className="text-3xl">{product.attributes.productName}</h1>
                <p className="text-xl my-2">{formatPrice(product.attributes.price)}</p>
            </div>
            <div className="mt-5">
                <p>{product.attributes.description}</p>
            </div>
            <div className="flex gap-3 items-center mt-10">

                <button className="p-2 bg-green-800" onClick={() => addItem(product)}>Comprar</button>
                {isAuthenticated &&
                    <Heart strokeWidth="1" className="cursor-pointer" onClick={() => console.log("add to favorite")} />
                }
            </div>
        </div>
    )
}