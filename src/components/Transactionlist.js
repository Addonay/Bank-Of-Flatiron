import React from "react";
import PropTypes from "prop-types";
import Select from "./Select.js";
import Transaction from "./Transaction";
import "../stylesheets/App.css";

const Transactionlist = (props) => {
  // Destructuring the props object to extract the required props
  const { transactions, select, selectFun, deleteTransactionFun } = props;

  // Creating an array of Transaction components based on the 'transactions' prop
  const transactionComponents = transactions.map((transactionObj) => (
    <Transaction
      key={transactionObj.id}
      transaction={transactionObj}
      deleteTransactionFun={deleteTransactionFun}
    />
  ));

 // Rendering the table
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>
            <h3>Date</h3>
          </th>
          <th>
            <h3>Description</h3>
          </th>
          <th>
            <h3>Category</h3>
          </th>
          <th>
            <h3>Amount</h3>
          </th>
        </tr>
        {transactionComponents}
      </tbody>
      <Select select={select} selectFun={selectFun} />
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
