import React, { useState, useEffect } from "react";
import Transactionlist from "./Transactionlist";
import Search from "./Search";
import AddTransaction from "./AddTransaction";
import "../stylesheets/App.css";

const Account = () => {
  // State declarations using useState
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  // useEffect hook to fetch transactions from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }, []);

  // useEffect hook to update filteredTransactions whenever search or transactions change
  useEffect(() => {
    // Filter transactions based on search text
    const filteredData = transactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(search.toLowerCase());
    });

    // Update filteredTransactions state with the filtered data
    setFilteredTransactions(filteredData);
  }, [search, transactions]);

  // Function to add a new transaction to the state
  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  // Function to delete a transaction from the state
  const deleteTransaction = (deletedTransaction) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== deletedTransaction.id)
    );
  };

  // Rendering the components with appropriate comments
  return (
    <div>
      {/* Search component to input search text and update 'search' state */}
      <Search searchValue={search} searchFun={setSearch} />

      {/* AddTransaction component to add new transactions and call 'addTransaction' function */}
      <AddTransaction addTransactionFun={addTransaction} />

      {/* Transactionlist component to display transactions based on filtered data, and allow the user to delete transactions with the 'deleteTransaction' function */}
      <Transactionlist
        transactions={filteredTransactions}
        deleteTransactionFun={deleteTransaction}
      />
    </div>
  );
};

export default Account;
