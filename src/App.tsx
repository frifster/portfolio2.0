import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <main className="bg-slate-300/20">
          <Router>
              {/* Navbar */}
              <Routes>
                  <Route path="/" element="Home"/>
                  <Route path="/about" element="About"/>
              </Routes>
          </Router>
      </main>
  )
}

export default App
