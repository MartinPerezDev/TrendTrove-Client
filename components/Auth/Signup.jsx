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
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsButtonDisabled(true);
      const validate = await validateForm(user, "signup");
      if (validate === true) {
        const res = await registerUser(user);
        if (res !== undefined) {
          notify(user, "success", "Usuario creado correctamente, porfavor inicie sesion");
          router.push('/authentication?type=login')
        }
        return;
      }
      throw new Error(validate);
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
