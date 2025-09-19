import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-40 left-1/2 -translate-x-1/2">
      <ChevronDown
        size={40}
        className="text-[#EE0000] animate-bounce"
      />
    </div>
  );
}
