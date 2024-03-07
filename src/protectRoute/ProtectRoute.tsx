import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};
const ProtectRoute = ({ children }: Props) => {
  const isAuthen = !!sessionStorage.getItem("isAuth");
  return isAuthen ? children : <Navigate to="/auth/signin" replace />;
};

export default ProtectRoute;
