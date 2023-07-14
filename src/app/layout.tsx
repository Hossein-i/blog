import { Metadata } from "next";
import HeaderContainer from "@/containers/header";
import FooterContainer from "@/containers/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Hossein-i",
    default: "Hossein-i",
  },
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" data-mode="dark">
      <body className="relative bg-slate-200 max-w-screen-xl mx-auto h-screen overflow-hidden flex">
        <HeaderContainer />
        <div className="flex-auto overflow-y-auto pt-24 px-2 pb-2 md:pt-2 md:ps-0">
          <main>{children}</main>
          <FooterContainer />
        </div>
      </body>
    </html>
  );
}
