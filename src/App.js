import './App.css';
import Home from './components/Home'
import Docs from './components/Docs'
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/melo/">
            <Route index element={<Home />} />
            <Route path="docs" element={<Docs /> } />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
