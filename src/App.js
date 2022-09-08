import Balance from "./components/Balance";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Transactions from "./components/Transactions/Transactions";
import { Routes, Route } from "react-router-dom";
import AllTransactions from "./components/Transactions/AllTransactions";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Balance />
            <Form />
            <Transactions />
          </Layout>
        }
      ></Route>
      <Route path="/transactions" element={<AllTransactions />}></Route>
    </Routes>
  );
}

export default App;
