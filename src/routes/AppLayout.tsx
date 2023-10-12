import { Outlet, useNavigation } from "react-router-dom";
import Header from "../UI/Header";
import Loader from "../UI/Loader";

export default function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="h-screen">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
