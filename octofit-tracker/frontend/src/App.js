
import React, { useState } from 'react';
import Table from './Table';
import Form from './Form';
import Card from './Card';
import Modal from './Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: e.target.name.value,
      Email: e.target.email.value,
    };
    setFormData([...formData, data]);
    setModalShow(true);
    e.target.reset();
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">OctoFit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <h1 className="mb-4 display-4 text-center">Welcome to OctoFit Tracker</h1>

        <Card title="Add User" text="Fill out the form to add a user.">
          <Form onSubmit={handleFormSubmit} />
        </Card>

        <Card title="User Data" text="All submitted users will appear below.">
          {formData.length > 0 ? (
            <Table data={formData} />
          ) : (
            <div className="alert alert-info">No users added yet.</div>
          )}
        </Card>

        <button className="btn btn-success mt-3" onClick={() => setModalShow(true)}>
          Show Modal Example
        </button>

        <Modal show={modalShow} onClose={() => setModalShow(false)} title="Bootstrap Modal">
          <p>This is a Bootstrap modal example. You can use modals for confirmations, forms, and more!</p>
          <a href="https://getbootstrap.com/docs/5.0/components/modal/" className="btn btn-link" target="_blank" rel="noopener noreferrer">Learn more about Bootstrap Modals</a>
        </Modal>
      </div>
    </div>
  );
}

export default App;
