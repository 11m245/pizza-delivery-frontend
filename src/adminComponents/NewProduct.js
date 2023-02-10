import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { pizzaContext } from "../App";
import { SelectComponent } from "./selectFormComponent";

function NewProduct() {
  const [SelectedProductCategory, setSelectedProductCategory] = useState("");
  const [productCategoriesCollection, setProductCategoriesCollection] =
    useState([]);
  const { serverApi } = useContext(pizzaContext);

  const { values, error, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({ initialValues: {}, onSubmit: (values) => console.log(values) });

  useEffect(() => {
    function getProductsCategories() {
      fetch(`${serverApi}/productCategories/all`, {
        method: "GET",
        headers: {
          logintoken: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setProductCategoriesCollection(data.categories))
        .catch((err) => console.log(err.message));
    }
    getProductsCategories();
  }, []);
  return (
    <>
      <h4 className="title-small text-center">Add New Product page</h4>
      <div className="new-product-page-container">
        <form onSubmit={handleSubmit}>
          <SelectComponent
            title={"select category"}
            options={[
              { name: "option1", value: "01" },
              { name: "option2", value: "02" },
            ]}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
        {/*  */}
      </div>
    </>
  );
}
export { NewProduct };
