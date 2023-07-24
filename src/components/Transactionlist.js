import React from "react";
import PropTypes from "prop-types";
import Select from "./Select";
import Transaction from "./Transaction";
import "../stylesheets/App.css";

const Transactionlist = (props) => {
  const { transactions, select, selectFun, deleteTransactionFun } = props;

  // Creating an array of Transaction components based on the 'transactions' prop
  const transactionComponents = transactions.map((transactionObj) => (
    <Transaction
      key={transactionObj.id}
      transaction={transactionObj}
      deleteTransactionFun={deleteTransactionFun}
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
      <tfoot>
        <tr>
          <td colSpan="5">
            <Select select={select} selectFun={selectFun} />
          </td>
        </tr>
      </tfoot>
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
