import './components/Registration.js'
import './App.css';
import Registration from './components/Registration'
import Loginbox from './loginc/Loginbox.js';
import Logout from './logout/Logout'
import Navs from './navbar/Navs'
import React from 'react'
import {
      BrowserRouter as Router,
      Routes,
      Route,
      Link
  } from 'react-router-dom';
import ReactDOM from "react-dom/client";



function App() {
  return (
    <React.Fragment>
    <Router>
           <div className="App">
            <Navs/>
           <Routes>
                 <Route exact path='/' element={< Registration />}></Route>
                 <Route exact path='/login' element={< Loginbox />}></Route>
                 <Route exact path='/register' element={< Registration />}></Route>
          </Routes>
          </div>
       </Router>
    </React.Fragment>
  );
}

export default App;
