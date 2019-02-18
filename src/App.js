import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
     this.state = {
      seconds: '00',   // responsible for the seconds 
      minutes: '00'  // responsible for the minutes
}
  }

  functionmilliseconds() {
    
   let heure=new Date(2334567867879990);
   let result=heure.toLocaleTimeString();

/*  */
    console.log(result);

   return result;
 }
//  startCountDown() {
//   this.intervalHandle = setInterval(this.tick, 1000);
//   let time = this.state.minutes;
//   this.secondsRemaining = time * 60;
//   }

  render() {
    return (
      <div className="App">
      <div className="class1">
    
  <label  className="class">{this.functionmilliseconds()}</label>
  <br/>
  <label className="class2"> hour minute second</label><br/>
{/*   <label className="danger">{this.state.minutes}</label>// */}



  </div>


      </div>
    );
  }
}

export default App;
