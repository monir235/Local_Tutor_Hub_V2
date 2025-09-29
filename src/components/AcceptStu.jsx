import React, { useState, useEffect } from 'react';

const AcceptStu = () => {
  const [acceptedStudents, setAcceptedStudents] = useState([]);

  useEffect(() => {
    const fetchAcceptedStudents = async () => {
      try {
        const response = await fetch('https://paloma-nonmicroscopic-marleigh.ngrok-free.app/redol.php');
        if (response.ok) {
          const data = await response.json();
          setAcceptedStudents(data);
        } else {
          console.error('Failed to fetch accepted student information:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching accepted student information:', error.message);
      }
    };

    fetchAcceptedStudents();
  }, []);

  return (
    <div className="container">
      <h1>Accepted Students</h1>
      <div className="cardContainer">
        {acceptedStudents.length === 0 && <p style={{ color: '#fff' }}>No students available</p>}
        {acceptedStudents.map((student, index) => (
          <div key={index} className="card">
            <h3>{student.studentId}</h3>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Location:</strong> {student.location}</p>
            <p><strong>School:</strong> {student.school}</p>
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
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.1);
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

export default AcceptStu;
