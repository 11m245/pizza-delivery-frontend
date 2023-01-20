import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createContext } from "react";
import { LoginForm } from "./components/LoginForm";
import { SignupForm } from "./components/SignupForm";
import { Forgot } from "./components/Forgot";
import { Success } from "./components/success.js";
import { Routes, Route, Outlet } from "react-router-dom";
import { NotFound } from "./components/notfound";
import { ChangePasswordForm } from "./components/ChangePasswordForm";
import { PizzaCard } from "./components/PizzaCard";
import { Layout } from "./Layout";

import { ActivateUser } from "./components/ActivateUser";
import { Header } from "./components/Header";
export const apiContext = createContext();
function App() {
  // const serverApi = "http://localhost:4000";
  // const clientURL = "http://localhost:3000";
  const serverApi = "https://pizza-delivery-backend.vercel.app";
  const clientURL = "https://candid-blancmange-22f08a.netlify.app";
  const contextObj = {
    serverApi: serverApi,
    clientURL: clientURL,
  };

  return (
    <div className="App">
      <ToastContainer theme="dark" />
      <div className="project-container">
        <apiContext.Provider value={contextObj}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/forgot-password" element={<Forgot />} />
              <Route path="/success" element={<Success />} />
            </Route>
            <Route path="/activate/:id" element={<ActivateUser />} />
            <Route path="/user" element={<Layout />}>
              <Route index element={<LoginForm />} />
            </Route>
            <Route path="/pizza" element={<PizzaCard />} />
            <Route path="*" element={<NotFound />} />

            <Route
              path="/change-password/:id"
              element={<ChangePasswordForm />}
            />
          </Routes>
        </apiContext.Provider>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <h1>Welcome to Pizza Delivery Application</h1>
      <Outlet />
    </>
  );
}

export default App;
