import React from 'react';
import './App.css';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import TableRow from './tableRow';
import 'bootstrap/dist/css/bootstrap.min.css';
class GetStudents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      student:[]
    }
    this.deleteStudent = this.deleteStudent.bind(this);
    this.getStudents = this.getStudents.bind(this);
  }

 componentDidMount() {
   //console.log('===>Get student component mounted')
    axios.get( "http://localhost:3200/students")
     .then((myJson) => {
       this.setState({student:myJson.data});
     })
     .catch(error => console.error(error));

}

getStudents () {
  //console.log('==>Getting students')
  axios.get( "http://localhost:3200/students")
   .then((myJson) => {
     this.setState({student:myJson.data});
   })
   .catch(error => console.error(error));
}

deleteStudent(studentId) {

        axios.post('http://localhost:3200/students/deleteStudent', {
            '_id': studentId
        })
            .then(() => {
              console.log('Student Deleted')
              this.getStudents();
            })
            .catch(err => console.log(err));

    }

render() {
  const students = this.state.student.map((item,i)=><TableRow deleteStudent={this.deleteStudent} object={item} key={i} />);
  return(
   <div>
      <h1 align= "center">My Student List</h1>
      <Table className = 'table-table-stripped' style={{margin:25}}>
       <thead>
          <tr>
            <th>Student Id</th>
            <th>Role Num</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Marks</th>


          </tr>
       </thead>
      <tbody>
        {students}
      </tbody>
    </Table>
   </div>
  )
}

}
export default GetStudents;
