import { axios } from "@/api";
import { useMutation } from "@tanstack/react-query";

interface loginProps {
  ssid: string;
  password: string;
}

const login = async (payload: loginProps) => {
  const data = await axios.post(`login`, payload, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: loginProps) => login(payload),
  });
};
