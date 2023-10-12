import { Outlet, useNavigation } from "react-router-dom";
import Header from "../UI/Header";
import Loader from "../UI/Loader";

export default function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <div>
        <video autoPlay loop className="absolute w-auto min-w-full min-h-full -z-10 brightness-75">
          <source src="/Vividwave.mp4" />
        </video>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
