import React from "react";
import PropTypes from "prop-types";

const Transaction = ({ transaction, onDeleteTransaction }) => {
  // Destructuring the properties from the 'transaction' object
  const { id, date, description, category, amount } = transaction;

  // Event handler to delete the transaction
  const handleDelete = () => {
    // Call the 'onDeleteTransaction' prop with the 'id' of the transaction to be deleted
    onDeleteTransaction(id);
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
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

// Prop types for the 'transaction' and 'onDeleteTransaction' props
Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  onDeleteTransaction: PropTypes.func.isRequired,
};

export default Transaction;
