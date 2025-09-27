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
  const [hoveredNav, setHoveredNav] = useState(null);

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

  // base button style
  const navButtonBase = {
    padding: '12px 18px',
    fontSize: '14px',
    background: 'linear-gradient(135deg, #4f46e5, #3b82f6)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    margin: '8px',
    fontWeight: '500',
    boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
    transition: 'all 0.18s ease',
  };

  const navButtonHoverStyle = {
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
  };

  const navItems = [
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
  ];

  return (
    <div
      className="App"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a, #2563eb, #60a5fa)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '140px' // reserve space for fixed footer
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
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.18)',
            width: '92%',
            maxWidth: '1100px',
          }}
        >
          {navItems.map(([page, label]) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              onMouseEnter={() => setHoveredNav(page)}
              onMouseLeave={() => setHoveredNav(null)}
              style={{
                ...navButtonBase,
                ...(hoveredNav === page ? navButtonHoverStyle : {}),
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <div style={{ flex: 1 }}>{renderPage()}</div>

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
          zIndex: 999,
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
                  transition: 'transform 0.18s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.18)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </a>
          ))}
        </div>
        <div style={{ marginTop: '12px', fontWeight: '600', fontSize: '0.95em' }}>
          © {new Date().getFullYear()} Sirajum Monir | University of Chittagong
        </div>
      </div>
    </div>
  );
}

export default App;
