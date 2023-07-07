import HeaderContainer from "@/containers/header";
import FooterContainer from "@/containers/footer";
import "./globals.css";

export const metadata = {
  title: "حسین-ی",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" data-mode="dark">
      <body className="">
        <HeaderContainer />
        <main className="pt-16 md:pt-24">{children}</main>
        <FooterContainer />
      </body>
    </html>
  );
}
