import { productType } from "@/constants/data";
import Link from "next/link";

const HomeTabBar = () => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-1.5 text-sm font-semibold">
        {productType?.map((item) => (
          <button key={item?.title}>{item?.title}</button>
        ))}
      </div>
      <Link href="/shop">See all</Link>
    </div>
  );
};

export default HomeTabBar;
