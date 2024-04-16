import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { getLanguages } from "../redux/Reducers/LanguageReducer";
import { useDispatch, useSelector } from 'react-redux';

export function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interpreter: '',
    description: '',
    fromLanguage: '',          
    toLanguage: '',
    appointmentDate: ''
  });
  const [languages, setLanguages] = useState([]);
  const dispatch = useDispatch();
  // const { loading, error, language } = useSelector((state) => state.LanguageReducer);


  const dispatchGetLanguage = useCallback(() => {
    dispatch(getLanguages());
  }, [dispatch]);

  useEffect(() => {
    dispatchGetLanguage();
  }, [dispatchGetLanguage]); 

  useEffect(() => {
    const valuelang = async () => {
      try {
        const response = await axios.get('http://localhost:8000/languages');
       console.log(response.data)
        setLanguages(response.data);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

     valuelang();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("formData", formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="container-fluid mt-4 d-flex justify-content-center ">
      <div className="w-50 shadow p-4">
        <form onSubmit={handleSubmit}>
        <h4 className="text-center mb-4">Booking Request</h4>
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
              <option vn alue="Banglore">Banglore</option>
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
          <div className="form-group d-flex p-2">
            <div>
              <label htmlFor="fromLanguage">From Language:</label>
              <select
                className="form-control w-100"
                name="fromLanguage"
                value={formData.fromLanguage}
                onChange={handleChange}
                required
              >
                <option value="">Select Lang</option>
                {languages.map(item => (
                  <option key={item.id} value={item.language}>
                    {item.language}
                  </option>
                ))}
              </select>
            </div>
            <div className="ms-5">
              <label htmlFor="toLanguage">To Language:</label>
              <select
                className="form-control w-100"
                name="toLanguage"
                value={formData.toLanguage}
                onChange={handleChange}
                required
              >

                {/* //change val  name */}
                <option value="">Select Lang</option>
                {languages.map(language => (
                  <option key={language.id} value={language.language}>
                    {language.language}
                  </option>
                ))}
              </select>
            </div>
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