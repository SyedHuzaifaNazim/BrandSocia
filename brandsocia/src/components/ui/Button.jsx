"use client";
import Link from "next/link";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Button = forwardRef(
  ({ children, href, onClick, variant = "primary", className, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors duration-300";

    const variants = {
      primary: "bg-primary-500 text-white hover:bg-primary-600",
      secondary: "bg-secondary-100 text-dark hover:bg-secondary-200",
      outline:
        "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
      ghost: "text-primary-600 hover:bg-primary-50",
    };

    const classes = twMerge(clsx(baseClasses, variants[variant], className));

    if (href) {
      return (
        <Link href={href} {...props} ref={ref} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} onClick={onClick} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
