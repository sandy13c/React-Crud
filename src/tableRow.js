import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
export default class TableRow extends Component {
/*
constructor(props) {
  super(props);
 //this.deletestudent = this.deletestudent.bind(this);
}
*/
deletestudentFormer() {
  axios.get( "http://localhost:3200/students")
   .then((myJson) => {
     this.setState({student:myJson.data});
   })
   .catch(error => console.error(error));
        axios.post('http://localhost:3200/students/deleteStudent', {
            '_id': this.props.object._id
        })
            .then(console.log('Student Deleted'))
            .catch(err => console.log(err));
    }
  render(){
    return(
      <tr>
            <td>{this.props.object._id}</td>
            <td>{this.props.object.role_num} </td>
             <td>{this.props.object.first_name}</td>
            <td>{this.props.object.last_name}</td>
            <td>{this.props.object.marks}</td>
          <td>
          <Link to ={{ pathname:"/editform/"+ this.props.object._id, state: this.props.object }} className = 'btn-btn-danger'>Update</Link>
          </td>
            <td> <Button onClick={() => this.props.deleteStudent(this.props.object._id)} className = 'btn-btn-danger'>Remove</Button></td>
     </tr>
    );
  }
}
