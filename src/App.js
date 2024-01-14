import React, { useState } from 'react';
import './style.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    aadhaarNumber: '',
    mobileNumber: '',
    panNumber: '',
  });

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation logic for each field
    let isFormValid = true;

    if (name === 'name') {
      isFormValid = /^[a-zA-Z\s]+$/.test(value); // Only letters and spaces allowed
    } else if (name === 'aadhaarNumber') {
      isFormValid = /^\d{12}$/.test(value); // Aadhaar number should be 12 digits
    } else if (name === 'mobileNumber') {
      isFormValid = /^\d{10}$/.test(value); // Mobile number should be 10 digits
    } else if (name === 'panNumber') {
      isFormValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value); // PAN number format validation
    }

    setIsValid(isFormValid);
  };

  const handleSubmit = () => {
    const isFormValid = Object.values(formData).every(
      (value) => value.length > 0
    );
    setIsValid(isFormValid);

    if (isFormValid) {
      // Process form data
    }
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Aadhaar Number:
        <input
          type="text"
          name="aadhaarNumber"
          value={formData.aadhaarNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Mobile Number:
        <input
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        PAN Number:
        <input
          type="text"
          name="panNumber"
          value={formData.panNumber}
          onChange={handleChange}
        />
      </label>

      {!isValid && <p>Please enter valid information in all fields.</p>}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MyForm;
33;
