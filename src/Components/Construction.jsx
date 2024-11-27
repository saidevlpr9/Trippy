import React from "react";
import { Construction, Hammer, HardHat, Ruler } from "lucide-react";

export function ConstructionAnimation() {
  return (
    <div className="relative w-24 h-24 animate-bounce">
      <Construction className="absolute top-0 left-0 w-full h-full text-yellow-500" />
      <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
        <Hammer className="absolute -top-4 -right-4 w-8 h-8 text-gray-600" />
        <HardHat className="absolute -bottom-4 -left-4 w-8 h-8 text-yellow-600" />
        <Ruler className="absolute -top-4 -left-4 w-8 h-8 text-gray-700" />
      </div>
    </div>
  );
}
