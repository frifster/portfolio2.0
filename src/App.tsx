import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import HomePage from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <main className="bg-slate-300/20 h-screen">
              <Router>
                  <Navbar/>
                  <Routes>
                      <Route path="/" element={<HomePage/>}/>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/projects" element="Projects"/>
                      <Route path="/contact" element={<Contact/>}/>
                  </Routes>
              </Router>
          </main>
      </QueryClientProvider>
  )
}

export default App
