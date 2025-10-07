import React, { useState, useEffect } from 'react';

const SearchTutor = () => {
  const [tutors, setTutors] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredTutors, setFilteredTutors] = useState([]);

  useEffect(() => {
    const fetchTutorData = async () => {
      try {
        const response = await fetch(
          `https://sirajum.alwaysdata.net/localtutorhub/searchtutor.php?location=${encodeURIComponent(searchLocation)}`
        );
        if (response.ok) {
          const data = await response.json();
          setTutors(data);
        } else {
          console.error('Failed to fetch tutor information:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching tutor information:', error.message);
      }
    };

    fetchTutorData();
  }, [searchLocation]);

  useEffect(() => {
    setFilteredTutors(
      tutors.filter((tutor) =>
        tutor.location.toLowerCase().includes(searchLocation.toLowerCase())
      )
    );
  }, [searchLocation, tutors]);

  return (
    <div className="container">
      <h1>Available Tutors</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <button onClick={() => {}}>Search</button>
      </div>
      <div className="cardContainer">
        {filteredTutors.map((tutor) => (
          <div key={tutor.id} className="card">
            <h2>{tutor.name}</h2>
            <p><strong>Availability:</strong> {tutor.availability}</p>
            <p><strong>Mobile:</strong> {tutor.mobileNumber}</p>
            <p><strong>Email:</strong> {tutor.email}</p>
            <p><strong>Location:</strong> {tutor.location}</p>
            <p><strong>Institution:</strong> {tutor.institution}</p>
            <p><strong>Subject:</strong> {tutor.currentSubject}</p>
          </div>
        ))}
      </div>

      <style jsx>{`


html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.container {
  width: 100%;
  overflow-x: hidden;
}

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 50px 20px;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: #fff;
          box-sizing: border-box;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 40px;
          font-weight: 700;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
          text-align: center;
        }

        .search {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
          justify-content: center;
          width: 100%;
          max-width: 600px;
        }

        .search input {
          padding: 12px 15px;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.3);
          outline: none;
          width: 100%;
          max-width: 400px;
          font-size: 1rem;
          background: rgba(255,255,255,0.1);
          color: #fff;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .search input:focus {
          border: 1px solid #fff;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .search button {
          padding: 12px 20px;
          border-radius: 15px;
          border: none;
          background: linear-gradient(135deg, #ff758c, #ff7eb3);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          flex-shrink: 0;
          max-width: 100%;
        }

        .search button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(255, 125, 179, 0.5);
        }

        .cardContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
          width: 100%;
        }

        .card {
          width: 100%;
          max-width: 300px;
          border-radius: 25px;
          padding: 25px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          text-align: center;
          font-weight: 500;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .card h2 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          font-weight: 700;
          color: #ffd700;
          text-shadow: 1px 1px 8px rgba(0,0,0,0.3);
        }

        .card p {
          margin: 8px 0;
          font-size: 1rem;
          color: #f0f0f0;
        }

        @media (max-width: 900px) {
          .cardContainer {
            flex-direction: column;
            align-items: center;
          }

          .search {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchTutor;
