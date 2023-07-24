import React, { useState } from "react";
import PropTypes from "prop-types";
import "../stylesheets/App.css";

const AddTransaction = ({ addTransactionFun }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  // Function to handle changes in the input fields
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "date":
        setDate(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "amount":
        setAmount(value);
        break;
      default:
        break;
    }
  };

  // Function to handle form submission
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Send the new transaction data to the server
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date,
        description,
        category,
        amount,
      }),
    })
      .then((response) => response.json())
      .then((newTransaction) => {
        // Call the 'addTransactionFun' prop with the new transaction data
        addTransactionFun(newTransaction);
        // Reset the input fields after successful addition
        setDate("");
        setDescription("");
        setCategory("");
        setAmount("");
      })
      .catch((error) => {
        console.error("Error adding transaction:", error);
      });
  };

  return (
    <div className="segment">
      <form className="form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={amount}
            onChange={handleChange}
          />
        </div>
        <button className="primary-btn" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

AddTransaction.propTypes = {
  addTransactionFun: PropTypes.func.isRequired,
};

export default AddTransaction;
