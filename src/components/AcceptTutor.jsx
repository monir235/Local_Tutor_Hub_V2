import React, { useState, useEffect } from 'react';

const AcceptTutor = () => {
  const [acceptedTutors, setAcceptedTutors] = useState([]);

  useEffect(() => {
    const fetchAcceptedTutors = async () => {
      try {
        const response = await fetch('https://paloma-nonmicroscopic-marleigh.ngrok-free.app/redox.php');
        if (response.ok) {
          const data = await response.json();
          setAcceptedTutors(data);
        } else {
          console.error('Failed to fetch accepted tutor information:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching accepted tutor information:', error.message);
      }
    };

    fetchAcceptedTutors();
  }, []);

  return (
    <div className="container">
      <h1>Accepted Tutors</h1>
      <div className="cardContainer">
        {acceptedTutors.map((tutor, index) => (
          <div key={index} className="card accepted">
            <h3>{tutor.name}</h3>
            <p><strong>Availability:</strong> {tutor.availability}</p>
            <p><strong>Mobile:</strong> {tutor.mobileNumber}</p>
            <p><strong>Email:</strong> {tutor.email}</p>
            <p><strong>Location:</strong> {tutor.location}</p>
            <p><strong>Institution:</strong> {tutor.institution}</p>
            <p><strong>Subject:</strong> {tutor.currentSubject}</p>
            <p><strong>Experience:</strong> {tutor.teachingExperience} years</p>
            {tutor.additionalInfo && <p>{tutor.additionalInfo}</p>}
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
          font-weight: 500;
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
        @media (max-width: 700px) {
          .card {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default AcceptTutor;
