
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
            <div className="flex flex-col gap-1">
                <button><img className="w-10 h-5" src="images/ca.png" alt="" /></button>
                <button><img className="w-10 h-5" src="images/es.jpg" alt="" /></button>
                <button><img className="w-10 h-5" src="images/gb.png" alt="" /></button>
                <button><img className="w-10 h-5" src="images/al.png" alt="" /></button>
                <button><img className="w-10 h-5" src="images/jp.png" alt="" /></button>
            </div>
        </footer>
    )
}