import { useState } from "react";
import { useRouter } from "next/router";

import { validateForm } from "@/utils/validationsYup";
import { notify } from "@/utils/notificationToastify";
import SignupForm from "./SignupForm";

const Signup = ({ registerUser }) => {
  const router = useRouter()
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsButtonDisabled(true);
      const validate = await validateForm(user, "signup");
      if (validate !== true) throw new Error(validate);

      const res = await registerUser(user);
      if (res === undefined) throw new Error("Hubo un error al crear su cuenta, intente de nuevo mas tarde");
      
      notify(user, "success", "Usuario creado correctamente, porfavor inicie sesion");
      router.push('/authentication?type=login')
    } catch (error) {
      notify(user, "error", error.message);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  const props = {
    handleSubmit,
    handleInputChange,
    user,
    isButtonDisabled
  }

  return (
    <SignupForm {...props} />
  );
};

export default Signup;
