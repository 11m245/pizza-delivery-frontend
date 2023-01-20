import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import LoginIcon from "@mui/icons-material/Login";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import { useContext } from "react";
import { apiContext } from "../App";
import { useNavigate } from "react-router-dom";

export function SignupForm() {
  const navigate = useNavigate();
  const { serverApi } = useContext(apiContext);
  // console.log(api);
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        age: "",
        mobile: "",
        email: "",
        password: "",
      },
      validationSchema: yup.object({
        name: yup.string().required().min(3),
        age: yup.number().required().min(12),
        mobile: yup.string().required().min(10),
        email: yup.string().email().required(),
        password: yup.string().required().min(8),
      }),
      onSubmit: () => {
        // console.log(values);
        signup(values);
      },
    });

  async function checkResponse(response) {
    let data = await response.json();
    // console.log(data);
    if (response.status === 201) {
      toast.success(data.message);
      navigate("/");
      return response.json();
    } else {
      toast.error(data.message);

      return data;
    }
  }

  function signup(values) {
    fetch(`${serverApi}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => checkResponse(response))
      .catch((error) => console.log(error));
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="signup-form form">
        <h3>Registration</h3>
        <Button
          onClick={() => navigate("/")}
          variant="outlined"
          color="success"
          startIcon={<LoginIcon />}
        >
          Back to Login
        </Button>

        <TextField
          id="name"
          label="Name"
          type="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name ? true : false}
          helperText={touched.name && errors.name ? errors.name : null}
        />
        <TextField
          id="age"
          label="Age"
          type="age"
          name="age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.age && errors.age ? true : false}
          helperText={touched.age && errors.age ? errors.age : null}
        />
        <TextField
          id="mobile"
          label="Mobile"
          type="mobile"
          name="mobile"
          value={values.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.mobile && errors.mobile ? true : false}
          helperText={touched.mobile && errors.mobile ? errors.mobile : null}
        />
        <TextField
          id="email"
          label="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email ? true : false}
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
          error={touched.password && errors.password ? true : false}
          helperText={
            touched.password && errors.password ? errors.password : null
          }
        />
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Register
        </Button>
      </form>
    </>
  );
}
