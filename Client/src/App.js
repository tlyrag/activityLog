
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleTodosList from "./Components/SimpleTodoList.js"
import CreateTask from "./Components/CreateTask.js"
import Navbar from './Components/navbar.js';
import EditTask from './Components/EditTask.js';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" exact element={<SimpleTodosList />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/update/:id" element={<EditTask />} />
        <Route path="/update/" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
