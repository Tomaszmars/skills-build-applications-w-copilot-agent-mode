import React from 'react';

const Form = ({ onSubmit }) => (
  <form className="p-3 border rounded bg-light" onSubmit={onSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" name="name" required />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id="email" name="email" required />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
);

export default Form;
