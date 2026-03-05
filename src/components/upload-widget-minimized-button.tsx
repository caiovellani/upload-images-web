import * as Collapsible from "@radix-ui/react-collapsible";
import { Maximize2 } from "lucide-react";

export function UploadWidgetMinimizedButton() {
  return (
    <Collapsible.Trigger className="w-full group flex items-center justify-between bg-white/5 px-5 py-3">
      <span className="text-sm font-medium">Upload files</span>

      <Maximize2
        strokeWidth={1.5}
        className="size-4 text-zinc-400 group-hover:text-zinc-100"
      />
    </Collapsible.Trigger>
  );
}
