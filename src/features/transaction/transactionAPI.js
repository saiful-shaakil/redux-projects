import axios from "../../utils/axios";

export const getTransactions = async (search, start, end, type) => {
  let queryString = `_start=${start}&_end=${end}`;
  if (search !== "") {
    queryString += `&q=${search}`;
  }
  if (type !== "all") {
    queryString += `&type_like=${type}`;
  }
  console.log(queryString);
  const response = await axios.get(`/transactions/?${queryString}`);
  console.log(response.data);
  return response.data;
};
export const addTransaction = async (data) => {
  const response = await axios.post("/transactions", data);
  return response.data;
};
export const editTransaction = async (id, data) => {
  const response = await axios.put(`/transactions/${id}`, data);
  return response.data;
};
export const deleteTransaction = async (id) => {
  const response = await axios.delete(`/transactions/${id}`);
  return response.data;
};
