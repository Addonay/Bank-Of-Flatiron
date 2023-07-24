import React from "react";
import PropTypes from "prop-types";

const Transaction = ({ transaction, deleteTransactionFun }) => {
  const handleDelete = () => {
    // Call the deleteTransactionFun prop with the transaction id to delete it
    deleteTransactionFun(transaction.id);
  };

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
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
