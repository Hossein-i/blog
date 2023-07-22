import Link from "next/link";

const SectionComponent = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return <section className={className}>{children}</section>;
};

const SectionWrapperComponent = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return <div className={className}>{children}</div>;
};

const SectionHeaderComponent = ({
  title,
  link,
  linkTitle,
}: {
  title: string;
  link?: string;
  linkTitle?: string;
}) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="flex items-center gap-2 text-lg md:text-xl lg:text-2xl font-bold after:content-[''] after:w-8 after:h-[1px] after:bg-black dark:after:bg-white">
        {title}
      </h2>
      {link && (
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
      )}
    </div>
  );
};

export default Object.assign(SectionComponent, {
  SectionWrapperComponent,
  SectionHeaderComponent,
});
