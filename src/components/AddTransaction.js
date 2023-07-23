import React, { useState } from "react";
import PropTypes from "prop-types";
import "../stylesheets/App.css";

const AddTransaction = ({ addTransactionFun }) => {
  // State declarations using useState
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  // Event handler to update state when inputs change
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

  // Event handler when the form is submitted
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Send a POST request to add the new transaction to the server
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        date,
        description,
        category,
        amount
      })
    })
      .then((response) => response.json())
      .then((newTransaction) => {
        // Call the 'addTransactionFun' prop to update the state with the newly added transaction
        addTransactionFun(newTransaction);
        // Reset the form fields after successful addition of the transaction
        setDate("");
        setDescription("");
        setCategory("");
        setAmount("");
      });
  };

  return (
    <div className="segment">
      <form className="form" onSubmit={handleSubmit}>
        <div className="inline fields">
          {/* Input field for date */}
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
          />
          {/* Input field for description */}
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={handleChange}
          />
          {/* Input field for category */}
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={handleChange}
          />
          {/* Input field for amount */}
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={amount}
            onChange={handleChange}
          />
        </div>
        {/* Submit button */}
        <button className="button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

// Prop types for the 'addTransactionFun' prop
AddTransaction.propTypes = {
  addTransactionFun: PropTypes.func.isRequired,
};

export default AddTransaction;
