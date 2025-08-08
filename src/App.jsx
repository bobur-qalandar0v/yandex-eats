import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ScrollToTop from "./ScrollToTop";
import { routes } from "./constants/routes";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const isProductPage = location.pathname.startsWith("/order_item");

  return location.pathname === "/login" ? (
    <LoginPage />
  ) : (
    <div className={`main__wrapper ${isProductPage ? "bg-gray" : "bg-white"}`}>
      <ScrollToTop />
      <Header isDark={isProductPage} />
      <main className="main">
        <Routes>
          {routes.map((item) => (
            <Route path={item.path} element={item.element} key={item.id} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
