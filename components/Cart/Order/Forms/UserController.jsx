import { useContext, useRef } from "react";

import { validateOrderUserForm } from "@/utils/validationsYup";
import { notify } from "@/utils/notificationToastify";
import UserForm from "./UserForm";
import { AuthContext } from "@/context/AuthContext";

const UserController = ({ order, changeForm }) => {
  const { user } = useContext(AuthContext);
  const dataUser = useRef({
    name: user.name ? user.name : "",
    email: user.email ? user.email : "",
    address: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dataUser.current[name] = value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await validateOrderUserForm(dataUser.current);
    if (res === true) {
      order.current = {
        user: { ...dataUser.current },
      };
      changeForm();
    } else {
      notify({}, "error", res);
    }
  };

  return (
    <UserForm
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default UserController;
