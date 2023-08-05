import { getCategoriesMetadata } from "@/utils/getDocsMetadata";
import Link from "next/link";
import { FooterLinks, SocialMediaLinks } from "../../../data/links";
import Icon from "@/icons";

const FooterContainer = () => {
  const categoriesMetadata = getCategoriesMetadata();

  const socialMediaLinks = () => (
    <nav className="text-sm">
      <ul className="flex justify-center">
        {FooterLinks.filter((footerItem) =>
          footerItem.title.includes("من رو دنبال کن")
        )
          .at(0)
          ?.links.map((link) => (
            <li key={link.href}>
              <Link className="block p-1" href={link.href} target={link.target}>
                {Icon(link.name)}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );

  const categoryLinks = () => (
    <div className="text-center">
      <p className="font-semibold pb-2">دسته بندی ها</p>
      <nav className="text-sm">
        <ul>
          {categoriesMetadata.slice(0, 4).map((category) => (
            <li key={category.slug}>
              <Link
                className="hover:underline block p-1"
                href={`/categories/${category.slug}`}
              >
                {category.title}
              </Link>
            </li>
          ))}
          <li>
            <Link className="hover:underline block p-1" href="/categories">
              همه دسته بندی ها
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
  const footerLinks = () => (
    <>
      {FooterLinks.map((item) => (
        <div key={item.title} className="text-center" dir="ltr">
          <p className="font-semibold pb-2">{item.title}</p>
          <nav className="text-sm">
            <ul>
              {item.links.map((link) => (
                <li key={link.name}>
                  <Link
                    className={`hover:underline block p-1 ${
                      link.target === "_blank" && "after:content-['↗️']"
                    }`}
                    href={link.href}
                    target={link.target}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
    </>
  );

  return (
    <footer className="bg-black text-white rounded-lg">
      <div className="max-w-screen-2xl mx-auto py-10 px-4 grid gap-10 lg:grid-cols-3">
        <div>
          <p className="text-center font-bold">
            <Link href="/">
              <span className="text-4xl">Hossein-i</span>.ir
            </Link>
          </p>
          <p className="text-center">Web Developer</p>
          {socialMediaLinks()}
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoryLinks()}
          {footerLinks()}
        </div>
      </div>
      <div className="py-4 border-t border-gray-200">
        <p className="text-center text-xs">Made With ❤️ By Hossein-i</p>
      </div>
    </footer>
  );
};

export default FooterContainer;
