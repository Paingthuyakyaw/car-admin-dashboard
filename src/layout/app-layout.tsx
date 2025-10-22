import { Outlet } from "react-router";
import NavLayout from "./nav-layout";
import { BellIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const AppLayout = () => {
  return (
    <div>
      <div className=" flex  ">
        <div className=" w-[280px] 2xl:w-[250px]  shadow-sm border-r  min-h-screen ">
          <NavLayout />
        </div>
        <div className=" w-full">
          <div className=" fixed bg-white  top-0 z-50  flex items-center justify-end w-full py-2 shadow-sm px-4 gap-5">
            <BellIcon size={22} />

            <Popover>
              <PopoverTrigger>
                <div className=" cursor-pointer flex items-center gap-2">
                  <Avatar className=" w-9 h-9 ">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className=" flex flex-col items-start">
                    <div className=" text-sm  font-semibold">John Wick</div>
                    <div className=" text-gray-500 text-[12px]">Admin</div>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className=" p-2 w-auto">hello</PopoverContent>
            </Popover>
          </div>
          <div className=" pt-20 bg-gray-100 min-h-screen p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
