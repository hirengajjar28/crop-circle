import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./App.scss";
import { Dashboard } from "./component/dashboard/Dashboard.tsx";
import { BuySell } from "./component/buySell/BuySell.tsx";
import { Chat } from "./component/chat/chat.tsx";
import { Crops } from "./component/crops/crops.tsx";
import { Finance } from "./component/finance/finance.tsx";
import { Reports } from "./component/reports/Reports.tsx";
import { Settings } from "./component/profile/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "buySell",
    element: <BuySell />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "crops",
    element: <Crops />,
  },
  {
    path: "finance",
    element: <Finance />,
  },
  {
    path: "reports",
    element: <Reports />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
