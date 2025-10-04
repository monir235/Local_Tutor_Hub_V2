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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setDrawerOpen(false); // auto-close drawer after selection
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
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        style={{
          position: "fixed",
          top: "15px",
          right: "15px",
          zIndex: 1100,
          background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
          border: "none",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {"≡"}
      </button>

      {/* Full Top Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: drawerOpen ? "100%" : "0",
          transition: "height 0.4s ease",
          background: "rgba(0,0,0,0.9)",
          overflow: "hidden",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {navItems.map(([page, label, icon]) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              margin: "12px 0",
              padding: "12px 20px",
              fontSize: "18px",
              fontWeight: "600",
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
              gap: "12px",
            }}
          >
            {React.cloneElement(icon, { size: 24 })}
            {label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "80px 20px" }}>{renderPage()}</div>
    </div>
  );
}

export default App;
