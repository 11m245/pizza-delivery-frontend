import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useContext } from "react";
import { apiContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export function LoginForm() {
  const { serverApi } = useContext(apiContext);
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
  async function checkResponse(response) {
    let data = await response.json();
    // console.log("ck", data);
    if (response.status === 200) {
      toast.success(data.message);
      localStorage.setItem("token", data.token);

      navigate("/success");
      return data;
    } else {
      toast.error(data.message);
    }
  }

  function login(values) {
    // console.log("api is", api);
    fetch(`${serverApi}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => checkResponse(response))
      .catch((error) => console.log(error));
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
        <Button type="submit" variant="contained">
          Submit
        </Button>
        <div className="signup-forgot d-flex justify-content-between">
          <Link to="/signup" className="link-primary">
            Don't have an account? Sign Up
          </Link>
          <Link to="/forgot-password" className="link-danger text-danger">
            Forgot password?
          </Link>
        </div>
      </form>
    </>
  );
}
