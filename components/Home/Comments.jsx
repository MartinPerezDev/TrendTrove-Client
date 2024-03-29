import { IoStarSharp } from "react-icons/io5";
import Slider from "react-slick";
import { FaRegComments } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Comments = ({ isMobile }) => {
  const comments = [
    {
      name: "Un Usuario",
      time: "Hace 1 dia",
      stars: 5,
      message: `¡Estoy encantado con esta tienda en línea que ofrece cashback!
      Desde que empecé a comprar aquí, he estado obteniendo un ahorro
      significativo en cada compra. El proceso es sencillo:
      simplemente hago mis compras habituales a través de su
      plataforma y, en poco tiempo, recibo una parte de mi dinero de
      vuelta. Es como recibir un regalo por cada compra. Además de los
      ahorros, la selección de productos es amplia y diversa, y la
      calidad siempre ha sido excelente. ¡Recomiendo encarecidamente
      esta tienda a cualquier persona que quiera maximizar su
      presupuesto mientras disfruta de una experiencia de compra
      increíble!`,
    },
    {
      name: "Un Usuario",
      time: "Hace 4 dia",
      stars: 4,
      message: `Esta tienda en línea que ofrece cashback ha sido un verdadero
      descubrimiento para mí. Desde que empecé a comprar aquí, he
      estado impresionada por la cantidad de dinero que he podido
      ahorrar. El proceso es realmente simple: solo tienes que hacer
      tus compras habituales a través de su plataforma y en poco
      tiempo recibirás una parte de tu dinero de vuelta, ¡como un
      regalo sorpresa en cada compra! Además de los ahorros, esta
      tienda tiene una selección de productos que se adapta a todas
      mis necesidades y gustos, y la calidad siempre ha sido
      excepcional. No puedo dejar de recomendar esta tienda a todas
      mis amigas!`,
    },
    {
      name: "Un Usuario",
      time: "Hace 4 dia",
      stars: 4,
      message: `Esta tienda en línea que ofrece cashback ha sido un verdadero
      descubrimiento para mí. Desde que empecé a comprar aquí, he
      estado impresionada por la cantidad de dinero que he podido
      ahorrar. El proceso es realmente simple: solo tienes que hacer
      tus compras habituales a través de su plataforma y en poco
      tiempo recibirás una parte de tu dinero de vuelta, ¡como un
      regalo sorpresa en cada compra! Además de los ahorros, esta
      tienda tiene una selección de productos que se adapta a todas
      mis necesidades y gustos, y la calidad siempre ha sido
      excepcional. No puedo dejar de recomendar esta tienda a todas
      mis amigas!`,
    },
    {
      name: "Un Usuario",
      time: "Hace 4 dia",
      stars: 4,
      message: `Esta tienda en línea que ofrece cashback ha sido un verdadero
      descubrimiento para mí. Desde que empecé a comprar aquí, he
      estado impresionada por la cantidad de dinero que he podido
      ahorrar. El proceso es realmente simple: solo tienes que hacer
      tus compras habituales a través de su plataforma y en poco
      tiempo recibirás una parte de tu dinero de vuelta, ¡como un
      regalo sorpresa en cada compra! Además de los ahorros, esta
      tienda tiene una selección de productos que se adapta a todas
      mis necesidades y gustos, y la calidad siempre ha sido
      excepcional. No puedo dejar de recomendar esta tienda a todas
      mis amigas!`,
    },
    {
      name: "Un Usuario",
      time: "Hace 4 dia",
      stars: 4,
      message: `Esta tienda en línea que ofrece cashback ha sido un verdadero
      descubrimiento para mí. Desde que empecé a comprar aquí, he
      estado impresionada por la cantidad de dinero que he podido
      ahorrar. El proceso es realmente simple: solo tienes que hacer
      tus compras habituales a través de su plataforma y en poco
      tiempo recibirás una parte de tu dinero de vuelta, ¡como un
      regalo sorpresa en cada compra! Además de los ahorros, esta
      tienda tiene una selección de productos que se adapta a todas
      mis necesidades y gustos, y la calidad siempre ha sido
      excepcional. No puedo dejar de recomendar esta tienda a todas
      mis amigas!`,
    },
    {
      name: "Un Usuario",
      time: "Hace 4 dia",
      stars: 4,
      message: `Esta tienda en línea que ofrece cashback ha sido un verdadero
      descubrimiento para mí. Desde que empecé a comprar aquí, he
      estado impresionada por la cantidad de dinero que he podido
      ahorrar. El proceso es realmente simple: solo tienes que hacer
      tus compras habituales a través de su plataforma y en poco
      tiempo recibirás una parte de tu dinero de vuelta, ¡como un
      regalo sorpresa en cada compra! Además de los ahorros, esta
      tienda tiene una selección de productos que se adapta a todas
      mis necesidades y gustos, y la calidad siempre ha sido
      excepcional. No puedo dejar de recomendar esta tienda a todas
      mis amigas!`,
    },
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
  };

  return (
    <div
      title="box-comments"
      className="w-full py-10 px-2 text-gray-100 rounded bg-gray-900"
    >
      <div className="flex flex-col items-center pb-10 px-2 font-bold text-lg">
        <h2
          className="px-2 py-5 text-2xl"
          style={{ textShadow: "1px 1px 5px black" }}
        >
          Confiaron en nosotros 15.344 personas y contando
        </h2>
        <div className="flex py-2 pb-2 text-gray-200">
          {[...Array(5)].map((_, i) => (
            <IoStarSharp size={25} key={i + 1} className="mr-1" />
          ))}
        </div>
        <h2
          className="px-2 py-2 text-sm text-gray-300"
          style={{ textShadow: "1px 1px 5px black" }}
        >
          Calificacion promedio de 4.8 con 3.8k de reviews
        </h2>
      </div>
      <div className="flex items-center pb-10 px-2 font-bold text-lg">
        <FaRegComments />
        <h2 className="px-2">Lea a nuestros compradores</h2>
      </div>
      <Slider {...settings}>
        {comments.map(({ name, time, stars, message }, i) => (
          <div key={name + i} className="px-2">
            <div className="w-5/6 bg-gradient-to-r from-sky-800 to-indigo-950 border-gray-700 rounded p-5">
              <div className="flex pb-2">
                {[...Array(stars)].map((_, i) => (
                  <IoStarSharp
                    size={25}
                    key={i + 1}
                    className="mr-1 bg-gray-900 p-1 rounded"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm text-left">{message}</p>
              </div>
              <p className="text-left text-gray-300 py-2 pb-2">By {name}</p>
              <p className="text-gray-400 text-xs pb-2">{time}</p>
            </div>
          </div>
        ))}
      </Slider>
        <p className="text-gray-500 text-xs px-2 py-5">*Estas reseñas son opiniones de miembros individuales y pueden no representar la experiencia de todos los usuarios</p>
    </div>
  );
};

export default Comments;
