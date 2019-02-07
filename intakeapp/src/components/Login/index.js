import React from "react";

function Login({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Email: </strong>
        </label>
        <input
          className="form-control"
          // id="Title"
          // type="text"
          // value={q}
          placeholder="example@gmail.com"
        // name="q"
        // onChange={handleInputChange}
        // required
        />
        <br></br>
        <br></br>
        <label htmlFor="Query">
          <strong>Password </strong>
        </label>
        <input
          className="form-control"
          // id="Title"
          // type="text"
          // value={q}
          placeholder="***************"
        // name="q"
        // onChange={handleInputChange}
        // required
        />
        <br></br>
      </div>
    </form>
  );
}

export default Login;
