import React, { useState } from 'react';

const TutorForm = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    availability: '',
    mobileNumber: '',
    email: '',
    location: '',
    institution: '',
    currentSubject: '',
    teachingExperience: '',
   
  });

  const [focusedInput, setFocusedInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Only send the fields that exist in the database
    const backendData = {
      name: formData.name,
      availability: formData.availability,
      mobileNumber: formData.mobileNumber,
      email: formData.email,
      location: formData.location,
      institution: formData.institution,
      currentSubject: formData.currentSubject,
      teachingExperience: formData.teachingExperience
    };

    try {
      const response = await fetch('http://localhost/tutor.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(backendData),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok && result.status === "success") {
        setFormData({
          name: '',
          availability: '',
          mobileNumber: '',
          email: '',
          location: '',
          institution: '',
          currentSubject: '',
          teachingExperience: '',
          
        });
        onPageChange('Tinformation');
      } else {
        console.error('Form submission failed:', result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    outline: 'none',
    transition: '0.3s',
    fontSize: '15px',
    marginBottom: '20px',
    fontWeight: '500'
  };

  const inputFocusStyle = {
    border: '1px solid #007bff',
    boxShadow: '0 0 8px rgba(0,123,255,0.4)'
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    cursor: 'pointer'
  };

  const buttonStyle = {
    width: '100%',
    padding: '14px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: '0.3s'
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '50px 20px',
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        padding: '40px',
        borderRadius: '15px',
        backgroundColor: '#fff',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#007bff', fontWeight: '700' }}>Tutor Registration Form</h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
            { label: 'Availability', name: 'availability', type: 'text', placeholder: 'YES/NO' },
            { label: 'Mobile Number', name: 'mobileNumber', type: 'tel', placeholder: '+8801234567890' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'example@mail.com' },
            { label: 'Location', name: 'location', type: 'text', placeholder: 'City or Area' },
            { label: 'Institution', name: 'institution', type: 'text', placeholder: 'Your current institution' },
            { label: 'Current Subject', name: 'currentSubject', type: 'text', placeholder: 'Subject you teach' },
            { label: 'Teaching Experience', name: 'teachingExperience', type: 'text', placeholder: 'e.g., 2 years' },
          ].map((field, idx) => (
            <div key={idx}>
              <label style={{ fontWeight: '600', display: 'block', marginBottom: '5px', color: '#333' }}>{field.label}:</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                placeholder={field.placeholder}
                onChange={handleChange}
                required
                style={{
                  ...inputStyle,
                  ...(focusedInput === field.name ? inputFocusStyle : {})
                }}
                onFocus={() => setFocusedInput(field.name)}
                onBlur={() => setFocusedInput('')}
              />
            </div>
          ))}

          <div>
            <label style={{ fontWeight: '600', display: 'block', marginBottom: '5px', color: '#333' }}>Amount (Optional):</label>
            <select
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              style={selectStyle}
              onFocus={() => setFocusedInput('amount')}
              onBlur={() => setFocusedInput('')}
            >
              <option value="">Select Amount</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="400">400</option>
              <option value="500">1000</option>
            </select>
          </div>

          <div>
            <label style={{ fontWeight: '600', display: 'block', marginBottom: '5px', color: '#333' }}>Payment Option (Optional):</label>
            <select
              name="payment_option"
              value={formData.payment_option}
              onChange={handleChange}
              style={selectStyle}
              onFocus={() => setFocusedInput('payment_option')}
              onBlur={() => setFocusedInput('')}
            >
              <option value="">Select Payment Option</option>
              <option value="Bikash">Bikash</option>
              <option value="Nagad">Nagad</option>
              <option value="Rocket">Rocket</option>
            </select>
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#007bff'}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TutorForm;
