import { oneAuthenticateUser } from "@/actions/auth";
import Sidebar from "@/components/reusbale-components/layout-components/sidebar";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const userExist = await oneAuthenticateUser();
  if (!userExist.user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar></Sidebar>
      <div className="flex flex-col w-full h-screen overflow-auto px-4 scrollbar-hide container mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
