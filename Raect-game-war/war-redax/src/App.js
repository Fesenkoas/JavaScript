
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start/>} />
      <Route path="/game" element={<Game />} />
      <Route path="/result" element={<Result />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
