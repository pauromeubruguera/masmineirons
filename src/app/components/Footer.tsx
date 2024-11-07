"use client"

import { Link } from '@/i18n/routing'

export const Footer = () => {
    return (
        <footer className="flex justify-evenly border border-t-black pb-16 pt-16">
            <div>
                <p className="text-sm"><strong>Sobre el producte</strong></p>
                <ul className="ml-5">
                    <li className="text-xs">Recomanacions</li>
                    <li className="text-xs">Subscriu-te</li>
                    <li className="text-xs">Testimonis / Comunitat</li>
                </ul>
                <ul className="ml-10 mt-4">
                    <li className="text-xs">Catas</li>
                    <li className="text-xs">Clientes satisfechos</li>
                    <li className="text-xs">Expertos reconocidos</li>
                </ul>
            </div>
            <div>
                <p className="text-sm"><strong>Necessites ajuda?</strong></p>
                <ul className="ml-5">
                    <li className="text-xs"><Link className='hover:underline' href='/legal'>Avis Legal</Link></li>
                    <li className="text-xs">Contacta</li>
                </ul>
            </div>
            <div>
                <p className="text-sm"><strong>Segueix-nos</strong></p>
                <ul className="ml-5">
                    <li className="text-xs">Instagram</li>
                    <li className="text-xs">X</li>
                    <li className="text-xs">Youtube</li>
                </ul>
            </div>
            <div>
                <p className="text-sm"><strong>Opcions d&apos;accessibilitat</strong></p>
            </div>
        </footer>
    )
}