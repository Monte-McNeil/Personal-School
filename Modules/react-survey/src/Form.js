import React from 'react'

 export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      sport: '',
      feedback: '',
    }
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
  });
    console.log(this.state)
}

  handleSubmit(e) {
    e.preventDefault();
   // alert('Name is' + this.state.fullName + 'Sport is: ' + this.state.sport + 'Feedback is: ' + this.state.feedback)
   alert('Name is' + this.state.fullName);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" required name="fullName" 
          value={this.state.fullName} 
          onChange={this.handleChange} />
        </label> <br></br>

        <label>
          What sport do you play?
          <input type="text" required name="sport" 
          value={this.state.sport} 
          onChange={this.handleChange} />
        </label> <br></br>

        <label>
          Please provide feedback about your Doane athletic experience <br></br>
          <textarea name="feedback" required 
          value={this.state.feedback} 
          onChange={this.handleChange} />
        </label> <br></br>

        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}
