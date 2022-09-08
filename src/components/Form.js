import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import {
  changeTransaction,
  createTransaction,
  editInactive,
} from "../features/transaction/transactionSlice";
export default function Form() {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError, error, editing } = useSelector(
    (state) => state.transaction
  );
  useEffect(() => {
    const { name, id, amount, type } = editing;
    if (id) {
      setEditMode(true);
      setAmount(amount);
      setName(name);
      setType(type);
    }
  }, [editing]);
  //   to add new transaction
  const handleCreate = (e) => {
    e.preventDefault();
    if (name !== "" && amount !== "") {
      dispatch(createTransaction({ name, type, amount: Number(amount) }));
      setAmount("");
      setType("");
      setName("");
    }
  };
  const cancelEdit = () => {
    setEditMode(false);
    dispatch(editInactive());
  };
  // to update
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      changeTransaction({
        id: editing?.id,
        data: {
          name,
          amount,
          type,
        },
      })
    );
    setEditMode(false);
    setAmount("");
    setType("");
    setName("");
  };
  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form onSubmit={editMode ? handleUpdate : handleCreate}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            required
            placeholder="enter title"
            name="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group radio">
          <label>Type</label>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="type"
              onChange={() => setType("income")}
              checked={type === "income"}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              checked={type === "expense"}
              onChange={() => setType("expense")}
              placeholder="Expense"
            />
            <label>Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            required
            autoComplete="off"
            placeholder="enter amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button disabled={isLoading} type="submit" className="btn">
          {editMode ? "Update" : "Add"} Transaction
        </button>
        {!isLoading && isError && <p className="error">{error}</p>}
      </form>

      {editMode && (
        <button onClick={cancelEdit} className="btn cancel_edit">
          Cancel Edit
        </button>
      )}
    </div>
  );
}
