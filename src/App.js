import{BrowserRouter as Router,Routes,Route, } from 'react-router-dom';

import Portfolio from "./Portfolio"

function App() {
  

  return (
     <Router>
      <Routes>
      
        <Route path="/" element={<Portfolio/>}/>
        <Route path="/Home" element={<Portfolio/>}/>
        <Route path="/About" element={<Portfolio/>}/>
        <Route path="/Resume" element={<Portfolio/>}/>
        <Route path="/Contact" element={<Portfolio/>}/>
      </Routes>
     </Router> 
  )
}

export default App
