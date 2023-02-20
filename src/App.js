import './App.css';
import Create from './Component.js/Create';
import Read from './Component.js/Read';
import Update from './Component.js/Update';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
     <div className="container">
      <BrowserRouter>
      <h2>Welcome to CRUD operation</h2>
      <Routes>
           <Route exact path="/" element={<Create />}></Route>
           <Route path="/read" element={<Read/>}></Route> 
           <Route path="/update" element={<Update />}></Route> 
        </Routes>
    </BrowserRouter> 
        

    </div>


     
      </>
      );
    }
    


  

export default App;
