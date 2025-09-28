import React, { useState, useEffect } from "react";

const AcceptTutor = () => {
  const [acceptedTutors, setAcceptedTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAcceptedTutors = async () => {
      try {
        const response = await fetch(
          "https://paloma-nonmicroscopic-marleigh.ngrok-free.app/redox.php"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get raw text to debug what comes back
        const text = await response.text();
        console.log("Raw response from PHP:", text);

        // Try parsing JSON
        const data = JSON.parse(text);
        setAcceptedTutors(data);
      } catch (err) {
        console.error("Error fetching accepted tutor information:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAcceptedTutors();
  }, []);

  if (loading) {
    return <p style={{ color: "#fff" }}>Loading tutors...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div className="container">
      <h1>Accepted Tutors</h1>
      <div className="cardContainer">
        {acceptedTutors.length === 0 && (
          <p style={{ color: "#fff" }}>No tutors available</p>
        )}
        {acceptedTutors.map((tutor, index) => (
          <div key={index} className="card accepted">
            <h3>{tutor.name}</h3>
            <p>
              <strong>Availability:</strong> {tutor.availability}
            </p>
            <p>
              <strong>Mobile:</strong> {tutor.mobileNumber}
            </p>
            <p>
              <strong>Email:</strong> {tutor.email}
            </p>
            <p>
              <strong>Location:</strong> {tutor.location}
            </p>
            <p>
              <strong>Institution:</strong> {tutor.institution}
            </p>
            <p>
              <strong>Subject:</strong> {tutor.currentSubject}
            </p>
          </div>
        ))}
      </div>

      {/* Inline CSS for plain React */}
      <style>{`
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
          color: #333;
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
