import { useState } from "react";
import { UIConfigOne } from "@/components/ui-configs/UIConfigOne";
import { UIConfigTwo } from "@/components/ui-configs/UIConfigTwo";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeConfig, setActiveConfig] = useState<1 | 2>(1);

  return (
    <div className="h-screen w-screen bg-background overflow-hidden flex flex-col">
      {/* Config Switcher */}
      <div className="shrink-0 p-4 border-b border-border bg-card flex gap-2 items-center">
        <span className="text-sm font-medium text-muted-foreground mr-2">View:</span>
        <Button
          variant={activeConfig === 1 ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveConfig(1)}
        >
          Config 1 - Prompt Buttons
        </Button>
        <Button
          variant={activeConfig === 2 ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveConfig(2)}
        >
          Config 2 - Text Input
        </Button>
      </div>

      {/* Active Configuration */}
      <div className="flex-1 min-h-0">
        {activeConfig === 1 ? <UIConfigOne /> : <UIConfigTwo />}
      </div>
    </div>
  );
};

export default Index;
