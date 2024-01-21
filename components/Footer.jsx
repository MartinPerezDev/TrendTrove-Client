import { IoLocationSharp } from "react-icons/io5";
import SocialLinks from "./SocialLinks";

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
          <div className="text-gray-400">
            <p className="py-2">Terminos de uso</p>
            <p className="py-2">Politicas de privacidad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
