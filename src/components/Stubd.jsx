import React, { useState, useEffect } from 'react';

const Stubd = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch students from backend
  useEffect(() => {
    fetch('http://localhost/students.php')
      .then(res => res.json())
      .then(data => {
        const mappedData = data.map(student => ({ ...student, accepted: false }));
        setStudents(mappedData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching students:', err);
        setLoading(false);
      });
  }, []);

  // Accept one student at a time
  const handleAccept = async (studentId) => {
    const updatedStudents = students.map(student => ({
      ...student,
      accepted: student.studentId === studentId // Only this one becomes accepted
    }));
    setStudents(updatedStudents);

    const acceptedStudent = updatedStudents.find(student => student.accepted);

    if (!acceptedStudent) return;

    try {
      const response = await fetch('http://localhost/stubd.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(acceptedStudent)
      });

      if (!response.ok) console.error('Failed to accept student:', response.statusText);
      else console.log(await response.text()); // Optional server response
    } catch (error) {
      console.error('Error sending student data:', error.message);
    }
  };

  if (loading) return <div style={{ color: '#fff', textAlign: 'center', padding: '50px' }}>Loading students...</div>;

  return (
    <div className="container">
      <h1>Available Students</h1>
      <div className="cardContainer">
        {students.map(student => (
          <div key={student.studentId} className={`card ${student.accepted ? 'accepted' : ''}`}>
            <h3>{student.name}</h3>
            <p><strong>Mobile:</strong> {student.mobileNumber}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Salary Offer:</strong> {student.salaryOffer}</p>
            <p><strong>Days Per Week:</strong> {student.dayPerWeek}</p>
            <p><strong>Location:</strong> {student.location}</p>
            <button onClick={() => handleAccept(student.studentId)}>
              {student.accepted ? 'Applied' : 'Apply'}
            </button>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container { display: flex; flex-direction: column; align-items: center; padding: 40px 20px; background: linear-gradient(135deg, #6a11cb, #2575fc); min-height: 100vh; font-family: Arial, sans-serif; }
        h1 { color: #fff; margin-bottom: 40px; font-weight: 700; }
        .cardContainer { display: flex; flex-wrap: wrap; justify-content: center; gap: 25px; }
        .card { width: 320px; border-radius: 15px; padding: 25px; background: #ffffff; box-shadow: 0 8px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.07); transition: transform 0.3s, box-shadow 0.3s; font-weight: 500; }
        .card:hover { transform: translateY(-5px); box-shadow: 0 12px 25px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.1); }
        .card.accepted { background: #d4edda; border: 1px solid #28a745; }
        .card h3 { margin-bottom: 12px; font-weight: 600; color: #007bff; }
        .card p { margin: 6px 0; color: #555; }
        .card button { margin-top: 15px; width: 100%; padding: 12px; border: none; border-radius: 10px; background-color: #007bff; color: white; font-weight: 600; cursor: pointer; transition: all 0.3s; }
        .card button:hover { background-color: #0056b3; transform: scale(1.05); }
        @media (max-width: 700px) { .card { width: 90%; } }
      `}</style>
    </div>
  );
};

export default Stubd;
