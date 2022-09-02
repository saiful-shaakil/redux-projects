import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Pagination from "./Components/Pagination";
import Tags from "./Components/Tags";
import VideoGrid from "./Components/VideoGrid";

function App() {
  return (
    <div>
      <Navbar />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer />
    </div>
  );
}
export default App;
