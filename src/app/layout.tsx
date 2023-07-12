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
      <body className="bg-gray-200">
        <HeaderContainer />
        <main>{children}</main>
        <FooterContainer />
      </body>
    </html>
  );
}
