const CategoryCardsComponent = ({ children }: { children: any }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {children}
    </div>
  );
};

export default CategoryCardsComponent;
