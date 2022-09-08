import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../features/filter/filterSlice";
import searchImg from "../assets/images/search.svg";

export default function Search() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    // if user is not in home page, redirect to home page
  };

  return (
    <div className="flex border-2 justify-center items-center h-10 px-2">
      <form onSubmit={handleSubmit}>
        <input
          className="outline-none border-none mr-2 w-[300px] h-full"
          type="search"
          name="search"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <button type="submit" onClick={handleSubmit}>
        <img
          className="inline h-4 cursor-pointer"
          src={searchImg}
          alt="Search"
        />
      </button>
    </div>
  );
}
