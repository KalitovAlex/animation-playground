import { FC, ReactNode } from "react";

interface BaseCardProps {
  children: ReactNode;
  className?: string;
  shadow?: boolean;
}

export const BaseCard: FC<BaseCardProps> = ({
  children,
  className = "",
  shadow = true,
}) => {
  return (
    <div
      className={`
        rounded-[45px] 
        p-12 
        flex 
        flex-col 
        justify-between 
        min-h-[400px]
        relative
        ${shadow ? "shadow-[6px_6px_0px_0px_rgb(0,0,0)]" : "shadow-none"}
        border-[1px]
        border-black/10
        ${className}
      `}
    >
      {children}
    </div>
  );
};
