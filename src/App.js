import React, { useState } from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import AddEmp from './Components/AddEmp';
import ReadEmp from './Components/ReadEmp';
import UpdateEmp from './Components/UpdateEmp';
import DeleteEmp from './Components/DeleteEmp';
export const AppContext = createContext(null);
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <AppContext.Provider value={{ toggle, setToggle }}>
      <div className="App">
        <Router>
          <Routes>
              <Route path="/" element={<Navigate to="/emp/create"/>}></Route>
              <Route path="/emp" element={<HomeScreen />} >
                <Route path="create" element={<AddEmp/>}/>
                <Route path="read" element={<ReadEmp/>}/>
                <Route path="update" element={<UpdateEmp/>}/>
                <Route path="delete" element={<DeleteEmp/>}/>
              </Route>
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;

