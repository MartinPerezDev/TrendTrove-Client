import { useContext } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "@/context/AuthContext";

const RoutesLogged = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  if (Object.keys(user).length === 0) router.push("/user/authentication");
  return <>{children}</>;
};

export default RoutesLogged;
