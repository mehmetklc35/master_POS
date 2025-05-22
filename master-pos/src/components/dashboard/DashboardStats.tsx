"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { fetchProducts } from "@/services/productService";
import type { Product } from "@/types/Product";

export default function DashboardStats() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((data: Product[]) => {
        const withFakeStatus = data.map((item, index) => ({
          ...item,
          status:
            index % 5 === 0
              ? "completed"
              : index % 5 === 1
              ? "pending"
              : index % 5 === 2
              ? "canceled"
              : "active",
        }));

        console.log("Status eklenmiş ürünler:", withFakeStatus);
        setProducts(withFakeStatus);
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          console.error("Product API error:", err.message);
        } else {
          console.error("Product API error:", err);
        }
      });
  }, []);

  const active = products.filter(
    (p) => typeof p.status === "string" && p.status.toLowerCase() === "active"
  ).length;

  const completed = products.filter(
    (p) =>
      typeof p.status === "string" && p.status.toLowerCase() === "completed"
  ).length;

  const canceled = products.filter(
    (p) => typeof p.status === "string" && p.status.toLowerCase() === "canceled"
  ).length;

  const pending = products.filter(
    (p) => typeof p.status === "string" && p.status.toLowerCase() === "pending"
  ).length;

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <MetricCard
        title="Active Products"
        value={active}
        change="+15%"
        positive
      />
      <MetricCard title="New Products" value="+2,368" change="+2%" positive />
      <MetricCard
        title="Completed Order"
        value={completed}
        change="-4.5%"
        positive={false}
      />
      <MetricCard
        title="Pending Payment"
        value={pending}
        change="+5%"
        positive
      />
      <MetricCard
        title="Canceled Order"
        value={canceled}
        change="-2%"
        positive={false}
      />
    </section>
  );
}

function MetricCard({
  title,
  value,
  change,
  positive,
}: {
  title: string;
  value: string | number;
  change: string;
  positive: boolean;
}) {
  const Icon = positive ? ArrowUpRight : ArrowDownRight;
  const color = positive ? "text-green-600" : "text-red-500";

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
      <div className="flex items-center gap-1 mt-1">
        <Icon className={`w-4 h-4 ${color}`} />
        <span className={`text-sm font-medium ${color}`}>{change}</span>
      </div>
    </div>
  );
}
