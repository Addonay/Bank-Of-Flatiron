import React from "react";
import PropTypes from "prop-types";
import Select from "./Select";
import Transaction from "./Transaction";
import "../stylesheets/App.css";

const Transactionlist = ({ transactions, select, selectFun, deleteTransactionFun }) => {
  // Function to handle deleting a transaction
  const handleDeleteTransaction = (deletedTransaction) => {
    // Send a DELETE request to the server to remove the transaction
    fetch(`http://localhost:8001/transactions/${deletedTransaction.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        // Update the local state by calling 'deleteTransactionFun' with the deleted transaction
        deleteTransactionFun(deletedTransaction);
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
      });
  };

  // Creating an array of Transaction components based on the 'transactions' prop
  const transactionComponents = transactions.map((transactionObj) => (
    <Transaction
      key={transactionObj.id}
      transaction={transactionObj}
      deleteTransactionFun={handleDeleteTransaction}
    />
  ));

  // Rendering the table containing the list of transactions and the Select component
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* Rendering the Transaction components */}
        {transactionComponents}
      </tbody>
      {/* Rendering the Select component to provide sorting options */}
      <thead>
        <tr>
          <td colSpan="5">
            <Select select={select} selectFun={selectFun} />
          </td>
        </tr>
      </thead>
    </table>
  );
};

// Prop types for the 'transactions', 'select', 'selectFun', and 'deleteTransactionFun' props
Transactionlist.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
  select: PropTypes.string.isRequired,
  selectFun: PropTypes.func.isRequired,
  deleteTransactionFun: PropTypes.func.isRequired,
};

export default Transactionlist;
