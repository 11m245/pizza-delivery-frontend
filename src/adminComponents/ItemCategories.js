import { Button, IconButton, MenuItem, Select, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { pizzaContext } from "../App";
import { toast } from "react-toastify";

function ItemCategories() {
  const navigate = useNavigate();
  const itemCategoryMenus = [
    { name: "add", color: "#54B4D3", path: "new" },
    { name: "edit", color: "#E4A11B", path: "edit" },
  ];

  const handleClick = (menu) => {
    navigate(menu.path);
  };
  return (
    <>
      <div className="inventory-categories-page-container">
        <h3 className="title-big">Inventory Item Categories</h3>
        <div className="inventory-categories-menus d-flex gap-2 justify-content-center">
          {itemCategoryMenus.map((menu, i) => {
            return (
              <button
                onClick={() => handleClick(menu)}
                type="button"
                class="btn"
                style={{
                  backgroundColor: menu.color,
                  color: "white",
                  fontWeight: 600,
                  padding: "2px",
                }}
              >
                {menu.name}
              </button>
            );
          })}
        </div>
        <div className="body-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}
function EditItemCategory() {
  const { serverApi } = useContext(pizzaContext);
  const [itemCategories, setItemCategories] = useState([""]);
  const [formValues, setFormValues] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [refreshCategory, setRefreshCategory] = useState(false);

  const editItemCategory = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log("form values", formValues);
    const response = await fetch(`${serverApi}/inventoryItems/editCategory`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        logintoken: localStorage.getItem("token"),
      },
      body: JSON.stringify(formValues),
    });

    if (response.status === 200) {
      const data = await response.json();
      toast.success(data.message);
      setRefreshCategory(!refreshCategory);
    } else {
      const data = await response.json();
      toast.error(data.message);
    }
  };

  async function getAllInventoryItemCategories() {
    const response = await fetch(`${serverApi}/inventoryItems/allCategories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        logintoken: localStorage.getItem("token"),
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      setItemCategories(data.payload);
    } else {
      const data = await response.json();
      toast.error(data.message);
    }
  }
  useEffect(() => {
    getAllInventoryItemCategories();
  }, [refreshCategory]);

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, oldCategoryName: e.target.value });
    setSelectedCategory(e.target.value);
  };
  const handleEditChange = (e) => {
    setFormValues({ ...formValues, newCategoryName: e.target.value });
  };
  return (
    <div className="edit-item-category-page-container">
      <h4>Edit Item Category</h4>
      <form className="edit-item-cetegory-form" onSubmit={editItemCategory}>
        <Select
          labelId="inventory-item-category-select"
          id="inventory-item-category-select"
          value={selectedCategory}
          label="Inventory Item Category"
          name="editInventoryItemCategory"
          onChange={handleSelectChange}
        >
          {itemCategories.map((itemCategory) => (
            <MenuItem key={itemCategory._id} value={itemCategory.category}>
              {itemCategory.category}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id={`edit-category`}
          label={`edit-category`}
          placeholder={`edit category`}
          onChange={handleEditChange}
          name={`editCategory`}
          required
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
        {/* <pre>{JSON.stringify(formValues)}</pre> */}
      </form>
    </div>
  );
}

function NewItemCategory() {
  const { serverApi } = useContext(pizzaContext);
  const [itemCategories, setItemCategories] = useState([""]);
  const [formValues, setFormValues] = useState({});
  const addItemCategory = async (e) => {
    // e.preventDefault();
    console.log(e);
    console.log("form values", formValues);
    const response = await fetch(`${serverApi}/inventoryItems/addCategory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        logintoken: localStorage.getItem("token"),
      },
      body: JSON.stringify(formValues),
    });

    if (response.status === 200) {
      const data = await response.json();
      toast.success(data.message);
    } else {
      const data = await response.json();
      toast.error(data.message);
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <div className="new-item-category-page-container">
      <h6 className="text-center">Enter New Inventory ItemCategory</h6>
      <p style={{ fontWeight: 300, textAlign: "center" }}>
        like meat, pizzabase, veggies,sauce
      </p>
      <form className="new-item-cetegory-form" onSubmit={addItemCategory}>
        <TextField
          id={`category`}
          label={`category`}
          placeholder={`category`}
          onChange={handleChange}
          name={`category`}
          required
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
        {/* <pre>{JSON.stringify(formValues)}</pre> */}
      </form>
    </div>
  );
}

export { ItemCategories, EditItemCategory, NewItemCategory };
