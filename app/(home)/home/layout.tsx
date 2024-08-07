import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar/sidebar";
import Tabs from "@/components/tabs/tabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fluent Futures - HomeChild",
  description: "Generated by create next app",
};

export default function HomeChildLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      <div className="flex">
        <div className="w-[18%] border-r fixed top-0 left-0 overflow-y-auto">
          <Sidebar />
        </div>
        <div className="flex-1 ml-[20%]">
          <div>
            <Tabs />
            <div>{children}</div>
          </div>
        </div>
      </div>
    </body>
  </html>
  );
}
