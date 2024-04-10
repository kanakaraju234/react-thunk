export const Card = ({ children, className }) => {
  return (
    <div
      className={`shadow-sm p-3 mb-5 bg-white rounded border border-2 ${className}`}
    >
      {children}
    </div>
  );
};
