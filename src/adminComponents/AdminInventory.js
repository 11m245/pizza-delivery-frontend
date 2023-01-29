import { useState } from "react";
import { AddItemInventoryForm } from "./AddItemInventoryForm";
import { EditInventoryItemForm } from "./EditInventoryItemForm";
import { InventoryUpdateForm } from "./InventoryUpdateForm";

function AdminInventory() {
  const [selectedCrudMenu, setSelectedCrudMenu] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filteredInventoryItems, setFilteredInventoryItems] = useState([]);

  const itemCrudMenus = [
    { name: "add New Item", color: "#54B4D3", path: "new" },
    { name: "edit Item", color: "#E4A11B", path: "edit" },
    { name: "update Stock", color: "#3B71CA", path: "stock-update" },
  ];
  const inventoryItems = [
    {
      name: "Muffets Tuffets",
      category: "pizza base",
      stock: "23",
      units: "nos",
      alertLimit: "20",
      itemCode: "PB001",
    },
    {
      name: "Thin Crust",
      category: "pizza base",
      stock: "23",
      units: "nos",
      alertLimit: "20",
      itemCode: "PB002",
    },
    {
      name: "Moreish Pizza Base",
      category: "pizza base",
      stock: "23",
      units: "nos",
      alertLimit: "20",
      itemCode: "PB003",
    },
    {
      name: "Vegan Gluten Pizza base",
      category: "pizza base",
      stock: "23",
      units: "nos",
      alertLimit: "20",
      itemCode: "PB004",
    },
    {
      name: "Spicy Red Sauces",
      category: "sauce",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "SA001",
    },
    {
      name: "Peppery Red Sauce",
      category: "sauce",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "SA002",
    },
    {
      name: "Pesto Sauce",
      category: "sauce",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "SA003",
    },
    {
      name: "Creamy Alfredo Sauce",
      category: "sauce",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "SA004",
    },
    {
      name: "White Garlic Sauce",
      category: "sauce",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "SA005",
    },
    {
      name: "Cheddar",
      category: "cheese",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "CH001",
    },
    {
      name: "Mozzarella",
      category: "cheese",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "CH002",
    },
    {
      name: "Ricotta",
      category: "cheese",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "CH003",
    },
    {
      name: "Parmesan",
      category: "cheese",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "CH004",
    },
    {
      name: "Provolone",
      category: "cheese",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "CH005",
    },
    {
      name: "Mushroom",
      category: "veggies",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "VG001",
    },
    {
      name: "Carrot",
      category: "veggies",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "VG002",
    },
    {
      name: "Red Onion",
      category: "veggies",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "VG003",
    },
    {
      name: "Cauliflower",
      category: "veggies",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "VG004",
    },
    {
      name: "Chopped Tomato",
      category: "veggies",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "VG005",
    },
    {
      name: "Pepperoni",
      category: "meat",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "ME001",
    },
    {
      name: "Chicken",
      category: "meat",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "ME002",
    },
    {
      name: "Bacon",
      category: "meat",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "ME003",
    },
    {
      name: "Ham",
      category: "meat",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "ME004",
    },
    {
      name: "Meatballs",
      category: "meat",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
      itemCode: "ME005",
    },
  ];
  const inventoryCategories = [
    "pizza base",
    "sauce",
    "cheese",
    "veggies",
    "meat",
  ];
  const colors = [
    "#54B4D3",
    "#3B71CA",
    "#E4A11B",
    "#DC4C64",
    "#14A44D",
    "#9FA6B2",
  ];
  const handleClickCrud = (crudOption) => {
    console.log(crudOption);
    setSelectedCrudMenu(crudOption);
  };
  const handleClickCategory = (category) => {
    console.log(category);
    setFilterCategory(category);
    const filter = inventoryItems.filter((item) => item.category === category);
    setFilteredInventoryItems(filter);
  };

  return (
    <>
      <div className="admin-inventory-container">
        <h4 className="title-big">Inventory</h4>
        <div className="inventory-crud-menus d-flex flex-wrap gap-2">
          {itemCrudMenus.map((crudMenu, i) => {
            return (
              <button
                onClick={() => handleClickCrud(crudMenu.name)}
                type="button"
                className={
                  selectedCrudMenu === crudMenu.name ? "btn btn-active" : "btn"
                }
                style={{
                  backgroundColor: colors[i],
                  color: "white",
                  fontWeight: 600,
                  padding: "2px",
                }}
              >
                {crudMenu.name}
              </button>
            );
          })}
        </div>
        {selectedCrudMenu ? (
          <>
            <h4>Select Category</h4>
            <div className="inventory-filters d-flex flex-wrap gap-2">
              {inventoryCategories.map((category, i) => {
                return (
                  <button
                    onClick={() => handleClickCategory(category)}
                    type="button"
                    className={
                      filterCategory === category ? "btn btn-active" : "btn"
                    }
                    style={{
                      backgroundColor: colors[i],
                      color: "white",
                      fontWeight: 600,
                      padding: "2px",
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </>
        ) : null}

        {selectedCrudMenu !== "" && filterCategory ? (
          <div className="stock-update-form-container">
            {selectedCrudMenu === "update Stock" ? (
              <InventoryUpdateForm
                filteredInventoryItems={filteredInventoryItems}
              />
            ) : null}
            {selectedCrudMenu === "add New Item" ? (
              <AddItemInventoryForm category={filterCategory} />
            ) : null}
            {selectedCrudMenu === "edit Item" ? (
              <EditInventoryItemForm
                filteredInventoryItems={filteredInventoryItems}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
}

export { AdminInventory };
