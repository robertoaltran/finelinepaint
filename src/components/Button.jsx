export default function Button({ children, className = "", as = "button", ...props }) {
  const Comp = as;
  return (
    <Comp
      className={
        "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold " +
        "transition focus:outline-none focus:ring-2 focus:ring-brand-aqua/50 " +
        className
      }
      {...props}
    >
      {children}
    </Comp>
  );
}
