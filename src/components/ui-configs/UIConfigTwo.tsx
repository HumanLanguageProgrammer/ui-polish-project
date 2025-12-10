import { Panel } from "@/components/panels/Panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UIConfigTwoProps {
  onToggle: () => void;
}

export const UIConfigTwo = ({ onToggle }: UIConfigTwoProps) => {
  return (
    <div className="h-full w-full bg-background p-4 flex flex-col gap-3 overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex gap-4 min-h-0">
        {/* Left Column - Image Viewing Area */}
        <Panel className="flex-1 min-w-0">
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <span className="text-sm">Image Content</span>
          </div>
        </Panel>

        {/* Right Column - Response */}
        <Panel 
          className="w-80 min-h-0 cursor-pointer hover:border-primary/50 transition-colors" 
          title="LLM Generated Response"
          onClick={onToggle}
        >
          <div className="flex-1 overflow-auto text-sm text-foreground">
            <p className="text-muted-foreground italic">Response will appear here...</p>
            <p className="text-xs text-muted-foreground/60 mt-2">(Click to toggle input mode)</p>
          </div>
        </Panel>
      </div>

      {/* Text Input - Horizontal across bottom */}
      <Panel className="shrink-0 py-2 px-3">
        <div className="flex gap-2">
          <Input
            placeholder="Enter your message..."
            className="flex-1"
          />
          <Button>Next</Button>
        </div>
      </Panel>

      {/* Status Bar */}
      <Panel className="shrink-0 py-2 px-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Status Information</span>
          <span className="text-xs">Ready</span>
        </div>
      </Panel>
    </div>
  );
};
