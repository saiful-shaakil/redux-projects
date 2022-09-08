import Transaction from "./Transaction";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import { useEffect } from "react";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import { Link } from "react-router-dom";
import { pagination } from "../../features/filter/filterSlice";

export default function Transactions() {
  const match = useMatch("/");
  const { transactions, isLoading } = useSelector((state) => state.transaction);
  const { search, start, end, type } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  if (match) {
    dispatch(pagination({ start: 0, end: 5 }));
  }
  // useEffect
  useEffect(() => {
    dispatch(fetchTransactions({ search, start, end, type }));
  }, [dispatch, start, end, search, type]);
  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>
          {transactions.map((each) => (
            <Transaction key={each.id} each={each} />
          ))}
        </ul>
        <div className="show_button_div">
          <Link
            onClick={() => dispatch(pagination({ start: 0, end: 10 }))}
            to="/transactions"
            className="show_button"
          >
            Show More
          </Link>
        </div>
      </div>
    </>
  );
}
