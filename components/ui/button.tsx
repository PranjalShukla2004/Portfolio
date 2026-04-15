import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background hover:bg-foreground/90",
        secondary:
          "border border-white/10 bg-white/[0.04] text-foreground hover:border-white/20 hover:bg-white/[0.07]",
        outline:
          "border border-white/10 bg-transparent text-foreground hover:border-accent/40 hover:bg-accent/10",
        ghost: "text-foreground/80 hover:bg-white/[0.06] hover:text-foreground",
        link: "h-auto rounded-none p-0 text-accent underline-offset-4 hover:underline",
        glow:
          "bg-[linear-gradient(135deg,rgba(55,216,255,0.9),rgba(28,255,162,0.72))] text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_60px_rgba(52,211,153,0.16)] hover:brightness-105",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
