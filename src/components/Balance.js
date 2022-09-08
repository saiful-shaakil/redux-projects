import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../App.css";
export default function Balance() {
  const { transactions } = useSelector((state) => state.transaction);
  const calculateTotal = (transactions) => {
    let totalIncome = 0;
    transactions.map((each) => {
      if (each.type === "income") {
        totalIncome = totalIncome + each.amount;
      } else {
        totalIncome = totalIncome - each.amount;
      }
    });
    return totalIncome;
  };
  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        <span>
          {transactions.length > 0 ? calculateTotal(transactions) : 0}
        </span>
      </h3>
    </div>
  );
}
