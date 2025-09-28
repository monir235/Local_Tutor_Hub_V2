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
    amount: '',
    payment_option: ''
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
      const response = await fetch('http://localhost/tutor.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({
          name: '',
          availability: '',
          mobileNumber: '',
          email: '',
          location: '',
          institution: '',
          currentSubject: '',
          teachingExperience: '',
          amount: '',
          payment_option: ''
        });
        onPageChange('Tinformation');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #74ABE2, #5563DE)',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{
        backdropFilter: 'blur(15px)',
        background: 'rgba(255, 255, 255, 0.15)',
        borderRadius: '20px',
        padding: '40px',
        width: '500px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        color: '#fff'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontWeight: '600', textShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
          Fill Up the Tutor Form
        </h2>

        <form onSubmit={handleSubmit}>
          {[
            { label: 'Name', name: 'name', type: 'text' },
            { label: 'Availability', name: 'availability', type: 'text' },
            { label: 'Mobile Number', name: 'mobileNumber', type: 'tel' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Location', name: 'location', type: 'text' },
            { label: 'Institution', name: 'institution', type: 'text' },
            { label: 'Current Subject', name: 'currentSubject', type: 'text' },
            { label: 'Teaching Experience', name: 'teachingExperience', type: 'text' }
          ].map(field => (
            <div key={field.name} style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>{field.label}:</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: '12px',
                  border: 'none',
                  outline: 'none',
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  fontSize: '16px',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)',
                  transition: '0.3s'
                }}
              />
            </div>
          ))}

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Amount:</label>
            <select
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                borderRadius: '12px',
                border: 'none',
                outline: 'none',
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#fff',
                fontSize: '16px',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)',
                transition: '0.3s'
              }}
            >
              <option value="">Select Amount</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="500">500</option>
            </select>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Payment Option:</label>
            <select
              name="payment_option"
              value={formData.payment_option}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                borderRadius: '12px',
                border: 'none',
                outline: 'none',
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#fff',
                fontSize: '16px',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)',
                transition: '0.3s'
              }}
            >
              <option value="">Select Payment Option</option>
              <option value="Bikash">Bikash</option>
              <option value="Nagad">Nagad</option>
              <option value="Rocket">Rocket</option>
            </select>
          </div>

          <button type="submit" style={{
            width: '100%',
            padding: '15px',
            borderRadius: '12px',
            border: 'none',
            fontWeight: '600',
            fontSize: '16px',
            cursor: 'pointer',
            color: '#fff',
            background: 'linear-gradient(45deg, #5563DE, #74ABE2)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: '0.3s'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TutorForm;
