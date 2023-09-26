import Image from "next/image";
import Link from "next/link";

import womanBanner from "@/assets/woman.png";

const Banner = ({ isMobile }) => {
  return (
    <div className="h-128 w-full flex bg-gray-900">
      <div className="h-full w-full lg:w-1/2 pt-10 flex flex-col justify-around items-center">
        <div className="h-2/3 w-2/3 flex flex-col items-center text-gray-300">
          <div className="flex flex-col items-center text-3xl">
            <p>Cashback de mas</p>
            <p>de 3500 marcas</p>
            <p>en una sola App</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-600 text-sm py-2">
              Compra hoy y recibi $500 de bono
            </p>
            <p className="text-gray-600 text-sm underline">
              Terminos y condiciones
            </p>
          </div>
          <Link href='/products' className="rounded-full py-4 px-6 my-10 bg-gradient-to-r from-sky-800 to-indigo-900">
            <p className="font-bold">Vamos de compras</p>
          </Link>
        </div>
        <Image
          className="h-1/3"
          src="https://res.cloudinary.com/dvabcnlc4/image/upload/v1695612259/TrendTrove/head_banner_nmqhcs.png"
          width={320}
          height={100}
          alt="smartphone"
        />
      </div>
      {!isMobile && (
        <div className="w-1/2">
          <Image
            src={womanBanner}
            width={"auto"}
            height={"auto"}
            priority={true}
            quality={80}
            className="h-full opacity-50"
            alt="woman banner"
          />
        </div>
      )}
    </div>
  );
};

export default Banner;
