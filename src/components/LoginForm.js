import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { pizzaContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { CustomLoadingButton } from "./customLoadingButton";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { serverApi } = useContext(pizzaContext);
  const navigate = useNavigate();
  // console.log(api);
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: yup.object({
        email: yup.string().required().min(8).email(),
        password: yup.string().required().min(8),
      }),
      onSubmit: () => {
        // console.log(values);
        login(values);
      },
    });

  async function verifyUserRole(logintoken) {
    let result;
    try {
      const response = await fetch(`${serverApi}/verifyRole`, {
        method: "GET",
        headers: { "Content-Type": "application/json", logintoken: logintoken },
      });

      const data = await response.json();
      // console.log("role is", data);
      result = data.role === "admin" ? true : false;
    } catch (err) {
      console.log(err);
    }

    return result;
  }
  async function checkResponse(response) {
    let data = await response.json();
    // console.log("ck", data);
    if (response.status === 200) {
      toast.success(data.message);
      localStorage.setItem("token", data.token);
      const isAdmin = await verifyUserRole(data.token);
      // console.log("vf user isAdmi", isAdmin);
      isAdmin === true ? navigate("/admin") : navigate("/user");
      return data;
    } else {
      toast.error(data.message);
    }
  }

  function login(values) {
    // console.log("api is", api);
    setIsLoading(true);
    fetch(`${serverApi}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => {
        setIsLoading(false);
        checkResponse(response);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="login-form form">
        <h3 className="text-center">login</h3>
        <TextField
          id="email"
          type="text"
          label="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email ? errors.email : null}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={
            touched.password && errors.password ? errors.password : null
          }
        />

        <CustomLoadingButton
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          buttonComponent={
            <Button type="submit" variant="contained">
              Login
            </Button>
          }
        />
        <div className="signup-forgot d-flex justify-content-between">
          <Link to="/signup" className="link-primary">
            Don't have an account? Sign Up
          </Link>
          <Link to="/forgot-password" className="link-danger text-danger">
            Forgot password?
          </Link>
        </div>
        <div className="demo-login-buttons d-flex justify-content-between">
          <Button
            type="button"
            variant="contained"
            color="success"
            onClick={() =>
              login({ email: "user@gmail.com", password: "12345678" })
            }
          >
            Demo User-Login
          </Button>
          <Button
            type="button"
            variant="contained"
            onClick={() =>
              login({ email: "admin@gmail.com", password: "12345678" })
            }
          >
            Demo Admin-Login
          </Button>
        </div>
      </form>
    </>
  );
}
