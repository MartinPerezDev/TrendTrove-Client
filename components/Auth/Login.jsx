import { useState } from "react";
import { useRouter } from "next/router";

import LoginForm from "./LoginForm";
import { notify } from "@/utils/notificationToastify";
import { validateForm } from "@/utils/validationsYup";

const Login = ({ loginUser, saveUser }) => {
  const router = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsButtonDisabled(true);
      const validate = await validateForm(user, "login");
      if (validate !== true) throw new Error(validate);
      const res = await loginUser(user);
      if (res === undefined) return;
      saveUser(res.data.data);
      setUser({ email: "", password: "" });
      notify(user, "success", "Iniciaste session correctamente");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      notify(user, "error", error.message);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  const props = {
    handleInputChange,
    handleSubmit,
    user,
    isButtonDisabled,
  };

  return <LoginForm {...props} />;
};

export default Login;
