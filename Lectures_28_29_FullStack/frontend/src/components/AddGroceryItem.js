import { useState } from "react";
import axios from "axios";
export function AddGroceryItem({ baseUrl, fetchGroceryItems }) {
  const [groceryInputText, updateGroceryInputText] = useState("");
  async function handleAddingItems() {
    const createTask = await axios.post(`${baseUrl}/grocery/add`, {
      groceryItem: groceryInputText,
      isPurchased: false,
    });
    console.log(createTask);
    alert("Grocery item added successfully");
    updateGroceryInputText("");
    fetchGroceryItems();
  }
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Grocery Item"
          aria-label="Grocery Item"
          value={groceryInputText}
          onChange={(e) => updateGroceryInputText(e.target.value)}
        />
        <button
          className="input-group-text btn btn-primary"
          id="basic-addon2"
          onClick={() => handleAddingItems()}
        >
          Add Grocery Item
        </button>
      </div>
    </div>
  );
}
