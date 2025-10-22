import { CarFrontIcon } from "lucide-react";

const NavLayout = () => {
  return (
    <div>
      <div className=" py-3 border-b px-4 flex items-center gap-2">
        <CarFrontIcon
          size={39}
          className=" py-1 px-2 rounded-md bg-indigo-600 text-white "
        />
        <div>
          <p className=" text-[18px]  font-semibold">AutoDealer</p>
          <p className=" text-gray-500 text-[12px]">Management System</p>
        </div>
      </div>
    </div>
  );
};

export default NavLayout;
