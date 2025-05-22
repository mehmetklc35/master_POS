import DashboardStats from "@/components/dashboard/DashboardStats";
import ProductTable from "@/components/product/ProductTable";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <DashboardStats />
      <ProductTable />
    </div>
  );
}
