import React, { useState } from 'react';

const Stubd = () => {
  const [students, setStudents] = useState([
    {
      studentId: 1,
      name: 'JOY HOSSAIN JONY',
      mobileNumber: '1784336692',
      email: 'jony556@gmail.com',
      salaryOffer: '7000',
      dayPerWeek: '3',
      location: 'Bandar',
      accepted: false
  },
  {
      studentId: 2,
      name: 'SHAKIL',
      mobileNumber: '1825697458',
      email: 'sabbirbolla@gmail.com',
      salaryOffer: '5000',
      dayPerWeek: '4',
      location: 'Bandar',
      accepted: false
  },
  {
      studentId: 3,
      name: 'MOHAIMIN',
      mobileNumber: '1694586655',
      email: 'chayonayon71@gmail.com',
      salaryOffer: '7000',
      dayPerWeek: '2',
      location: 'Chandgaon',
      accepted: false
  },
  {
      studentId: 4,
      name: 'NISHAD',
      mobileNumber: '1581156784',
      email: 'sabbirhossainmonir@gmail.com',
      salaryOffer: '5000',
      dayPerWeek: '3',
      location: 'Hathazari',
      accepted: false
  },
  {
      studentId: 5,
      name: 'OMIN GUPTA',
      mobileNumber: '1224456678',
      email: 'A@gmail.com',
      salaryOffer: '4000',
      dayPerWeek: '3',
      location: 'Khulshi',
      accepted: false
  },
  {
      studentId: 6,
      name: 'MUHAMMED SHAHEEN',
      mobileNumber: '1521563405',
      email: 'muhammedshaheen27may@gmail.com',
      salaryOffer: '7000',
      dayPerWeek: '3',
      location: '2no gate',
      accepted: false
  },
  {
      studentId: 7,
      name: 'ABDUL MANNAN',
      mobileNumber: '1842634195',
      email: 'abdulmannanrafin@gmail.com',
      salaryOffer: '8000',
      dayPerWeek: '3',
      location: 'Cokhbazar',
      accepted: false
  },
  {
      studentId: 8,
      name: 'MUSTAFA',
      mobileNumber: '1234567895',
      email: 'Hossainalamgir@gmail.com',
      salaryOffer: '7000',
      dayPerWeek: '3',
      location: '2 no gate',
      accepted: false
  },
  {
      studentId: 9,
      name: 'RAJU AHMED',
      mobileNumber: '1773720851',
      email: 'Abc@gmail.com',
      salaryOffer: '5000',
      dayPerWeek: '3',
      location: 'Rangpur',
      accepted: false
  },
  {
      studentId: 10,
      name: 'FARUK',
      mobileNumber: '1868728665',
      email: 'omarmdfaruk098@gmail.com',
      salaryOffer: '5000',
      dayPerWeek: '3',
      location: 'Pahartali',
      accepted: false
  },
  {
      studentId: 11,
      name: 'SUMON',
      mobileNumber: '1912356758',
      email: 'mdshafayet171@gmail.com',
      salaryOffer: '4000',
      dayPerWeek: '4',
      location: 'chawkbazar',
      accepted: false
  },
  {
      studentId: 12,
      name: 'ABDULLAH',
      mobileNumber: '1600000000',
      email: '123@yahoo.com',
      salaryOffer: '6000',
      dayPerWeek: '3',
      location: 'Chandgaon',
      accepted: false
  },
  {
      studentId: 13,
      name: 'FAHIM',
      mobileNumber: '1789090376',
      email: 'shtasim6251@gmail.com',
      salaryOffer: '3000',
      dayPerWeek: '3',
      location: 'Pahartoli',
      accepted: false
  },
  {
      studentId: 14,
      name: 'MUNTAHA',
      mobileNumber: '1234567891',
      email: 'jkjkjk@gmail.com',
      salaryOffer: '5000',
      dayPerWeek: '3',
      location: 'Sholoshohor',
      accepted: false
  },
  {
      studentId: 15,
      name: 'NAYEEM',
      mobileNumber: '1823456789',
      email: 'nayeemnayeem@gmail.com',
      salaryOffer: '5000',
      dayPerWeek: '4',
      location: 'Nasirabad',
      accepted: false
  },
  {
      studentId: 16,
      name: 'monir',
      mobileNumber: '1234',
      email: 'monir@gmail.com',
      salaryOffer: '2000',
      dayPerWeek: '3',
      location: 'chandgaon',
      accepted: false
  },
  {
    studentId: 17,
    name: 'michel hasan',
    mobileNumber: '1784336692',
    email: 'jony556@gmail.com',
    salaryOffer: '7000',
    dayPerWeek: '3',
    location: 'Bandar',
    accepted: false
  },
  {
    studentId: 18,
    name: 'Sara Ahmed',
    mobileNumber: '1898765432',
    email: 'saraahmed@example.com',
    salaryOffer: '6000',
    dayPerWeek: '4',
    location: 'Khulshi',
    accepted: false
  },
  {
    studentId: 19,
    name: 'Ali Khan',
    mobileNumber: '1987654321',
    email: 'alikhan@example.com',
    salaryOffer: '5500',
    dayPerWeek: '3',
    location: 'Halishahar',
    accepted: false
  },
  {
    studentId: 20,
    name: 'Maria Islam',
    mobileNumber: '1876543219',
    email: 'mariaislam@example.com',
    salaryOffer: '6500',
    dayPerWeek: '5',
    location: 'Agrabad',
    accepted: false
  },
  {
    studentId: 21,
    name: 'Ahmed Rahman',
    mobileNumber: '1765432198',
    email: 'ahmedrahman@example.com',
    salaryOffer: '5000',
    dayPerWeek: '4',
    location: 'Pahartoli',
    accepted: false
  },
  {
    studentId: 22,
    name: 'Fatima Khan',
    mobileNumber: '1654321987',
    email: 'fatimakhan@example.com',
    salaryOffer: '6000',
    dayPerWeek: '3',
    location: 'Nasirabad',
    accepted: false
  },
  {
    studentId: 23,
    name: 'Hassan Ali',
    mobileNumber: '1543219876',
    email: 'hassanali@example.com',
    salaryOffer: '7000',
    dayPerWeek: '5',
    location: 'Chittagong University',
    accepted: false
  },
  {
    studentId: 24,
    name: 'Aisha Rahman',
    mobileNumber: '1432198765',
    email: 'aisharahman@example.com',
    salaryOffer: '5500',
    dayPerWeek: '3',
    location: 'Agrabad',
    accepted: false
  },
  {
    studentId: 25,
    name: 'Kamal Hussain',
    mobileNumber: '1321987654',
    email: 'kamalhussain@example.com',
    salaryOffer: '6000',
    dayPerWeek: '4',
    location: 'Halishahar',
    accepted: false
  },
  {
    studentId: 26,
    name: 'Zara Khan',
    mobileNumber: '1219876543',
    email: 'zarakhan@example.com',
    salaryOffer: '7000',
    dayPerWeek: '5',
    location: 'Pahartoli',
    accepted: false
  },
  {
    studentId: 27,
    name: 'Imran Hussain',
    mobileNumber: '1098765432',
    email: 'imranhussain@example.com',
    salaryOffer: '5000',
    dayPerWeek: '3',
    location: 'Khulshi',
    accepted: false
  },
  {
    studentId: 28,
    name: 'Sofia Ahmed',
    mobileNumber: '1987654321',
    email: 'sofiaahmed@example.com',
    salaryOffer: '6000',
    dayPerWeek: '4',
    location: 'Chittagong University',
    accepted: false
  },
  {
    studentId: 29,
    name: 'Yusuf Rahman',
    mobileNumber: '1876543210',
    email: 'yusufrahman@example.com',
    salaryOffer: '7000',
    dayPerWeek: '5',
    location: 'Halishahar',
    accepted: false
  },
  {
    studentId: 30,
    name: 'Amina Khan',
    mobileNumber: '1765432109',
    email: 'aminakhan@example.com',
    salaryOffer: '5500',
    dayPerWeek: '3',
    location: 'Nasirabad',
    accepted: false
  },
  {
    studentId: 31,
    name: 'Rahim Ali',
    mobileNumber: '1654321098',
    email: 'rahimali@example.com',
    salaryOffer: '6000',
    dayPerWeek: '4',
    location: 'Pahartoli',
    accepted: false
  },
  {
    studentId: 32,
    name: 'Laila Ahmed',
    mobileNumber: '1543210987',
    email: 'lailaahmed@example.com',
    salaryOffer: '7000',
    dayPerWeek: '5',
    location: 'Khulshi',
    accepted: false
  },
  {
    "studentId": 33,
    "name": "Tariq Rahman",
    "mobileNumber": "1432109876",
    "email": "tariqrahman@example.com",
    "salaryOffer": "6200",
    "dayPerWeek": "3",
    "location": "Chawk Bazar",
    "accepted": false
  },
  {
    "studentId": 34,
    "name": "Sara Khan",
    "mobileNumber": "1321098765",
    "email": "sarahan@example.com",
    "salaryOffer": "5800",
    "dayPerWeek": "2",
    "location": "Agrabad",
    "accepted": false
  },
  {
    "studentId": 35,
    "name": "Faisal Ahmed",
    "mobileNumber": "1210987654",
    "email": "faisal@example.com",
    "salaryOffer": "6500",
    "dayPerWeek": "4",
    "location": "Halishahar",
    "accepted": false
  },
  {
    "studentId": 36,
    "name": "Nadia Rahman",
    "mobileNumber": "1109876543",
    "email": "nadia@example.com",
    "salaryOffer": "7200",
    "dayPerWeek": "5",
    "location": "Lalkhan Bazar",
    "accepted": false
  },
  {
    "studentId": 37,
    "name": "Kamal Hasan",
    "mobileNumber": "1998765432",
    "email": "kamal@example.com",
    "salaryOffer": "5900",
    "dayPerWeek": "3",
    "location": "Chittagong Port",
    "accepted": false
  },
  {
    "studentId": 38,
    "name": "Nazia Islam",
    "mobileNumber": "1887654321",
    "email": "nazia@example.com",
    "salaryOffer": "6300",
    "dayPerWeek": "2",
    "location": "Kotwali",
    "accepted": false
  },
  {
    "studentId": 39,
    "name": "Imran Khan",
    "mobileNumber": "1776543210",
    "email": "imran@example.com",
    "salaryOffer": "6900",
    "dayPerWeek": "4",
    "location": "Muradpur",
    "accepted": false
  },
  {
    "studentId": 40,
    "name": "Sadia Ali",
    "mobileNumber": "1665432109",
    "email": "sadia@example.com",
    "salaryOffer": "7100",
    "dayPerWeek": "5",
    "location": "Chandanpura",
    "accepted": false
  },
  {
    "studentId": 41,
    "name": "Asif Ahmed",
    "mobileNumber": "1554321098",
    "email": "asif@example.com",
    "salaryOffer": "6400",
    "dayPerWeek": "3",
    "location": "GEC Circle",
    "accepted": false
  },
  {
    "studentId": 42,
    "name": "Farida Rahman",
    "mobileNumber": "1443210987",
    "email": "farida@example.com",
    "salaryOffer": "6000",
    "dayPerWeek": "2",
    "location": "Agrabad Access Road",
    "accepted": false
  },
  {
    "studentId": 43,
    "name": "Moinul Islam",
    "mobileNumber": "1332109876",
    "email": "moinul@example.com",
    "salaryOffer": "6700",
    "dayPerWeek": "4",
    "location": "Chawkbazar",
    "accepted": false
  },
  {
    "studentId": 44,
    "name": "Sultana Akter",
    "mobileNumber": "1221098765",
    "email": "sultana@example.com",
    "salaryOffer": "7300",
    "dayPerWeek": "5",
    "location": "Anderkilla",
    "accepted": false
  },
  {
    "studentId": 45,
    "name": "Nadir Hasan",
    "mobileNumber": "1110987654",
    "email": "nadir@example.com",
    "salaryOffer": "6600",
    "dayPerWeek": "3",
    "location": "Halishahar",
    "accepted": false
  },
  {
    "studentId": 46,
    "name": "Shirin Akter",
    "mobileNumber": "1098765432",
    "email": "shirin@example.com",
    "salaryOffer": "6500",
    "dayPerWeek": "2",
    "location": "Agrabad",
    "accepted": false
  },
  {
    "studentId": 47,
    "name": "Rashid Ahmed",
    "mobileNumber": "1876543210",
    "email": "rashid@example.com",
    "salaryOffer": "7000",
    "dayPerWeek": "4",
    "location": "Khulshi",
    "accepted": false
  },
  {
    "studentId": 48,
    "name": "Taslima Begum",
    "mobileNumber": "1765432109",
    "email": "taslima@example.com",
    "salaryOffer": "7200",
    "dayPerWeek": "5",
    "location": "Pahartoli",
    "accepted": false
  },
  {
    "studentId": 49,
    "name": "Ahmed Khan",
    "mobileNumber": "1654321098",
    "email": "ahmed@example.com",
    "salaryOffer": "6900",
    "dayPerWeek": "3",
    "location": "Chandanish",
    "accepted": false
  },
  {
    "studentId": 50,
    "name": "Sadia Rahman",
    "mobileNumber": "1543210987",
    "email": "sadiar@example.com",
    "salaryOffer": "6400",
    "dayPerWeek": "2",
    "location": "Hathazari",
    "accepted": false
  },
  {
    "studentId": 51,
    "name": "Imran Ali",
    "mobileNumber": "1432109876",
    "email": "imranal@example.com",
    "salaryOffer": "6800",
    "dayPerWeek": "4",
    "location": "Agrabad Access Road",
    "accepted": false
  },
  {
    "studentId": 52,
    "name": "Nadia Akter",
    "mobileNumber": "1321098765",
    "email": "nadiaa@example.com",
    "salaryOffer": "7100",
    "dayPerWeek": "5",
    "location": "Chawkbazar",
    "accepted": false
  }
    // Rest of the student data...
  ]);

  const handleAccept = async (studentId) => {
    const acceptedStudent = students.find(student => student.studentId === studentId);
    if (!acceptedStudent) return;

    const updatedStudents = students.map(student => {
      if (student.studentId === studentId) {
        return { ...student, accepted: true };
      }
      return student;
    });
    setStudents(updatedStudents);

    try {
      const response = await fetch('https://paloma-nonmicroscopic-marleigh.ngrok-free.app/stubd.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(acceptedStudent)
      });
      if (!response.ok) {
        console.error('Failed to accept student information:', response.statusText);
      }
    } catch (error) {
      console.error('Error accepting student information:', error.message);
    }
  };

  return (
  <div className="container">
    <h1>Available Students</h1>
    <div className="cardContainer">
      {students.map((student, index) => (
        <div key={index} className={`card ${student.accepted ? 'accepted' : ''}`}>
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
        transition: transform 0.3s, box-shadow 0.3s;
        font-weight: 500;
      }
      .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 25px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.1);
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
      .card button {
        margin-top: 15px;
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 10px;
        background-color: #007bff;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
      }
      .card button:hover {
        background-color: #0056b3;
        transform: scale(1.05);
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

export default Stubd;
