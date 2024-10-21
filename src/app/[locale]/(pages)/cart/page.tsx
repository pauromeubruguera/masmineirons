"use client"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import CartItem from "./components/CartItem"
import { loadStripe } from "@stripe/stripe-js"
import { makePaymentRequest } from "@/app/api/payment"
import Cookies from 'js-cookie'
import { useState } from "react"

export default function Cart() {
    const { items, removeAll } = useCart()
    const prices = items.map((product => product.attributes.price * product.attributes.quantity))
    const totalPrice = prices.reduce((total, price) => total + price, 0)
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
        country: ''
    })

    const [formActive, setFormActive] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const buyStripe = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const stripe = await stripePromise
            const res = await makePaymentRequest.post("/api/orders", {
                products: items,
                userToken: Cookies.get('jwt'),
                address: formData
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
        <div className="mt-[68px] px-[10%]">
            {!formActive ?
                <div className="py-10">
                    <h2>Shopping Cart</h2>
                    <div className="flex gap-5">
                        <div className="w-3/6">
                            {items.length === 0 && (
                                <p>no hay productos</p>
                            )}
                            <ul>
                                {items.map((item) => (
                                    <CartItem key={item.id} product={item} />
                                ))}
                            </ul>
                        </div>
                        <div className="w-3/6">
                            <div>
                                <p className="text-lg my-5"><strong>Order summary</strong></p>
                                <hr />
                                {items.map((item) => (
                                    <p key={item.id}>{item.attributes.productName}: {formatPrice(item.attributes.price * item.attributes.quantity)}</p>
                                ))}
                                <hr />
                                <div className="flex gap-2 mt-5">
                                    <p><strong>Order total</strong></p>
                                    <p>{formatPrice(totalPrice)}</p>
                                </div>
                                <div>
                                    <button className="p-2 mt-5 bg-[#787c6e] text-black hover:text-white hover:bg-[#474940] transition-colors" onClick={() => { setFormActive(true) }}>Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                :
                <div>
                    <h2>Send Product</h2>
                    <button onClick={() => { setFormActive(false) }}>Back to cart</button>
                    <form onSubmit={buyStripe}>
                        <div>
                            <label htmlFor="address">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="postalCode">Postal Code:</label>
                            <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="country">Country:</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit">Comprar</button>
                    </form>
                </div>
            }


        </div>
    )

}