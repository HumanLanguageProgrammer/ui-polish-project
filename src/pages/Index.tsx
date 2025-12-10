import { useState } from "react";
import { UIConfigOne } from "@/components/ui-configs/UIConfigOne";
import { UIConfigTwo } from "@/components/ui-configs/UIConfigTwo";
import { UIConfigThree } from "@/components/ui-configs/UIConfigThree";
import { UIConfigFour } from "@/components/ui-configs/UIConfigFour";

const Index = () => {
  const [activeConfig, setActiveConfig] = useState<1 | 2 | 3 | 4>(1);

  const toggleConfig = () => {
    setActiveConfig(prev => {
      if (prev === 1) return 2;
      if (prev === 2) return 3;
      if (prev === 3) return 4;
      return 1;
    });
  };

  const switchToTextMode = () => {
    setActiveConfig(2);
  };

  return (
    <div className="h-screen w-screen bg-background overflow-hidden">
      {activeConfig === 1 && <UIConfigOne onToggle={toggleConfig} />}
      {activeConfig === 2 && <UIConfigTwo onToggle={toggleConfig} />}
      {activeConfig === 3 && <UIConfigThree onToggle={toggleConfig} />}
      {activeConfig === 4 && <UIConfigFour onSwitchToText={switchToTextMode} />}
    </div>
  );
};

export default Index;
