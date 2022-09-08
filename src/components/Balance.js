import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { fetchTransactionsAll } from "../features/transaction/transactionSlice";
import numberWithCommas from "../utils/numberWithCommas";
export default function Balance() {
  const { currentBalance, transactions, update } = useSelector(
    (state) => state.transaction
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactionsAll());
  }, [dispatch, update]);
  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        <span>
          {transactions.length > 0 ? numberWithCommas(currentBalance) : 0}
        </span>
      </h3>
    </div>
  );
}
