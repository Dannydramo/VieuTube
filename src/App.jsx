import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChannelDetails from "./components/ChannelDetails";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import VideoDetails from "./components/VideoDetails";

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
