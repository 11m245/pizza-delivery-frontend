import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

function NewItem() {
  const [SelectedItemCategory, setSelectedItemCategory] = useState("");
  const itemCategoriesCollection = [
    { categoryId: "id1", category: "pizza" },
    { categoryId: "id2", category: "burger" },
  ];
  return (
    <>
      <h4 className="title-small text-center">Add New Item</h4>
      <div className="new-item-page-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target.category);
          }}
        >
          <select
            name="category"
            class="form-select form-select"
            aria-label=".form-select-sm example"
          >
            <option selected>select Item Category</option>
            {itemCategoriesCollection.map((itemCategory) => (
              <option value={itemCategory.category}>
                {itemCategory.category}
              </option>
            ))}
          </select>
          <button type="submit">bb</button>
        </form>

        {/*  */}
      </div>
    </>
  );
}
export { NewItem };
