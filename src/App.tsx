import './App.css';
import { Toaster } from './components/ui/sonner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioSubmit from './components/PortfolioSubmit';
import Portfolio from './components/Portfolio';

function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioSubmit />} />
          <Route path="/:username" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
