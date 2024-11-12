import "./App.css";
import "./index.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import TravelNow from "./pages/TravelNow.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  function Layout() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }

  const AppLayout = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/aboutUs",
          element: <AboutUs />,
        },
        {
          path: "/contactUs",
          element: <ContactUs />,
        },
        {
          path: "/travelNow",
          element: <TravelNow />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={AppLayout} />
    </>
  );
}
export default App;
