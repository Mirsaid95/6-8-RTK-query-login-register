import { useGetPhonesQuery } from "./redux/service/phones";
import { Routes, Route } from "react-router-dom";
import { Register } from "./page/register";
import { Login } from "./page/login";
import { MainLayout } from "./layout/mainLayout";
import { Home } from "./page/home/home";


function App() {
  const { data, isLoading } = useGetPhonesQuery();

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
