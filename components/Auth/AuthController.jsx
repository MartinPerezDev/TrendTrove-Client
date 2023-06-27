import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Login from "./Login";
import Signup from "./Signup";
import { AuthContext } from "@/context/AuthContext";

const AuthController = () => {
  const router = useRouter();
  const { query } = router;
  const [typeAuth, setTypeAuth] = useState(query.type || "login");
  const { loginUser, registerUser, saveUser } = useContext(AuthContext);

  useEffect(() => {
    setTypeAuth(query.type || "login");
  }, [query.type]);

  return (
    <div>
      {typeAuth === "login" ? (
        <Login loginUser={loginUser} saveUser={saveUser} />
      ) : (
        <Signup registerUser={registerUser} />
      )}
    </div>
  );
};

export default AuthController;
