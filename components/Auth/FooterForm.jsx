import Link from "next/link";

const FooterForm = ({type}) => {
  const title = type === "login" ? "Registrate" : "Ingresa a tu cuenta";
  const subTitle = type === "login" ? "Todavia no estas registrado?" : "Ya estas registrado?";
  const link = type === "login" ? "register" : "login";
  return (
    <>
      <Link
        href={`/user/authentication?type=${link}`}
        className="p-1 flex flex-col items-center"
      >
        <p className="text-xs">{subTitle}</p>
        <p>{title}</p>
      </Link>
      <div className="text-xs p-1 my-1 text-gray-500">
        Términos y condiciones
      </div>
      <div className="text-xs p-1 my-1 text-gray-500">
        Política de privacidad
      </div>
    </>
  );
};

export default FooterForm;
