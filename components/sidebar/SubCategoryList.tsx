import Link from "next/link";
import React, { useState } from "react";

interface subCategories {
  name: string;
  href: string;
}

interface SubCategoryListProps {
  subCategories: subCategories[];
}

const SubCategoryList: React.FC<SubCategoryListProps> = ({ subCategories }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); 

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ul
      role="list"
      className="space-y-2 border-b border-gray-200 pb-2 text-sm font-medium text-gray-900"
    >
      {subCategories.map((category, index) => (
        <li
          className={` rounded-lg py-3 pl-5 cursor-pointer ${
            activeIndex === index ? "bg-gray-200 ring-1 ring-slate-400" : ""
          }`}
          key={category.name}
          onClick={() => handleClick(index)}
        >
          <Link href={category.href}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SubCategoryList;
