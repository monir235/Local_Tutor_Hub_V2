import React, { useState } from 'react';

const TutorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    availability: '',
    mobileNumber: '',
    email: '',
    location: '',
    institution: '',
    currentSubject: '',
    teachingExperience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://paloma-nonmicroscopic-marleigh.ngrok-free.app/tutor.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        setFormData({
          name: '',
          availability: '',
          mobileNumber: '',
          email: '',
          location: '',
          institution: '',
          currentSubject: '',
          teachingExperience: ''
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 15px',
    marginTop: '5px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    outline: 'none',
    transition: '0.3s',
    fontSize: '14px'
  };

  const inputFocusStyle = {
    border: '1px solid #007bff',
    boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: '0.3s'
  };

  const [focusedInput, setFocusedInput] = useState('');

  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#007bff' }}>Tutor Registration</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
          { label: 'Availability', name: 'availability', type: 'text', placeholder: 'e.g., Mon-Fri, 3-6 PM' },
          { label: 'Mobile Number', name: 'mobileNumber', type: 'tel', placeholder: '+8801234567890' },
          { label: 'Email', name: 'email', type: 'email', placeholder: 'example@mail.com' },
          { label: 'Location', name: 'location', type: 'text', placeholder: 'City or Area' },
          { label: 'Institution', name: 'institution', type: 'text', placeholder: 'Your current institution' },
          { label: 'Current Subject', name: 'currentSubject', type: 'text', placeholder: 'Subject you teach' },
          { label: 'Teaching Experience', name: 'teachingExperience', type: 'text', placeholder: 'e.g., 2 years' },
        ].map((field, index) => (
          <div key={index}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>{field.label}:</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
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
  );
};

export default TutorForm;
