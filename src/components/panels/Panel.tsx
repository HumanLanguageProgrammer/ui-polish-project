import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PanelProps {
  children?: ReactNode;
  className?: string;
  title?: string;
}

export const Panel = ({ children, className, title }: PanelProps) => {
  return (
    <div
      className={cn(
        "border border-border rounded-lg bg-card p-4 flex flex-col",
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
