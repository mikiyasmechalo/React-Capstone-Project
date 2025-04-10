"use client";
import { usePathname } from "next/navigation";

import Footer from "@/components/footer1";
import Header from "@/components/header";
import MyFooter from "@/app/my/components/MyFooter";
import NavBar from "@/app/my/components/MyNavBar";
export const MixHeader = () => {
  const path = usePathname();
  const isMyPage = path.includes("/my");
  return <>{isMyPage ? <NavBar /> : <Header />}</>;
};

export const MixFooter = () => {
  const path = usePathname();
  const isMyPage = path.includes("/my");
  return <>{isMyPage ? <MyFooter /> : <Footer />}</>;
};
