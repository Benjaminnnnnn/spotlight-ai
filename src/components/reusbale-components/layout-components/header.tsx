import { Button } from "@/components/ui/button";
import { User } from "@/generated/prisma";
import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  user: User;
}

const Header = ({ user }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="w-full px-4 pt-10 sticky top-0 z-10 flex justify-between items-center flex-wrap gap-4 bg-background">
      {pathname.includes("pipeline") ? (
        <Button
          className="bg-primary/10 border border-border rounded-xl"
          variant={"outline"}
          onClick={() => router.push("webinars")}
        >
          <ArrowLeft className="w-4 h-4"></ArrowLeft>
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
