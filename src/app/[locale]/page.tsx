"use client"
import Image from "next/image"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import './app.css'
import { FeaturedProducts } from "@/components/FeaturedProducts"

export default function Home() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <div>
                <section>
                    {isClient && (
                        <ReactPlayer
                            url='media\video_home.mp4'
                            controls
                            muted
                            playing={true}
                            loop
                            width="100%"
                            height="auto"
                        />
                    )}

                </section>
                <section>
                    <div className="pt-[3.3%] pr-[2%] pl-[8%] w-6/12">
                        <p>
                            Una nit d’estiu de l’any 1917, mentre voltava pel camp, en Pau Molina va trobar cent
                            minairons sota una fulla de pericó.
                        </p>
                        <p>
                            Obedients a la seva naturalesa, els minairons van dir a en Pau que l’ajudarien amb
                            qualsevol cosa que ell els hi demanés:<br />
                            construir un fort, un pont, o una casa; aplanar muntanyes o dividir rius.
                            Tot allò que volgués, tot allò que més desitgés, mentre ho pogués imaginar, ho farien.
                            Pau Molina, potser perquè tenia set anys i un cor massa tendre per les ambicions
                            desmesurades,
                            va respondre que el que més li agradava era l’hora
                            de berenar, quan la seva mare li donava un tros de pa sucat amb oli, i què era allò
                            l’únic que volia.
                        </p>
                        <p>
                            Els minairons, desitjosos per complaure’l, van fer créixer cent mil oliveres d’on van
                            treure un oli que, quan el tastés, fins i tot després de molts anys, podria tornar a palpar
                            la tendresa d’aquelles tardes d’estiu. I la infància.
                        </p>
                        <p>I la màgia de tot allò.</p>
                        <p>A partir d’aquell dia, cada any, i complint amb la seva promesa, els minairons surten
                            sota l’herba de Sant Joan per donar a tots els descendents d’en Pau Molina el seu oli
                            més especial.</p>
                    </div>
                    <div className="w-6/12">
                        <Image
                            width={3504}
                            height={3272}
                            className="mt-[-20%] pr-[14%] pl-[13%]"
                            src="/minairons/Minairons_conills_1.png"
                            alt="" />
                    </div>
                </section>
                <section>
                    <div className="pt-[10%] pr-[5%] pl-[28%] w-8/12">
                        <Image
                            width={3508}
                            height={4961}
                            className="pt-[0%] pr-[42%] pl-[0%] left-[0%] bottom-0 minairo"
                            src="/minairons/Minairo_2_SOLIVENC.png"
                            alt="" />
                        <p>
                            No contents en fer només un tipus d’oli, els minairons en
                            van fer tres que li despertessin noves sensacions i records.
                        </p>
                        <h3>Sevillenca</h3>
                        <p>
                            Creada pel minairó Solivenc.
                        </p>
                        <p>
                            De sabor dolç, però equil·librat: afruitat mitjà de tipus verd
                            i de gran complexitat aromàtica, amb notes madures com
                            el plàtan, poma, o la maduixa, i vegetals que recorden al
                            fonoll i a la gespa tallada.
                            Ametllat a la boca i respectuós amb la barreja d’altres
                            sabors de la cuina.
                        </p>
                    </div>
                    <div className="w-4/12">
                        <div className="pt-[7.5%] pr-[0%] pl-[0%]">
                            <Image
                                width={456}
                                height={814}
                                className="pr-[10%]"
                                src="/images/botella_oli.jpg"
                                alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="pt-[15%] pr-[5%] pl-[28%] w-8/12">
                        <Image
                            width={3508}
                            height={4961}
                            className="pt-[0%] pr-[52%] pl-[0%] left-[0%] bottom-0 minairo"
                            src="/minairons/Minairo_4_MORRIS.png"
                            alt="" />
                        <h3>Morruda</h3>
                        <p>
                            Creada pel minairó Morris.
                        </p>
                        <p>
                            D’entrada és picant, alhora que amarg
                            i astringent, però la sensació és fresca gràcies
                            a les seves notes vegetals.
                            Un oli potent i agradable a la vegada.
                        </p>
                    </div>
                    <div className="w-4/12">
                        <div className="pt-[7.5%] pr-[0%] pl-[0%]">
                            <Image
                                width={456}
                                height={814}
                                className="pr-[10%]"
                                src="/images/botella_oli.jpg"
                                alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="pt-[15%] pr-[5%] pl-[28%] w-8/12">
                        <Image
                            width={3508}
                            height={4961}
                            className="pt-[2%] pr-[49%] pl-[0%] mb-[-12%] left-0 bottom-0 minairo"
                            src="/minairons/Minairo_3.png"
                            alt="" />
                        <h3>Farga</h3>
                        <p>
                            Creada pel minairó Fargot.
                        </p>
                        <p>
                            Armoniós amb un punt dolç.
                            Amb notables pinzellades verdes, com l’herba recent
                            tallada, i afruitat, amb notes de plàtan, carxofa i també de
                            nous
                        </p>
                    </div>
                    <div className="w-4/12">
                        <div className="pt-[7.5%] pr-[0%] pl-[0%]">
                            <Image
                                width={456}
                                height={814}
                                className="pr-[10%]"
                                src="/images/botella_oli.jpg"
                                alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="pt-[7%] pr-[6%] pl-[11%] singleCol">
                        <p>
                            L&apos;oli <strong>Mas Minairons</strong> és un producte de <strong>qualitat superior</strong> que es distingeix per diverses característiques úniques i acuradament seleccionades, començant pel fet
                            que prové d&apos;oliveres centenàries.
                        </p>
                        <p>
                            Aquests arbres, cultivats durant generacions al mateix sòl fèrtil, han desenvolupat un sistema radicular profund i robust que els permet extreure nutrients de les
                            capes més riques del terreny. Aquesta connexió íntima amb la terra es tradueix en un oli amb un perfil de <strong>sabor complex i equilibrat</strong>, carregat de notes aromàtiques que només
                            poden aconseguir-se a través de dècades, si no segles, de cultiu.
                        </p>
                        <p>
                            La qualitat excepcional de l&apos;oli <strong>Mas Minairons</strong> també és deguda als <strong>mètodes naturals i ecològics</strong> de cultiu que emprem. A les nostres finques, rebutgem l&apos;ús
                            de pesticides i fertilitzants químics, optant per pràctiques agrícoles sostenibles que respecten el medi ambient i la biodiversitat local. Aquest enfocament no només protegeix
                            la salut del sòl i de les oliveres, sinó que també assegura que l&apos;oli resultant estigui <strong>lliure de contaminants i químics indesitjats</strong>. Cada gota del nostre oli és un
                            testimoni de la nostra dedicació a la puresa i la sostenibilitat, cosa que es reflecteix en el seu sabor i en la seva qualitat inigualable.
                        </p>
                        <p>
                            A més, el nostre oli és un aliment <strong>ric en polifenols</strong>, compostos antioxidants que són altament beneficiosos per a la salut. Els polifenols ajuden a <strong>combatre el
                                estrès oxidatiu</strong> al cos, <strong>reduint el risc de malalties</strong> cardiovasculars i altres problemes de salut crònics.
                            En contrast, els olis provinents de cultius intensius se centren principalment en la quantitat més que no pas en la qualitat. Aquests mètodes de cultiu solen implicar-ne l&apos;ús
                            d&apos;arbres joves plantats en alta densitat, que són collits prematurament per maximitzar la producció. Els fertilitzants i pesticides químics s&apos;utilitzen de
                            manera rutinària per assegurar alts rendiments, però a costa del sabor i la salut de loli.
                            A més, la recol·lecció mecànica i el processament a gran escala sovint resulten en olis amb sabors plans i menys complexos, mancant de les característiques
                            distintives que fan que un oli sigui veritablement excepcional. La presència de polifenols també sol ser menor en aquests olis, cosa que redueix els seus beneficis
                            per a la salut.
                        </p>
                        <p>
                            L&apos;oli <strong>Mas Minairons</strong> és el resultat d&apos;un procés meticulós que comença al camp i culmina al molí. La collita es realitza seleccionant només les olives
                            al punt òptim de maduració, la qual cosa garanteix que cada oliva aporti el millor de si mateixa al producte final. El <strong>prensat en fred</strong>, realitzat poques hores després
                            de la collita, preserva els compostos volàtils, antioxidants i polifenols que són responsables del sabor i beneficis per a la salut de l&apos;oli. Aquesta cura a cada
                            etapa del procés no té comparació amb els mètodes industrials que prioritzen leficiència i el volum de producció.
                        </p>
                        <p>
                            En resum, l&apos;oli <strong>Mas Minairons</strong> es distingeix pel seu origen en <strong>oliveres centenàries</strong> i la seva producció a través de mètodes ecològics i sostenibles. Aquests factors, juntament amb
                            una atenció meticulosa a cada detall del procés asseguren un producte de qualitat superior que ofereix una experiència sensorial i nutritiva única.
                        </p>
                    </div>
                </section>
                <FeaturedProducts />
                <section>
                    <div className="w-5/12">
                        <Image
                            width={3508}
                            height={4961}
                            className="pt-[8%] pr-[1%] pl-[30%]"
                            src="/images/bag_in_box.png"
                            alt="" />
                    </div>
                    <div className="pt-[6%] pr-[7%] pl-[7%] w-7/12">
                        <div className="text-center pb-[5%]">
                            <h4>MAS MINAIRONS</h4>
                            <h6>EVOO Extra Virgin Olive oil </h6>
                            <div className="text-[9px] leading-[11px];">
                                Formato especial 3L
                            </div>
                            <div className="text-[9px] leading-[11px];">(Bag in Box)</div>
                        </div>
                        <p>
                            Una de les innovacions en la conservació de l&apos;oli d&apos;oliva és el sistema “bag in box”
                            (BIB). Aquest mètode consisteix en una bossa flexible i hermètica continguda dins una caixa
                            de cartró - En el nostre cas, de fusta-. La bossa està equipada amb una aixeta dispensadora
                            que permet extreure l&apos;oli sense exposar-lo a l&apos;aire ni a la llum, dos dels factors principals
                            que contribueixen a la seva oxidació i deteriorament.
                        </p>
                        <p>
                            Els beneficis del sistema bag in box per a la conservació de l&apos;oli d&apos;oliva són múltiples:
                        </p>
                        <ul>
                            <li>
                                <strong>1. Protecció contra l&apos;oxidació:</strong> En evitar el contacte de l&apos;oli amb l&apos;aire, es redueix
                                significativament el risc d&apos;oxidació, mantenint el sabor i les propietats nutritives
                                oli durant més temps.
                            </li>
                            <li>
                                <strong>2. Protecció contra l&apos;oxidació:</strong> En evitar el contacte de l&apos;oli amb l&apos;aire, es redueix
                                significativament el risc d&apos;oxidació, mantenint el sabor i les propietats nutritives
                                oli durant més temps.
                            </li>
                            <li>
                                <strong>3. Facilitat d&apos;ús:</strong> L&apos;aixeta dispensadora permet una dosificació precisa i còmoda, sense
                                necessitat d&apos;obrir i tancar constantment l&apos;envàs.
                            </li>
                            <li>
                                <strong>4. Sostenibilitat:</strong> El “bag in box” és una opció més ecològica, ja que redueix l&apos;ús de
                                plàstics i facilita el reciclatge del cartró.
                            </li>
                        </ul>
                        <p>
                            En resum, el sistema “bag in box” no només ajuda a prolongar la vida útil de l&apos;oli de
                            oliva, sinó que també contribueix a mantenir la seva qualitat i sabor, oferint una solució
                            pràctica i sostenible per al seu emmagatzematge.
                        </p>
                    </div>
                </section>
                <section>
                    {isClient && (
                        <ReactPlayer
                            url='media\video_home.mp4'
                            controls
                            muted
                            loop
                            width="100%"
                            height="auto"
                        />
                    )}
                </section>
                <section>
                    <div className="w-5/12">
                        <Image
                            width={3508}
                            height={4961}
                            className="pt-[4%] pr-[0%] pl-[30%]"
                            src="/minairons/Minairo_1-pajaro_v2.png"
                            alt="" />
                    </div>
                    <div className="pt-[7.5%] pr-[6%] pl-[4%] w-7/12">
                        <h2>Nosaltres</h2>
                        <p className="mt-5">
                            <strong>Mas Minairons: Passió, Tradició i Natura</strong>
                        </p>
                        <p>
                            Benvinguts a Mas Minairons, una empresa familiar catalana dedicada a la producció d´oli
                            ecològic de la més alta qualitat. El nostre nom, inspirat en les diminutes i màgiques criatures del
                            folklore català, els Minairons o Menairons, reflecteix el nostre compromís amb la natura, la tradició
                            i la màgia de la nostra terra.
                        </p>
                        <p className="mt-5">
                            <strong>La nostra Història</strong>
                        </p>
                        <p>
                            Mas Minairons va néixer de la passió de la nostra família per l&apos;agricultura ecològica, els productes de
                            qualitat i amor per la nostra terra. Hem cultivat oliveres al cor de Catalunya, seguint
                            pràctiques respectuoses amb el medi ambient i mantenint viva la tradició oliverera de la nostra
                            regió.
                        </p>
                        <p className="mt-5">
                            <strong>Què Fem</strong>
                        </p>
                        <p>
                            Produïm oli d´oliva verge extra ecològic, amb l´objectiu d´oferir un producte pur, saludable
                            i ple de sabor. El nostre oli s&apos;elabora exclusivament amb olives cultivades als nostres propis
                            camps, collides en el moment òptim de maduració i premsades en fred per conservar-les totes
                            propietats i aromes.
                        </p>
                    </div>
                </section>
                <section>
                    <div className="w-7/12 pt-[5%] pr-[2%] pl-[8%]">
                        <p className="mt-5">
                            <strong>La nostra Filosofia</strong>
                        </p>
                        <p>
                            A Mas Minairons, creiem en una agricultura sostenible que respecta el cicle natural de la terra. Utilitzem
                            tècniques tradicionals combinades amb innovacions ecològiques per assegurar que les nostres oliveres creixin
                            sans i forts, sense la necessitat de pesticides ni productes químics. Cada gota del nostre oli és el
                            resultat d&apos;un treball acurat i dedicat, que comença al camp i acaba a taula.
                        </p>
                        <p className="mt-5">
                            <strong>El nostre Compromís</strong>
                        </p>
                        <p>
                            La nostra missió és oferir un producte de qualitat excepcional, que no només delecti el seu paladar sinó que
                            també contribueixi al benestar del planeta. Estem compromesos amb la sostenibilitat, la biodiversitat
                            i la protecció del nostre entorn. Per això, cada ampolla de Mas Minairons és un reflex del nostre esforç
                            per cuidar la terra que estimem i deixar un llegat de salut i tradició per a les futures generacions.
                        </p>
                        <p>
                            Esperem que el nostre oli ecològic sigui més que un simple ingredient a la cuina; desitgem que
                            sigui una invitació a descobrir i apreciar la riquesa de la natura i la dedicació que posem en
                            cada pas del nostre procés.
                        </p>
                        <p className="text-center">
                            Gràcies per confiar en Mas Minairons i formar part de la nostra història.
                        </p>
                    </div>
                    <div className="w-5/12">
                        <Image
                            width={3508}
                            height={4961}
                            className="pt-[0%] pr-[30%] pl-[0%]"
                            src="/minairons/Minairo_1-pajaro_v2.png"
                            alt="" />
                    </div>
                </section>
                <section>
                    {isClient && (
                        <ReactPlayer
                            url='media\video_home.mp4'
                            controls
                            muted
                            loop
                            width="100%"
                            height="auto"
                        />
                    )}
                </section>
                <section>
                    <div className="w-4/12">
                        <Image
                            width={3508}
                            height={4961}
                            className="pt-[0%] pr-[2%] pl-[34%]"
                            src="/minairons/Minairo_5_got.png"
                            alt="" />
                    </div>
                    <div className="w-8/12 pt-[0%] pr-[18%] pl-[2%]">
                        <h2>TITOL DE L&apos;ENTRADA</h2>
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum lacus a elit laoreet consectetur. Integer non viverra velit. Curabitur at diam non purus
                            tincidunt fermentum vel ac felis. Nullam dignissim arcu ac erat convallis, et condimentum orci viverra. Nullam facilisis varius felis. Nam lacinia, nisi id gravida ornare,
                            leo nisl imperdiet velit, nec placerat nibh erat ac nunc. Aenean vitae dui nec velit accumsan iaculis. Praesent ultricies iaculis urna, nec condimentum erat tincidunt nec.
                        </p>
                        <p>
                            Ut accumsan semper aliquam. Sed id efficitur nisl. In venenatis malesuada sapien, consequat lacinia urna commodo quis. Vivamus in ligula dui. Morbi luctus mauris
                            sit amet tortor congue condimentum. Mauris maximus placerat nunc id elementum. Mauris quis turpis eu dolor volutpat vestibulum. Suspendisse potenti. Vivamus a
                            sagittis felis. Integer et justo sed urna pharetra semper.
                        </p>
                    </div>
                </section>
                <section>
                    <div>
                        <Image
                            width={3504}
                            height={3272}
                            src="/images/panoramica.jpg" alt="" />
                    </div>
                </section>
                <section>
                    <div className="w-4/12 pt-[8%] pr-[0%] pl-[12%]">
                        <h2>Contacte</h2>
                        <form className="mt-10" action="">
                            <p>
                                Per telefon:
                            </p>
                            <div className="flex gap-2 w-fit items-center">
                                <label>Mail:</label>
                                <input className="border border-solid border-[black]" />
                            </div>
                            <p>
                                Subscriute per rebre actualitzacions sobre els
                                productes i promocions!
                            </p>
                            <button
                                className="mt-10 m-auto text-center block 
            p-2 border border-solid border-[black]">
                                Subscriure&apos;m
                            </button>
                        </form>
                    </div>
                    <div className="w-8/12">
                        <Image
                            width={4961}
                            height={3508}
                            className="pt-[0%] pr-[9%] pl-[4%]"
                            src="/images/Olivera.png"
                            alt="" />
                    </div>
                </section>
                <section>
                    <div>
                        <Image
                            width={204}
                            height={187}
                            src="/marca/logo.png"
                            alt="" />
                    </div>
                </section>
            </div>
        </>
    );
}
