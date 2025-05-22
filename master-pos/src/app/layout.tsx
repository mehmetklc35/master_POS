import Sidebar from "@/components/layout/Sidebar";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
