import React from "react";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <main
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h1>Contact Us</h1>
        <p>If you have any questions, reach out to us at:</p>
        <ul>
          <li>Email: support@quickeats.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Hours: Mon–Fri, 10am–6pm</li>
        </ul>
      </main>
    </>
  );
}

export default Contact;
