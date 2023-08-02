import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "@/context/AuthContext";

const RoutesAdmin = ({ children }) => {
  const router = useRouter();
  const { isAdmin } = useContext(AuthContext);

  useEffect(() => {
    if (isAdmin === "") {
      router.push("/user/authentication");
    } else if (!isAdmin) {
      router.push("/");
    }
  }, [isAdmin, router]);

  return <>{children}</>;
};

export default RoutesAdmin;
