import React, { Component } from 'react';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'

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


  fortuneClick = () => {
    axios.get('http://askat.me:8000/api/fortune/'+this.state.birthday)
    .then(response => {
        console.log(response);
     this.setState({
         data:response.data
     })
    })

};

    badClick = () => {
      axios.get('http://askat.me:8000/api/bad')
          .then(response => {
              this.setState({
                  data:response.data
              })
          })
      .catch(error => {
              window.alert("oppps!")
      })
  }

    lottoClick = () => {
        axios.get('http://askat.me:8000/api/lotto')
            .then(response => {
                this.setState({
                    data:response.data.join('')
                })
            })
    }



    render() {
        
        return (
            <div className="form">
                <button onClick={this.lottoClick}>
                    lotto
                </button>
              <input
                  name="birthday"
                  type="date"
                  placeholder="yyyy.nn.dd."
                  onChange={this.handleChange}
              />
                <button onClick={this.fortuneClick}>
                fortune
                </button>
                <button onClick={this.badClick}>
                   bad
                </button>
               <div>
                   {`입력: ${this.state.birthday}.
                   ${this.state.data}`}

               </div>
            </div>
        );
    }
}

export default App;