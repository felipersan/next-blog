import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

interface propsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...rest }: propsButton) {
  return (
    <button
      {...rest}
      className="w-full text-black cursor-pointer bg-emphasis-primary h-16  flex align-middle py-4 justify-center hover:opacity-80"
      type="button"
    >
      {children}
    </button>
  );
}
