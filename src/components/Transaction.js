import React from "react";
import PropTypes from "prop-types";

const Transaction = ({ transaction, deleteTransactionFun }) => {
  const handleDelete = () => {
    // Call the deleteTransactionFun prop with the transaction data to delete it
    deleteTransactionFun(transaction);
  };

  return (
    <tr>
      {/* Display the transaction details in table cells */}
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      {/* Add the delete button with the handleDelete function */}
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

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
