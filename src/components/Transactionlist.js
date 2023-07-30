import React from "react";
import PropTypes from "prop-types";
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
            <select value={select} onChange={selectFun}>
              <option value={"all"}>All</option>
              <option value={"descriptionUP"}>Sort by description (ASC)</option>
              <option value={"descriptionDOWN"}>Sort by description (DESC)</option>
              <option value={"categoryUP"}>Sort by category (ASC)</option>
              <option value={"categoryDOWN"}>Sort by category (DESC)</option>
              <option value={"amountUP"}>Sort by amount (ASC)</option>
              <option value={"amountDOWN"}>Sort by amount (DESC)</option>
              <option value={"dateUP"}>Sort by date (ASC)</option>
              <option value={"dateDOWN"}>Sort by date (DESC)</option>
            </select>
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
