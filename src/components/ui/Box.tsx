import {type  HTMLAttributes } from "react";
import clsx from "clsx";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Box({children, className, ...props}: BoxProps) {
  return (
    <div data-aos="zoom-in" className={clsx("border border-main/20 rounded-xl ring-6 ring-line overflow-hidden", className)} {...props}>
        {children}
    </div>
  )
}
