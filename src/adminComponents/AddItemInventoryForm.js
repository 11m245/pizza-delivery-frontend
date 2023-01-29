import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { pizzaContext } from "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export function AddItemInventoryForm({ category }) {
  const { serverApi } = useContext(pizzaContext);

  const [isApiLoded, setIsApiLoaded] = useState(false);
  const navigate = useNavigate();

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {},

      validationSchema: yup.object({}),
      onSubmit: () => {
        // console.log(values);
        addInventoryItem(values);
      },
    });

  function updateStock(values) {
    console.log("update Stock", values);
    //send put request
  }
  // console.log(filteredInventoryItems);
  return (
    <>
      <h3 className="title-small text-center">Invenotry Item Add Form</h3>
      <form
        onSubmit={handleSubmit}
        className="inventory-stock-update-form form"
      >
        <div className="input-elements-container">
          <TextField
            id={name}
            label="Item Name"
            placeholder=" "
            type="text"
            name={name}
            value={values[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched[name] && Boolean(errors[name])}
            helperText={touched[name] && errors[name] ? errors[name] : null}
          />
          <TextField
            id={name}
            label="Stock Count"
            placeholder=" "
            type="text"
            name={name}
            value={values[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched[name] && Boolean(errors[name])}
            helperText={touched[name] && errors[name] ? errors[name] : null}
          />
        </div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
}
