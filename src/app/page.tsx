"use client"
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Phone } from "@/components/Phone"
import { Check, Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './app.css'
import { Navbar } from "@/components/Navbar";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
    <Navbar />
    <div className="pt-[68px]">
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
            desmesurades,<br />
            va respondre que el que més li agradava era l’hora<br />
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
          <img className="pt-[16%] pr-[14%] pl-[13%]" src="minairons/Minairons_conills_1.jpg" alt="" />
        </div>
      </section>
      <section>
        <div className="pt-[10%] pr-[6%] pl-[16%] w-6/12">
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
        <div className="w-6/12">
          <img className="pt-[6%] pr-[52%] pl-[0%]" src="images/botella_oli.jpg" alt="" />
          <img className="pt-[12%] pr-[0%] pl-[44%] minairo" src="minairons/Minairo_2_SOLIVENC.png" alt="" />
        </div>
      </section>
      <section>
        <div className="pt-[15%] pr-[11%] pl-[16%] w-6/12">
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
        <div className="w-6/12">
          <img className="pt-[7.5%] pr-[52%] pl-[0%]" src="images/botella_oli.jpg" alt="" />
          <img className="pt-[23%] pr-[49%] pl-[0%] left-[-33%] right-auto minairo" src="minairons/Minairo_4_MORRIS.png" alt="" />
        </div>
      </section>
      <section>
        <div className="pt-[16%] pr-[0.5%] pl-[22%] w-6/12">
          <img className="pt-[14%] pr-[37%] pl-[0%] left-[-3%] right-auto minairo" src="minairons/Minairo_3.png" alt="" />
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
        <div className="w-6/12">
          <img className="pt-[7.5%] pr-[52%] pl-[0%]" src="images/botella_oli.jpg" alt="" />
        </div>
      </section>
      <section>
        <div className="pt-[7%] pr-[6%] pl-[11%] singleCol">
        
        <img className="h-[90%] w-[90%] left-[5%] top-[10%] absolute" src="images/Taca_blava_1.png" alt="" />
          <p>
            El aceite <strong>Mas Minairons</strong> es un producto de <strong>calidad superior</strong> que se distingue por varias características únicas y cuidadosamente seleccionadas, comenzando por el hecho
            de que proviene de olivos centenarios.
          </p>
          <p>
            Estos árboles, cultivados durante generaciones en el mismo suelo fértil, han desarrollado un sistema radicular profundo y robusto que les permite extraer nutrientes de las
            capas más ricas del terreno. Esta conexión íntima con la tierra se traduce en un aceite con un perfil de <strong>sabor complejo y equilibrado</strong>, cargado de notas aromáticas que solo
            pueden lograrse a través de décadas, si no siglos, de cultivo.
          </p>
          <p>
            La calidad excepcional del aceite <strong>Mas Minairons</strong> también se debe a los <strong>métodos naturales y ecológicos</strong> de cultivo que empleamos. En nuestras fincas, rechazamos el uso
            de pesticidas y fertilizantes químicos, optando por prácticas agrícolas sostenibles que respetan el medio ambiente y la biodiversidad local. Este enfoque no solo protege
            la salud del suelo y de los olivos, sino que también asegura que el aceite resultante esté <strong>libre de contaminantes y químicos indeseados</strong>. Cada gota de nuestro aceite es un
            testimonio de nuestra dedicación a la pureza y la sostenibilidad, lo que se refleja en su sabor y en su calidad inigualable.
          </p>
          <p>
            Además, nuestro aceite es un alimento <strong>rico en polifenoles</strong>, compuestos antioxidantes que son altamente beneficiosos para la salud. Los polifenoles ayudan a <strong>combatir el
              estrés oxidativo</strong> en el cuerpo, <strong>reduciendo el riesgo de enfermedades</strong> cardiovasculares y otros problemas de salud crónicos.
            En contraste, los aceites provenientes de cultivos intensivos se centran principalmente en la cantidad más que en la calidad. Estos métodos de cultivo suelen implicar el uso
            de árboles jóvenes plantados en alta densidad, que son cosechados prematuramente para maximizar la producción. Los fertilizantes y pesticidas químicos se utilizan de
            manera rutinaria para asegurar altos rendimientos, pero a costa del sabor y la salud del aceite.
            Además, la recolección mecánica y el procesamiento a gran escala a menudo resultan en aceites con sabores planos y menos complejos, careciendo de las características
            distintivas que hacen que un aceite sea verdaderamente excepcional. La presencia de polifenoles también suele ser menor en estos aceites, lo que reduce sus beneficios
            para la salud.
          </p>
          <p>
            El aceite <strong>Mas Minairons</strong> es el resultado de un proceso meticuloso que comienza en el campo y culmina en el molino. La cosecha se realiza seleccionando solo las aceitunas
            en su punto óptimo de maduración, lo que garantiza que cada aceituna aporte lo mejor de sí misma al producto final. El <strong>prensado en frío</strong>, realizado pocas horas después
            de la cosecha, preserva los compuestos volátiles, antioxidantes y polifenoles que son responsables del sabor y los beneficios para la salud del aceite. Este cuidado en cada
            etapa del proceso no tiene comparación con los métodos industriales que priorizan la eficiencia y el volumen de producción.
          </p>
          <p>
            En resumen, el aceite <strong>Mas Minairons</strong> se distingue por su origen en <strong>olivos centenarios</strong> y su producción a través de métodos ecológicos y sostenibles. Estos factores, junto con
            una atención meticulosa a cada detalle del proceso, aseguran un producto de calidad superior que ofrece una experiencia sensorial y nutritiva única.
          </p>
        </div>
      </section>
      <h2 className="pt-[8.7%] pr-[0%] pl-[11%]">Productes</h2>
      <section>
        <div className="w-fit">
          <div className="w-fit text-center pt-[10%] pr-[7%] pl-[44%]" >
            <img src="images/botella_oli.jpg" alt="" />
            <h5>Minairo - Fargot</h5>
          </div>
        </div>
        <div className="w-auto">
          <div className="w-fit text-center pt-[10%] pr-[26%] pl-[26%]">
            <img src="images/botella_oli.jpg" alt="" />
            <h5>Minairo - Solivenc</h5>
          </div>
        </div>
        <div className="w-auto">
          <div className="w-fit text-center pt-[10%] pr-[44%] pl-[7%]">
            <img src="images/botella_oli.jpg" alt="" />
            <h5>Minairo - Morris</h5>
          </div>
        </div>
      </section>
      <section>
        <div className="w-5/12">
          <img className="pt-[8%] pr-[1%] pl-[30%]" src="images/bag_in_box.jpg" alt="" />
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
            Una de las innovaciones en la conservación del aceite de oliva es el sistema “bag in box”
            (BIB). Este método consiste en una bolsa flexible y hermética contenida dentro de una caja
            de cartón - En nuestro caso, de madera-. La bolsa está equipada con un grifo dispensador
            que permite extraer el aceite sin exponerlo al aire ni a la luz, dos de los principales factores
            que contribuyen a su oxidación y deterioro.
          </p>
          <p>
            Los beneficios del sistema “bag in box” para la conservación del aceite de oliva son múltiples:
          </p>
          <ul>
            <li>
              <strong>1. Protección contra la oxidación:</strong> Al evitar el contacto del aceite con el aire, se reduce
              significativamente el riesgo de oxidación, manteniendo el sabor y las propiedades nutritivas
              del aceite durante más tiempo.
            </li>
            <li>
              <strong>2. Protección contra la oxidación:</strong> Al evitar el contacto del aceite con el aire, se reduce
              significativamente el riesgo de oxidación, manteniendo el sabor y las propiedades nutritivas
              del aceite durante más tiempo.
            </li>
            <li>
              <strong>3. Facilidad de uso:</strong> El grifo dispensador permite una dosificación precisa y cómoda, sin
              necesidad de abrir y cerrar constantemente el envase.
            </li>
            <li>
              <strong>4. Sostenibilidad:</strong> El “bag in box” es una opción más ecológica, ya que reduce el uso de
              plásticos y facilita el reciclaje del cartón.
            </li>
          </ul>
          <p>
            En resumen, el sistema “bag in box” no solo ayuda a prolongar la vida útil del aceite de
            oliva, sino que también contribuye a mantener su calidad y sabor, ofreciendo una solución
            práctica y sostenible para su almacenamiento.
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
          <img className="pt-[4%] pr-[0%] pl-[30%]" src="minairons/Minairo_1-pajaro_v2.png" alt="" />
        </div>
        <div className="pt-[7.5%] pr-[6%] pl-[4%] w-7/12">
          <h2>Nosaltres</h2>
          <p className="mt-5">
            <strong>Mas Minairons: Pasión, Tradición y Naturaleza</strong>
          </p>
          <p>
            Bienvenidos a Mas Minairons, una empresa familiar catalana dedicada a la producción de aceite
            ecológico de la más alta calidad. Nuestro nombre, inspirado en las diminutas y mágicas criaturas del
            folklore catalán, los Minairons o Menairons, refleja nuestro compromiso con la naturaleza, la tradición
            y la magia de nuestra tierra.
          </p>
          <p className="mt-5">
            <strong>Nuestra Historia</strong>
          </p>
          <p>
            Mas Minairons nació de la pasión de nuestra familia por la agricultura ecológica,los productos de
            calidad y el amor por nuestra tierra. Hemos cultivado olivos en el corazón de Cataluña, siguiendo
            prácticas respetuosas con el medio ambiente y manteniendo viva la tradición olivarera de nuestra
            región.
          </p>
          <p className="mt-5">
            <strong>Qué Hacemos</strong>
          </p>
          <p>
            Producimos aceite de oliva virgen extra ecológico, con el objetivo de ofrecer un producto puro, saludable
            y lleno de sabor. Nuestro aceite se elabora exclusivamente con aceitunas cultivadas en nuestros propios
            campos, cosechadas en el momento óptimo de maduración y prensadas en frío para conservar todas
            sus propiedades y aromas.
          </p>
        </div>
      </section>
      <section>
        <div className="w-7/12 pt-[5%] pr-[2%] pl-[8%]">
          <p className="mt-5">
            <strong>Nuestra Filosofía</strong>
          </p>
          <p>
            En Mas Minairons, creemos en una agricultura sostenible que respeta el ciclo natural de la tierra. Utilizamos
            técnicas tradicionales combinadas con innovaciones ecológicas para asegurar que nuestros olivos crezcan
            sanos y fuertes, sin la necesidad de pesticidas ni productos químicos. Cada gota de nuestro aceite es el
            resultado de un trabajo cuidadoso y dedicado, que comienza en el campo y termina en su mesa.
          </p>
          <p className="mt-5">
            <strong>Nuestro Compromiso</strong>
          </p>
          <p>
            Nuestra misión es ofrecer un producto de calidad excepcional, que no solo deleite su paladar sino que
            también contribuya al bienestar del planeta. Estamos comprometidos con la sostenibilidad, la biodiversidad
            y la protección de nuestro entorno. Por eso, cada botella de Mas Minairons es un reflejo de nuestro esfuerzo
            por cuidar la tierra que amamos y dejar un legado de salud y tradición para las futuras generaciones.
          </p>
          <p>
            Esperamos que nuestro aceite ecológico sea más que un simple ingrediente en su cocina; deseamos que
            sea una invitación a descubrir y apreciar la riqueza de la naturaleza y la dedicación que ponemos en
            cada paso de nuestro proceso.
          </p>
          <p className="text-center">
            Gracias por confiar en Mas Minairons y ser parte de nuestra historia.
          </p>
        </div>
        <div className="w-5/12">
          <img className="pt-[0%] pr-[30%] pl-[0%]" src="minairons/Minairo_1-pajaro_v2.png" alt="" />
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
          <img className="pt-[0%] pr-[2%] pl-[34%]" src="minairons/Minairo_5_got.png" alt="" />
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
          <img src="images/panoramica.jpg" alt="" />
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
          <img className="mt-[-8%] z-[-1] relative" src="images/contacte.jpg" alt="" />
        </div>
      </section>
      <section>
        <div>
          <img src="marca/logo.png" alt="" />
        </div>
      </section>
    </div>
    </>
  );
}
