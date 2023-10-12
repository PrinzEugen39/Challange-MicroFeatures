import { Outlet, useNavigation } from "react-router-dom";
import Header from "../UI/Header";
import Loader from "../UI/Loader";

export default function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  console.log(navigation);
  

  return (
    <div>
      <Header />
      <div>
        <video autoPlay loop muted className="absolute object-cover w-full h-full -z-10 brightness-90">
          <source src="/Vividwavers.mp4" type="video/mp4" />
        </video>
      </div>
      <main>
        <Outlet />
      </main>
      {isLoading && <Loader />}
    </div>
  );
}
