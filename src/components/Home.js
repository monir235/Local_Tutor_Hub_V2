import React, { useState } from 'react';

function Home() {
  const [hoveredCard, setHoveredCard] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const cardStyle = (cardName) => ({
    width: '330px',
    margin: '15px',
    textAlign: 'center',
    background: hoveredCard === cardName
      ? 'linear-gradient(135deg, #3b82f6, #60a5fa)'
      : 'linear-gradient(135deg, #93c5fd, #bfdbfe)',
    color: '#1e3a8a',
    cursor: 'pointer',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    transform: hoveredCard === cardName ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hoveredCard === cardName
      ? '0 12px 25px rgba(0,0,0,0.25)'
      : '0 6px 15px rgba(0,0,0,0.1)',
  });

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  };

  const tutorInfoCardStyle = {
    ...cardStyle('tutorInfoCard'),
    width: '600px',
    padding: '25px',
    textAlign: 'left',
  };

  const bookingListData = ["1. Sirajum Monir", "2. Raiqul Islam", "3. Rishad Hossain"];
  const assignTeacherListData = ["1. Sabbir Hossain", "2. Rakib Islam", "3. Sadman Hasan"];
  const studentListData = ["1. Mohaimin", "2. Nishad", "3. Omin Gupta"];

  const tutorInfoData = [
    { name: 'Sirajum Monir', email: 'monir@gmail.com', contact_number: '1234567890', address: 'Chittagong', university: 'CU', department: 'CSE', semester: '3' },
    { name: 'Raiqul Islam', email: 'raiqul@gmail.com', contact_number: '9876543210', address: 'Chittagong', university: 'CU', department: 'CSE', semester: '4' },
    { name: 'Rishad Hossain', email: 'rishad@gmail.com', contact_number: '4567890123', address: 'Chittagong', university: 'CU', department: 'CSE', semester: '5' }
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredResults = tutorInfoData.filter((tutor) =>
        tutor.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '130px',
        fontFamily: 'Inter, sans-serif',
        background: 'linear-gradient(120deg, #e0f2fe, #f0f9ff, #dbeafe)',
        minHeight: '100vh',
      }}
    >
      {/* Card Section */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '40px' }}>
        {/* Assign Teacher List */}
        <div
          style={cardStyle('assignTeacherList')}
          onMouseEnter={() => setHoveredCard('assignTeacherList')}
          onMouseLeave={() => setHoveredCard('')}
        >
          <img src="/bolla.jpg" alt="Assign Teacher List" style={imageStyle} />
          <h2 style={{ fontWeight: '700', fontSize: '1.3em', margin: '15px 0' }}>Assign Teacher List</h2>
          {assignTeacherListData.map((name, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>{name}</div>
          ))}
        </div>

        {/* Student List */}
        <div
          style={cardStyle('studentList')}
          onMouseEnter={() => setHoveredCard('studentList')}
          onMouseLeave={() => setHoveredCard('')}
        >
          <img src="/student.jpg" alt="Student List" style={imageStyle} />
          <h2 style={{ fontWeight: '700', fontSize: '1.3em', margin: '15px 0' }}>Student List</h2>
          {studentListData.map((name, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>{name}</div>
          ))}
        </div>

        {/* Booking List */}
        <div
          style={cardStyle('bookingList')}
          onMouseEnter={() => setHoveredCard('bookingList')}
          onMouseLeave={() => setHoveredCard('')}
        >
          <img src="/booking.jpeg" alt="Booking List" style={imageStyle} />
          <h2 style={{ fontWeight: '700', fontSize: '1.3em', margin: '15px 0' }}>Booking List</h2>
          {bookingListData.map((name, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>{name}</div>
          ))}
        </div>
      </div>

      {/* Search Tutor */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="🔍 Search for tutors..."
          style={{
            padding: '14px 20px',
            borderRadius: '35px',
            border: '1px solid #d1d5db',
            width: '320px',
            boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
            fontSize: '1em',
            outline: 'none',
            transition: 'all 0.3s ease',
          }}
        />
      </div>

      {/* Tutor Info */}
      {searchResults.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <div
            style={tutorInfoCardStyle}
            onMouseEnter={() => setHoveredCard('tutorInfoCard')}
            onMouseLeave={() => setHoveredCard('')}
          >
            <h2 style={{ marginBottom: '20px', fontSize: '1.6em', fontWeight: '800', color: '#1e40af' }}>
              Tutor Information
            </h2>
            {searchResults.map((tutor, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '20px',
                  padding: '15px 20px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '15px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                <h3 style={{ marginBottom: '8px', fontSize: '1.2em', color: '#1e3a8a' }}>{tutor.name}</h3>
                <p>Email: {tutor.email}</p>
                <p>Contact: {tutor.contact_number}</p>
                <p>Address: {tutor.address}</p>
                <p>University: {tutor.university}</p>
                <p>Department: {tutor.department}</p>
                <p>Semester: {tutor.semester}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          background: 'rgba(30, 58, 138, 0.95)',
          color: '#ffffff',
          textAlign: 'center',
          padding: '20px',
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          boxShadow: '0 -6px 15px rgba(0,0,0,0.25)',
        }}
      >
        <div>
          {[
            { href: "https://www.facebook.com/sirajummonir.monir.5", src: "/fb1.png", alt: "Facebook" },
            { href: "https://twitter.com/ayon_chayo33456", src: "/twitter.jpeg", alt: "Twitter" },
            { href: "https://www.instagram.com/monir_chayon/", src: "/insta.jpeg", alt: "Instagram" },
            { href: "https://github.com/monir235", src: "/git.png", alt: "GitHub" },
            { href: "https://web.cu.ac.bd/v2/", src: "/Culogo.jpeg", alt: "CU" },
          ].map((icon, index) => (
            <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
              <img
                src={icon.src}
                alt={icon.alt}
                style={{
                  width: '35px',
                  height: '35px',
                  margin: '0 10px',
                  borderRadius: '50%',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />
            </a>
          ))}
        </div>
        <div style={{ marginTop: '12px', fontWeight: '600', fontSize: '0.9em' }}>
          © 2024 Sirajum Monir | University of Chittagong
        </div>
      </div>
    </div>
  );
}

export default Home;
