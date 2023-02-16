import { Button, MenuItem, Select } from "@mui/material";
import { useFormik } from "formik";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { pizzaContext } from "../App";

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
        .catch((err) => {
          console.log(err.message);
          toast.error(err.message);
        });
    }
    getProductsCategories();
  }, []);

  const handleNewProductSubmit = () => {};
  const handleSelectChange = (e) => {
    setSelectedProductCategory(e.target.value);
    values.productCategory = e.target.value;
  };
  return (
    <>
      <h4 className="title-small text-center">Add New Product page</h4>
      <div className="new-product-page-container">
        <form
          className="add-new-product-form"
          onSubmit={handleNewProductSubmit}
        >
          <Select
            labelId="product-category-select"
            id="product-category-select"
            value={SelectedProductCategory}
            label="Select Product Category"
            onChange={handleSelectChange}
            onBlur={handleBlur}
            name="productCategory"
          >
            {productCategoriesCollection.map((productCategory) => (
              <MenuItem
                key={productCategory._id}
                value={productCategory.category}
              >
                {productCategory.category}
              </MenuItem>
            ))}
          </Select>

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
