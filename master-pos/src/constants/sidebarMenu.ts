import {
  Home,
  PackagePlus,
  PackageOpen,
  Tags,
  Grid3X3,
  LayoutGrid,
  BadgePercent,
  QrCode,
  FileDown,
  BarChart2,
  CreditCard,
  TrendingUp,
  ShoppingBag,
  List,
  ShoppingCart,
  RotateCcw,
  Percent,
  FileText,
  Users,
  Trophy,
  MessageCircle,
  Calendar,
  Mail,
  Settings,
  LogOut,
} from "lucide-react";

export const sidebarMenu = [
  {
    section: "MAIN MENU",
    items: [
      {
        label: "Dashboard",
        icon: Home,
        href: "/",
      },
      {
        label: "Products",
        icon: FileDown,
        href: "/products",
        activeColor: "#C6FF00",
        bgColor: "#4F46E5",
        textColor: "white",
        children: [
          { label: "All Products", href: "/products/all", icon: PackageOpen },
          {
            label: "Add New Product",
            href: "/products/new",
            icon: PackagePlus,
          },
          { label: "Tags", href: "/products/tags", icon: Tags },
        ],
      },
      { label: "Categories", icon: Grid3X3, href: "/categories" },
      { label: "Sub Category", icon: LayoutGrid, href: "/sub-category" },
      { label: "Brands", icon: BadgePercent, href: "/brands" },
      { label: "Scan Barcode", icon: QrCode, href: "/barcode" },
      { label: "Import Products", icon: FileDown, href: "/import" },
    ],
  },
  {
    section: "ANALYTICS",
    items: [
      {
        label: "Sales",
        icon: TrendingUp,
        href: "/sales",
        badge: 49,
      },
      {
        label: "Point of Sales",
        icon: ShoppingBag,
        href: "/pos",
      },
      {
        label: "Leaderboards",
        icon: List,
        href: "/leaderboards",
      },
      {
        label: "Orders",
        icon: ShoppingCart,
        href: "/orders",
        children: [
          { label: "Refund", href: "/orders/refund", icon: RotateCcw },
          { label: "Taxes", href: "/orders/taxes", icon: Percent },
          { label: "Stock", href: "/orders/stock", icon: FileText },
        ],
      },
    ],
  },
  {
    section: "APPS",
    items: [
      { label: "Chat", icon: MessageCircle, href: "/chat", badge: 20 },
      { label: "Calendar", icon: Calendar, href: "/calendar" },
      { label: "Email", icon: Mail, href: "/email" },
    ],
  },
  {
    section: "SETTINGS",
    items: [
      { label: "Settings", icon: Settings, href: "/settings" },
      { label: "Log Out", icon: LogOut, href: "/logout" },
    ],
  },
];
