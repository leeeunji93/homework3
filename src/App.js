import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    birthday:null,
      data:null
  }

  handleChange = e =>{
      this.setState({
          birthday:e.target.value
      })
  }


  handleClick = () => {
    axios.get('http://askat.me:8000/api/fortune/'+this.state.birthday)
    .then(response => {
        console.log(response);
     this.setState({
         data:response.data
     })
    })

};

    render() {
        
        return (
            <div className="form">
              <input
                  name="birthday"
                  type="date"
                  placeholder="yyyy.nn.dd."
                  onChange={this.handleChange}
              />
                <button onClick={this.handleClick}>
                fortune
                </button>
               <div>
                   {this.state.data}
                   {this.state.birthday}
               </div>
            </div>
        );
    }
}

export default App;