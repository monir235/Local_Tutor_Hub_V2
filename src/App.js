import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaSearch,
  FaUsers,
  FaCheckCircle,
  FaMoneyBill,
  
  FaUserPlus,
} from "react-icons/fa";

import TeacherLogin from "./components/TeacherLogin";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Search from "./components/Search";
import TutorForm from "./components/TutorForm";
import Student from "./components/Student";
import StudentForm from "./components/StudentForm";
import Tutor from "./components/Tutor";
import StuInfo from "./components/StuInfo";
import SignIn from "./components/SignIn";
import Tinfo from "./components/Tinfo";
import Stubd from "./components/Stubd";
import TutorLogin from "./components/TutorLogin";
import Tinformation from "./components/Tinformation";
import SearchTutor from "./components/SearchTutor";
import SearchStu from "./components/SearchStu";
import StuLogin from "./components/StuLogin";
import StuInformation from "./components/StuInformation";
import AcceptTutor from "./components/AcceptTutor";
import AcceptStu from "./components/AcceptStu";
import MoneyCard from "./components/MoneyCard";

function App() {
  const [currentPage, setCurrentPage] = useState("Admin");
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setDrawerOpen(drawerOpen); // keep drawer state
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Admin":
        return <Home />;
      case "TeacherLogin":
        return <TeacherLogin />;
      case "Profile":
        return <Profile onPageChange={handlePageChange} />;
      case "Search":
        return <Search />;
      case "TutorForm":
        return <TutorForm />;
      case "Student":
        return <Student />;
      case "StudentForm":
        return <StudentForm />;
      case "Tinformation":
        return <Tinformation />;
      case "Tutor":
        return <Tutor onPageChange={handlePageChange} />;
      case "StuInformation":
        return <StuInformation />;
      case "StuInfo":
        return <StuInfo onPageChange={handlePageChange} />;
      case "Tinfo":
        return <Tinfo />;
      case "SignIno":
        return <SignIn />;
      case "Stubd":
        return <Stubd />;
      case "tutorlogin":
        return <TutorLogin onPageChange={handlePageChange} />;
      case "searchtutor":
        return <SearchTutor />;
      case "searchstu":
        return <SearchStu />;
      case "stulogin":
        return <StuLogin onPageChange={handlePageChange} />;
      case "redox":
        return <AcceptTutor />;
      case "redol":
        return <AcceptStu />;
      case "crut":
        return <MoneyCard />;
      default:
        return <Home />;
    }
  };

  const navItems = [
    ["Admin", "Home", <FaHome />],
    ["SignIno", "Register", <FaUserPlus />],
    ["tutorlogin", "Tutor Login", <FaChalkboardTeacher />],
    ["stulogin", "Student Login", <FaUserGraduate />],
    ["Profile", "Profile", <FaUser />],
    ["searchtutor", "Available Tutor", <FaSearch />],
    ["searchstu", "Available Student", <FaUsers />],
    ["redox", "Accepted Tutor", <FaCheckCircle />],
    ["redol", "Accepted Student", <FaCheckCircle />],
    ["crut", "Collection", <FaMoneyBill />],
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(145deg, #1e3a8a, #2563eb, #60a5fa)",
        display: "flex",
        flexDirection: "row",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Drawer */}
      <div
        style={{
          width: drawerOpen ? "220px" : "70px",
          transition: "all 0.3s ease",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(15px)",
          boxShadow: "4px 0 15px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: drawerOpen ? "flex-start" : "center",
          padding: "20px 10px",
          overflow: "hidden",
        }}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          style={{
            background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
            border: "none",
            color: "#fff",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "20px",
            width: "100%",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {"≡"}
        </button>

        {/* Navigation Items */}
        {navItems.map(([page, label, icon]) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              padding: "12px 15px",
              margin: "8px 0",
              fontSize: "14px",
              fontWeight: "600",
              textAlign: drawerOpen ? "left" : "center",
              width: "100%",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              color: "#fff",
              background:
                currentPage === page
                  ? "linear-gradient(135deg, #3b82f6, #4f46e5)"
                  : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: drawerOpen ? "flex-start" : "center",
              gap: drawerOpen ? "12px" : "0",
              transition: "all 0.3s ease",
            }}
          >
            {React.cloneElement(icon, { size: 22, flexShrink: 2 })}
            {drawerOpen && label}
          </button>
        ))}
      </div>

      {/* Main Page Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
          transition: "all 0.3s ease",
        }}
      >
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
