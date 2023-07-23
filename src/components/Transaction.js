import React from "react";
import PropTypes from "prop-types";

const Transaction = ({ transaction, deleteTransactionFun }) => {
  const { date, description, category, amount } = transaction;

  const handleDelete = () => {
    fetch(`http://localhost:8001/transactions/${transaction.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((deletedTransaction) => {
        deleteTransactionFun(transaction);
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
      });
  };

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={handleDelete}>X</button>
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
