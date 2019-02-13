import React from "react";

function Login({ q, handleInputChange, submitLoginInformationToLoginApi }) {


  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Email: </strong>
        </label>
        <input
          className="form-control"
          id="email"
          placeholder="example@gmail.com"
        />
        <br></br>
        <br></br>
        <label htmlFor="Query">
          <strong>Password </strong>
        </label>
        <input
          className="form-control"
          id="password"
          placeholder="***************"
        />
        <br></br>
        <div className="text-center pull-right">
          <button
            type="submit"
            className="btn btn-lg btn-danger"
            onClick={submitLoginInformationToLoginApi}
          >
            Login
          </button>
        </div>
      </div>

    </form>
  );
}

export default Login;
