import { BsBag } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="h-14 w-10 flex items-center mx-1 cursor-pointer">
      <div className="h-9 w-auto p-1 flex items-end justify-evenly">
        <BsBag className="h-full w-full" />
        <p className="text-xs absolute p-0.5">1</p>
      </div>
    </div>
  );
};

export default CartWidget;
