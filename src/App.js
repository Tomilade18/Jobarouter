import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//pages
import Home from './pages/Homes'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
     <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="/about" element={<Home />}/>
      </Routes>
     </main>
    </BrowserRouter>
     );
}

export default App
