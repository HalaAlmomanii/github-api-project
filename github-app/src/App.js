import React ,{Component}from 'react';
import Search from './Comp/Search';
import Table from './Comp/Table';
const axios = require('axios');
class App extends Component{
  state={res:[],no:""}


   change=(e)=>{
  axios.get(`https://api.github.com/users/${e}/repos?page=1&per_page=5`)
  .then((response)=> {
    this.setState({res:response.data});
    if(this.state.res.length===0){
      this.setState({no:0})
    }
    console.log(this.state.res)
 
  })
  .catch((Error)=>{
    // console.log("Error")
    this.setState({res:0})
  })
   }
  render(){
  return (
  <div>
          
      <Search change={this.change}/>
     {this.state.res.length>0&&<Table  data={this.state.res} />}
     {this.state.res===0 && <h1>Not found</h1>}
     {this.state.no===0 && <h1>there is no Repo</h1>}
    </div>
  );
}
}
export default App;
