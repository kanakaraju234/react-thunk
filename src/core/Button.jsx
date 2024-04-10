export const Button = ({ children, onClick, type = "button", className }) => {
  return (
    <button type={type} className={className} onClick={onclick}>
      {children}
    </button>
  );
};
