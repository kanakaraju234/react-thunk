import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BookingRequest } from '../redux/Reducers/BookingReducer';
 export function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interpreter: '',
    description: '',
    language: '',
    appointmentDate: ''
  });

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("formData" , formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(BookingRequest(formData))
     
  };

  return (
    <div className="container-fluid mt-4 d-flex justify-content-center ">
    <div className="w-50 shadow p-4">
      <h2 className="text-center mb-4">Booking Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <select className="form-control" name="location" value={formData.location} onChange={handleChange} required>
            <option value="">Select Location</option>
            <option value="Hyd">Hyd</option>
            <option value="Banglore">Banglore</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="interpreter">Interpreter:</label>
          <select className="form-control" name="interpreter" value={formData.interpreter} onChange={handleChange} required>
            <option value="">Select Interpreter</option>
            <option value="appointment 1">appointment 1</option>
            <option value="appointment 2">appointment 2</option>
            <option value="appointment 3">appointment 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea className="form-control" name="description" rows="3" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <select className="form-control" name="language" value={formData.language} onChange={handleChange} required>
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Telugu">Telugu</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Appointment Date:</label>
          <input type="date" className="form-control" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
      </form>
    </div>
  </div>
  );
}

export default Appointment;







