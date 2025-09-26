import React, { useState, useEffect } from 'react';

const SearchStu = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `https://paloma-nonmicroscopic-marleigh.ngrok-free.app/searchstu.php?location=${encodeURIComponent(searchQuery)}`
        );
        if (response.ok) {
          const data = await response.json();
          setStudents(data);
        } else {
          console.error('Failed to fetch student information:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching student information:', error.message);
      }
    };

    fetchStudentData();
  }, [searchQuery]);

  useEffect(() => {
    setFilteredStudents(
      students.filter(
        (student) =>
          student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.school.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, students]);

  return (
    <div className="container">
      <h1>Search Student by Location</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search location or school"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div className="cardContainer">
        {filteredStudents.map((student) => (
          <div key={student.id} className="card">
            <h2>{student.name}</h2>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Location:</strong> {student.location}</p>
            <p><strong>Institution:</strong> {student.school}</p>
            <p><strong>Salary Offered:</strong> 5000 Taka</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 50px 20px;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: #fff;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 40px;
          font-weight: 700;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        }
        .search {
          display: flex;
          gap: 10px;
          margin-bottom: 40px;
        }
        .search input {
          padding: 12px 15px;
          border-radius: 10px;
          border: none;
          outline: none;
          width: 300px;
          font-size: 1rem;
        }
        .search button {
          padding: 12px 20px;
          border-radius: 10px;
          border: none;
          background: #ff7e5f;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s, background 0.3s;
        }
        .search button:hover {
          background: #feb47b;
          transform: scale(1.05);
        }
        .cardContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
        }
        .card {
          width: 300px;
          border-radius: 20px;
          padding: 25px;
          background: #ffffff;
          color: #333;
          text-align: center;
          font-weight: 500;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .card h2 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          font-weight: 700;
          color: #007bff;
        }
        .card p {
          margin: 8px 0;
          font-size: 1rem;
        }
        @media (max-width: 900px) {
          .cardContainer {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchStu;
