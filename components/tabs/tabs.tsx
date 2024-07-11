"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const subTabs = [
  { title: "Thảo luận", href: "/home/discussST" },
  { title: "Bài tập", href: "/home/assignmentST" },
  { title: "Tài liệu của bạn", href: "/home/documentST" },
];

export default function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const router = useRouter();

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
    router.push(subTabs[index].href);
  };
  return (
    <div className=" flex">
      <ul className="flex space-x-4 border-b border-gray-200 pb-4">
        {subTabs.map((tab, index) => (
          <li
            key={tab.title}
            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
              index === activeTabIndex ? "bg-gray-200 font-bold" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
