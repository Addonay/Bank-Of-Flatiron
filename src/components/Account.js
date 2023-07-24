import React, { useState, useEffect } from "react";
import Transactionlist from "./Transactionlist";
import Search from "./Search";
import AddTransaction from "./AddTransaction";
import "../stylesheets/App.css";

const Account = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from db.json when the component mounts
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
        setFilteredTransactions(data.transactions); // Initialize filteredTransactions with all transactions
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }, []);

  useEffect(() => {
    // Filter transactions based on search text
    const filteredData = transactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(search.toLowerCase());
    });

    // Update filteredTransactions state with the filtered data
    setFilteredTransactions(filteredData);
  }, [search, transactions]);

  const addTransaction = (newTransaction) => {
    const newId = Math.max(...transactions.map((transaction) => transaction.id)) + 1;
    const transactionWithId = { ...newTransaction, id: newId };

    setTransactions((prevTransactions) => [...prevTransactions, transactionWithId]);

    if (transactionWithId.description.toLowerCase().includes(search.toLowerCase())) {
      setFilteredTransactions((prevFilteredTransactions) => [
        ...prevFilteredTransactions,
        transactionWithId,
      ]);
    }
  };

  const deleteTransaction = (transactionId) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== transactionId)
    );

    setFilteredTransactions((prevFilteredTransactions) =>
      prevFilteredTransactions.filter((transaction) => transaction.id !== transactionId)
    );
  };

  const handleSelect = (option) => {
    switch (option) {
      case "descriptionUP":
        setFilteredTransactions([...filteredTransactions].sort((a, b) => a.description.localeCompare(b.description)));
        break;
      case "descriptionDOWN":
        setFilteredTransactions([...filteredTransactions].sort((a, b) => b.description.localeCompare(a.description)));
        break;
      case "categoryUP":
        setFilteredTransactions([...filteredTransactions].sort((a, b) => a.category.localeCompare(b.category)));
        break;
      case "categoryDOWN":
        setFilteredTransactions([...filteredTransactions].sort((a, b) => b.category.localeCompare(a.category)));
        break;
      case "amountUP":
        setFilteredTransactions([...filteredTransactions].sort((a, b) => a.amount - b.amount));
        break;
      case "amountDOWN":
        setFilteredTransactions([...filteredTransactions].sort((a, b) => b.amount - a.amount));
        break;
      case "dateUP":
        setFilteredTransactions([...filteredTransactions].sort((a, b) => new Date(a.date) - new Date(b.date)));
        break;
      case "dateDOWN":
        setFilteredTransactions([...filteredTransactions].sort((a, b) => new Date(b.date) - new Date(a.date)));
        break;
      default:
        // If the option is "all" or invalid, set the transactions as they are
        setFilteredTransactions([...transactions]);
        break;
    }
  };
  

  return (
    <div>
      {/* Search component */}
      <Search searchValue={search} searchFun={setSearch} />

      {/* AddTransaction component */}
      <AddTransaction addTransactionFun={addTransaction} />

      {/* Transactionlist component */}
      <Transactionlist
        transactions={filteredTransactions}
        deleteTransactionFun={deleteTransaction}
        select={""} // Provide an initial value for the 'select' prop
        selectFun={handleSelect} // Provide the function for handling sorting option selection
      />
    </div>
  );
};

export default Account;
