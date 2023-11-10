import Link from "next/link";

const GenericProductCard = ({
  _id,
  name,
  images,
  quantity,
  size,
  price,
  total,
}) => {
  return (
    <Link href={`/products/detail/${_id}`}>
      <div
        className="border-2 bg-contain bg-right bg-no-repeat rounded py-2 px-4 text-sm italic mt-4 relative "
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <p className="text-base font-bold not-italic w-2/4 sm:w-3/4">{name}</p>
        <p>Cantidad: {quantity}</p>
        <p>Talle: {size}</p>
        <p>Precio unitario: ${price}</p>
        <p>Precio total: ${total}</p>
      </div>
    </Link>
  );
};

export default GenericProductCard;
