"use client";

import { useState } from "react";
import HomeTabBar from "./HomeTabBar";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectTab] = useState("");

  return (
    <div>
      <HomeTabBar />
    </div>
  );
};

export default ProductGrid;
