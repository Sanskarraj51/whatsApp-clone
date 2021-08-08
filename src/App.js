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
            
            <div className="chat__home">
               <h1>Welcome to the Sanskars WhatsApp </h1>
               <h3>Happy to see you here ! </h3>
            </div>

               
             </Route>
          </Switch>
      </Router>
    </div>
    )};
  </div>
);}

export default App;
