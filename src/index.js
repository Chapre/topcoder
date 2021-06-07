import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  Route,
  NavLink,
  HashRouter,
  history,
  withRouter,
  Switch,
  BrowserRouter,
  Router
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

class MineSiteInput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {inputs:[]};
  }

  render(){
    let inputs =this.state.inputs;
    return <div>
        <div>
            <Switch>
              <Route path="/overview" component={()=>MineSiteOverview(inputs)} />
              <Route path="/" exact component={()=>this.buildForm()} />
            </Switch>
        </div>
      </div>
  }

  buildForm(){
    var inputs=this.state.inputs;
    var content= <ul>{
        inputs.map((x)=>
          <li>
            <label  className=".labels">{"ore"+x.id}</label>
            <input className=".inputField" id={"ore"+x.id} ref={x.ref}/>
          </li>)
        }
      </ul>
    return <form>
    <div>
      {content}
    </div>
      <div>
          <button id="addMoreButton" onClick={(e)=>this.handleAddMoreButton(e)}>Add More</button>
      </div>
      <div>
            <button id="doneButton"  onClick={(e)=>this.handleDoneButton(e)}>Done</button>
      </div>
    </form>
  }

  handleAddMoreButton(e) {

    var inputs=this.state.inputs;
    if(inputs.length==0){
      inputs.push({id:1, ref:React.createRef()});
    }
    else{
      var val = Math.max.apply(Math, inputs.map((x=>x.id)));
      inputs.push({id:val+1, ref:React.createRef()});
    }

    console.log('You clicked submit.');
    this.setState({});
   }
   
   handleDoneButton(e) {
    this.props.history.push("/overview")
    console.log('You clicked submit.');
   }
}

function MineSiteOverview(names){
  var content= <ul>{
    names.map((x)=>
      <li>
        {x}
      </li>)
    }
  </ul>
  return <div>
    {content}
  </div>
}

ReactDOM.render(
  <BrowserRouter><MineSiteInput /></BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
