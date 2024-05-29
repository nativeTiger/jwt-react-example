import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/tailwind-merge";

const buttonVariants = cva(
  "w-full flex space-x-4 gap-x-4 items-center justify-center rounded-md text-white text-center duration-300",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 hover:bg-blue-500 hover:shadow-lg",
        secondary: "bg-blue-100 text-blue-500 hover:bg-blue-200",
        destructive: "bg-red-500 hover:bg-red-500 hover:shadow-lg",
        transparent:
          "bg-transparent text-gray-700 hover:bg-blue-500 hover:text-white duration-300",
      },
      size: {
        default: "px-3 py-2",
        sm: "px-2.5 py-1.5",
        lg: "px-6 py-3.5",
        icon: "p-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
