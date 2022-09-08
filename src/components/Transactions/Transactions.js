import Transaction from "./Transaction";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
export default function Transactions() {
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transaction
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>
          {transactions.map((each) => (
            <Transaction key={each.id} each={each} />
          ))}
        </ul>
      </div>
    </>
  );
}
