import { useContext, useMemo } from "react";
import { useRouter } from "next/router";

import Login from "./Login";
import Signup from "./Signup";
import { AuthContext } from "@/context/AuthContext";

const AuthController = () => {
  const router = useRouter();
  const { query } = router;
  const { loginUser, registerUser, saveUser } = useContext(AuthContext);

  const typeAuth = useMemo(() => query.type || "login", [query.type]);

  return (
    <>
      {typeAuth === "login" ? (
        <Login loginUser={loginUser} saveUser={saveUser} />
      ) : (
        <Signup registerUser={registerUser} />
      )}
    </>
  );
};

export default AuthController;
