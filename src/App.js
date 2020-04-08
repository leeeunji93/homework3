import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    birthday:null
  }
   
  handleClick = () => {
    axios.get('http://askat.me:8000/api/lotto')
    .then(response => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
    axios.get('http://askat.me:8000/api/fortune/1993-12-13')
    .then(response => {
      console.log(response)
    })
   
};

    render() {
        
        return (
            <div className="form">
              <input type />

                <button onClick={this.handleClick}>
                lotto
                </button>
               
            </div>
        );
    }
}

export default App;