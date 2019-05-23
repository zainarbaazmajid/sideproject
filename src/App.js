import React from 'react';
import logo from './logo.svg';
import './index.css';
import md5 from 'md5';


console.log(md5("Hello World"));

function showInput(){
  console.log("Hello World")
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null, 
      hash:null,
    
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({hash: md5(event.target.value)});

  }

  handleSubmit(event) {
    alert('Input submitted: ' + md5(this.state.value));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
        <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
        <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
        <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      
        

          <div class="inputlabel"><p>input</p></div>

          <br></br>
  
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
        <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
     
        <div class="outputlabel"><p>output</p></div> 

        <input type='text' value={this.state.hash}  />

      </form>
    );
  }
}

export default App;
