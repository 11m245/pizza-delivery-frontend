import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Items() {
  const navigate = useNavigate();
  const itemMenus = [
    { name: "add", color: "#54B4D3", path: "new" },
    { name: "edit", color: "#E4A11B", path: "edit" },
    { name: "delete", color: "#DC4C64", path: "delete" },
  ];



 

  const handleClick = (menu) => {
    console.log(menu);
    navigate(menu.path);
  };
  return (
    <>
      <div className="items-page-container">
        <h3 className="title-big">Items</h3>
        <div className="item-menus d-flex gap-2 justify-content-center">
          {itemMenus.map((menu, i) => {
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
function EditItem() {
  return (
    <div className="edit-item-page-container">
      <h4>EditItem</h4>
    </div>
  );
}

function DeleteItem() {
  return (
    <div className="edit-item-page-container">
      <h4>DeleteItem</h4>
    </div>
  );
}
export { Items, EditItem, DeleteItem };
