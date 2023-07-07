import Image from "next/image";
import Link from "next/link";

const FooterContainer = () => {
  return (
    <footer className="bg-blue-50">
      <div className="max-w-screen-2xl mx-auto py-10 px-4 grid gap-10 lg:grid-cols-3">
        <div>
          <p className="text-center text-blue-600 font-bold">
            <Link href="/">
              <span className="text-blue-900 text-4xl">Hossein-i</span>.ir
            </Link>
          </p>
          <p className="text-center">Web Developer</p>
          <nav className="text-sm">
            <ul className="flex justify-center">
              <li>
                <a
                  className="block p-1"
                  href="https://github.com/Hossein-i"
                  target="_blank"
                >
                  <Image
                    src="/icons/github-icon.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li>
                <a
                  className="block p-1"
                  href="https://www.linkedin.com/in/hossein-i/"
                  target="_blank"
                >
                  <Image
                    src="/icons/linkedin-logo.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="font-semibold pb-2">دسته بندی ها</p>
            <nav className="text-sm">
              <ul>
                <li>
                  <Link
                    className="hover:underline block p-1"
                    href="/categories/css"
                  >
                    CSS
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline block p-1"
                    href="/categories/javascript"
                  >
                    Javascript
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline block p-1"
                    href="/categories/tailwind-css"
                  >
                    Tailwind CSS
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline block p-1"
                    href="/categories/react-js"
                  >
                    React JS
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline block p-1"
                    href="/categories"
                  >
                    دسته بندی های بیشتر
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-center">
            <p className="font-semibold pb-2">درباره من</p>
            <nav className="text-sm">
              <ul>
                <li>
                  <Link className="hover:underline block p-1" href="/about-me">
                    درباره من
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline block p-1"
                    href="/about-me/projects"
                  >
                    پروژه ها
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline block p-1"
                    href="/about-me/achievement"
                  >
                    افتخارات
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-center">
            <p className="font-semibold pb-2">با من در تماس باش</p>
            <nav className="text-sm">
              <ul>
                <li>
                  <a
                    className="hover:underline block p-1"
                    href="tel:+989019828459"
                    dir="ltr"
                  >
                    +98-901-982-8459
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline block p-1"
                    href="mailto:20hossein00@gmail.com"
                  >
                    20hossein00@gmail.com
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-center">
            <p className="font-semibold pb-2">من رو دنبال کن</p>
            <nav className="text-sm">
              <ul>
                <li>
                  <a
                    className="hover:underline block p-1 after:content-['_↗']"
                    href="https://github.com/Hossein-i"
                    target="_blank"
                    dir="ltr"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline block p-1 after:content-['_↗']"
                    href="https://www.linkedin.com/in/hossein-i/"
                    target="_blank"
                    dir="ltr"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="py-4 border-t border-blue-200">
        <p className="text-center text-xs">Made With ❤️ By Hossein-i</p>
      </div>
    </footer>
  );
};

export default FooterContainer;
