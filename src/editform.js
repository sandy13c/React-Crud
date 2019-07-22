import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
export default class EditStudent extends Component {
constructor(props) {
  super(props)
  this.ChangeID = this.ChangeID.bind(this);
  this.ChangeRoleNumber = this.ChangeRoleNumber.bind(this);
  this.ChangeFirstName= this.ChangeFirstName.bind(this);
  this.ChangeLastName = this.ChangeLastName.bind(this);
  this.ChangeMarks = this.ChangeMarks.bind(this);
  this.Enter =  this.Enter.bind(this);

  this.state = {
     _id: '',
     role_num: '',
     first_name: '',
     last_name: '',
     marks: ''

  }
}
componentDidMount() {

  /*
axios.get('http://localhost:3200/students/student_info/'+ this.props.match.params.id)

.then(res => {
             this.setState({
               _id: res.data._id,
               role_num: res.data.role_num,
               first_name: res.data.first_name,
                last_name: res.data.last_name,
                marks: res.data.marks
              });
         })
         .catch(err => {
             console.log(err);

  })
  */
   axios.get( "https://crud-backend.herokuapp.com/students")
    .then((myJson) => {
      this.setState({student:myJson.data});
    })
    .catch(error => console.error(error));
   const student = this.props.location.state;
   console.log('===>Student to edit', student);
   const {
     _id,   role_num,
     first_name,
     last_name, marks,
   } = student;
   this.setState({ _id, role_num, first_name, last_name, marks});

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
Enter(a) {
a.preventDefault();

const myobj = {
  _id: this.state._id,
  role_num: this.state.role_num,
  first_name: this.state.first_name,
  last_name: this.state.last_name,
  marks: this.state.marks

};
axios.post('https://crud-backend.herokuapp.com/students/updateStudent', myobj)

.then(res=> console.log(res.data));
  this.props.history.push('/getstudents');
}

  render() {
    console.log('Student in state ===>', this.state);
return(
  <div style={{marginTop:50}}>
      <h2>Update Student</h2>
      <form onSubmit={this.Enter}>
        <div className = 'form-group'>
           <label>Enter ID: </label>
           <input type = "text" className ='form-control' value= {this.state._id || ''} onChange={this.ChangeID}
           />

          </div>
          <div className = 'form-group'>
             <label>Enter Role Number: </label>
             <input type = "text" className ='form-control'  value= {this.state.role_num || ''} onChange={this.ChangeRoleNumber} />
            </div>
            <div className = 'form-group'>
               <label>Enter First Name : </label>
               <input type = "text" className ='form-control'value= {this.state.first_name  || ''} onChange={this.ChangeFirstName}/>
              </div>
              <div className = 'form-group'>
                 <label>Enter Last Name: </label>
                 <input type = "text" className ='form-control'value= {this.state.last_name  || ''} onChange={this.ChangeLastName}/>
                </div>
                <div className = 'form-group'>
                   <label>Enter Marks: </label>
                   <input type = "text" className ='form-control'value= {this.state.marks || ''} onChange={this.ChangeMarks}/>
                  </div>
                  <div className = 'form-group'>
                     <input type = "submit" className ='btn btn-primary'value= "Edit Student"/>
                    </div>

      </form>

  </div>

)
}
}
