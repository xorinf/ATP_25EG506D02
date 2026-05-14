function Button({ onClick, className, children }) {
  return (
    <button className={`px-4 py-2 text-sm ${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
