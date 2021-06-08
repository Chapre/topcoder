import {MineContext} from '../App'

function MineSiteOverview(){
    return (
      <MineContext.Consumer>
      { ({names, _})=>{
            names.sort();
        return(
          <ul>{
            names.map((x, index)=>
                <li key={index} >{x}</li>)
              }
            </ul>);
      }}
      </MineContext.Consumer>
    );
}

export default (MineSiteOverview);