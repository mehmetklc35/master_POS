"use client";

import { Bell, Globe, Mail, Sliders, ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Header() {
  return (
    <header className="hidden sm:flex w-full items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <div className="hidden md:block">
        <h1 className="text-xl font-semibold text-gray-800">Products</h1>
        <p className="text-sm text-gray-500">Manage your products</p>
      </div>

      <div className="flex items-center gap-6 ml-auto">
        <div className="hidden md:flex items-center gap-6">
          <ThemeToggle />
          <div className="w-px h-6 bg-gray-300" />
          <div className="flex items-center gap-5">
            <Globe className="w-5 h-5 text-gray-600 cursor-pointer" />
            <div className="relative cursor-pointer">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-2 -right-2 w-[18px] h-[18px] flex items-center justify-center text-[10px] text-black font-semibold bg-[#C6FF00] rounded-full">
                12
              </span>
            </div>
            <Mail className="w-5 h-5 text-gray-600 cursor-pointer" />
            <Sliders className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
          <div className="w-px h-6 bg-gray-300" />
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div className="hidden md:flex flex-col">
            <span className="text-sm font-semibold text-black">
              Patricia Peter
            </span>
            <span className="text-xs text-gray-500">Super Admin</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
}
