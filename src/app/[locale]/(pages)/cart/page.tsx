"use client"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import CartItem from "./components/CartItem"
import { loadStripe } from "@stripe/stripe-js"
import { makePaymentRequest } from "@/app/api/payment"
import Cookies from 'js-cookie'

export default function Cart() {
    const { items, removeAll } = useCart()
    const prices = items.map((product => product.attributes.price*product.attributes.quantity))
    const totalPrice = prices.reduce((total, price) => total + price, 0)
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

    console.log(Date.now())
    const buyStripe = async () => {
        try {
            const stripe = await stripePromise
            const res = await makePaymentRequest.post("/api/orders", {
                products: items,
                userToken: Cookies.get('jwt')
            })
            await stripe?.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
            removeAll()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="p-10">
            <h1>Shopping Cart</h1>
            <div className="flex gap-5">
                <div>
                    {items.length === 0 && (
                        <p>no hay productos</p>
                    )}
                    <ul>
                        {items.map((item) => (
                            <CartItem key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
                <div>
                    <div>
                        <p>Order summary</p>
                        <hr />
                        <div className="flex gap-2">
                            <p>order total</p>
                            <p>{formatPrice(totalPrice)}</p>
                        </div>
                        <div>
                            <button onClick={buyStripe}>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}