import Link from "next/link";

const SectionComponent = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return (
    <section className={className}>
      <div className="px-4 md:px-8 max-w-screen-2xl mx-auto">{children}</div>
    </section>
  );
};

const SectionHeaderComponent = ({
  title,
  link,
  linkTitle,
}: {
  title: string;
  link: string;
  linkTitle: string;
}) => {
  return (
    <div className="flex justify-between items-center py-8">
      <h2 className="flex items-center gap-2 text-lg md:text-xl lg:text-2xl font-bold after:content-[''] after:w-8 after:h-[1px] after:bg-black">
        {title}
      </h2>
      <Link
        className="flex items-center gap-2 md:text-lg lg:text-xl font-bold hover:underline"
        href={link}
      >
        <span>{linkTitle}</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default Object.assign(SectionComponent, { SectionHeaderComponent });
