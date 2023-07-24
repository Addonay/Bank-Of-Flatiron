import React, { useState, useEffect } from "react";
import Transactionlist from "./Transactionlist";
import Search from "./Search";
import AddTransaction from "./AddTransaction";
import "../stylesheets/App.css";

const Account = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  // Fetch transactions from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }, []);

  // Update filteredTransactions whenever search or transactions change
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
    // Update transactions state with the newly added transaction
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);

    // Update filteredTransactions state to include the new transaction if it matches the search
    if (newTransaction.description.toLowerCase().includes(search.toLowerCase())) {
      setFilteredTransactions((prevFilteredTransactions) => [
        ...prevFilteredTransactions,
        newTransaction,
      ]);
    }
  };

  // Function to delete a transaction from the state
  const deleteTransaction = (deletedTransaction) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== deletedTransaction.id)
    );

    // Update filteredTransactions state to exclude the deleted transaction
    setFilteredTransactions((prevFilteredTransactions) =>
      prevFilteredTransactions.filter((transaction) => transaction.id !== deletedTransaction.id)
    );
  };

  return (
    <div>
      {/* Search component to input search text and update 'search' state */}
      <Search searchValue={search} searchFun={setSearch} />

      {/* AddTransaction component to add new transactions and call 'addTransaction' function */}
      <AddTransaction addTransactionFun={addTransaction} />

      {/* Transactionlist component to display transactions based on filtered data,
        and allow the user to delete transactions with the 'deleteTransaction' function */}
      <Transactionlist
        transactions={filteredTransactions}
        deleteTransactionFun={deleteTransaction}
      />
    </div>
  );
};

export default Account;
