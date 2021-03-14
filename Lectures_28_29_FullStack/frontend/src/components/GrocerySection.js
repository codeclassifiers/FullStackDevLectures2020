/**
 * Module to show grovcery section in app
 */
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import classNamesModule from "classnames";
import { AddGroceryItem } from "./AddGroceryItem";
const API_BASE_URL = "http://localhost:8080";
export function GrocerySection(props) {
  const [groceryItems, updateGroceryItems] = useState([]);
  const history = useHistory();
  async function fetchGroceryItems() {
    const groceryData = await axios.get(`${API_BASE_URL}/grocery/getAll`);
    const dataFromAPI = groceryData.data.results;
    updateGroceryItems(dataFromAPI);
  }
  useEffect(() => {
    fetchGroceryItems();
  }, []);
  async function handlePurchaseUpdate(item) {
    console.log(item);
    const updateData = await axios.put(
      `${API_BASE_URL}/grocery/updatePurchaseStatus`,
      {
        _id: item._id,
        isPurchased: true,
      }
    );
    console.log(updateData);
    alert("Item purchase status updated successfully");
    fetchGroceryItems();
  }
  async function handleDeleteOperation(item) {
    const deleteResponse = await axios.delete(
      `${API_BASE_URL}/grocery/deleteGroceryItem`,
      {
        data: {
          _id: item._id,
        },
      }
    );
    console.log(deleteResponse.data);
    alert("Data deleted successfully");
    fetchGroceryItems();
  }
  function renderPurchaseButton(item) {
    if (item.isPurchased === false) {
      return (
        <div className="me-3">
          <button
            className="btn btn-success"
            onClick={() => handlePurchaseUpdate(item)}
          >
            Mark as purchased
          </button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  function renderDeleteButton(item) {
    return (
      <div>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteOperation(item)}
        >
          Delete
        </button>
      </div>
    );
  }
  function handleLogout() {
    localStorage.removeItem("userToken");
    history.push("/login");
  }
  function renderGroceryItems() {
    return groceryItems.map((item) => {
      return (
        <div
          className={classNamesModule("grocery-item d-flex", {
            purchased: item.isPurchased === true,
          })}
          key={item.groceryItem}
        >
          <div>{item.groceryItem}</div>
          <div className="grocery-actions d-flex">
            {renderPurchaseButton(item)}
            {renderDeleteButton(item)}
          </div>
        </div>
      );
    });
  }
  return (
    <div className="d-flex justify-content-center align-items-center flex-column w-100">
      <h1>Grocery Planning Section</h1>
      <div className="w-50">
        <AddGroceryItem
          baseUrl={API_BASE_URL}
          fetchGroceryItems={fetchGroceryItems}
        />
        {renderGroceryItems()}
      </div>
      <div>
        <button
          className={"btn btn-danger mt-4"}
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
