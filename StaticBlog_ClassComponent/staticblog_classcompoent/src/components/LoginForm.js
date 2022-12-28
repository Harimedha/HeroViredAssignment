import React from "react";
import './loginform.css';

class LoginForm extends React.Component{
    state = { showForm: false,
                disable:false};

  showForm = () => {
    return (
      <div className="form-div">
        <form >
          <label>Name : </label>
          <input type="text" />           
          <label> Email Address : </label>
          <input type="text" />
          <button>Subscribe</button>
        </form>
      </div>
    );
  };

  render() {
    return (
      <div style={{marginLeft:'22rem' ,marginBottom:'20px'}}>
        <h2>So, which adventure will you choose for 2023? </h2>
        <div>
        <button className="button-visible"  disabled={this.state.disable}
        onClick={() => this.setState({ showForm: true, disable:true })}>
        Subscribe to know more
        </button>     
        </div>  
        {this.state.showForm ? this.showForm() : null}
      </div>
    );
  }
}
export default LoginForm;

   