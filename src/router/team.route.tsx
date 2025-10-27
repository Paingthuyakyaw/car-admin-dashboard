import type { RouteObject } from "react-router";

export const teamRouter: RouteObject[] = [
  {
    path: "/team",
    lazy: async () => ({
      Component: (await import("@/page/team")).default,
    }),
  },
];
