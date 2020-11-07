import JwtLogin from "./login/JwtLogin.jsx";
import NotFound from "./NotFound";
import ForgotPassword from "./ForgotPassword";
import JwtRegister from "./register/JwtRegister";

const sessionRoutes = [
  {
    path: "/session/signup",
    component: JwtRegister,
  },
  {
    path: "/session/signin",
    component: JwtLogin,
  },
  {
    path: "/session/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/session/404",
    component: NotFound,
  },
];

export default sessionRoutes;