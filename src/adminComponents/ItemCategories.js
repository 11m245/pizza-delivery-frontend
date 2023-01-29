import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

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
  return (
    <div className="edit-item-category-page-container">
      <h4>EditItemCategory</h4>
    </div>
  );
}

function NewItemCategory() {
  return (
    <div className="new-item-category-page-container">
      <h4>New ItemCategory</h4>
    </div>
  );
}

export { ItemCategories, EditItemCategory, NewItemCategory };
