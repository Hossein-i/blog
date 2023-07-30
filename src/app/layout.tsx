import { Metadata } from "next";
import HeaderContainer from "@/containers/header";
import FooterContainer from "@/containers/footer";
import "./globals.css";
import Providers from "./providers";

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
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="relative bg-slate-200 dark:bg-slate-900 max-w-screen-xl mx-auto md:flex">
        <Providers>
          <HeaderContainer />
          <div className="flex-auto px-4 pb-4 md:pt-4 md:ps-0">
            <main className="pb-4">{children}</main>
            <FooterContainer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
