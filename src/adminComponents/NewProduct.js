import { useState } from "react";

function NewProduct() {
  const [SelectedProductCategory, setSelectedProductCategory] = useState("");
  const productCategoriesCollection = [
    { categoryId: "id1", category: "pizza" },
    { categoryId: "id2", category: "burger" },
  ];
  return (
    <>
      <h4 className="title-small text-center">Add New Product page</h4>
      <div className="new-product-page-container">
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
            <option selected>select Product Category</option>
            {productCategoriesCollection.map((productCategory) => (
              <option value={productCategory.category}>
                {productCategory.category}
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
export { NewProduct };
