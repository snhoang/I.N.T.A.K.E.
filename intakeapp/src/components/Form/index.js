import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Beverage: </strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="What is it?"
          name="q"
          onChange={handleInputChange}
          required
        />
        <br></br>
        <br></br>
        <label htmlFor="Query">
          <strong>Volume (fl oz): </strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="How much?"
          name="q"
          onChange={handleInputChange}
          required
        />
        <br></br>
        <br></br>
        <label htmlFor="Query">
          <strong>Alchohol Content: </strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="How much alchohol?"
          name="q"
          onChange={handleInputChange}
          required
        />
        <br></br>
        <br></br>
        <label htmlFor="Query">
          <strong>Caffeine Content: </strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="How many miligrams of caffeine?"
          name="q"
          onChange={handleInputChange}
          required
        />
        <br></br>
        <br></br>
        <label htmlFor="Query">
          <strong>Sugar Content: </strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="How many grams of sugar?"
          name="q"
          onChange={handleInputChange}
          required
        />
        <br></br>
        <br></br>
      </div>
      <div className="text-center pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger"
        >
          + beverage
        </button>
      </div>
    </form>
  );
}

export default Form;
