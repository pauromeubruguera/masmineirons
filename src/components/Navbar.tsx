"use client"
import { useCart } from '@/hooks/use-cart'
import { ShoppingCart, Heart, User, Globe, ChevronDown } from 'lucide-react'
import { Link } from '@/i18n/routing';
import { useState, useEffect, ChangeEvent, useTransition } from 'react'
import { LoginModal } from './LoginModal'
import { useAuthStore } from '@/hooks/auth-store'
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false)
    const { isAuthenticated, user, logout } = useAuthStore()
    const [isClient, setIsClient] = useState(false)
    const cart = useCart()
    const [isPending, startTransition] = useTransition()
    const t = useTranslations('Navbar')
    const router = useRouter()
    const localActive = useLocale()

    const onLanguageChange = (nextLocale: string) => {
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(/^\/[a-z]{2}\//, `/${nextLocale}/`); 
        router.push(newPath)
    }

    useEffect(() => {
        // Solo se ejecuta en el cliente
        setIsClient(true)
    }, [])

    if (!isClient) {
        // No renderizar nada hasta que estemos en el cliente
        return null
    }

    return (
        <nav className='bg-[#787c6e]'>
            <Link href="/" className='logo'>Mas Mineirons</Link>
            <Link href="/" className='navLink'>{t('home')}</Link>
            <Link href="/category/botella-1-l" className='navLink'>{t('products')}</Link>
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
                            <div className="menu-hover my-2 py-2 text-base font-medium text-black">
                                <User strokeWidth="1" className="cursor-pointer" />
                            </div>
                            <span>
                                <ChevronDown strokeWidth="1" className="cursor-pointer" />
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
                <div className="group relative cursor-pointer">
                    <div className="flex gap-1 items-center justify-between">
                        <div className="menu-hover my-2 py-2 text-base font-medium text-black">
                            <Globe strokeWidth="1" width={20} className="cursor-pointer" />
                        </div>
                        <div className='uppercase'>
                            {localActive}
                        </div>
                        <div>
                            <ChevronDown strokeWidth="1" className="cursor-pointer" />
                        </div>
                    </div>

                    <div
                        className="invisible text-right absolute right-0 z-50 flex w-min flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible transition-opacity">
                        <button
                            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            onClick={() => onLanguageChange("ca")}
                        >
                            CA
                        </button>
                        <button
                            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            onClick={() => onLanguageChange("es")}
                        >
                            ES
                        </button>
                        <button
                            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            onClick={() => onLanguageChange("en")}
                        >
                            EN
                        </button>
                        <button
                            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            onClick={() => onLanguageChange("jp")}
                        >
                            JP
                        </button>
                        <button
                            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            onClick={() => onLanguageChange("de")}
                        >
                            DE
                        </button>

                    </div>
                </div>
            </div>
            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
        </nav >
    )
}