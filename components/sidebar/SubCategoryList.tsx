import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

interface subCategories {
  name: string;
  href: string;
}

interface SubCategoryListProps {
  subCategories: subCategories[];
}

const SubCategoryList: React.FC<SubCategoryListProps> = ({ subCategories }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); 
  const router = useRouter()
  const handleClick = (index: number) => {
    setActiveIndex(index);
    router.push(subCategories[index].href)
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
          <p>{category.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default SubCategoryList;
