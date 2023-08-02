import { HiUserCircle } from "react-icons/hi";

const BoxForm = ({ children, title }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-5/6 my-5 py-5 flex flex-col rounded-md shadow custom-box-shadow custom-gradient-form text-gray-100">
        <div
          title="head"
          className="w-full pt-5 pb-5 flex flex-col items-center justify-center"
        >
          <HiUserCircle size={60} className="my-2" />
          <p className="text-xl w-5/6">{title}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default BoxForm;
