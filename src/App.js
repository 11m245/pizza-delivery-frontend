import "./App.css";
import "./admin.css";
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

import { UserLayout } from "./UserLayout";

import { ActivateUser } from "./components/ActivateUser";

import { AdminLayout } from "./AdminLayout";
import { AdminHome } from "./adminComponents/AdminHome";
import { AdminInventory } from "./adminComponents/AdminInventory";
import {
  Products,
  EditProduct,
  DeleteProduct,
} from "./adminComponents/Products";
import { NewProduct } from "./adminComponents/NewProduct";
import { UserHome } from "./components/userHome";
import {
  EditItemCategory,
  ItemCategories,
  NewItemCategory,
} from "./adminComponents/ItemCategories";
import { useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { AllOrders } from "./adminComponents/AllOrders";
import { UserOrders } from "./components/UserOrders";
export const pizzaContext = createContext();
function App() {
  // const serverApi = "http://localhost:4000";
  // const clientURL = "http://localhost:3000";
  const serverApi = "https://pizza-delivery-backend.vercel.app";
  const clientURL = "https://candid-blancmange-22f08a.netlify.app";

  const initialCartItems = [];
  const [cartItems, cartDispatch] = useReducer(cartReducer, initialCartItems);

  const contextObj = {
    serverApi: serverApi,
    clientURL: clientURL,
    cartItems,
    cartDispatch,
  };

  return (
    <div className="App">
      <ToastContainer style={{ marginTop: "4rem" }} theme="dark" />
      <div className="project-container">
        <pizzaContext.Provider value={contextObj}>
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
              <Route path="reports" element={<UserOrders />} />
              {/* <Route path="chat" element={<Chat />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="favorties" element={<Favorties />} />              
              <Route path="settings" element={<Settings />} /> */}
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminHome />} />
              <Route path="stock" element={<AdminInventory />} />
              <Route path="products" element={<Products />}>
                <Route path="new" element={<NewProduct />} />
                <Route path="edit" element={<EditProduct />} />
                <Route path="delete" element={<DeleteProduct />} />
              </Route>
              <Route path="categories" element={<ItemCategories />}>
                <Route path="new" element={<NewItemCategory />} />
                <Route path="edit" element={<EditItemCategory />} />
                {/* <Route path="/delete" element={<DeleteCategory />} /> */}
              </Route>
              <Route path="*" element={<NotFound />} />
              <Route path="allOrders" element={<AllOrders />} />
            </Route>

            <Route path="*" element={<NotFound />} />

            <Route
              path="/change-password/:id"
              element={<ChangePasswordForm />}
            />
          </Routes>
        </pizzaContext.Provider>
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
