import "./globals.css";

import FooterContainer from "@/containers/footer";
import HeaderContainer from "@/containers/header";
import { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Providers from "./providers";

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hossein-i.ir/"),
  alternates: {
    canonical: "/",
    languages: {
      "fa-IR": "/",
    },
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  colorScheme: "normal",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "white",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "slate",
    },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // icons: {
  //   icon: [
  //     {
  //       url: "data:/images/touch/avatar.png",
  //     },
  //   ],
  //   shortcut: [
  //     {
  //       url: "data:/images/touch/avatar.png",
  //     },
  //   ],
  //   apple: [
  //     {
  //       url: "data:/images/touch/avatar.png",
  //       sizes: "",
  //       type: "",
  //     },
  //   ],
  //   other: [
  //     {
  //       rel: "apple-touch-icon-precomposed",
  //       url: "data:/images/touch/avatar.png",
  //     },
  //   ],
  // },
  title: {
    template: "%s | Hossein-i",
    default: "Hossein-i",
  },
  description:
    "سلام خوش اومدی، من حسین هستم .توسعه دهنده وب در این وبلاگ نکات و ترفندها، فریمورک ها، پروژه ها، آموزش ها و غیره را به اشتراک می گذارم.",
  openGraph: {
    title: {
      template: "%s | Hossein-i",
      default: "Hossein-i",
    },
    description:
      "سلام خوش اومدی، من حسین هستم .توسعه دهنده وب در این وبلاگ نکات و ترفندها، فریمورک ها، پروژه ها، آموزش ها و غیره را به اشتراک می گذارم.",
    url: "https://hossein-i.ir/",
    siteName: "Hossein-i",
    images: ["/images/avatar.png"],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s | Hossein-i",
      default: "Hossein-i",
    },
    description:
      "سلام خوش اومدی، من حسین هستم .توسعه دهنده وب در این وبلاگ نکات و ترفندها، فریمورک ها، پروژه ها، آموزش ها و غیره را به اشتراک می گذارم.",
    site: "",
    siteId: "",
    creator: "",
    creatorId: "",
    images: ["/images/avatar.png"],
  },
  authors: [{ name: "Hossein-i", url: "https://hossein-i.ir/" }],
  creator: "Hossein-i",
  // publisher: "Hossein-i",
  keywords: [
    "حسین حسینی",
    "حسین-ی",
    "وبلاگ",
    "Hossein Hosseini",
    "Hossein-i",
    "Blog",
  ],
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={vazirmatn.className}
      suppressHydrationWarning
    >
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
};

export default RootLayout;
