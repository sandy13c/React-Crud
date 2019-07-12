import React from 'react';
import './App.css';

class TableRow extends  React.Component {
render() {
  console.log("helllo props",this.props);
  return(
    <tr>
          <td>{this.props.object._id}</td>
          <td>{this.props.object.role_num} </td>
           <td>{this.props.object.first_name}</td>
          <td>{this.props.object.last_name}</td>
          <td><button className = 'btn-btn-danger'>Update</button> </td>
          <td><button className = 'btn-btn-danger'> Remove</button></td>
   </tr>

  )
}
}
export default TableRow;
