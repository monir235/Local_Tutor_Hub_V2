import React, { useState, useEffect } from "react";

const Stubd = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [acceptedId, setAcceptedId] = useState(null);

  useEffect(() => {
    fetch("http://localhost/student.php")
      .then((res) => res.json())
      .then((data) => {
        const mappedData = data.map((item, index) => ({
          studentId: item.id || index + 1,
          ...item,
          accepted: false,
        }));
        setStudents(mappedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching student data:", err);
        setLoading(false);
      });
  }, []);

  // 👇 Auto-scroll to bottom when students are loaded
  useEffect(() => {
    if (students.length > 0) {
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }, 100); // delay ensures DOM is painted
    }
  }, [students]);

  const handleAccept = async (studentId) => {
    const acceptedStudent = students.find(
      (student) => student.studentId === studentId
    );
    if (!acceptedStudent) return;

    const updatedStudents = students.map((student) => ({
      ...student,
      accepted: student.studentId === studentId,
    }));
    setStudents(updatedStudents);
    setAcceptedId(studentId);

    try {
      const response = await fetch("http://localhost/stubd.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: acceptedStudent.studentId,
          name: acceptedStudent.name,
          email: acceptedStudent.email,
          location: acceptedStudent.location,
          school: acceptedStudent.school,
        }),
      });

      const result = await response.json();
      if (result.status !== "success") {
        console.error("Failed to accept student:", result.message);
      } else {
        alert("🎉 Student moved to accepted list successfully!");
      }
    } catch (error) {
      console.error("Error accepting student:", error.message);
    }
  };

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading students...</p>;
  }

  return (
    <div style={{ backgroundColor: "#6A0DAD", minHeight: "100vh", padding: "40px" }}>
      <h1 style={{ textAlign: "center", color: "white", marginBottom: "30px" }}>
        Available Students
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {students.map((student) => (
          <div
            key={student.studentId}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "left",
            }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>
              {student.name}
            </h3>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Location:</strong> {student.location}</p>
            <p><strong>School:</strong> {student.school}</p>

            <button
              onClick={() => handleAccept(student.studentId)}
              disabled={acceptedId !== null && acceptedId !== student.studentId}
              style={{
                marginTop: "15px",
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                fontWeight: "600",
                cursor: student.accepted ? "not-allowed" : "pointer",
                backgroundColor: student.accepted ? "#28a745" : "#007bff",
                color: "white",
              }}
            >
              {student.accepted ? "✅ Accepted" : "Apply"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stubd;
