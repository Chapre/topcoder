import React from 'react';
import MineSiteInput from './components/mineSiteInput';
import MineSiteOverview from './components/mineSiteOverview';
import { useState } from "react";
import {
  Route,
  Switch,
  BrowserRouter} from "react-router-dom";
import UserTabs from './components/userTabs'
export const MineContext = React.createContext([]);
function App() {
  const [names, setNames] = useState([]);
  return (
    <MineContext.Provider value={{names, setNames}}>
      <BrowserRouter>
        <Switch>
          <Route path="/overview" component={MineSiteOverview} />
          {/* <Route path="/" exact component={MineSiteInput}/> */}
          <Route path="/" exact component={UserTabs}/>
        </Switch>
      </BrowserRouter>
    </MineContext.Provider>
  );
}

export default App;
