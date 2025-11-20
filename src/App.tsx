import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import BellaNina from "./pages/BellaNina";
import Videos from "./pages/Videos";
import BellaNinaMusic from "./pages/BellaNinaMusic";
import BellaNinaVideo from "./pages/BellaNinaVideo";
import BellaNinaVerse from "./pages/BellaNinaVerse";
import Music from "./pages/Music";
import ScrollToAnchor from "@/components/ScrollToAnchor";

const App = () => (
  <BrowserRouter>
    <ScrollToAnchor />
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bella-nina" element={<BellaNina />} />
        <Route path="/bella-nina/music" element={<BellaNinaMusic />} />
        <Route path="/bella-nina/video" element={<BellaNinaVideo />} />
        <Route path="/bella-nina/bellaverse" element={<BellaNinaVerse />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
