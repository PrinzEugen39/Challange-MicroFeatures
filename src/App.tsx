import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobilLegend, {loader as heroLoader} from "./pages/MobilLegend";
import AppLayout from "./routes/AppLayout";
import ErrorPage from "./routes/ErrorPage";
import Home from "./UI/Home";
import CurrecyConverter from "./pages/CurrecyConverter";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mobile-legend",
        element: <MobilLegend />,
        loader: heroLoader,
      },
      {
        path:"currencyconverter",
        element: <CurrecyConverter />,
      }
    ]
  }
])


export default function App() {
  return <RouterProvider router={router}/>
}
