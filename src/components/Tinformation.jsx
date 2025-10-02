import React, { useState, useEffect } from 'react';

const Tinformation = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutorData = async () => {
      try {
        const response = await fetch('https://sirajum.alwaysdata.net/localtutorhub/tinformation.php');
        if (response.ok) {
          const data = await response.json();
          setTutors(data); // Assuming the response is an array of tutor objects with the specified attributes
        } else {
          console.error('Failed to fetch tutor information:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching tutor information:', error.message);
      }
    };

    fetchTutorData();
  }, []);

  const handleAccept = async (tutorId) => {
    try {
      const acceptedTutor = tutors.find((tutor) => tutor.id === tutorId);
      if (!acceptedTutor) {
        console.error('Tutor not found.');
        return;
      }
  
      const response = await fetch('https://paloma-nonmicroscopic-marleigh.ngrok-free.app/acceptTutor.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(acceptedTutor)
      });
  
      if (response.ok) {
        console.log('Tutor information accepted successfully!');
        setTutors(tutors.filter((tutor) => tutor.id !== tutorId)); // Remove the accepted tutor
      } else {
        console.error('Failed to accept tutor information:', response.statusText);
      }
    } catch (error) {
      console.error('Error accepting tutor information:', error.message);
    }
  };

  return (
    <div className="container">
      <h1>Available </h1>
      <div className="cardContainer">
        {tutors.map((tutor, index) => (
          <div key={index} className={`card ${tutor.accepted ? 'accepted' : ''}`}>
            <h3>{tutor.name}</h3>
            <p><strong>Availability:</strong> {tutor.availability}</p>
            <p><strong>Mobile:</strong> {tutor.mobileNumber}</p>
            <p><strong>Email:</strong> {tutor.email}</p>
            <p><strong>Location:</strong> {tutor.location}</p>
            <p><strong>Institution:</strong> {tutor.institution}</p>
            <p><strong>Subject:</strong> {tutor.currentSubject}</p>
            <p><strong>Experience:</strong> {tutor.teachingExperience} years</p>
            <button onClick={() => handleAccept(tutor.id)}>
              {tutor.accepted ? 'Applied' : 'Apply'}
            </button>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #fff;
          margin-bottom: 40px;
          font-weight: 700;
        }
        .cardContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
        }
        .card {
          width: 320px;
          border-radius: 15px;
          padding: 25px;
          background: #ffffff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.07);
          transition: transform 0.3s, box-shadow 0.3s;
          font-weight: 500;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.1);
        }
        .card.accepted {
          background: #d4edda;
          border: 1px solid #28a745;
        }
        .card h3 {
          margin-bottom: 12px;
          font-weight: 600;
          color: #007bff;
        }
        .card p {
          margin: 6px 0;
          color: #555;
        }
        .card button {
          margin-top: 15px;
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 10px;
          background-color: #007bff;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .card button:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }
        @media (max-width: 700px) {
          .card {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default Tinformation;
