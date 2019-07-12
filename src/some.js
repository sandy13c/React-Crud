import React from 'react';
import './App.css';

class Some extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      students: [],
      isLoaded: false,
      error: null,
    }
  }

  componentDidMount() {
    fetch("http://localhost:3200/students")
    .then(res => res.json())
    .then((myresult) => {
      this.setState({
           isLoaded: true,
           students: myresult.data,
      });

  },
  (error) => {
    this.setState({
         isLoaded: true,
         error
    });
  }
)
}
render() {
    const {error, isLoaded, students} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div> Loading ...</div>
    } else {
  return (
    <ul>
      {this.state.students.map(student => (
       <li key={student._id}>
          {student._id} {student.role_num}

       </li>
      ))}
  </ul>

  );
}
}
}

export default Some;
