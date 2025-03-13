import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Detail from "./pages/Detail";
import Results from "./pages/Results";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:id" element={<Feed />} />
        <Route path="/watch" element={<Detail />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
