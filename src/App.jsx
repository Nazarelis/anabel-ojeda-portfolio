import Page from "./pages/Page";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Footer from "./components/Footer";
function App() {
  

  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={< Home  />} />
          <Route path="/about" element={< Page  />} />
          <Route path="/initiatives" element={< Page  />} />
          <Route path="/projects" element={< Page  />} />
          <Route path="/blog" element={< Page  />} />
        </Routes>
      </div>
      {/* <Footer/> */}
    </Router>
   </>
  )
}

export default App
