import { IoLocationSharp } from "react-icons/io5";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="h-auto max-w-screen-xl mx-auto mt-10 bg-gray-900 text-gray-300 py-5 px-2">
        <div>
          <div className="flex items-center text-xl">
            <IoLocationSharp />
            <p>Argentina</p>
          </div>
          <div className="py-3 flex">
            <SocialLinks type="footer" />
          </div>
          <p className="py-2">© 2023 TrendTrove, Inc. All Rights Reserved</p>
          <div className="text-gray-400 flex flex-col">
            <Link href="/terms" className="py-2">
              Terminos de uso
            </Link>
            <Link href="/terms" className="py-2">
              Politicas de privacidad
            </Link>
            <Link
              href="https://www.linkedin.com/in/juan-martin-perez/"
              target="_blank"
              className="text-xs text-gray-600 py-5"
            >
              Desarrollado por Juan Martin Perez
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
