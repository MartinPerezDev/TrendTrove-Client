import { AiFillPlusCircle, AiFillStar } from "react-icons/ai";
import { VscOctoface } from "react-icons/vsc";
import Image from "next/image";

const StepsToBuy = () => {
  return (
    <div className="w-full py-10 px-2">
      <p className="text-center py-2 font-bold">PASOS PARA COMPRAR</p>
      <div className="" title="box-steps">
        <div className="flex flex-col items-center py-5">
          <p className="rounded-full w-10 h-10 text-center p-2 my-2 text-gray-50 bg-gray-950">
            1
          </p>
          <p className="text-xl">Elige tu tienda favorita</p>
          <p className="text-center text-xs text-gray-600 py-3">
            Empieza comprando en nuestra app. Elige entre 3500+ tiendas que
            forman parte de nuestra promo de Cash Back
          </p>
          <div className="flex w-6/5 items-center rounded-full py-3 px-5 my-3 bg-red-700 text-gray-50">
            <div className="flex items-center">
              <VscOctoface size={30} />
              <p className="pl-1">Michiboom</p>
            </div>
            <div className="pl-5 flex items-center">
              <AiFillPlusCircle size={20} />
              <p>10% Cash Back</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-5">
          <p className="rounded-full w-10 h-10 text-center p-2 my-2 text-gray-50 bg-gray-950">
            2
          </p>
          <p className="text-xl">Compra como siempre</p>
          <p className="text-center text-xs text-gray-600 py-3">
            Compra tus marcas favoritas y Cash Back sera activado de forma
            automatica. No necesitas hacer nada mas, excepto comprar.
          </p>
          <div className="flex w-6/5 items-center rounded-full py-3 px-5 my-3 text-gray-50">
            <Image
              src="https://res.cloudinary.com/dvabcnlc4/image/upload/v1695060393/TrendTrove/iokp53m53hxnnbzrukxj.png"
              width={250}
              height={250}
              alt="banner steps"
            />
          </div>
        </div>

        <div className="flex flex-col items-center py-5">
          <p className="rounded-full w-10 h-10 text-center p-2 my-2 text-gray-50 bg-gray-950">
            3
          </p>
          <p className="text-xl">Recibe tu Cash Back</p>
          <p className="text-center text-xs text-gray-600 py-3">
            Las tiendas nos pagan por enviarles compradores. Luego, les pasamos
            parte de ese dinero a usted. Su reembolso en efectivo se acumula
            después de cada compra que realice.
          </p>
          <div className="flex w-6/5 items-center rounded-full py-3 px-5 my-3 text-gray-50">
            <Image
              src="https://res.cloudinary.com/dvabcnlc4/image/upload/v1695060393/TrendTrove/iokp53m53hxnnbzrukxj.png"
              width={250}
              height={250}
              alt="banner steps"
            />
          </div>
        </div>

        <div className="flex flex-col items-center py-5">
          <AiFillStar className="rounded-full w-10 h-10 text-center p-2 my-2 text-gray-50 bg-gray-950" />
          <p className="text-xl">Cha-Ching!</p>
          <p className="text-center text-xs text-gray-600 py-3">
            Recibe el pago a traves de Paypal o cheque, tu eliges!
          </p>
          <div className="flex w-6/5 items-center rounded-full py-3 px-5 my-3 text-gray-50">
            <Image
              src="https://res.cloudinary.com/dvabcnlc4/image/upload/v1695060393/TrendTrove/iokp53m53hxnnbzrukxj.png"
              width={250}
              height={250}
              alt="banner steps"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsToBuy;
