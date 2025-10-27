import { createBrowserRouter, RouterProvider } from "react-router";
import { teamRouter } from "./router/team.route";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      lazy: async () => ({
        Component: (await import("@/layout/app-layout")).default,
      }),
      children: [
        {
          path: "/dashboard",
          lazy: async () => ({
            Component: (await import("@/page/dashboard")).default,
          }),
        },
        ...teamRouter,
      ],
    },
    {
      path: "/login",
      lazy: async () => ({
        Component: (await import("@/page/auth/login")).default,
      }),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
