import { useState } from "react";
import { UIConfigOne } from "@/components/ui-configs/UIConfigOne";
import { UIConfigTwo } from "@/components/ui-configs/UIConfigTwo";
import { UIConfigThree } from "@/components/ui-configs/UIConfigThree";

const Index = () => {
  const [activeConfig, setActiveConfig] = useState<1 | 2 | 3>(1);

  const toggleConfig = () => {
    setActiveConfig(prev => {
      if (prev === 1) return 2;
      if (prev === 2) return 3;
      return 1;
    });
  };

  return (
    <div className="h-screen w-screen bg-background overflow-hidden">
      {activeConfig === 1 && <UIConfigOne onToggle={toggleConfig} />}
      {activeConfig === 2 && <UIConfigTwo onToggle={toggleConfig} />}
      {activeConfig === 3 && <UIConfigThree onToggle={toggleConfig} />}
    </div>
  );
};

export default Index;
