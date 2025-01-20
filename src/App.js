import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;

    // Checking for empty fields
    // if (!username.trim()) {
    //   alert("Please fill out the Username field.");
    //   return;
    // }
    // if (!email.trim()) {
    //   alert("Please fill out the Email Address field.");
    //   return;
    // }
    // if (!phone.trim()) {
    //   alert("Please fill out the Phone Number field.");
    //   return;
    // }
    // if (!dob.trim()) {
    //   alert("Please fill out the Date of Birth field.");
    //   return;
    // }

    if (!email.includes("@")) {
      alert(
        `Please include an '@' in the email address. '${email}' is missing an '@'.`
      );
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid Phone Number. Please enter a 10-digit phone number.");
      return;
    }

    const today = new Date();
    const dobDate = new Date(dob);
    if (dobDate > today) {
      alert("Invalid date of birth. Date of Birth cannot be in the future.");
      return;
    }

    alert("Form submitted successfully!");
    closeModal();
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "600" }}>
        User Details Modal
      </h1>
      <button
        style={{
          backgroundColor: "#0384fc",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          fontSize: "1rem",
        }}
        onClick={openModal}
      >
        Open Form
      </button>
      <div className="modal" style={{ width: "400px", height: "450px" }}>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              position: "absolute",
              width: "400px",
              height: "450px",
              padding: "30px",
              margin: "0 auto",
              borderRadius: "10px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              border: "1px solid #ccc",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              backgroundColor: "#ffffff",
            },
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            Fill Details
          </h2>
          <div className="modal-content">
            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "1rem",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  required
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "1rem",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "1rem",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "1rem",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <button
                className="submit-button"
                type="submit"
                style={{
                  backgroundColor: "#0384fc",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default App;
