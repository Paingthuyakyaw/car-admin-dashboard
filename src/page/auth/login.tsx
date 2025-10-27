import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CarFrontIcon, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/store/server/auth/mutation";

const formSchema = z.object({
  ssid: z
    .string()
    .min(1, { message: "SSID must be needed." })
    .max(6, { message: "SSID must not exceed 6 characters." }),
  password: z.string().min(1, { error: "Password must be needed" }),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ssid: "",
      password: "",
    },
  });

  const login = useLogin();

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className=" shadow border rounded-md p-4 w-[400px] ">
        <div className=" gap-2 mb-4 flex justify-center items-center">
          <CarFrontIcon
            size={39}
            className=" py-1 px-2 rounded-md bg-indigo-600 text-white "
          />
          <div className=" flex flex-col ">
            <p className=" text-[18px]  font-semibold">AutoDealer</p>
            <p className=" text-gray-500 text-[12px]">Management System</p>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((val) => login.mutate(val))}
            className=" space-y-4"
            action=""
          >
            <FormField
              control={form.control}
              name="ssid"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className=" relative">
                      <span className=" absolute left-1 top-1/2 -translate-y-1/2">
                        <User size={18} className=" text-indigo-600" />
                      </span>{" "}
                      <Input
                        {...field}
                        placeholder="SSID #"
                        className=" pl-6"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className=" relative">
                      <span className=" absolute left-1 top-1/2 -translate-y-1/2">
                        <Lock size={16} className=" text-indigo-600" />
                      </span>{" "}
                      <Input
                        {...field}
                        placeholder="Password"
                        className=" pl-6"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div
              className=" flex justify-end
            "
            >
              <span className=" text-sm text-indigo-600">
                Forgot your Password
              </span>
            </div>

            <div className="">
              <Button
                isLoading={login.isPending}
                className=" cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
