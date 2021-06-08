import React from 'react';
import MineSiteInput from './components/mineSiteInput';
import MineSiteOverview from './components/mineSiteOverview';
import { useState } from "react";
import {
  Route,
  Switch,
  BrowserRouter} from "react-router-dom";
  
export const MineContext = React.createContext([]);
function App() {
  const [names, setNames] = useState([]);
  return (
    <MineContext.Provider value={{names, setNames}}>
      <BrowserRouter>
        <Switch>
          <Route path="/overview" component={MineSiteOverview} />
          <Route path="/" exact component={MineSiteInput}/>
        </Switch>
      </BrowserRouter>
    </MineContext.Provider>
  );
}

export default App;
