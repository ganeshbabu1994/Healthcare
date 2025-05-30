import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import signIn from './signIn';
import Dashboard from './dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import socketIO from 'socket.io-client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
  <Routes>
      <Route>
          <Route path="/" Component={signIn}/>
          <Route path="/dashboard" Component={Dashboard}/>
          {/* <Route path="/chat" element={<ChatPage socket={socket} />}></Route> */}
      </Route>
  </Routes>
</Router>
);
 

