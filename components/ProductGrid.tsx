"use client";
import { productType } from "@/constants/data";
import { useState } from "react";
import HomeTabBar from "./HomeTabBar";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

  const query = `*[_type == "product" && variant == $variant ] | order(name desc){
  name, ..., "categories":categories[]->title
}`;

  const params = { variant: selectedTab.toLowerCase() };
  return (
    <div>
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </div>
  );
};

export default ProductGrid;