import DashboardPage from "../Pages/DashboardPage/DashboardPage";
import OrderItem from "../Pages/OrderItemPage/OrderItem";
import RetailPage from "../Pages/RetailPage/RetailPage";
import Saved from "../Pages/SavedPage";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <DashboardPage />,
  },
  {
    id: 2,
    path: "/retail",
    element: <RetailPage />,
  },
  {
    id: 3,
    path: "/order_item/:id",
    element: <OrderItem />,
  },
  {
    id: 4,
    path: "/saved",
    element: <Saved />,
  },
];
