import React ,{Component}from 'react';
class TabelItem extends Component{
  state={}

  render(){
  return (
  <tr>
     
      <td>
       {this.props.elem.id}

       </td>
       <td>
     {this.props.elem.name}  

       </td>

<td>
   {this.props.elem.private?"yes":"No"}
    
       </td>
       <td>
    {this.props.elem.language} 

       </td>
       <td>
{this.props.elem.private?"private":"public"}

       </td>

       <td>{this.props.elem.private?<input type="radio "defaultChecked={true}></input>:<input type="radio" defaultChecked={false}></input>}</td>


<td><button><a href={this.props.elem.svn_url} target="_blank" rel="noopener noreferrer"> URL</a></button></td>
    </tr>
  );
}
}
export default TabelItem;
