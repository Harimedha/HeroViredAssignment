import React, { useState } from "react";
import './LoginForm.css';

function LoginForm(){

  const[showForm,setShowForm]= useState(false);
  const[disabled, setDisabled] = useState(false);

  const displayForm = () => {
    return (
      <div  className="form-div">
        <form>
          <label>Name : </label>
          <input type="text" />           
          <label> Email Address : </label>
          <input type="text" />
          <button>Subscribe</button>
        </form>
      </div>
    );
  };

    return (
      <div>
        <h2>So, which adventure will you choose for 2023? </h2>
        <button disabled={disabled} className="button-visible"                
        onClick={() => {setShowForm(true); setDisabled(true);}}>
          Subscribe to know more
        </button>       
        {showForm ? displayForm() : null}
      </div>
    );
}
export default LoginForm;

   