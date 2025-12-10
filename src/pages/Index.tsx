import { useState } from "react";
import { UIConfigOne } from "@/components/ui-configs/UIConfigOne";
import { UIConfigTwo } from "@/components/ui-configs/UIConfigTwo";

const Index = () => {
  const [activeConfig, setActiveConfig] = useState<1 | 2>(1);

  const toggleConfig = () => {
    setActiveConfig(prev => prev === 1 ? 2 : 1);
  };

  return (
    <div className="h-screen w-screen bg-background overflow-hidden">
      {activeConfig === 1 ? (
        <UIConfigOne onToggle={toggleConfig} />
      ) : (
        <UIConfigTwo onToggle={toggleConfig} />
      )}
    </div>
  );
};

export default Index;
