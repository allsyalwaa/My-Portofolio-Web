/* eslint-disable react/prop-types */
export default function Button({ children, variant = "primary", className }) {
  return (
    <button
      className={`flex items-center justify-center gap-4 rounded-full border-[1.5px] px-5 py-2 font-semibold ${variant === "primary" && "border-white bg-white text-sm text-primary"} ${variant === "secondary" && "text-md border-primary bg-primary text-white"} ${variant === "white" && "text-md border-primary bg-white text-primary"} ${className} `}
    >
      {children}
    </button>
  );
}
