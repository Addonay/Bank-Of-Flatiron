import React from "react";
import PropTypes from "prop-types";
import Select from "./Select";
import Transaction from "./Transaction";
import "../stylesheets/App.css";

const Transactionlist = ({ transactions, select, selectFun, deleteTransactionFun }) => {
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
        {transactions.map((transactionObj) => (
          <Transaction
            key={transactionObj.id}
            transaction={transactionObj}
            deleteTransactionFun={deleteTransactionFun}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="5">
            {/* Rendering the Select component to provide sorting options */}
            <Select select={select} selectFun={selectFun} />
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

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
