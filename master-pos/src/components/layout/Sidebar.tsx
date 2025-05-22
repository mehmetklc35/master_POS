"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Search, Menu } from "lucide-react";
import { sidebarMenu } from "@/constants/sidebarMenu";
import { useState } from "react";
import clsx from "clsx";

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col px-4 py-6">
      <div className="flex items-center justify-between mb-6 px-2">
        <Image
          src="/Logo.svg"
          alt="MasterPOS Logo"
          width={143.87}
          height={56.48}
          priority
        />
        <button
          onClick={() => console.log("toggle sidebar")}
          className="text-gray-500 hover:text-gray-800 transition"
        >
          <Menu style={{ width: "25.25px", height: "18.45px" }} />
        </button>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 mb-8 mt-8 bg-white border border-gray-200 rounded-lg">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search here"
          className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
        />
      </div>

      {sidebarMenu.map((section) => (
        <div key={section.section} className="mb-6">
          <p className="text-xs text-gray-400 uppercase mb-2 px-1">
            {section.section}
          </p>

          <ul className="space-y-1">
            {section.items.map(
              ({ label, icon: Icon, href, children, badge }) => {
                const isActive = pathname === href;
                const isOpen = openMenu === label;

                return (
                  <li key={label}>
                    <button
                      onClick={() => (children ? toggleMenu(label) : null)}
                      className={clsx(
                        "w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition group",
                        isActive
                          ? "bg-[#3F83F8] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <Icon
                          className={clsx(
                            "w-4 h-4",
                            isActive && "text-[#C6FF00]"
                          )}
                        />
                        {label}
                      </span>

                      <span className="ml-auto flex items-center gap-1">
                        {badge && (
                          <span className="text-[10px] font-semibold text-black bg-[#C6FF00] px-2 py-[2px] rounded-full">
                            {badge}
                          </span>
                        )}
                        {children && (
                          <ChevronDown
                            className={clsx(
                              "w-4 h-4 transform transition-transform",
                              isOpen ? "rotate-180" : ""
                            )}
                          />
                        )}
                      </span>
                    </button>

                    {isOpen && children && (
                      <ul className="ml-6 mt-1 space-y-1">
                        {children.map((child) => {
                          const isChildActive = pathname === child.href;
                          const ChildIcon = child.icon;

                          return (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className={clsx(
                                  "flex items-center gap-2 text-sm px-3 py-1 rounded-md transition",
                                  isChildActive
                                    ? "text-blue-600 font-semibold bg-blue-50"
                                    : "text-gray-600 hover:bg-gray-100"
                                )}
                              >
                                {ChildIcon && (
                                  <ChildIcon className="w-4 h-4 text-gray-400" />
                                )}
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }
            )}
          </ul>
        </div>
      ))}
    </aside>
  );
}
