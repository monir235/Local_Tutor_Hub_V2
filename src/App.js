import React, { useState } from 'react';
import TeacherLogin from './components/TeacherLogin';
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
  const [currentPage, setCurrentPage] = useState('Admin');

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'Admin':
        return <Home />;
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
        return <Home />;
    }
  };

  // Modern nav button style
  const navButtonStyle = {
    padding: '12px 20px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#fff',
    background: 'linear-gradient(135deg, #4f46e5, #3b82f6)',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    margin: '6px',
    transition: 'all 0.4s ease',
    boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
  };

  const navButtonHover = {
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.35)',
    background: 'linear-gradient(135deg, #3b82f6, #4f46e5)',
  };

  return (
    <div
      className="App"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #1e3a8a, #2563eb, #60a5fa)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Navigation */}
      {currentPage !== 'Login' && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            padding: '20px',
            margin: '20px auto',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(15px)',
            borderRadius: '25px',
            boxShadow: '0 12px 36px rgba(0,0,0,0.25)',
            maxWidth: '1000px',
            width: '90%',
            transition: 'all 0.3s ease',
          }}
        >
          {[
            ['Admin', 'Home'],
            ['SignIno', 'Register'],
            ['tutorlogin', 'Tutor Login'],
            ['stulogin', 'Student Login'],
            ['Profile', 'Profile'],
            ['searchtutor', 'Available Tutor'],
            ['searchstu', 'Available Student'],
            ['redox', 'Accepted Tutor'],
            ['redol', 'Accepted Student'],
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

      {/* Page Content */}
      <div
        style={{
          flex: 1,
          width: '100%',
          maxWidth: '1200px',
          marginTop: '10px',
          transition: 'all 0.3s ease',
        }}
      >
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
