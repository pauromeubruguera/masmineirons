"use client"
import { useCart } from '@/hooks/use-cart'
import { ShoppingCart, Heart, User, BaggageClaim } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export const Navbar = () => {
    const router = useRouter()
    const cart = useCart()
    return (
        <nav>
            <Link href="/"> <button>inici</button></Link>
            <Link href="/category/botella-1-l"> <button>productes</button></Link>
            <button>blog</button>
            <button>nosaltres</button>
            <button>contacte</button>
            <div className='flex gap-5'>
                <Link href="/cart">
                    {cart.items.length === 0 ?
                        <ShoppingCart strokeWidth="1" className="cursor-pointer" />
                        :
                        <div className='flex gap-1'>
                            <ShoppingCart strokeWidth={2} fill='true' className='cursor-pointer' />
                            <span>{cart.items.length}</span>
                        </div>
                    }
                </Link>
                <Link href="/favorites">
                    <Heart strokeWidth="1" className="cursor-pointer" />
                </Link>
                <Link href="/dashboard">
                    <User strokeWidth="1" className="cursor-pointer" />
                </Link>
            </div>

        </nav>
    )
}