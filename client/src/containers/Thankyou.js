import React, {Component} from 'react';

class Thankyou extends Component {
    printFormData(){
        var form01 = JSON.parse(localStorage['form01']);
        var form02 = JSON.parse(localStorage['form02']);
        var form_data = Object.assign({},form01, form02); 
        return form_data
    }

    render() {
        return (
          <div>
            <h1> Thank you! </h1>
            <hr/>
            <h3 > Progress Bar </h3>
            <br />
            <h1 > Green Tick </h1>
            { JSON.stringify(this.printFormData()) }
            <br />
            <br />
            <button> GO to Dashboard -> </button>
          </div>
        );
    }

}

export default Thankyou;
