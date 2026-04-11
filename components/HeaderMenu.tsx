import { headerData } from "@/constants/data";
import Link from "next/link";
import React from "react";

const HeaderMenu = () => {
  return (
    <div className="hidden md:inlini-flex">
      {headerData?.map((item) => (
        <Link key={item?.title} href={item?.href}>
          {item?.title}
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
