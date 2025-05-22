import type { Product } from "@/types/Product";

export async function fetchProducts(page = 1): Promise<Product[]> {
  const res = await fetch(
    `https://devcase.isiksoftyazilim.com/api/products?page=${page}`
  );
  if (!res.ok) throw new Error("API Error");

  const data = await res.json();
  return data?.data || [];
}
