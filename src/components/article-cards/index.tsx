const ArticleCardsComponent = ({ children }: { children: any }) => {
  return (
    <div className="grid gap-4 py-8 px-2 md:px-4">
      {children}
    </div>
  );
};

export default ArticleCardsComponent;
