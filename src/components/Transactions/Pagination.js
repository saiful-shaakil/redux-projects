import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pagination } from "../../features/filter/filterSlice";
import { fetchTransactions } from "../../features/transaction/transactionSlice";

export default function Pagination() {
  const dispatch = useDispatch();
  const { search, start, end } = useSelector((state) => state.filter);
  useEffect(() => {
    dispatch(fetchTransactions({ search, start, end }));
  }, [dispatch, search, start, end]);
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        <div
          onClick={() => dispatch(pagination({ start: 0, end: 10 }))}
          className={`${
            start === 0 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
          } cursor-pointer   px-4 py-1 rounded-full`}
        >
          1
        </div>
        <div
          onClick={() => dispatch(pagination({ start: 10, end: 20 }))}
          className={`${
            start === 10
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-600"
          } cursor-pointer   px-4 py-1 rounded-full`}
        >
          2
        </div>
        <div
          onClick={() => dispatch(pagination({ start: 20, end: 30 }))}
          className={`${
            start === 20
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-600"
          } cursor-pointer   px-4 py-1 rounded-full`}
        >
          3
        </div>
        <div
          onClick={() => dispatch(pagination({ start: 30, end: 40 }))}
          className={`${
            start === 30
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-600"
          } cursor-pointer   px-4 py-1 rounded-full`}
        >
          4
        </div>
      </div>
    </section>
  );
}
