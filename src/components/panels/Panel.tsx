import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PanelProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
}

export const Panel = ({ children, className, title, onClick }: PanelProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "border border-border rounded-lg bg-card p-4 flex flex-col",
        onClick && "cursor-pointer",
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
