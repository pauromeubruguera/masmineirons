"use client"

import { Link } from '@/i18n/routing'

export const Footer = () => {
    return (
        <footer className="flex justify-evenly pb-16">
            <div>
                <p className="text-sm"><strong>Sobre el producte</strong></p>
                <ul className="ml-5">
                    <li className="text-xs">Recomanacions</li>
                    <li className="text-xs">Subscriu-te</li>
                    <li className="text-xs">Testimonis / Comunitat</li>
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