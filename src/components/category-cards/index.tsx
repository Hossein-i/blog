const CategoryCardsComponent = ({ children }: { children: any }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 py-8 px-2 md:px-4">
      {children}
    </div>
  );
};

export default CategoryCardsComponent;
