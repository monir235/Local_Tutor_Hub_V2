import React, { useState } from 'react';
import Login from './components/Login';
import TeacherLogin from './components/TeacherLogin';
import SignInWithEmail from './components/SignInWithEmail';
import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import TutorForm from './components/TutorForm';
import Student from './components/Student';
import StudentForm from './components/StudentForm';
import Tutor from './components/Tutor';
import StuInfo from './components/StuInfo';
import SignIn from './components/SignIn';
import Tinfo from './components/Tinfo';
import Stubd from './components/Stubd';
import TutorLogin from './components/TutorLogin';
import Tinformation from './components/Tinformation';
import SearchTutor from './components/SearchTutor';
import SearchStu from './components/SearchStu';
import StuLogin from './components/StuLogin';
import StuInformation from './components/StuInformation';
import AcceptTutor from './components/AcceptTutor';
import AcceptStu from './components/AcceptStu';
import MoneyCard from './components/MoneyCard';

function App() {
  const [currentPage, setCurrentPage] = useState('Login'); // Default to Login page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Admin':
        return <Home />;
      case 'SignIn':
        return <SignInWithEmail />;
      case 'TeacherLogin':
        return <TeacherLogin />;
      case 'Profile':
        return <Profile onPageChange={handlePageChange} />;
      case 'Search':
        return <Search />;
      case 'TutorForm':
        return <TutorForm />;
      case 'Student':
        return <Student />;
      case 'StudentForm':
        return <StudentForm />;
      case 'Tinformation':
        return <Tinformation />;
      case 'Tutor':
        return <Tutor onPageChange={handlePageChange} />;
      case 'StuInformation':
        return <StuInformation />;
      case 'StuInfo':
        return <StuInfo onPageChange={handlePageChange} />;
      case 'Tinfo':
        return <Tinfo />;
      case 'SignIno':
        return <SignIn />;
      case 'Stubd':
        return <Stubd />;
      case 'tutorlogin':
        return <TutorLogin onPageChange={handlePageChange} />;
      case 'searchtutor':
        return <SearchTutor />;
      case 'searchstu':
        return <SearchStu />;
      case 'stulogin':
        return <StuLogin onPageChange={handlePageChange} />;
      case 'redox':
        return <AcceptTutor />;
      case 'redol':
        return <AcceptStu />;
      case 'crut':
        return <MoneyCard />;
      default:
        return <Login onPageChange={handlePageChange} />;
    }
  };

  // Button style for modern UI
  const navButtonStyle = {
    padding: '12px 18px',
    fontSize: '14px',
    background: 'linear-gradient(135deg, #4f46e5, #3b82f6)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    margin: '8px',
    fontWeight: '500',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  };

  const navButtonHover = {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
  };

  return (
    <div
      className="App"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a, #2563eb, #60a5fa)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {currentPage !== 'Login' && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '15px',
            margin: '20px auto',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
            width: '90%',
            maxWidth: '1000px',
          }}
        >
          {[
            ['Admin', 'Home'],
            ['SignIno', 'Register'],
            ['tutorlogin', 'Tutor Login'],
            ['stulogin', 'Student Login'],
            ['Profile', 'Profile'],
            ['Tinfo', 'Available Tutor'],
            ['Stubd', 'Available Student'],
            ['searchtutor', 'Search Tutor'],
            ['searchstu', 'Search Student'],
            ['redox', 'Accept Tutor'],
            ['redol', 'Accept Student'],
            ['crut', 'Collection'],
          ].map(([page, label]) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              style={navButtonStyle}
              onMouseEnter={(e) =>
                Object.assign(e.target.style, navButtonHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, navButtonStyle)
              }
            >
              {label}
            </button>
          ))}
        </div>
      )}
      <div style={{ flex: 1 }}>{renderPage()}</div>
    </div>
  );
}

export default App;
