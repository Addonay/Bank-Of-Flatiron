import React from "react";
import Transaction from "./Transaction";
import Select from "./Select"
import "../stylesheets/App.css";

const Transactionlist = (props) => {

  let componentArray = props.transactions.map(transactionObj => {
    return <Transaction 
            key={transactionObj.id} 
            transaction={transactionObj} 
            deleteTransactionFun={props.deleteTransactionFun}
          />
  })


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
        
        {componentArray}
      </tbody>
      < Select select={props.select} selectFun={props.selectFun}/>
    </table>
    
  );
};

export default Transactionlist;
