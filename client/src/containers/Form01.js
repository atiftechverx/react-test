import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {HandleForm01Next} from '../actions/index'

class Form01 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        form01: this.props.form01,
      };
    }

  HandleOnChangeEmail (evt) {
    var form01 = this.state.form01
    form01.email.val = evt.target.value
    this.setState({form01: form01})
   }

   HandleOnChangePassword (evt) {
     var form01 = this.state.form01
     form01.password.val = evt.target.value
     this.setState({form01: form01})
    }

    HandleOnChangeConfirmPassword (evt) {
      var form01 = this.state.form01
      form01.confirm_password.val = evt.target.value
      this.setState({form01: form01})
     }

     isEmailValid(emailAdress) {
         var EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
         return EMAIL_REGEXP.test(emailAdress)
     }

   validate(){
    var form01 = this.state.form01,
    error = false;

    if(form01.email.val === ""){
      form01.email.error = "IS REQUIRED"
      error = true;
    }
    else if(!this.isEmailValid(form01.email.val)){
      form01.email.error = "IS NOT VALID"
      error = true;
    } 
    else if (form01.password.val === ""){
      form01.password.error = "IS REQUIRED"
      error = true;
    }
    else if (form01.confirm_password.val === ""){
      form01.confirm_password.error = "IS REQUIRED"
      error = true;
    }
    else if (form01.password.val !== form01.confirm_password.val){
      form01.confirm_password.error = "DOES NOT MATCH"
      error = true;
    } else {
      error = false
    }

    this.setState({form01: form01})

    return error;
   }

   handleSubmit() {
    if (!this.validate()){
      this.props.HandleForm01Next(this.state.form01)
      this.props.nextStep(this.state.form01)
    }
   }
    render() {
      var form01 = this.state.form01;
        return (
          <div>
            <form>
              <label>EMAIL <span className='error'>{form01.email.error}</span></label><br />
              <input type='text' name='email' value= {form01.email.val} onChange={evt => this.HandleOnChangeEmail(evt)} /><br />
              <br />
              <label>PASSWORD <span className='error'>{form01.password.error}</span></label><br />
              <input type='password' name='password' value= {form01.password.val} onChange={evt => this.HandleOnChangePassword(evt)} /><br />
              <br />
              <label>CONFIRM PASSWORD <span className='error'>{form01.confirm_password.error}</span></label><br />
              <input type='password' name='confirm_password' onChange={evt => this.HandleOnChangeConfirmPassword(evt)} />
              <br />

              <span style = {{float: 'right'}} onClick={() => this.handleSubmit()}> Next </span>
            </form>
          </div>
        );
    }

}


function mapStateToProps(state) {
    return state.form01
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({HandleForm01Next: HandleForm01Next}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Form01);
