import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {HandleForm02Next} from '../actions/index'

class Form02 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        form02: this.props.form02,
      };
    }

  HandleOnChangeDOB (evt) {
    var form02 = this.state.form02
    form02.dob.val = evt.target.value
    this.setState({form02: form02})
   }

   HandleOnChangeGender (evt) {
     var form02 = this.state.form02
     form02.gender.val = evt.target.value
     this.setState({form02: form02})
    }

    HandleOnChangeWhereDid (evt) {
      var form02 = this.state.form02
      form02.where_did.val = evt.target.value
      this.setState({form02: form02})
     }

   validate(){
    var form02 = this.state.form02,
    error = false;

    if(form02.dob.val === ""){
      form02.dob.error = "IS REQUIRED"
      error = true;
    } 
    else if (form02.gender.val === ""){
      form02.gender.error = "IS REQUIRED"
      error = true;
    }
    else if (form02.where_did.val === ""){
      form02.where_did.error = "IS REQUIRED"
      error = true;
    }

    this.setState({form02: form02})

    return error;
   }

   handleSubmit() {
    if (!this.validate()){
      this.props.HandleForm02Next(this.state.form02)
      this.props.nextStep()
    }
   }
   
    render() {
      var form02 = this.state.form02;
        return (
          <div>
            <form>
              <label>DATE OF BIRTH <span className='error'>{form02.dob.error}</span></label><br />
              <input type='date' name='dob' value= {form02.dob.val} onChange={evt => this.HandleOnChangeDOB(evt)} /><br />
              <br />
              <label>GENDER <span className='error'>{form02.gender.error}</span></label><br />
              <input type='text' name='gender' value= {form02.gender.val} onChange={evt => this.HandleOnChangeGender(evt)} /><br />
              <br />
              <label>WHERE DID YOU HERE ABOUT IT? <span className='error'>{form02.where_did.error}</span></label><br />
              <input type='text' name='where_did' onChange={evt => this.HandleOnChangeWhereDid(evt)} />
              <br />

              <span style = {{float: 'left'}} > Back </span>
              <span style = {{float: 'right'}} onClick={() => this.handleSubmit()}> Next </span>
            </form>
          </div>
        );
    }

}


function mapStateToProps(state) {
    return state.form02
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({HandleForm02Next: HandleForm02Next}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Form02);
