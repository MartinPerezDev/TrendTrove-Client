import { useState } from "react";
import { useRouter } from "next/router";

import LoginForm from "./LoginForm";
import { notify } from "@/utils/notificationToastify";

const Login = ({ loginUser, saveUser }) => {
  const router = useRouter();
  const [isButtonDisabled, setButtonIsButtonDisabled] = useState(false);
  const [user, setUser] = useState({
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
      const res = await loginUser(user);
      if (res !== undefined) {
        saveUser(res.data.data);
        notify(
          user,
          "success",
          "Bienvenido"
        );
        router.push('/');
      }
      return;
    } catch (error) {
      notify(user, "error", error.message);
    } finally {
      setButtonIsButtonDisabled(false);
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
