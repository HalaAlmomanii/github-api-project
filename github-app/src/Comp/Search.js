import React ,{Component}from 'react';
class Search extends Component{
  state={}

  val=(e)=>{
this.setState({e:e.target.value})
  }
  render(){
  return (
  <>
    <input onChange={this.val.bind(this)}></input>
      <button onClick={this.props.change.bind(this,this.state.e)}>Click</button>
    </>
  );
}
}
export default Search;
