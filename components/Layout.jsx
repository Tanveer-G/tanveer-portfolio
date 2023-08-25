import { Sora } from "@next/font/google";
import TopLeftPic from "./TopLeftPic";
import Header from "./Header";
import Nav from "./Nav";
import style from "./css/Layout.module.css";
import Circles from "./Circles";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <>
      <div className={`${sora.variable} ${style.layout}`}>
        <TopLeftPic />
        <Nav />
        <Header />
        <Circles />
        {children}
      </div>
    </>
  );
};

export default Layout;
