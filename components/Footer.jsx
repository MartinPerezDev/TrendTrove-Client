import { IoLocationSharp, IoLogoYoutube } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      icon: <AiOutlineTwitter className="h-full w-full p-2" />,
      link: "https://twitter.com/",
    },
    {
      icon: <GrFacebookOption className="h-full w-full p-2" />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <BsInstagram className="h-full w-full p-2" />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <IoLogoYoutube className="h-full w-full p-2" />,
      link: "https://www.youtube.com/",
    },
  ];

  return (
    <div className="h-auto w-full mt-10 bg-gray-900 text-gray-300 py-5 px-2">
      <div>
        <div className="flex items-center text-xl">
          <IoLocationSharp />
          <p>Argentina</p>
        </div>
        <div className="py-3 flex">
          {socialLinks.map((socialLink, index) => (
            <Link
              href={socialLink.link}
              target="_blank"
              key={socialLink.link + index}
              className="h-10 w-10 mr-5 rounded-full flex items-center justify-center bg-gray-700"
            >
              {socialLink.icon}
            </Link>
          ))}
        </div>
        <p className="py-2">© 2023 TrendTrove, Inc. All Rights Reserved</p>
        <div className="text-gray-400">
          <p className="py-2">Terminos de uso</p>
          <p className="py-2">Politicas de privacidad</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
