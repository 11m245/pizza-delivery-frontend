import "./App.css";
import "./admin.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createContext, useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { SignupForm } from "./components/SignupForm";
import { Forgot } from "./components/Forgot";
import { Success } from "./components/success.js";
import { Routes, Route, Outlet } from "react-router-dom";
import { NotFound } from "./components/notfound";
import { ChangePasswordForm } from "./components/ChangePasswordForm";
import { PizzaCard } from "./components/PizzaCard";
import { UserLayout } from "./UserLayout";

import { ActivateUser } from "./components/ActivateUser";
import { Header } from "./components/Header";
import { AdminLayout } from "./AdminLayout";
import { AdminHome } from "./adminComponents/AdminHome";
import { AdminInventory } from "./adminComponents/AdminInventory";
import { Items, EditItem, DeleteItem } from "./adminComponents/Items";
import { NewItem } from "./adminComponents/NewItem";
import { UserHome } from "./components/userHome";
export const apiContext = createContext();
function App() {
  const serverApi = "http://localhost:4000";
  const clientURL = "http://localhost:3000";
  // const serverApi = "https://pizza-delivery-backend.vercel.app";
  // const clientURL = "https://candid-blancmange-22f08a.netlify.app";

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
            <Route path="/user" element={<UserLayout />}>
              <Route index element={<UserHome />} />
              {/* <Route path="chat" element={<Chat />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="favorties" element={<Favorties />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} /> */}
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminHome />} />
              <Route path="stock" element={<AdminInventory />} />
              <Route path="items" element={<Items />}>
                <Route path="new" element={<NewItem />} />
                <Route path="edit" element={<EditItem />} />
                <Route path="delete" element={<DeleteItem />} />
              </Route>
              {/* <Route path="/categories" element={<Categories />}>
                <Route path="/new" element={<NewCategory />} />
                <Route path="/edit" element={<EditCategory />} />
                <Route path="/delete" element={<DeleteCategory />} />
              </Route> */}
              <Route path="*" element={<NotFound />} />
            </Route>

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
      <h1 className="text-center">Welcome to Pizza Delivery Application</h1>
      <Outlet />
    </>
  );
}

export default App;
