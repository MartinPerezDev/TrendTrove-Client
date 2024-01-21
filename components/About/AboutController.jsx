import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../SocialLinks";

const AboutController = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:pt-52 p-2 md:min-h-screen">
      <div className="w-1/2 md:w-80 my-5">
        <Image
          src="https://res.cloudinary.com/dvabcnlc4/image/upload/v1705862489/TrendTrove/about_rcdsqh.png"
          width={404}
          height={352}
          alt="imagen about us"
        />
      </div>
      <div className="md:pr-56">
        <h2 className="italic font-bold text-xl py-5">Sobre Nosotros</h2>
        <p>
          TrendTrove es una plataforma de ecommerce online en la que se vende
          ropa que esta en tendencia, atrevete a encontrar un nuevo estilo en
          TrendTrove!.
        </p>
        <p>
          Periodicamente subimos ofertas o recompensas para nuestros clientes,
          en la que incluimos descuentos, envios rebajados o gratis y regalos de
          nuestra tienda!.
        </p>
        <h3 className="font-bold py-10">
          Si desea contactar con nuestro equipo de desarrollo puede hacerlo a
          travez de los siguiente enlaces:
        </h3>
        <a
          href="mailto:martinperez9713@gmail.com?Subject=Contacto%20de%20desarrollador"
          className="rounded-full py-4 px-6 my-10 bg-gradient-to-r from-sky-800 to-indigo-900 text-white"
        >
          Contactar por correo
        </a>
        <div className="pt-10 flex text-white">
          <SocialLinks type="about" />
        </div>
      </div>
    </div>
  );
};
export default AboutController;
