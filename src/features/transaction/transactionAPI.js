import axios from "../../utils/axios";

export const getTransactions = async (search, start, end, type) => {
  let queryString = `_start=${start}&_end=${end}&_sort=id&_order=desc`;
  if (search !== "") {
    queryString += `&q=${search}`;
  }
  if (type !== "all" || undefined) {
    if (type !== "all") {
      queryString += `&type_like=${type}`;
    }
    if (type === undefined) {
      queryString = `_start=${start}&_end=${end}&_sort=id&_order=desc`;
    }
  }
  const response = await axios.get(`/transactions?${queryString}`);
  return response.data;
};
export const getAllTransactions = async () => {
  const response = await axios.get(`/transactions`);
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
