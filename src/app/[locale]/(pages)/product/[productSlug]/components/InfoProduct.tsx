import { useAuthStore } from "@/hooks/auth-store"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/products"
import { Heart } from 'lucide-react'
import { useState } from "react"

export type InfoProductProps = {
    product: ProductType
}

export const InfoProduct = (props: InfoProductProps) => {
    const { addItem, items } = useCart()
    const { product } = props
    const { isAuthenticated, user, logout } = useAuthStore()
    const [quantity, setQuantity] = useState(1);

    const changeQuantity = (e: any) => {
        const nextQuantity = Number(e.target.value)
        if ((nextQuantity <= product.attributes.stock) && (nextQuantity > 0)) {
            setQuantity(Number(e.target.value))
        } else if (nextQuantity <= 0) {
            setQuantity(1)
        } else {
            setQuantity(product.attributes.stock)
        }
    }
    const changeQuantityButton = (value: boolean) => {

        if (value && quantity < product.attributes.stock) {
            setQuantity(quantity + 1)
        } else if(!value && quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const sendAddItems = () => {
        product.attributes.quantity = quantity
        addItem(product)
    }

    return (
        <div>
            <div className="">
                <h1 className="text-3xl">{product.attributes.productName}</h1>
                <p className="text-xl my-2">{formatPrice(product.attributes.price)}</p>
            </div>
            <div className="mt-5">
                <p>{product.attributes.description}</p>

                <div>
                    <button onClick={() => changeQuantityButton(false)}>-1</button>
                    <input
                        type="number"
                        value={quantity}
                        min="1"
                        max={product.attributes.stock}
                        onChange={changeQuantity}
                    />
                    <button onClick={() => changeQuantityButton(true)}>+1</button>
                </div>
            </div>
            <div className="flex gap-3 items-center mt-10">

                <button className="p-2 bg-green-800" onClick={sendAddItems}>Comprar</button>
                {isAuthenticated &&
                    <Heart strokeWidth="1" className="cursor-pointer" onClick={() => console.log("add to favorite")} />
                }
            </div>
        </div>
    )
}