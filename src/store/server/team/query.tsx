import { authJsonToken, axios } from "@/api";
import type { getAllTeamResponse } from "./typed";
import { useQuery } from "@tanstack/react-query";

interface teamProps {
  query?: string;
  roleId?: string;
}

const getAllTeam = async (payload: teamProps): Promise<getAllTeamResponse> => {
  const { data } = await axios.get(`admin/teammates`, {
    headers: authJsonToken(),
    params: payload,
  });

  return data;
};

export const useGetAllTeam = (payload: teamProps) => {
  return useQuery({
    queryKey: ["all-team", payload],
    queryFn: () => getAllTeam(payload),
  });
};
