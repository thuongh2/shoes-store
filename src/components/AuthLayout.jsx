import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMobile from "./mobile/HeaderMobile";

const AuthLayout = () => {
  // ... perhaps some authentication logic to protect routes?
  return (
    <>
      <div className="hidden lg:block sticky top-0 z-50">
        <Header />
      </div>
      <div className="block lg:hidden sticky top-0 z-50">
        <HeaderMobile />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default AuthLayout;
