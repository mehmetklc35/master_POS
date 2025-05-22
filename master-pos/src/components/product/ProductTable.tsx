"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "@/services/productService";
import type { Product } from "@/types/Product";
import TableHeader from "@/components/common/TableHeader";
import Pagination from "@/components/common/Pagination";
import clsx from "clsx";
import { CheckCircle, XCircle, Clock } from "lucide-react";

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((data: Product[]) => {
        const withStatus = data.map((item, index) => ({
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
        setProducts(withStatus);
      })
      .catch((err) => console.error("Product list fetch error:", err));
  }, []);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <TableHeader />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[768px] text-sm">
          <thead className="text-left text-gray-500 font-semibold">
            <tr>
              <th className="py-4 px-4 hidden lg:table-cell">
                <input type="checkbox" />
              </th>
              <th className="py-4 px-4">Product</th>
              <th className="py-4 px-4 hidden md:table-cell">Transaction ID</th>
              <th className="py-4 px-4 hidden lg:table-cell">Date</th>
              <th className="py-4 px-4 hidden lg:table-cell">Amount</th>
              <th className="py-4 px-4 hidden lg:table-cell">Status</th>
              <th className="py-4 px-4 text-right hidden lg:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.slice(0, 12).map((product) => (
              <tr
                key={product.id}
                className="group hover:bg-gray-50 transition border-b border-gray-100"
              >
                <td className="py-4 px-4 hidden lg:table-cell">
                  <input type="checkbox" />
                </td>

                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-200 rounded-md" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-400 hidden md:block">
                        Accessories
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-4 text-gray-700 hidden md:table-cell">
                  TR-{String(product.id).padStart(3, "0")}-123456
                </td>

                <td className="py-4 px-4 text-gray-500 hidden lg:table-cell">
                  Dec 22, 2023
                </td>

                <td className="py-4 px-4 font-medium text-gray-800 hidden lg:table-cell">
                  ${product.price.toLocaleString()}
                </td>

                <td className="py-4 px-4 hidden lg:table-cell">
                  <span
                    className={clsx(
                      "inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium",
                      product.status === "completed" &&
                        "bg-green-100 text-green-700",
                      product.status === "pending" &&
                        "bg-gray-200 text-gray-600",
                      product.status === "canceled" && "bg-red-100 text-red-600"
                    )}
                  >
                    {product.status === "completed" && (
                      <CheckCircle className="w-4 h-4" />
                    )}
                    {product.status === "pending" && (
                      <Clock className="w-4 h-4" />
                    )}
                    {product.status === "canceled" && (
                      <XCircle className="w-4 h-4" />
                    )}
                    {product.status.charAt(0).toUpperCase() +
                      product.status.slice(1)}
                  </span>
                </td>

                <td className="py-4 px-4 text-right hidden lg:table-cell">
                  <button className="text-gray-400 hover:text-gray-600">
                    <span className="text-xl">⋯</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={1}
        totalPages={5}
        totalItems={100}
        itemsPerPage={12}
        onPageChange={(page) => console.log("Sayfa:", page)}
      />
    </div>
  );
}
