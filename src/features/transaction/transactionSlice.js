import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getAllTransactions,
  getTransactions,
} from "./transactionAPI";

const initialState = {
  transactions: [],
  currentBalance: 0,
  isLoading: false,
  isError: false,
  error: "",
  editing: {},
  update: false,
};

// asyns thunks
export const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransactions",
  async ({ search, start, end, type }) => {
    const transactions = await getTransactions(search, start, end, type);
    return transactions;
  }
);
// for balance status
export const fetchTransactionsAll = createAsyncThunk(
  "transaction/fetchTransactionsAll",
  async () => {
    const transactions = await getAllTransactions();
    return transactions;
  }
);
export const createTransaction = createAsyncThunk(
  "transaction/createTransaction",
  async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
  }
);
export const changeTransaction = createAsyncThunk(
  "transaction/changeTransaction",
  async ({ id, data }) => {
    const transaction = await editTransaction(id, data);
    return transaction;
  }
);
export const removeTransaction = createAsyncThunk(
  "transaction/removeTransaction",
  async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    editActice: (state, action) => {
      state.editing = action.payload;
    },
    editInactive: (state, action) => {
      state.editing = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.transactions = [];
        state.error = action.error?.message;
      })
      .addCase(fetchTransactionsAll.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTransactionsAll.fulfilled, (state, action) => {
        let total = 0;
        state.isLoading = false;
        state.isError = false;
        action.payload.map((each) => {
          if (each.type === "income") {
            return (total += each.amount);
          } else {
            return (total -= each.amount);
          }
        });
        state.currentBalance = total;
      })
      .addCase(fetchTransactionsAll.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.currentBalance = 0;
        state.transactions = [];
        state.error = action.error?.message;
      })
      .addCase(createTransaction.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.update = !state.update;
        state.transactions.push(action.payload);
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(changeTransaction.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        const indexOfUpdate = state.transactions.findIndex(
          (t) => t.id === action.payload.id
        );
        state.transactions[indexOfUpdate] = action.payload;
      })
      .addCase(changeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(removeTransaction.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.update = !state.update;
        state.transactions = state.transactions.filter(
          (t) => t.id !== action?.meta?.arg
        );
      })
      .addCase(removeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default transactionSlice.reducer;
export const { editActice, editInactive } = transactionSlice.actions;
