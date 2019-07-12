import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
export default class StudentForm extends Component {
constructor(props) {
  super(props)
  this.ChangeID = this.ChangeID.bind(this);
  this.ChangeRoleNumber = this.ChangeRoleNumber.bind(this);
  this.ChangeFirstName= this.ChangeFirstName.bind(this);
  this.ChangeLastName = this.ChangeLastName.bind(this);
  this.ChangeMarks = this.ChangeMarks.bind(this);
  this.enterstudent =  this.enterstudent.bind(this);

  this.state = {
     _id: '',
     role_num: '',
     first_name: '',
     last_name: '',
     marks: ''

  }
}
 ChangeID(a) {
 this.setState({
   _id: a.target.value
 })
}

ChangeRoleNumber(a) {
  this.setState({
    role_num: a.target.value
  })
}

ChangeFirstName(a) {
  this.setState({
     first_name: a.target.value
  })
}
ChangeLastName(a) {
  this.setState({
    last_name: a.target.value
  })
}
ChangeMarks(a) {
  this.setState({
    marks: a.target.value
  })
}
enterstudent(a) {
a.preventDefault();

const myob = {
  _id: this.state._id,
  role_num: this.state.role_num,
  first_name: this.state.first_name,
  last_name: this.state.last_name,
  marks: this.state.marks

};
axios.post('http://localhost:3200/students/addStudent',myob)
.then(err => console.log(err.data));
this.setState({
  _id: '',
  role_num: '',
  first_name: '',
  last_name: '',
  marks: ''

})
}

  render() {
return(
  <div style={{marginTop:50}}>
      <h2>Add New Student</h2>
      <form onSubmit={this.enterstudent}>
        <div className = 'form-group'>
           <label>Enter ID: </label>
           <input type = "text" className ='form-control' value= {this.state._id} onChange={this.ChangeID}
           />

          </div>
          <div className = 'form-group'>
             <label>Enter Role Number: </label>
             <input type = "text" className ='form-control'  value= {this.state.role_num} onChange={this.ChangeRoleNumber} />
            </div>
            <div className = 'form-group'>
               <label>Enter First Name : </label>
               <input type = "text" className ='form-control'value= {this.state.first_name} onChange={this.ChangeFirstName}/>
              </div>
              <div className = 'form-group'>
                 <label>Enter Last Name: </label>
                 <input type = "text" className ='form-control'value= {this.state.last_name} onChange={this.ChangeLastName}/>
                </div>
                <div className = 'form-group'>
                   <label>Enter Marks: </label>
                   <input type = "text" className ='form-control'value= {this.state.marks} onChange={this.ChangeMarks}/>
                  </div>

                  <div className = 'form-group'>
                     <input type = "submit" className ='btn btn-primary'value= "Add Student"/>
                    </div>

      </form>

  </div>

)
}
}
