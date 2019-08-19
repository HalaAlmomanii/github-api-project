import React ,{Component}from 'react';
import TabelItem from './TabelItem';

class Tabel extends Component{
  state={}

  render(){
  return (
  <div>
        <table>
   <thead>
        <tr>
    <th>number</th>
    <th>name</th>
    <th>state</th>
    <th>check</th>
    <th>private</th>
    <th>lang</th>
    <th>url</th>
  </tr> 
  </thead>   
  <tbody>
  {this.props.data.map((elem,id)=> < TabelItem elem={elem} key={id}/>)}
  </tbody>
            </table> 
       
      
    </div>
  );
}
}
export default Tabel;
