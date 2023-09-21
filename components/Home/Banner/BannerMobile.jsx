import Image from "next/image";

const BannerMobile = () => {
  return (
    <div className="h-128 w-full flex flex-col justify-around items-center pt-10 bg-gray-900">
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
          <p className="text-gray-600 text-sm underline">Terminos y condiciones</p>
        </div>
        <div className="border rounded-full py-4 px-6 my-10 bg-gray-300 text-gray-900">
            <p className="font-bold">Vamos de compras</p>
        </div>
      </div>
      <Image
        className="h-1/3"
        src="https://res.cloudinary.com/dvabcnlc4/image/upload/v1695078077/TrendTrove/first_banner_bo8uqr.png"
        width={280}
        height={100}
        alt="smartphone"
      />
    </div>
  );
};

export default BannerMobile;
