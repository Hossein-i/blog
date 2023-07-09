const ArticleCardsComponent = ({ children }: { children: any }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 pb-8">
      {children}
    </div>
  );
};

export default ArticleCardsComponent;
