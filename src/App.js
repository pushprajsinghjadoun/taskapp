import './components/Registration.js'
import './App.css';
import Registration from './components/Registration'
import Loginbox from './loginc/Loginbox.js';
import Logout from './logout/Logout'
import Navs from './navbar/Navs'
import React, {useState,useEffect} from 'react'
import {
      BrowserRouter as Router,
      Routes,
      Route,
      Link
  } from 'react-router-dom';
  import Home from './home/Home.js';



function App() {
  const [log, setlog] = useState(localStorage.getItem('istrue') ||  false);
  const changevalue = (newvalue)=>{
    setlog(newvalue);
  }
 
  return (
    
    <React.Fragment>
    
      <Router>
    <div className="App">
    {log&&<Navs log={log} onClicks={changevalue} />}
    <Routes>
    <Route exact path='/' element= {log?<Home/>:< Registration log={log} onClicks={changevalue} />}></Route>
    <Route exact path='/home' element={< Home />}></Route>
    <Route exact path='/login' element={ < Loginbox log={log} onClicks={changevalue} />}></Route>
    <Route exact path='/logout' element={< Logout log={log} onClicks={changevalue}/> }></Route>
    <Route exact path='/register' element= { < Registration log={log} onClicks={changevalue} /> }></Route>
    
    </Routes>
    </div>
    </Router>
      
    </React.Fragment>
  );
}

export default App;
