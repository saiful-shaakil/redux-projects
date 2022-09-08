import Transaction from "./Transaction";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Pagination from "./Pagination";
import Search from "../Search";
import { fireEvent } from "@testing-library/react";
import { filterType } from "../../features/filter/filterSlice";
export default function AllTransactions() {
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transaction
  );
  const dispatch = useDispatch();
  const { search, start, end, type } = useSelector((state) => state.filter);
  useEffect(() => {
    dispatch(fetchTransactions({ search, start, end, type }));
  }, [dispatch, search, start, end, type]);
  //   to filter by type
  const handleType = (value) => {
    dispatch(filterType(value));
  };
  return (
    <div className="transactions_div mt-10">
      <Search />
      <p className="second_heading">Your All Transactions:</p>
      <div className="">
        <div className="form-group radio">
          <label className="font-bold">Type:</label>
          <div className="radio_group">
            <input
              type="radio"
              value="all"
              name="type"
              onChange={() => handleType("all")}
              checked={type === "all"}
            />
            <label>All</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="type"
              onChange={() => handleType("income")}
              checked={type === "income"}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              onChange={() => handleType("expense")}
              checked={type === "expense"}
              placeholder="Expense"
            />
            <label>Expense</label>
          </div>
        </div>
      </div>
      <div className="conatiner_of_list_of_transactions">
        <ul>
          {transactions.map((each) => (
            <Transaction key={each.id} each={each} />
          ))}
        </ul>
        <Pagination />
      </div>
    </div>
  );
}
