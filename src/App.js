import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import TodoList from "./Components/TodoList";
import TodoListCompleted from "./Components/TodoListCompleted";

function App() {
  return (
    <div className="grid place-items-center bg-blue-100  px-6 font-sans">
      <Navbar />

      <div>
        <div className="w-full max-w-3xl mt-20 shadow-lg rounded-lg p-6 bg-white">
          <Header />
          <hr className="mt-4" />

          <TodoList />

          <hr className="mt-4" />

          <Footer />
        </div>
      </div>
      <hr className="my-5" />
      <div>
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <h1>Completed Task</h1>
          <hr className="mt-4" />
          <TodoListCompleted />
        </div>
      </div>
    </div>
  );
}

export default App;
