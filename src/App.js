import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar";
import VideoPage from "./Components/VideoPage/VideoPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
