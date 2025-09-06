"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion, useAnimate } from "motion/react";

export const Button = ({
  className,
  children,
  ...props
}) => {
  const [scope, animate] = useAnimate();

  const animateLoading = async () => {
    await animate(".loader", {
      width: "20px",
      scale: 1,
      display: "block",
    }, {
      duration: 0.2,
    });
  };

  const animateSuccess = async () => {
    await animate(".loader", {
      width: "0px",
      scale: 0,
      display: "none",
    }, {
      duration: 0.2,
    });
    await animate(".check", {
      width: "20px",
      scale: 1,
      display: "block",
    }, {
      duration: 0.2,
    });

    await animate(".check", {
      width: "0px",
      scale: 0,
      display: "none",
    }, {
      delay: 2,
      duration: 0.2,
    });
  };

  const handleClick = async (event) => {
    // Prevent animation for navigation buttons to avoid interfering with router.push
    if (props.onClick && props.onClick.toString().includes('router.push')) {
      props.onClick(event);
      return;
    }
    
    await animateLoading();
    await props.onClick?.(event);
    await animateSuccess();
  };

  const {
    onClick,
    onDrag,
    onDragStart,
    onDragEnd,
    onAnimationStart,
    onAnimationEnd,
    ...buttonProps
  } = props;

  return (
    <motion.button
      layout
      layoutId="button"
      ref={scope}
      className={cn(
        "group flex min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 font-medium text-white ring-offset-2 transition-all duration-300 hover:scale-105 hover:shadow-xl",
        "bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600",
        "hover:bg-gradient-to-r hover:from-orange-600 hover:via-orange-500 hover:to-orange-700",
        "shadow-md shadow-orange-500/20",
        "border border-orange-300/30",
        className
      )}
      {...buttonProps}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      <motion.div layout className="flex items-center gap-2">
        <Loader />
        <CheckIcon />
        <motion.span 
          layout
          className="text-white drop-shadow-md"
        >
          {children}
        </motion.span>
      </motion.div>
    </motion.button>
  );
};

const Loader = () => {
  return (
    <motion.svg
      animate={{
        rotate: [0, 360],
      }}
      initial={{
        scale: 0,
        width: 0,
        display: "none",
      }}
      style={{
        scale: 0.5,
        display: "none",
      }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        ease: "linear",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="loader text-white drop-shadow-md">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3a9 9 0 1 0 9 9" />
    </motion.svg>
  );
};

const CheckIcon = () => {
  return (
    <motion.svg
      initial={{
        scale: 0,
        width: 0,
        display: "none",
      }}
      style={{
        scale: 0.5,
        display: "none",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="check text-white drop-shadow-md">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 12l2 2l4 -4" />
    </motion.svg>
  );
};