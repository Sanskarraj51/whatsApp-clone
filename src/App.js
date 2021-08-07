import React from 'react'

import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import './App.css';
import Chat from './Components/Chat';
import Login from './Components/Login';

import Sidebar from './Components/Sidebar';
import { useStateValue } from './Components/StateProvider';



function App() {
  const [{ user },dispatch] = useStateValue();

  return (
  <div className="app">
    {!user ? (<Login />
    ):(
     
    <div className="app__body">

       
       <Router >
       

        <Sidebar />
          < Switch >
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path ="/">
            
              <img src="https://cdn.worldvectorlogo.com/logos/whatsapp-3.svg" alt="" />

               
             </Route>
          </Switch>
      </Router>
    </div>
    )};
  </div>
);}

export default App;
