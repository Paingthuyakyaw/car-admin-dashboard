import { Input } from "@/components/ui/input";
import { useGetAllTeam } from "@/store/server/team/query";

const Team = () => {
  const { data } = useGetAllTeam({});
  return (
    <div>
      <div className=" flex items-center justify-between">
        <div className=" font-[500] text-slate-800 text-xl ">
          Team Management
        </div>
        <div className="">
          <Input placeholder="Search" />
        </div>
      </div>

      <div className=" mt-5">
        <div className=" ">
          <div className="">SSID</div>
          <div className="">Name</div>
          <div className="">Email</div>
          <div className="">Phone Number</div>
          <div className="">Role Name</div>
          <div className="">Last Login</div>
        </div>
        <div className="">{/* loop */}</div>
      </div>
    </div>
  );
};

export default Team;
