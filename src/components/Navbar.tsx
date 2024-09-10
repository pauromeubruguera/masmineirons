"use client"
import { useCart } from '@/hooks/use-cart'
import { ShoppingCart, Heart, User, Globe } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { LoginModal } from './LoginModal'
import { useAuthStore } from '@/hooks/auth-store'

export const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false)
    const { isAuthenticated, user, logout } = useAuthStore()
    const [isClient, setIsClient] = useState(false)
    const cart = useCart()

    useEffect(() => {
        // Solo se ejecuta en el cliente
        setIsClient(true)
    }, [])

    if (!isClient) {
        // No renderizar nada hasta que estemos en el cliente
        return null
    }

    return (
        <nav>
            <Link href="/" className='navLink'>Inici</Link>
            <Link href="/category/botella-1-l" className='navLink'>productes</Link>
            <button className='navLink'>blog</button>
            <button className='navLink'>nosaltres</button>
            <button className='navLink'>contacte</button>
            <div className='flex gap-5 items-center'>
                <div>
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
                </div>
                <div>
                    <Link href="/favorites">
                        <Heart strokeWidth="1" className="cursor-pointer" />
                    </Link>
                </div>
                {isAuthenticated ?
                    <div className="group relative cursor-pointer">
                        <div className="flex items-center justify-between">
                            <div className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4" onClick="">
                                <User strokeWidth="1" className="cursor-pointer" />
                            </div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </div>

                        <div
                            className="invisible text-right absolute right-0 z-50 flex w-min flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                            <Link
                                href="/dashboard"
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="/settings"
                                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >
                                Settings
                            </Link>
                            <button
                                className="my-2 block text-right border-t border-red-300 py-1 font-semibold text-red-500 hover:text-red-700 md:mr-2"
                                onClick={() => logout()}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                    :
                    <button onClick={() => setShowLogin(true)}>Login/Signin</button>
                }
                <div className='flex items-center'>
                    <Globe strokeWidth="1" width={20} className="cursor-pointer" />
                    <select className='text-black p-1 rounded bg-transparent' id="sort" value="ca">
                        <option value="ca">CA</option>
                        <option value="es">ES</option>
                        <option value="en">EN</option>
                        <option value="jp">JP</option>
                        <option value="al">AL</option>
                    </select>
                </div>
            </div>
            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
        </nav >
    )
}