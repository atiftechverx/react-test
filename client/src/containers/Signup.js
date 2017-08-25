import React, {Component} from 'react';
import Header from '../components/Header.js'

import Form01 from '../containers/Form01.js'
import Form02 from '../containers/Form02.js'
import Thankyou from '../containers/Thankyou.js'

class Signup extends Component {

    constructor(props) {
      super(props);
      this.state = {
        step: 1,
      }
    }

    nextStep(){
      this.setState({step: this.state.step+1})
    }

    prevStep(){
      this.setState({step: this.state.step-1})
    }

    render() {
      var form = null
      if (this.state.step == 1) form = <Form01 nextStep={this.nextStep.bind(this)} prevStep={this.prevStep.bind(this)}/>
      else if(this.state.step == 2)  form = <Form02 nextStep={this.nextStep.bind(this)} prevStep={this.prevStep.bind(this)} />
      else form = <Thankyou prevStep={this.prevStep.bind(this)} />
        return (
          <div>
          <center>
            <Header />
            <br />
            { 
             form
            }
            <br />
            <br />
            <br />
          </center>
          </div>
        );
    }

}

export default Signup;
