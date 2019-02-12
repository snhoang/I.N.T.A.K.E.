import React from "react";

function Signup({ q, handleInputChange, submitSignupInformationToSignupApi }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Name: </strong>
        </label>
        <input
          className="form-control"
          id="signupName"
          type="text"
          value={q}
          placeholder="Indiana Jones"
          name="q"
          onChange={handleInputChange}
          required
        />
        <br></br>
        <br></br>
        <label htmlFor="Query">
          <strong>Email: </strong>
        </label>
        <input
          className="form-control"
          id="signupEmail"
          type="text"
          value={q}
          placeholder="example@gmail.com"
          name="q"
          onChange={handleInputChange}
          required
        />
        <br></br>
        <br></br>
        <label htmlFor="Query">
          <strong>Password </strong>
        </label>
        <input
          className="form-control"
          id="signupPassword"
          type="text"
          value={q}
          placeholder="***************"
          name="q"
          onChange={handleInputChange}
          required
        />
        <br></br>
      </div>
      <div className="text-center pull-right">
        <button
          onClick={() => submitSignupInformationToSignupApi}
          type="submit"
          className="btn btn-lg btn-danger"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default Signup;