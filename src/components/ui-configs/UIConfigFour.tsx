import { Panel } from "@/components/panels/Panel";
import { Mic, Keyboard } from "lucide-react";

interface UIConfigFourProps {
  onSwitchToText: () => void;
}

export const UIConfigFour = ({ onSwitchToText }: UIConfigFourProps) => {
  return (
    <div className="h-full w-full bg-background p-4 flex flex-col gap-3 overflow-hidden">
      {/* Image Thumbnail - Large area at top */}
      <Panel className="flex-1 min-h-0" interactive>
        <div className="flex-1 flex items-center justify-center text-muted-foreground">
          <span className="text-sm font-medium">Image Thumbnail</span>
        </div>
      </Panel>

      {/* Voice Input Panel - Mic button with keyboard switch */}
      <Panel className="shrink-0 py-3 px-4" interactive>
        <div className="flex items-center justify-center relative">
          {/* Centered Mic Button */}
          <button 
            className="p-3 rounded-full border-2 border-muted-foreground/40 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            aria-label="Voice input"
          >
            <Mic className="h-6 w-6" />
          </button>
          
          {/* Keyboard Icon - Bottom Right */}
          <button 
            onClick={onSwitchToText}
            className="absolute right-4 p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Switch to text input"
          >
            <Keyboard className="h-5 w-5" />
          </button>
        </div>
      </Panel>

      {/* Status Bar */}
      <Panel className="shrink-0 py-2 px-4" interactive>
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <span className="font-medium">Status Information</span>
        </div>
      </Panel>
    </div>
  );
};
