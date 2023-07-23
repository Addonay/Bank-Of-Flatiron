import React from "react";
import PropTypes from "prop-types";

const Transaction = ({ transaction, deleteTransactionFun }) => {
  // Destructuring the properties from the 'transaction' object
  const { date, description, category, amount } = transaction;

  // Event handler to delete the transaction
  const handleDelete = () => {
    // Send a DELETE request to the server to delete the transaction
    fetch(`http://localhost:8001/transactions/${transaction.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((deletedTransaction) => {
        // Call the 'deleteTransactionFun' prop to update the state in the parent component
        deleteTransactionFun(transaction);
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
      });
  };

  return (
    <tr>
      {/* Displaying the transaction details in table cells */}
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      {/* Delete button */}
      <td>
        <button onClick={handleDelete}>X</button>
      </td>
    </tr>
  );
};

// Prop types for the 'transaction' and 'deleteTransactionFun' props
Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  deleteTransactionFun: PropTypes.func.isRequired,
};

export default Transaction;
