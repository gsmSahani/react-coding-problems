import React, { useState } from "react";

function ItemDetails() {
  const [item, setItem] = useState({
    name: "Apple",
    quantity: 10,
    inStock: true,
  });

  const toggleStockStatus = () => {
    setItem((prevItem) => ({
      ...prevItem,
      inStock: !prevItem.inStock,
    }));
  };

  const increaseQuantity = () => {
    setItem((prevItem) => ({
      ...prevItem,
      quantity: prevItem.quantity + 1,
    }));
  };

  return (
    <div className="bg-slate-400 flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Item Details:</h2>
        <p className="mb-2">
          {item.name} - {item.quantity}
        </p>
        <p className="mb-4">
          Status: {item.inStock ? "In Stock" : "Out of Stock"}
        </p>
        <div className="space-x-4">
          <button
            onClick={toggleStockStatus}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Check Stock Status
          </button>
          <button
            onClick={increaseQuantity}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Increase Quantity
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
``;
