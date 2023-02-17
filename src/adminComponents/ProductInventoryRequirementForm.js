import { MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

function ProductInventoryRequirement(props) {
  const {
    inventoryItemCategories,
    formValues,
    setFormValues,
    inventoryItems,
    index,
  } = props;
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  const handleInventoryItemChange = (e, index) => {
    const { inventoryRequirement } = formValues;
    const inventoryItemFields = [...inventoryRequirement];
    inventoryItemFields[index][e.target.name] = e.target.value;
    setFormValues({ ...formValues, inventoryRequirement: inventoryItemFields });
    setFilteredItems(
      inventoryItems.filter(
        (item) =>
          item.category === formValues.inventoryRequirement[index].category
      )
    );
  };
  return (
    <>
      <div className="inventory-require-warapper">
        <p>item {index + 1}</p>
        <label htmlFor="">select Inventory Item Category</label>
        <Select
          labelId="inventory-item-category-select"
          id="inventory-item-category-select"
          value={formValues.inventoryRequirement[index].category}
          label="Select Item Category"
          name="category"
          required
          onChange={(e) => handleInventoryItemChange(e, index)}
        >
          {inventoryItemCategories.map((item) => (
            <MenuItem key={item._id} value={item.category}>
              {item.category}
            </MenuItem>
          ))}
        </Select>
        <label htmlFor="">select Inventory Item</label>
        <Select
          labelId="inventory-item-select"
          id="inventory-item-select"
          label="Select Item"
          name="item_Id"
          required
          onChange={(e) => {
            handleInventoryItemChange(e, index);
            setSelectedItem(e.target.value);
          }}
        >
          {filteredItems.map((item) => (
            <MenuItem key={item._id} value={item._id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <TextField
          required
          id="item-qty"
          label="Qty"
          value={formValues.inventoryRequirement[index].qty}
          name="qty"
          onChange={(e) => {
            handleInventoryItemChange(e, index);
          }}
        />
        <p>
          {filteredItems.length > 0 && selectedItem
            ? filteredItems.find((item) => item._id === selectedItem)?.units
            : null}
        </p>
        {/* <p>{JSON.stringify(filteredItems)}</p> */}
      </div>
    </>
  );
}

export { ProductInventoryRequirement };
