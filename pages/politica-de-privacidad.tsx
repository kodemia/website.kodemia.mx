
import classNames from 'classnames'

import Footer from 'components/Footer'
import Head from 'next/head'
import NavBar from 'components/Navbar'

const articleClasses = 'mt-10'
const paragraphClasses = 'mt-3'
const listClasses = 'list-disc ml-10'

export default function PrivacyPolicy () {
  return (
    <>
      <Head>
        <title>
          Kodemia | Política de Privacidad
        </title>
      </Head>
      <NavBar />
      <main className='bg-black-kd p-16'>
        <section className='max-w-5xl mx-auto'>
          <header className='flex justify-center mt-12'>
            <h1 className='text-3xl'>
              Política de Privacidad
            </h1>
          </header>
          <article className={articleClasses}>
            <h2 className='font-bold'>Aviso de Privacidad</h2>
            <p className={paragraphClasses}>KODEMIA S.C.</p>
            <p className={paragraphClasses}>
              Este documento describe la forma en que recabamos y usamos los
              datos personales que usted nos brinda.
            </p>
            <p className={paragraphClasses}>
              También describe que tipo de datos son y que opciones tiene para
              limitar el uso de dichos datos, así como el procedimiento
              para ejercer sus derechos ARCO.
            </p>
          </article>
          <article className={articleClasses}>
            <h3 className='font-bold'>
              1) Responsable de la protección de sus datos personales
            </h3>
            <p className={paragraphClasses}>
              Kodemia S.C. con domicilio en Boulevard Magnocentro 105, B 603,
              Col. Palmas Altas. Huixquilucan, Estado de México, CP 52787,
              México es responsable del tratamiento (uso) de sus datos personales.
            </p>
          </article>
          <article className={articleClasses}>
            <h3 className='font-bold'>
              2) Nuestro Departamento de Protección de Datos
            </h3>
            <ul className={classNames(paragraphClasses, listClasses)}>
              <li>
                Jefe del Departamento: Departamento de Protección de Datos Personales
              </li>
              <li>
                Domicilio: Boulevard Magnocentro 105, B 603, Col. Palmas Altas.
                Huixquilucan, Estado de México, CP 52787, México
              </li>
              <li>
                Correo electrónico: <a className='font-bold' href='mailto:info@kodemia.mx'>info@kodemia.mx</a>
              </li>
              <li>
                Teléfono: <a className='font-bold' href='tel:5550150517'>(55) 5015-0517</a>
              </li>
            </ul>
          </article>
          <article className={articleClasses}>
            <h3 className='font-bold'>
              3) ¿Para qué fines recabamos y utilizamos sus datos personales?
            </h3>
            <p className={paragraphClasses}>
              Sus datos personales serán utilizados para las siguientes finalidades:
            </p>
            <p className={paragraphClasses}>
              Proveer los productos solicitados. Proveer los servicios solicitados
              y/o contratados. Responder a sus requerimientos de información, atención
              y servicio. Evaluar la calidad del servicio que le brindamos.
              Archivo de registros y expediente de la relación contractual para
              seguimiento de servicios futuros. Gestión financiera, facturación y cobro.
              Dar cumplimiento a las obligaciones y compromisos que hemos contraído con usted.
            </p>
            <p className={paragraphClasses}>
              Adicionalmente, sus datos personales podrán ser utilizados para
            </p>
            <p className={paragraphClasses}>
              Promoción y mercadeo de productos y servicios Elaborar estudios y
              programas que son necesarios para determinar hábitos de uso y consumo.
              Ofrecerle nuevos productos y servicios a la medida de sus intereses
              y necesidades. Realizar evaluaciones periódicas de nuestros productos
              y servicios a efecto de mejorar la calidad de los mismos.
              Notificarle sobre nuevos servicios o productos que tengan relación
              con los ya contratados o adquiridos. Boletines y comunicados sobre nuestra organización.
            </p>
          </article>
          <article className={articleClasses}>
            <h3 className='font-bold'>
              4) ¿Qué datos personales obtenemos y de dónde?
            </h3>
            <p className={paragraphClasses}>
              Para las finalidades señaladas anteriormente podemos recabar sus datos personales de distintas formas:
            </p>
            <ul className={classNames(paragraphClasses, listClasses)}>
              <li>
                Cuando visita nuestro sitio de Internet o utiliza nuestros servicios en línea
              </li>
              <li>
                Cuando usted nos los proporciona personalmente.
              </li>
              <li>
                Cuando obtenemos información a través de otras fuentes de acceso
                público que están permitidas por la ley
                (Directorios telefónicos o laborales, sitios web, etc).
              </li>
            </ul>
            <p className={paragraphClasses}>
              Datos personales que recabamos
            </p>
            <p className={paragraphClasses}>
              Información de contacto (Nombre, Email, Dirección, Teléfono, Celular, Fax)
              Documentación de identidad (Credencial de Elector, Pasaporte,
              Licencia de Manejo, Cartilla o Cédula Profesional) Información financiera y
              medios de pago (Tarjeta de crédito, débito, cheques)
              Información Fiscal (RFC, Dirección de Facturación)
              Credenciales de acceso a servicios en línea (Usuario y contraseña)
              Identificación en Redes Sociales (Facebook, Twitter, LinkedIn, Google+)
              Datos socioeconómicos (Edad, Sexo, Nivel de ingresos, Escolaridad)
              Situación patrimonial (Ingresos, Bienes inmuebles, inversiones u
              otro tipo de cuentas de banco) Número de Seguridad Social (NSS) y/o CURP
              Historia académica (certificados escolares, constancias, estudios realizados)
              Beneficiarios y dependientes económicos Información familiar
              (Cónyuge, hijos, nietos) Referencias personales (Información de personas no familiares)
              Información laboral (Empresa, Puesto, actividad desarrollada, CV)
            </p>
            <p className={paragraphClasses}>
              Hábitos, deportes, pasatiempos y aficiones
            </p>
          </article>
          <article className={articleClasses}>
            <h3 className='font-bold'>
              5) ¿Cómo Acceder, Rectificar, Cancelar u Oponerse al uso y
              tratamiento de sus datos personales (Derechos ARCO) o revocar su
              consentimiento para el tratamiento sus datos?
            </h3>
            <p className={paragraphClasses}>
              Usted tiene derecho constitucional de Acceder y conocer los datos
              personales que poseemos y a los detalles del tratamiento y uso de
              los mismos, así como a Rectificarlos y corregirlos en caso de ser
              inexactos o incompletos; Cancelarlos y eliminarlos cuando considere
              que no se requieren para alguna de las finalidades señalados en el
              presente aviso de privacidad, o que estén siendo utilizados para
              finalidades no autorizadas por usted o haya finalizado la relación
              contractual o de servicio, o bien,
              Oponerse al tratamiento de los mismos para fines específicos.
            </p>
            <p className={paragraphClasses}>
              Los mecanismos implementados para el ejercicio de sus Derechos ARCO,
              así como los plazos, información y documentación que debe contener
              su solicitud deben solicitarse al correo:
            </p>
            <p className={paragraphClasses}>
              <a className='font-bold' href='mailto:info@kodemia.mx'>
                info@kodemia.mx
              </a>
            </p>
            <p className={paragraphClasses}>
              ¿Cómo puede limitar el uso divulgación de sus datos personales?
            </p>
            <p className={paragraphClasses}>
              Si usted desea dejar de recibir mensajes de nuestra parte que no
              sean indispensables para brindarle los servicios señalados,
              envíe su solicitud a nuestro Departamento de Protección de
              Datos Personales en donde le informaremos de los mecanismos
              implementados para ello.
            </p>
            <p className={paragraphClasses}>
              ¿Cómo revocar el consentimiento para el tratamiento de sus datos personales?
            </p>
            <p className={paragraphClasses}>
              Si usted desea revocar el consentimiento que nos otorgó para el
              uso de sus datos personales, envíe su solicitud a nuestro
              Departamento de Protección de Datos Personales en donde le
              informaremos de los mecanismos implementados para ello.
            </p>
          </article>
          <article className={articleClasses}>
            <h3 className='font-bold'>
              6) Transferencia de datos personales
            </h3>
            <p className={paragraphClasses}>
              Sus datos personales no serán Transferidos a terceras personas o empresas.
              Para cumplir con las finalidades establecidas en este Aviso de Privacidad,
              podrán ser únicamente Remitidos a personas o empresas que tengan el
              carácter de Encargados.
            </p>
          </article>
          <article className={articleClasses}>
            <h3 className='font-bold'>
              7) Modificaciones al aviso de privacidad
            </h3>
            <p className={paragraphClasses}>
              Nos reservamos el derecho de efectuar en cualquier momento
              modificaciones o actualizaciones al presente Aviso de Privacidad,
              para la atención de novedades legislativas, políticas internas o
              nuevos requerimientos para la prestación u ofrecimiento de nuestros
              servicios o productos. Estas modificaciones estarán disponibles al
              público en la dirección web: www.kodemia.mx
            </p>
          </article>
          <article className={articleClasses}>
            <h3 className='font-bold'>
              Uso de cookies, web beacons y JavaScript
            </h3>
            <p className={paragraphClasses}>
              Las cookies son una pequeña pieza de información enviada
              automáticamente por nuestro sitio web, las cuales son almacenadas
              en su navegador. De esta manera el sitio web puede consultar dicha
              información para conocer la actividad previa del usuario y agilizar
              algunos procedimientos como mantener la sesión o identificar que
              secciones del sitio ya visitó.
            </p>
            <p className={paragraphClasses}>
              Las web beacons en conjunto con los JavaScripts de métricas web
              permiten almacenar información sobre los patrones de uso de nuestro
              sitio web. Le informamos que utilizamos esas herramientas para
              obtener información estadística como la siguiente:
            </p>
            <ul className={classNames(listClasses, 'mt-4')}>
              <li>
                Tipo de navegador y sistema operativo, las páginas de Internet
                consultadas, origen de la visita, la dirección IP de acceso,
                tiempo de permanencia en nuestro sitio, entre otros datos estadísticos
              </li>
            </ul>
            <p className={paragraphClasses}>
              Las cookies, el JavaScript y otras tecnologías de seguimiento y
              rastreo pueden ser deshabilitadas, sin embargo, desactivarlas puede
              generar que el sitio web o algunas de sus funcionalidades no se
              desempeñen adecuadamente.
            </p>
          </article>
          <article className={articleClasses}>
            <h3 className='font-bold'>
              8) ¿Ante quién puede presentar sus quejas y denuncias por el tratamiento indebido de sus datos personales?
            </h3>
            <p className={paragraphClasses}>
              Si después de haber ejercido sus Derechos ARCO ante Kodemia S.C.
              por medio de los mecanismos establecidos en este Aviso de Privacidad,
              usted considera que la respuesta ha sido insatisfactoria o incompleta;
              o presume que su derecho de protección de datos personales ha sido
              lesionado por alguna conducta o acción de nuestra parte; o cuenta
              con evidencia de que en el tratamiento de sus datos personales
              existe alguna violación a las disposiciones previstas en la Ley
              Federal de Protección de Datos Personales en Posesión de los
              Particulares, podrá interponer la queja o denuncia correspondiente
              ante el IFAI. Para mayor información visite:
              &nbsp;<a className='font-bold' href='http://www.ifai.org.mx'>www.ifai.org.mx</a>
            </p>
          </article>
          <article className={articleClasses}>
            <p className={paragraphClasses}>
              FECHA DE ACTUALIZACIÓN: 11 de marzo 2020
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}
