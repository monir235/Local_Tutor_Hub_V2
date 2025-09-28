import React, { useState, useEffect } from 'react';

const Tinfo = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tutor data from PHP backend
  useEffect(() => {
    fetch('http://localhost/tinformation.php')
      .then(res => res.json())
      .then(data => {
        // Ensure each tutor has a tutorId
        const mappedData = data.map((item, index) => ({
          tutorId: item.id || index + 1, // use 'id' if exists, else index
          ...item,
          accepted: false
        }));
        setCards(mappedData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching tutor data:', err);
        setLoading(false);
      });
  }, []);

  // Handle accepting a tutor
  const handleAccept = async (tutorId) => {
    // Only one card can be accepted at a time
    const updatedCards = cards.map(card => ({
      ...card,
      accepted: card.tutorId === tutorId
    }));
    setCards(updatedCards);

    const acceptedTutor = updatedCards.find(card => card.tutorId === tutorId);

    if (acceptedTutor) {
      try {
        const response = await fetch('http://localhost/info.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            tutorId: acceptedTutor.tutorId,
            name: acceptedTutor.name,
            availability: acceptedTutor.availability,
            mobileNumber: acceptedTutor.mobileNumber,
            email: acceptedTutor.email,
            location: acceptedTutor.location,
            institution: acceptedTutor.institution,
            currentSubject: acceptedTutor.currentSubject,
            teachingExperience: parseInt(acceptedTutor.teachingExperience) || 0
          })
        });

        const text = await response.text();
        console.log(text); // Should print "Data inserted successfully"
      } catch (error) {
        console.error('Error sending data:', error);
      }
    }
  };

  if (loading) return <div style={{ color: '#fff', textAlign: 'center', padding: '50px' }}>Loading tutors...</div>;

  return (
    <div className="container">
      <h1>Available Tutors</h1>
      <div className="cardContainer">
        {cards.map(card => (
          <div key={card.tutorId} className={`card ${card.accepted ? 'accepted' : ''}`}>
            <h3>{card.name}</h3>
            <p><strong>Availability:</strong> {card.availability}</p>
            <p><strong>Mobile:</strong> {card.mobileNumber}</p>
            <p><strong>Email:</strong> {card.email}</p>
            <p><strong>Location:</strong> {card.location}</p>
            <p><strong>Institution:</strong> {card.institution}</p>
            <p><strong>Subject:</strong> {card.currentSubject}</p>
            <p><strong>Experience:</strong> {card.teachingExperience} years</p>
            <button onClick={() => handleAccept(card.tutorId)}>
              {card.accepted ? 'Applied' : 'Apply'}
            </button>
          </div>
        ))}
      </div>

      {/* CSS */}
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
        h1 { color: #fff; margin-bottom: 40px; font-weight: 700; }
        .cardContainer { display: flex; flex-wrap: wrap; justify-content: center; gap: 25px; }
        .card {
          width: 320px; border-radius: 15px; padding: 25px;
          background: #ffffff; box-shadow: 0 8px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.07);
          transition: transform 0.3s, box-shadow 0.3s; font-weight: 500;
        }
        .card:hover { transform: translateY(-5px); box-shadow: 0 12px 25px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.1); }
        .card.accepted { background: #d4edda; border: 1px solid #28a745; }
        .card h3 { margin-bottom: 12px; font-weight: 600; color: #007bff; }
        .card p { margin: 6px 0; color: #555; }
        .card button {
          margin-top: 15px; width: 100%; padding: 12px; border: none; border-radius: 10px;
          background-color: #007bff; color: white; font-weight: 600; cursor: pointer; transition: all 0.3s;
        }
        .card button:hover { background-color: #0056b3; transform: scale(1.05); }
        @media (max-width: 700px) { .card { width: 90%; } }
      `}</style>
    </div>
  );
};

export default Tinfo;
