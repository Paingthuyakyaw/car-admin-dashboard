import { auth_url } from "@/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";

interface loginProps {
  ssid: string;
  password: string;
}

const login = async (payload: loginProps) => {
  const data = await axios.post(`${auth_url}login`, payload, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return data;
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload: loginProps) => login(payload),
    onSuccess: (data: any) => {
      navigate("/");
      // token ကို local storage မှာသိမ်းမယ်
      localStorage.setItem("token", data.data.access_token);
      toast.success("Login Successful");
    },
    onError: () => {
      toast.error("Login Failed");
    },
  });
};
