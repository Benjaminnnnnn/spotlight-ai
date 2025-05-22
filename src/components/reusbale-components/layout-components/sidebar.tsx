"use client";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import sidebarLinks from "@/lib/data";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Pyramid } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-18 sm:w-28 h-screen sticky top-0 py-10 px-2 sm:px-6 border bg-background border-border flex flex-col items-center justify-start gap-10">
      <Pyramid></Pyramid>
      <div className="w-full h-full justify-between items-center flex flex-col">
        <div className="w-full h-fit justify-between items-center flex flex-col">
          {sidebarLinks.map((item) => (
            <TooltipProvider key={item.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.link}
                    className={cn(
                      "flex items-center gap-2 cursor-pointer rounded-lg p-2",
                      pathname.includes(item.link) ? "iconBackground" : ""
                    )}
                  >
                    <item.icon
                      className={cn(
                        "w-4 h-4",
                        pathname.includes(item.link) ? "" : "opacity-80"
                      )}
                    ></item.icon>
                  </Link>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <UserButton></UserButton>
      </div>
    </div>
  );
};

export default Sidebar;
