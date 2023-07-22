const ArticleCardsComponent = ({ children }: { children: any }) => {
  return (
    <div className="grid gap-4 py-8">
      {children}
    </div>
  );
};

export default ArticleCardsComponent;
