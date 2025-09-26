import React, { useState, useEffect } from 'react';

const StuInformation = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch('https://paloma-nonmicroscopic-marleigh.ngrok-free.app/students.php');
        if (response.ok) {
          const data = await response.json();
          setStudents(data); // Array of student objects
        } else {
          console.error('Failed to fetch student information:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching student information:', error.message);
      }
    };

    fetchStudentData();
  }, []);

  return (
    <div style={styles.background}>
      <h1 style={styles.header}>Student Information</h1>
      <div style={styles.cardContainer}>
        {students.map((student) => (
          <div key={student.id} style={styles.card}>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Location:</strong> {student.location}</p>
            <p><strong>Institution:</strong> {student.school}</p>
            <p><strong>Salary Offered:</strong> 5000</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  background: {
    minHeight: '100vh',
    padding: '50px 20px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    color: '#fff',
    fontSize: '2.5rem',
    marginBottom: '40px',
    fontWeight: '700',
    textAlign: 'center',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '25px',
  },
  card: {
    width: '300px',
    padding: '25px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(15px)',
    color: '#fff',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.35)',
  }
};

export default StuInformation;
