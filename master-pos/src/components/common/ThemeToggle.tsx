"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <Sun className="w-5 h-5 text-[#4F46E5]" />
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative w-[46px] h-[24px] bg-gray-200 rounded-full transition"
      >
        <div
          className={`absolute top-1/2 left-[2px] -translate-y-1/2 w-[20px] h-[20px] rounded-full border-2 border-white shadow-sm transition-all duration-300 ${
            isDark ? "translate-x-[22px] bg-gray-700" : "bg-[#4F46E5]"
          }`}
        ></div>
      </button>
      <Moon className="w-5 h-5 text-gray-500" />
    </div>
  );
}
