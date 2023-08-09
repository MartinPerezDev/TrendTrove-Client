import { FaClipboardList } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { MdPayment } from "react-icons/md";

const BoxForm = ({ children, title = "", type }) => {
  const icon = () => {
    switch (type) {
      case "login":
        return <HiUserCircle size={60} className="my-2" />;
      case "signup":
        return <HiUserCircle size={60} className="my-2" />;
      case "order-user":
        return <FaClipboardList size={50} className="my-2" />;
      case "order-payment":
        return <MdPayment size={60} className="my-2" />;
      case "order-success":
        return <FaClipboardList size={50} className="my-2" />;
      default:
        return <HiUserCircle size={60} className="my-2" />;
    }
  };
  return (
    <div className="w-full flex justify-center">
      <div className="w-5/6 my-5 py-5 flex flex-col rounded-md shadow custom-box-shadow custom-gradient-form text-gray-100">
        <div
          title="head"
          className="w-full pt-5 pb-5 flex flex-col items-center justify-center"
        >
          {icon()}
          <p className="text-xl w-5/6">{title}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default BoxForm;
