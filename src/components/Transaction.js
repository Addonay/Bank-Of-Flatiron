import React from "react";

const Transaction = (props) => {

  let {date, description, category, amount} = props.transaction

  let handledelete = (evt) => {
    fetch(`http://localhost:8001/transactions/${props.transaction.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(deletedTransaction => {
      props.deleteTransactionFun(props.transaction)
    })
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={handledelete}>X</button></td> 
    </tr>
  );
};

export default Transaction;
