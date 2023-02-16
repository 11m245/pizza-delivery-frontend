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
      initialValues: {
        name: "",
        stock: "",
        units: "",
        alertLimit: "5",
        itemCode: "",
      },

      validationSchema: yup.object({
        name: yup.string().required(),
        stock: yup.string().required(),
        units: yup.string().required(),
        alertLimit: yup.string().required(),
        itemCode: yup.string().required(),
      }),
      onSubmit: () => {
        // console.log(values);
        addInventoryItem(values, category);
      },
    });

  async function addInventoryItem(values, category) {
    console.log("add inventory item", values, category);
    const formattedData = { ...values, category: category };
    const response = await fetch(`${serverApi}/inventoryItems/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        logintoken: localStorage.getItem("token"),
      },
      body: JSON.stringify(formattedData),
    });

    console.log("add item inventory response", response);

    if (response.status === 200) {
      const data = await response.json();
      toast.success(data.message);
    } else {
      const data = await response.json();
      toast.error(data.message);
      // console.log("fail data", data);
    }
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
            id={"name"}
            label="Item Name"
            placeholder="Item Name"
            type="text"
            name={"name"}
            value={values["name"]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["name"] && Boolean(errors["name"])}
            helperText={
              touched["name"] && errors["name"] ? errors["name"] : null
            }
          />
          <TextField
            id={"stock"}
            label="Stock Count"
            placeholder="Stock Count"
            type="text"
            name={"stock"}
            value={values["stock"]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["stock"] && Boolean(errors["stock"])}
            helperText={
              touched["stock"] && errors["stock"] ? errors["stock"] : null
            }
          />
          <TextField
            id={"units"}
            label="Units to Measure"
            placeholder="kgs nos"
            type="text"
            name={"units"}
            value={values["units"]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["units"] && Boolean(errors["units"])}
            helperText={
              touched["units"] && errors["units"] ? errors["units"] : null
            }
          />
          <TextField
            id={"alertLimit"}
            label="Alert Limit"
            placeholder=" Alert Limit "
            type="text"
            name={"alertLimit"}
            value={values["alertLimit"]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["alertLimit"] && Boolean(errors["alertLimit"])}
            helperText={
              touched["alertLimit"] && errors["alertLimit"]
                ? errors["alertLimit"]
                : null
            }
          />
          <TextField
            id={"itemCode"}
            label="Item Code"
            placeholder="PZ101"
            type="text"
            name={"itemCode"}
            value={values["itemCode"]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched["itemCode"] && Boolean(errors["itemCode"])}
            helperText={
              touched["itemCode"] && errors["itemCode"]
                ? errors["itemCode"]
                : null
            }
          />
        </div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
}
