import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import "../../App.css";
import { useDispatch } from "react-redux";
import { editActice } from "../../features/transaction/transactionSlice";

export default function Transaction({ each }) {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editActice(each));
  };
  const { name, type, amount } = each;
  return (
    <li className={`transaction  ${type === "expense" ? "expense" : "income"}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button onClick={handleEdit} className="link">
          <img alt="Edit" className="icon" src={editImage} />
        </button>
        <button className="link">
          <img alt="Delete" className="icon" src={deleteImage} />
        </button>
      </div>
    </li>
  );
}
