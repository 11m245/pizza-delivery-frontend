import { useState } from "react";
import { InventoryUpdateForm } from "./InventoryUpdateForm";

function AdminInventory() {
  const [filterCategory, setFilterCategory] = useState("");
  const [filteredInventoryItems, setFilteredInventoryItems] = useState([]);
  const inventoryItems = [
    {
      name: "Muffets Tuffets",
      category: "pizza base",
      stock: "23",
      units: "nos",
      alertLimit: "20",
    },
    {
      name: "Thin Crust",
      category: "pizza base",
      stock: "23",
      units: "nos",
      alertLimit: "20",
    },
    {
      name: "Moreish Pizza Base",
      category: "pizza base",
      stock: "23",
      units: "nos",
      alertLimit: "20",
    },
    {
      name: "Vegan Gluten Pizza base",
      category: "pizza base",
      stock: "23",
      units: "nos",
      alertLimit: "20",
    },
    {
      name: "Spicy Red Sauces",
      category: "sauce",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Peppery Red Sauce",
      category: "sauce",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Pesto Sauce",
      category: "sauce",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Creamy Alfredo Sauce",
      category: "sauce",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "White Garlic Sauce",
      category: "sauce",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Cheddar",
      category: "cheese",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Mozzarella",
      category: "cheese",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Ricotta",
      category: "cheese",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Parmesan",
      category: "cheese",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Provolone",
      category: "cheese",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Mushroom",
      category: "veggies",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Carrot",
      category: "veggies",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Red Onion",
      category: "veggies",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Cauliflower",
      category: "veggies",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Chopped Tomato",
      category: "veggies",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Pepperoni",
      category: "meat",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Chicken",
      category: "meat",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Bacon",
      category: "meat",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Ham",
      category: "meat",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
    },
    {
      name: "Meatballs",
      category: "meat",
      stock: "50",
      units: "kgs",
      alertLimit: "10",
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
  const handleClick = (category) => {
    console.log(category);
    setFilterCategory(category);
    const filter = inventoryItems.filter((item) => item.category === category);
    setFilteredInventoryItems(filter);
  };

  return (
    <>
      <div className="admin-inventory-container">
        <h4 className="title-big">Inventory</h4>
        <div className="inventory-filters d-flex flex-wrap gap-2">
          {inventoryCategories.map((category, i) => {
            return (
              <button
                onClick={() => handleClick(category)}
                type="button"
                class="btn"
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

        {filterCategory ? (
          <div className="stock-update-form-container">
            <h3 className="title-small text-center">
              Invenotry Stock Update Form
            </h3>
            <InventoryUpdateForm
              filteredInventoryItems={filteredInventoryItems}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export { AdminInventory };
