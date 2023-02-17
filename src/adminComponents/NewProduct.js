import {
  Button,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { pizzaContext } from "../App";
import { ProductInventoryRequirement } from "./ProductInventoryRequirementForm";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircle from "@mui/icons-material/RemoveCircle";

function NewProduct() {
  const [SelectedProductCategory, setSelectedProductCategory] = useState("");
  const [productCategoriesCollection, setProductCategoriesCollection] =
    useState([]);
  const [inventoryItemCategories, setInventoryItemCategories] = useState([]);
  const [inventoryItems, setInventoryItems] = useState([]);
  const { serverApi } = useContext(pizzaContext);

  const INITIAL_FORM_VALUES = {
    name: "",
    category: "",
    price: "",
    isVeg: true,
    productCode: "",
    imageUrl: "",
    rating: "",
    inventoryRequirement: [{ category: "", item_Id: "", qty: "" }],
  };
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);

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

    async function getInventoryItemCategories() {
      const response = await fetch(
        `${serverApi}/inventoryItems/allCategories`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            logintoken: localStorage.getItem("token"),
          },
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setInventoryItemCategories(data.payload);
      } else {
        const data = await response.json();
        toast.error(data.message);
      }
    }

    async function getInventoryItems() {
      const response = await fetch(`${serverApi}/inventoryItems/allItems`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          logintoken: localStorage.getItem("token"),
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setInventoryItems(data.payload);
      } else {
        const data = await response.json();
        toast.error(data.message);
      }
    }

    getProductsCategories();
    getInventoryItemCategories();
    getInventoryItems();
  }, []);

  const handleNewProductSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    const response = await fetch(`${serverApi}/products/addProduct`, {
      method: "POST",
      headers: {
        logintoken: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    if (response.status === 200) {
      const data = await response.json();
      toast.success(data.message);
      setFormValues(INITIAL_FORM_VALUES);
    } else {
      const data = await response.json();
      toast.error(data.message);
    }
  };
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const addInventoryItemField = () => {
    const { inventoryRequirement } = formValues;
    const inventoryItemsFields = [
      ...inventoryRequirement,
      { category: "", item_Id: "", qty: "" },
    ];
    setFormValues({
      ...formValues,
      inventoryRequirement: inventoryItemsFields,
    });
  };
  const removeInventoryItemField = () => {
    const { inventoryRequirement } = formValues;
    const inventoryItemsFields = [...inventoryRequirement];
    const removed = inventoryItemsFields.pop();
    setFormValues({
      ...formValues,
      inventoryRequirement: inventoryItemsFields,
    });
  };

  return (
    <>
      <div className="new-product-page-container pb-5">
        <h4 className="title-small text-center">Add New Product page</h4>
        <form
          className="add-new-product-form"
          onSubmit={handleNewProductSubmit}
        >
          <div className="new-prodcut-form-fields">
            <div className="new-product-fields-container">
              <FormControlLabel
                control={
                  <Switch
                    checked={formValues.isVeg}
                    onChange={(e) =>
                      setFormValues({ ...formValues, isVeg: e.target.checked })
                    }
                  />
                }
                label="isVeg"
              />
              <label htmlFor="product-category-select">
                select product category
              </label>
              <Select
                labelId="product-category-select"
                id="product-category-select"
                value={formValues.category}
                label="Select Product Category"
                onChange={handleChange}
                name="category"
                required
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

              <TextField
                required
                id="product-name"
                label="Product Name"
                value={formValues.name}
                name="name"
                onChange={handleChange}
              />
              <TextField
                required
                id="product-image-url"
                label="Product Image URL"
                value={formValues.imageUrl}
                name="imageUrl"
                onChange={handleChange}
              />

              <TextField
                required
                id="product-price"
                label="Price"
                value={formValues.price}
                name="price"
                onChange={handleChange}
              />
              <TextField
                required
                id="product-code"
                label="Product Code"
                value={formValues.productCode}
                name="productCode"
                onChange={handleChange}
              />
              <TextField
                required
                id="product-rating"
                label="Rating"
                value={formValues.rating}
                name="rating"
                onChange={handleChange}
              />
            </div>

            <div className="inventory-requirement-update">
              <h6 className="text-center">Inventory Requirements</h6>
              {formValues.inventoryRequirement.map((inventoryItem, i) => (
                <ProductInventoryRequirement
                  key={i}
                  inventoryItemCategories={inventoryItemCategories}
                  formValues={formValues}
                  setFormValues={setFormValues}
                  inventoryItems={inventoryItems}
                  index={i}
                />
              ))}
              <Button
                variant="contained"
                endIcon={<AddCircleIcon />}
                onClick={() => addInventoryItemField()}
              >
                Add Inventory item Requirement
              </Button>
              <Button
                variant="contained"
                endIcon={<RemoveCircle />}
                onClick={() => removeInventoryItemField()}
              ></Button>
            </div>
          </div>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
        {/*  */}

        {/* <pre>
          <p>{JSON.stringify(formValues)}</p>
        </pre> */}
      </div>
    </>
  );
}
export { NewProduct };
