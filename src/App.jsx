import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import Login from "./pages/Login";


function App() {

  return (

   <Router>
    <Routes>
      <Route path = "/" element = {<Login/>}/>
      <Route path = "/Dashboard" element = {<Dashboard/>}/>
    </Routes>
  </Router>
  );
}

export default App;


