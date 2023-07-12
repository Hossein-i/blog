const ArticleCardsComponent = ({ children }: { children: any }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 py-8 px-4 md:px-8">
      {children}
    </div>
  );
};

export default ArticleCardsComponent;
