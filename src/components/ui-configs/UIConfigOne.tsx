import { Panel } from "@/components/panels/Panel";
import { Button } from "@/components/ui/button";

interface UIConfigOneProps {
  onToggle: () => void;
}

export const UIConfigOne = ({ onToggle }: UIConfigOneProps) => {
  return (
    <div className="h-full w-full bg-background p-4 flex flex-col gap-4 overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex gap-4 min-h-0">
        {/* Left Column - Image Viewing Area */}
        <Panel className="flex-1 min-w-0" title="Image Viewing Area">
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="border-2 border-dashed border-border rounded-lg w-full h-full flex items-center justify-center">
              <span className="text-sm">Image Content</span>
            </div>
          </div>
        </Panel>

        {/* Right Column - Response & Controls */}
        <div className="w-80 flex flex-col gap-4 min-h-0">
          {/* LLM Response Panel - Clickable to toggle */}
          <Panel 
            className="flex-1 min-h-0 cursor-pointer hover:border-primary/50 transition-colors" 
            title="LLM Generated Response"
            onClick={onToggle}
          >
            <div className="flex-1 overflow-auto text-sm text-foreground">
              <p className="text-muted-foreground italic">Response will appear here...</p>
              <p className="text-xs text-muted-foreground/60 mt-2">(Click to toggle input mode)</p>
            </div>
          </Panel>

          {/* Prompt Buttons Panel */}
          <Panel className="shrink-0" title="Pressable Prompts">
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 px-4"
              >
                <span className="truncate">Pressable Prompt (LLM Generated)</span>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 px-4"
              >
                <span className="truncate">Pressable Prompt (LLM Generated)</span>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 px-4"
              >
                <span className="truncate">Pressable Prompt (LLM Generated)</span>
              </Button>
            </div>
          </Panel>
        </div>
      </div>

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
