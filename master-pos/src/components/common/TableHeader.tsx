"use client";

import {
  Search,
  RefreshCcw,
  Calendar,
  Filter,
  MoreHorizontal,
  Plus,
} from "lucide-react";

export default function TableHeader() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4 gap-4">
      <h2 className="text-lg font-semibold text-gray-800">All Products</h2>

      <div className="flex items-center gap-2 w-full lg:w-auto">
        <div className="relative w-full max-w-xs">
          <span className="absolute left-3 top-2.5 text-gray-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search item..."
            className="w-full text-sm pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>

        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100">
          <RefreshCcw className="w-4 h-4" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100">
          <Calendar className="w-4 h-4" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100">
          <Filter className="w-4 h-4" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100">
          <MoreHorizontal className="w-4 h-4" />
        </button>

        <button className="w-auto flex items-center gap-[6px] bg-[#3F83F8] hover:bg-blue-600 text-white text-xs font-medium px-3 py-[6px] rounded-md">
          <span className="flex items-center justify-center w-[18px] h-[18px] border border-[#C6FF00] rounded-full">
            <Plus className="w-[10px] h-[10px] text-[#C6FF00]" />
          </span>
          Add New Product
        </button>
      </div>
    </div>
  );
}
