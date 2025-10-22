import { createBrowserRouter, RouterProvider } from "react-router";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      lazy: async () => ({
        Component: (await import("@/layout/app-layout")).default,
      }),
      children: [
        {
          index: true,
          lazy: async () => ({
            Component: (await import("@/page/dashboard")).default,
          }),
        },
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
