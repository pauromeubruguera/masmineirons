"use client"
import { useCart } from '@/hooks/use-cart'
import { ShoppingCart, Heart, User, Globe, ChevronDown } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useState, useEffect, useTransition } from 'react'
import { LoginModal } from './LoginModal'
import { useAuthStore } from '@/hooks/auth-store'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useGetCategories } from '@/app/api/useGetCategories'
import { ResponseType } from "@/types/response"
import { CategoryType } from '@/types/category'
import "@/styles/navbar.css"


export const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false)
    const { isAuthenticated, user, logout } = useAuthStore()
    const [isClient, setIsClient] = useState(false)
    const cart = useCart()
    const t = useTranslations('Navbar')
    const router = useRouter()
    const localActive = useLocale()
    const { result, loading }: ResponseType = useGetCategories()

    const onLanguageChange = (nextLocale: string) => {
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(/^\/[a-z]{2}(\/|$)/, `/${nextLocale}/`);
        router.push(newPath)
    }

    const handleLogout = () => {
        logout()
        router.push('/')
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
            <Link href="/" className='flex items-center h-[100%] text-black hover:text-white hover:bg-[#474940] px-2 transition-colors'>
                <span className='logo hover:text-white'>Mas Minairons</span>
            </Link>
            <Link href="/" className='flex items-center h-[100%] text-black hover:text-white hover:bg-[#474940] px-2 transition-colors'>
                <span className='navLink'>{t('home')}</span>
            </Link>
            <div className="group relative cursor-pointer flex items-center h-[100%]">
                <div className='flex items-center h-[100%] text-black hover:text-white hover:bg-[#474940] px-2 transition-colors'>
                    <div className='navLink'>{t('products')}</div>
                </div>
                <div
                    className="invisible text-right absolute left-0 top-[68px] z-50 flex w-min min-w-[100%] flex-col bg-gray-100 py-0 px-0 opacity-0 group-hover:opacity-100 text-gray-800 shadow-xl group-hover:visible transition-opacity">
                    {result !== null && !loading && (
                        result.map((category: CategoryType) => (
                            <Link
                                href={`/category/${category.attributes.slug}`}
                                key={category.id}
                                className="py-3 block border-b border-gray-100 font-semibold text-gray-500 hover:text-black hover:bg-[#bebab3] px-4 text-nowrap">
                                {category.attributes.categoryName}
                            </Link>
                        ))
                    )}
                </div>
            </div>
            <div className="group relative cursor-pointer flex items-center h-[100%]">
                <div className='flex items-center h-[100%] text-black hover:text-white hover:bg-[#474940] px-2 transition-colors'>
                    <div className='navLink'>Nosaltres</div>
                </div>
                <div className="invisible text-right absolute left-0 top-[68px] z-50 flex w-min min-w-[100%] flex-col bg-gray-100 py-0 px-0 opacity-0 group-hover:opacity-100 text-gray-800 shadow-xl group-hover:visible transition-opacity">
                    <Link
                        href='/history'
                        className="py-3 block border-b border-gray-100 font-semibold text-gray-500 hover:text-black hover:bg-[#bebab3] px-4 text-nowrap">
                        History
                    </Link>
                    <Link
                        href='/history'
                        className="py-3 block border-b border-gray-100 font-semibold text-gray-500 hover:text-black hover:bg-[#bebab3] px-4 text-nowrap">
                        Qui Som
                    </Link>
                    <Link
                        href='/history'
                        className="py-3 block border-b border-gray-100 font-semibold text-gray-500 hover:text-black hover:bg-[#bebab3] px-4 text-nowrap">
                        Fototeca
                    </Link>
                </div>
            </div>
            <button className='flex items-center h-[100%] text-black hover:text-white hover:bg-[#474940] px-2 transition-colors'>
                <span className='navLink'>blog</span>
            </button>
            <button className='flex items-center h-[100%] text-black hover:text-white hover:bg-[#474940] px-2 transition-colors'>
                <span className='navLink'>contacte</span>
            </button>
            <div className='flex gap-5 items-center h-[100%] '>
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
                    <div className="group relative cursor-pointer flex items-center h-[100%]">
                        <div className="flex items-center justify-between">
                            <div className="menu-hover my-2 py-2 text-base font-medium text-black">
                                <User strokeWidth="1" className="cursor-pointer" />
                            </div>
                            <span>
                                <ChevronDown strokeWidth="1" className="cursor-pointer" />
                            </span>
                        </div>

                        <div
                            className="invisible text-right absolute right-0 top-[68px] z-50 flex w-min flex-col bg-gray-100 py-0 px-0 opacity-0 group-hover:opacity-100 text-gray-800 shadow-xl group-hover:visible transition-opacity">
                            <Link
                                href="/dashboard"
                                className="py-3 block border-b border-gray-100 font-semibold text-gray-500 hover:text-black hover:bg-[#bebab3] px-4 text-nowrap"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="/yourorders"
                                className="py-3 block border-b border-gray-100 font-semibold text-gray-500 hover:text-black hover:bg-[#bebab3] px-4 text-nowrap"
                            >
                                Your orders
                            </Link>
                            <button
                                className="py-3 block text-right border-t border-red-300 font-semibold text-red-500 hover:text-white hover:bg-red-500 px-4 text-nowrap"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                    :
                    <button onClick={() => setShowLogin(true)}>Login/Signin</button>
                }
                <div className="group relative cursor-pointer flex items-center h-[100%]">
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
                        className="invisible text-right absolute right-0 top-[68px] z-50 flex w-min flex-col bg-gray-100 py-0 px-0 opacity-0 group-hover:opacity-100 text-gray-800 shadow-xl group-hover:visible transition-opacity">
                        <button
                            className="py-3 block border-b border-gray-100 font-semibold text-gray-500 hover:text-black hover:bg-[#bebab3] px-4 text-nowrap"
                            onClick={() => onLanguageChange("ca")}
                        >
                            CA
                        </button>
                        <button
                            className="py-3 block border-b border-gray-100 font-semibold text-gray-500 hover:text-black hover:bg-[#bebab3] px-4 text-nowrap"
                            onClick={() => onLanguageChange("es")}
                        >
                            ES
                        </button>
                        <button
                            className="py-3 block border-b border-gray-100 font-semibold text-gray-500 hover:text-black hover:bg-[#bebab3] px-4 text-nowrap"
                            onClick={() => onLanguageChange("en")}
                        >
                            EN
                        </button>
                        <button
                            className="py-3 block border-b border-gray-100 font-semibold text-gray-500 hover:text-black hover:bg-[#bebab3] px-4 text-nowrap"
                            onClick={() => onLanguageChange("jp")}
                        >
                            JP
                        </button>
                        <button
                            className="py-3 block border-b border-gray-100 font-semibold text-gray-500 hover:text-black hover:bg-[#bebab3] px-4 text-nowrap"
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