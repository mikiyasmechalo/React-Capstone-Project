"use client";
import { usePathname } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
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
