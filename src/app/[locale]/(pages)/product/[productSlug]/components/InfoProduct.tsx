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
        } else if (!value && quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const sendAddItems = () => {
        product.attributes.quantity = quantity
        addItem(product)
    }

    return (
        <div className="pl-[20%]">
            <div className="">
                <h1 className="text-3xl">{product.attributes.productName}</h1>
                <p className="text-xl my-2">{formatPrice(product.attributes.price)}</p>
            </div>
            {
                product.attributes.stock > 0 ?
                    <>
                        <div className="my-5">
                            <p className="my-5">{product.attributes.description}</p>
                            <div className="my-5">
                                <button className="px-2 mx-2 w-9 bg-[#787c6e] text-black border border-solid border-[#474940] hover:bg-white transition-colors rounded" onClick={() => changeQuantityButton(false)}>-1</button>
                                <input
                                    className="w-10 text-center"
                                    type="number"
                                    value={quantity}
                                    min="1"
                                    max={product.attributes.stock}
                                    onChange={changeQuantity}
                                />
                                <button className="px-2 mx-2 w-9 bg-[#787c6e] text-black border border-solid border-[#474940] hover:bg-white transition-colors rounded" onClick={() => changeQuantityButton(true)}>+1</button>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center my-10">
                            <button className="p-2 bg-[#787c6e] text-black hover:text-white hover:bg-[#474940] transition-colors" onClick={sendAddItems}>Comprar</button>
                            {isAuthenticated &&
                                <Heart strokeWidth="1" className="cursor-pointer" onClick={() => console.log("add to favorite")} />
                            }
                        </div>
                    </>
                    :
                    <div>
                        <p className="my-5">{product.attributes.description}</p>
                        <p className="mt-10 text-red-700">*Producte sense stock</p>
                    </div>
            }

        </div>
    )
}