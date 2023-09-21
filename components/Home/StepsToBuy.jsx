import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

const StepsToBuy = () => {
  const steps = [
    {
      step: 1,
      title: "Elige tu tienda favorita",
      description:
        "Empieza comprando en nuestra app. Elige entre 3500+ tiendas que forman parte de nuestra promo de Cash Back.",
      image:
        "https://res.cloudinary.com/dvabcnlc4/image/upload/v1695149431/TrendTrove/banner_1_home_hxp3am.png",
    },
    {
      step: 2,
      title: "Compra como siempre",
      description:
        "Compra tus marcas favoritas y Cash Back sera activado de forma automatica. No necesitas hacer nada mas, excepto comprar.",
      image:
        "https://res.cloudinary.com/dvabcnlc4/image/upload/v1695081326/TrendTrove/banner_2_home_vz0xpm.png",
    },
    {
      step: 3,
      title: "Recibe tu Cash Back",
      description:
        "Las tiendas nos pagan por enviarles compradores. Luego, les pasamos parte de ese dinero a usted. Su reembolso en efectivo se acumula después de cada compra que realice.",
      image:
        "https://res.cloudinary.com/dvabcnlc4/image/upload/v1695080600/TrendTrove/banner_3_home_crpjv8.png",
    },
    {
      step: 4,
      title: "Cha-Ching!",
      description: "Recibe el pago a traves de Paypal o cheque, tu eliges!.",
      image:
        "https://res.cloudinary.com/dvabcnlc4/image/upload/v1695081408/TrendTrove/banner_4_home_mrz70v.png",
    },
  ];

  return (
    <div className="w-full py-10 px-2">
      <p className="text-center py-2 font-bold">PASOS PARA COMPRAR</p>
      <div className="" title="box-steps">
        {steps.map(({ step, title, description, image }, i) => (
          <div key={step + i} className="flex flex-col items-center py-5">
            {step !== 4 ? (
              <p className="rounded-full w-10 h-10 text-center p-2 my-2 text-gray-50 bg-gray-950">
                {step}
              </p>
            ) : (
              <AiFillStar className="rounded-full w-10 h-10 text-center p-2 my-2 text-gray-50 bg-gray-950" />
            )}
            <p className="text-xl">{title}</p>
            <p className="text-center text-xs text-gray-600 py-3">
              {description}
            </p>
            <div className="flex w-6/5 items-center rounded-full py-3 px-5 my-3 text-gray-50">
              <Image src={image} width={300} height={300} loading="lazy" quality={50} alt="banner steps" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsToBuy;
