import Link from "next/link";

import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io5";

const SocialLinks = ({ type = "footer" }) => {
  let socialLinks;

  const footerLinks = [
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
  const aboutLinks = [
    {
      icon: <CiLinkedin className="h-full w-full p-2" />,
      link: "https://www.linkedin.com/in/juan-martin-perez/",
    },
    {
      icon: <IoLogoYoutube className="h-full w-full p-2" />,
      link: "https://www.youtube.com/@pricodev",
    },
  ];

  switch (type) {
    case "footer":
      socialLinks = footerLinks;
      break;
    case "about":
      socialLinks = aboutLinks;
      break;
    default:
      socialLinks = footerLinks;
      break;
  }

  return (
    <>
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
    </>
  );
};
export default SocialLinks;
