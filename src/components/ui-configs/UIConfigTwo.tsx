import { Panel } from "@/components/panels/Panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const UIConfigTwo = () => {
  return (
    <div className="h-screen w-screen bg-background p-4 flex flex-col gap-4 overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex gap-4 min-h-0">
        {/* Left Column - Image Viewing Area */}
        <Panel className="flex-1 min-w-0" title="Image Viewing Area">
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            {/* Placeholder for image content */}
            <div className="border-2 border-dashed border-border rounded-lg w-full h-full flex items-center justify-center">
              <span className="text-sm">Image Content</span>
            </div>
          </div>
        </Panel>

        {/* Right Column - Response & Input */}
        <div className="w-80 flex flex-col gap-4 min-h-0">
          {/* LLM Response Panel */}
          <Panel className="flex-1 min-h-0" title="LLM Generated Response">
            <div className="flex-1 overflow-auto text-sm text-foreground">
              {/* Placeholder for LLM response content */}
              <p className="text-muted-foreground italic">Response will appear here...</p>
            </div>
          </Panel>

          {/* Text Input Panel */}
          <Panel className="shrink-0" title="Text Input from User">
            <div className="flex gap-2">
              <Input
                placeholder="Enter your message..."
                className="flex-1"
              />
              <Button>Next</Button>
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
