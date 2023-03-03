import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChannelDetails from "./pages/ChannelDetails";
import Feed from "./pages/Feed";
import Navbar from "./components/Navbar";
import SearchFeed from "./pages/SearchFeed";
import VideoDetails from "./pages/VideoDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
