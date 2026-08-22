import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-sun-600 text-white shadow-sm hover:bg-sun-700 hover:shadow-md hover:-translate-y-0.5",
        primary:
          "bg-leaf-800 text-sand-50 shadow-sm hover:bg-leaf-900 hover:shadow-md hover:-translate-y-0.5",
        outline:
          "border-2 border-leaf-800 text-leaf-800 bg-transparent hover:bg-leaf-800 hover:text-sand-50",
        ghost: "hover:bg-leaf-100 text-leaf-900",
        link: "text-leaf-800 underline-offset-4 hover:underline",
        onDark:
          "bg-sand-50 text-leaf-900 shadow-sm hover:bg-white hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
