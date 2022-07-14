import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/new";
import Single from "./pages/single/single";

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='users'>
          <Route index element={<List/>}/>
          <Route path='new' element={<New/>}/>
          <Route path=':userid' element={<Single/>}/>
        </Route>
        <Route path='product'>
          <Route index element={<List/>}/>
          <Route path='new' element={<New/>}/>
          <Route path=':productid' element={<Single/>}/>
        </Route>
      </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
