import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PanelProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export const Panel = ({ children, className, title, onClick, interactive }: PanelProps) => {
  const isClickable = onClick || interactive;
  
  return (
    <div
      onClick={onClick}
      className={cn(
        "border border-border rounded-lg bg-card p-4 flex flex-col",
        isClickable && [
          "cursor-pointer",
          "transition-all duration-200 ease-out",
          "hover:border-primary/40",
          "hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.1)]",
          "active:scale-[0.995]",
          "active:border-primary/60",
        ],
        className
      )}
    >
      {title && (
        <div className="text-sm font-medium text-muted-foreground mb-2">
          {title}
        </div>
      )}
      {children}
    </div>
  );
};
