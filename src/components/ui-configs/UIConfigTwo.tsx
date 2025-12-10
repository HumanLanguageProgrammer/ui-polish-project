import { useState } from "react";
import { Panel } from "@/components/panels/Panel";
import { FullscreenPanel } from "@/components/panels/FullscreenPanel";
import { Input } from "@/components/ui/input";
import { ArrowUp, Mic } from "lucide-react";

interface UIConfigTwoProps {
  onToggle: () => void;
  onSwitchToVoice: () => void;
}

export const UIConfigTwo = ({ onToggle, onSwitchToVoice }: UIConfigTwoProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(prev => !prev);
  };

  return (
    <div className="h-full w-full bg-background p-4 flex flex-col gap-3 overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex gap-4 min-h-0">
        {/* Left Column - Image Viewing Area */}
        {!isFullScreen && (
          <FullscreenPanel className="flex-1 min-w-0">
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              <span className="text-sm">Image Content</span>
            </div>
          </FullscreenPanel>
        )}

        {/* Right Column - Response */}
        <Panel 
          className={isFullScreen ? "flex-1 min-h-0" : "w-80 min-h-0"}
          title="LLM Generated Response"
          onClick={toggleFullScreen}
        >
          <div className="flex-1 overflow-auto text-sm text-foreground">
            <p className="text-muted-foreground italic">Response will appear here...</p>
            <p className="text-xs text-muted-foreground/60 mt-2">(Click to {isFullScreen ? 'minimize' : 'expand'})</p>
          </div>
        </Panel>
      </div>

      {/* Text Input - Horizontal across bottom */}
      <Panel className="shrink-0 py-2 px-3" interactive>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Enter your message..."
            className="flex-1 border-0 shadow-none focus-visible:ring-0 px-0"
          />
          <button 
            onClick={onSwitchToVoice}
            className="shrink-0 p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            aria-label="Switch to voice input"
          >
            <Mic className="h-5 w-5" />
          </button>
          <button 
            className="shrink-0 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            aria-label="Send message"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </Panel>

      {/* Status Bar */}
      <FullscreenPanel className="shrink-0 py-2 px-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Status Information</span>
          <span className="text-xs">Ready</span>
        </div>
      </FullscreenPanel>
    </div>
  );
};
