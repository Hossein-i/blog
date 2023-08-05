interface Link {
  name: string;
  href: string;
  target?: string;
}

export interface Links {
  title: string;
  links: Link[];
}

export const HeaderLinks: Links[] = [
  {
    title: "نویگیشن",
    links: [
      { name: "مقاله ها", href: "/articles" },
      { name: "دسته بندی ها", href: "/categories" },
      { name: "درباره من", href: "/about-me" },
    ],
  },
];

export const SocialMediaLinks: { [key: string]: Link } = {
  GitHub: {
    name: "GitHub",
    href: "https://github.com/Hossein-i",
    target: "_blank",
  },
  LinkedIn: {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hossein-i/",
    target: "_blank",
  },
};

export const FooterLinks: Links[] = [
  {
    title: "درباره من",
    links: [
      { name: "درباره من", href: "/about-me" },
      { name: "پروژه ها", href: "/about-me/projects" },
      { name: "افتخارات", href: "/about-me/achievement" },
    ],
  },
  {
    title: "با من در تماس باش",
    links: [
      { name: "+98-901-982-8459", href: "tel:+989019828459" },
      { name: "20hossein00@gmail.com", href: "mailto:20hossein00@gmail.com" },
    ],
  },
  {
    title: "من رو دنبال کن",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/Hossein-i",
        target: "_blank",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/hossein-i/",
        target: "_blank",
      },
    ],
  },
];
