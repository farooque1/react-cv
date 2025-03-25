import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    setError(""); // Clear previous errors

    emailjs
      .send(
        "service_k6ygk66", // Replace with your EmailJS Service ID
        "template_16w4d3o", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "E4gjBz-_BagauUZCx" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" }); // Clear form after success
        },
        (error) => {
          setError("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-5 py-10">
      <h2 className="text-4xl font-bold text-blue-400 mb-6">Contact Me</h2>
      <p className="text-lg text-gray-400 mb-10 text-center">
        Feel free to reach out for collaborations or just a friendly chat!
      </p>

      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <form onSubmit={sendEmail}>
          {error && <p className="text-red-400 mb-4">{error}</p>}
          {isSent && (
            <p className="text-green-400 mb-4">Message sent successfully!</p>
          )}

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
            id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
            id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
