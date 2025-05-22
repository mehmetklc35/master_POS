import Header from "@/components/layout/Header";
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
        <main className="flex-1 min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <div className="p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
