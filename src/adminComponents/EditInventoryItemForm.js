import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { pizzaContext } from "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { MenuItem, Select } from "@mui/material";

export function EditInventoryItemForm({ filteredInventoryItems, category }) {
  const { serverApi } = useContext(pizzaContext);

  console.log("filtered items", filteredInventoryItems);
  const [isApiLoded, setIsApiLoaded] = useState(false);
  const navigate = useNavigate();
  const INITIAL_FORM_VALUES = {
    changeItem: "",
    name: "",
    stock: "",
    units: "",
    alertLimit: "",
    itemCode: "",
  };
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);

  useEffect(() => {
    const itemObj = filteredInventoryItems.find(
      (item) => item.name === formValues.changeItem
    );

    setFormValues({
      ...formValues,
      ...itemObj,
    });
  }, [formValues.changeItem]);

  const handleSubmit = (e) => {
    // e.preventDefault();
    editInventoryItem(formValues);
  };

  async function editInventoryItem(formValues) {
    // console.log("edit inventory", formValues);

    const response = await fetch(`${serverApi}/inventoryItems/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        logintoken: localStorage.getItem("token"),
      },
      body: JSON.stringify(formValues),
    });

    console.log("edit item inventory response", response);

    if (response.status === 200) {
      const data = await response.json();
      toast.success(data.message);
    } else {
      const data = await response.json();
      toast.error(data.message);
      // console.log("fail data", data);
    }
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h3 className="title-small text-center">Edit Invenotry Item Form</h3>
      <form onSubmit={handleSubmit} className="inventory-item-edit-form form">
        <Select
          labelId="inventory-item-select"
          id="inventory-item-select"
          value={formValues.changeItem}
          label="Select Item"
          onChange={handleChange}
          name="changeItem"
          required
        >
          {filteredInventoryItems.map((item) => (
            <MenuItem key={item._id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>

        <div className="input-elements-container">
          <TextField
            id={"name"}
            label="Item Name"
            placeholder="Item Name"
            type="text"
            name={"name"}
            value={formValues["name"]}
            onChange={handleChange}
            required
          />
          <TextField
            id={"stock"}
            label="Stock Count"
            placeholder="Stock Count"
            type="text"
            name={"stock"}
            value={formValues["stock"]}
            onChange={handleChange}
            required
          />
          <TextField
            id={"units"}
            label="Units to Measure"
            placeholder="kgs nos"
            type="text"
            name={"units"}
            value={formValues["units"]}
            onChange={handleChange}
            required
          />
          <TextField
            id={"alertLimit"}
            label="Alert Limit"
            placeholder=" Alert Limit "
            type="text"
            name={"alertLimit"}
            value={formValues["alertLimit"]}
            onChange={handleChange}
            required
          />
          <TextField
            id={"itemCode"}
            label="Item Code"
            placeholder="PZ101"
            type="text"
            name={"itemCode"}
            value={formValues["itemCode"]}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
}
