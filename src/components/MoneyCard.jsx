import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MoneyCard = () => {
  const [totalMoney, setTotalMoney] = useState(0);
  const [totalTeachersMoney, setTotalTeachersMoney] = useState(0);
  const [acceptedStudents, setAcceptedStudents] = useState(0);
  const [acceptedTeachers, setAcceptedTeachers] = useState(0);
  const [fultotal, setfulltotal] = useState(0);

  const fixedAmount = 250; // Fixed amount for each row

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://paloma-nonmicroscopic-marleigh.ngrok-free.app/getStuaccept.php');
        const data = response.data;

        const students = data.students;
        const studentTotal = students.length * fixedAmount;
        setAcceptedStudents(students.length);
        setTotalMoney(studentTotal);

        const teachers = data.teachers;
        const teacherTotal = teachers.length * fixedAmount;
        setAcceptedTeachers(teachers.length);
        setTotalTeachersMoney(teacherTotal);

        setfulltotal(studentTotal + teacherTotal);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Financial Overview</h1>
      <div className="cardContainer">
        {/* Students Card */}
        <div className="card studentCard">
          <h2>Students Collection</h2>
          <h3>Accepted Students: {acceptedStudents}</h3>
          <h3>Total Money: {totalMoney} Taka</h3>
        </div>

        {/* Teachers Card */}
        <div className="card teacherCard">
          <h2>Teachers Collection</h2>
          <h3>Accepted Teachers: {acceptedTeachers}</h3>
          <h3>Total Money: {totalTeachersMoney} Taka</h3>
        </div>

        {/* Total Card */}
        <div className="card totalCard">
          <h2>Total Collection</h2>
          <h3>{fultotal} Taka</h3>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 50px 20px;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #fff;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 40px;
          font-weight: 700;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        }
        .cardContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }
        .card {
          width: 300px;
          padding: 30px 25px;
          border-radius: 20px;
          background: #ffffff;
          color: #333;
          font-weight: 500;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .card h2 {
          margin-bottom: 20px;
          font-size: 1.8rem;
          font-weight: 700;
        }
        .card h3 {
          margin: 12px 0;
          font-size: 1.2rem;
          font-weight: 600;
        }
        .studentCard {
          background: linear-gradient(135deg, #ff9a9e, #fad0c4);
          color: #fff;
        }
        .teacherCard {
          background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
          color: #333;
        }
        .totalCard {
          background: linear-gradient(135deg, #f6d365, #fda085);
          color: #fff;
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

export default MoneyCard;
