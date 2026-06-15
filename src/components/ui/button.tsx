import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-gold-400 to-gold-500 text-royal-900 shadow-lg shadow-gold-500/20 hover:shadow-xl hover:shadow-gold-500/40 hover:-translate-y-0.5",
        royal:
          "bg-royal-700 text-gold-100 shadow-lg shadow-royal-900/30 hover:bg-royal-600 hover:-translate-y-0.5",
        outline:
          "border border-border bg-transparent text-foreground hover:border-gold-600/70 hover:text-gold-700 dark:hover:border-gold-400/70 dark:hover:text-gold-400",
        ghost: "text-foreground hover:bg-muted",
        link: "text-gold-700 underline-offset-4 hover:underline dark:text-gold-400",
      },
      size: {
        default: "h-12 px-7 py-3",
        sm: "h-10 px-5",
        lg: "h-14 px-9 text-base",
        icon: "h-11 w-11",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
