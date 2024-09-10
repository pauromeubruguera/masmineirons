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
    return (
        <div>
            <div className="flex">
                <h1>{product.attributes.productName}</h1>
                <p>{formatPrice(product.attributes.price)}</p>
            </div>
            <div>
                <p>{product.attributes.description}</p>
                <button className="p-2 bg-green-800" onClick={() => addItem(product)}>Comprar</button>
                <Heart strokeWidth="1" className="cursor-pointer" onClick={() => console.log("add to favorite")} />
            </div>
        </div>
    )
}