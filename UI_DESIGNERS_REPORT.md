# UI Designer's Report

## Project Overview

This project implements a multi-configuration UI system for an AI-powered image viewing and conversation application. The interface supports both text and voice input modes with flexible panel layouts.

---

## UI Configurations

The application has **4 distinct UI configurations** that users can navigate between:

### UIConfigOne (`src/components/ui-configs/UIConfigOne.tsx`)
- **Layout**: Two-column with image panel (left, larger) and LLM response panel (right, smaller)
- **Bottom section**: Three pressable prompt buttons + status bar
- **Key interactions**:
  - Click LLM Response → expands to full width (hides image panel)
  - Click Image Content → fullscreen overlay
  - Click Status Bar → fullscreen overlay

### UIConfigTwo (`src/components/ui-configs/UIConfigTwo.tsx`)
- **Layout**: Same as Config 1 but with text input bar instead of prompt buttons
- **Bottom section**: Text input with mic icon + send button, status bar
- **Key interactions**:
  - Click LLM Response → expands to full width (hides image panel)
  - Click Mic icon → switches to UIConfigFour (voice mode)
  - Click Image Content → fullscreen overlay
  - Click Status Bar → fullscreen overlay

### UIConfigThree (`src/components/ui-configs/UIConfigThree.tsx`)
- **Layout**: Reversed - LLM response panel (left, larger) and image panel (right, smaller `w-56`)
- **Bottom section**: Text input with mic icon + send button, status bar
- **Key interactions**:
  - Click LLM Response → expands to full width (hides image panel)
  - Click Mic icon → switches to UIConfigFour (voice mode)
  - Click Image Content → fullscreen overlay
  - Click Status Bar → fullscreen overlay

### UIConfigFour (`src/components/ui-configs/UIConfigFour.tsx`)
- **Layout**: Voice-focused - large image display (top), voice input panel (middle), status bar (bottom)
- **Voice panel**: Centered mic button with oval border, keyboard icon in bottom-right
- **Key interactions**:
  - Click Keyboard icon → switches to UIConfigTwo (text mode)
  - Click Image Display → fullscreen overlay
  - Click Status Bar → fullscreen overlay

---

## Navigation Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     CONFIG NAVIGATION                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  UIConfigThree ──(mic icon)──► UIConfigFour                 │
│                                     │                        │
│                              (keyboard icon)                 │
│                                     │                        │
│                                     ▼                        │
│                               UIConfigTwo ──(mic icon)──►   │
│                                     │                        │
│                                     └───────────────────────┤
│                                                              │
│  Note: The toggle cycle (1→2→3→4→1) via LLM Response        │
│  click has been replaced with local fullscreen toggles.      │
│  Voice/Text switching is the primary navigation method.      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Voice ↔ Text Circuit**:
- From text mode (Config 2 or 3): Click mic icon → Voice mode (Config 4)
- From voice mode (Config 4): Click keyboard icon → Text mode (Config 2)

---

## Component Architecture

### Core Components

#### `Panel` (`src/components/panels/Panel.tsx`)
Base panel component with:
- Border styling (`border-2` at rest, `border-[3px]` on hover)
- Optional title header
- Interactive state with hover effects (border color changes to primary)
- Click handler support

**Props**:
- `className`: Additional CSS classes
- `title`: Optional header text
- `interactive`: Boolean for hover effects (default: true)
- `onClick`: Optional click handler
- `children`: Panel content

#### `FullscreenPanel` (`src/components/panels/FullscreenPanel.tsx`)
Wrapper component for panels that can expand to fullscreen:
- Click to expand to full viewport (fixed positioning, z-50)
- X button or click anywhere to close
- Inherits all Panel styling

**Props**:
- `className`: Additional CSS classes
- `title`: Optional header text
- `interactive`: Boolean for hover effects
- `children`: Panel content

---

## Design Tokens & Styling

### Border Styling
- Rest state: `border-2 border-border`
- Hover state: `border-[3px] border-primary/70`
- Transition: `transition-all duration-200`

### Color Usage (Semantic Tokens)
- `bg-background` - Main background
- `text-foreground` - Primary text
- `text-muted-foreground` - Secondary/placeholder text
- `border-border` - Default borders
- `border-primary` - Active/hover borders
- `bg-primary` / `text-primary-foreground` - Primary buttons

### Spacing
- Page padding: `p-4`
- Gap between panels: `gap-3` (vertical), `gap-4` (horizontal in content area)
- Panel internal padding varies by context

---

## File Structure

```
src/
├── components/
│   ├── panels/
│   │   ├── Panel.tsx              # Base panel component
│   │   └── FullscreenPanel.tsx    # Fullscreen-capable panel wrapper
│   ├── ui-configs/
│   │   ├── UIConfigOne.tsx        # Image + Response + Prompts layout
│   │   ├── UIConfigTwo.tsx        # Image + Response + Text Input layout
│   │   ├── UIConfigThree.tsx      # Response + Image + Text Input (reversed)
│   │   └── UIConfigFour.tsx       # Voice-focused layout
│   └── ui/                        # Shadcn UI components
├── pages/
│   └── Index.tsx                  # Main page with config state management
└── index.css                      # Design system tokens
```

---

## State Management

### Index.tsx (Main Controller)
- `activeConfig`: Tracks which UI configuration is displayed (1-4)
- `toggleConfig()`: Cycles through configs (currently not heavily used)
- `switchToTextMode()`: Sets config to 2
- `switchToVoiceMode()`: Sets config to 4

### Individual Config Components
Each config manages its own local state:
- `isFullScreen`: Boolean for LLM Response panel expansion (Configs 1, 2, 3)

---

## Key Implementation Notes

1. **Fullscreen behavior**: Uses fixed positioning with `inset-0 z-50` for true fullscreen overlay

2. **Panel click handling**: The Panel component uses cursor styles and hover effects to indicate interactivity

3. **Responsive considerations**: Panels use `flex-1` and `min-w-0`/`min-h-0` for flexible sizing

4. **Icon library**: Lucide React icons used throughout (`Mic`, `Keyboard`, `ArrowUp`, `X`)

5. **Input component**: Uses Shadcn's Input with custom borderless styling for the text input bar

---

## Future Development Suggestions

1. **Add actual image loading** into the Image Display/Content panels
2. **Implement voice recording** functionality for the mic button
3. **Add LLM integration** for generating responses
4. **Status bar updates** with actual status information
5. **Add smooth animations** for panel transitions
6. **Implement the prompt buttons** functionality in UIConfigOne

---

*Report generated for handoff to Claude Code*
