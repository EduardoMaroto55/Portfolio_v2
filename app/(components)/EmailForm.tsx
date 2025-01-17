"use client";
import React, { useState, ChangeEvent } from "react";

interface FormData {
  name: string;
  to: string;
  subject: string;
  html: string;
}

const initialFormData: FormData = {
  name: "",
  to: "",
  subject: "",
  html: "",
};

const EmailForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await fetch("/api/Mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

    
      setFormData({
        name: "",
        to: "",
        subject: "",
        html: "",
      });
      alert("Email Sent");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <form
      className="flex flex-col bg-white rounded-xl shadow-2xl p-10 w-full mr-auto ml-auto gap-2"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={handleChange}
        value={formData.name}
        required={true}
        className="m-2 p-1 bg-slate-200 rounded"
      ></input>
      <label htmlFor="to">Email</label>
      <input
        id="to"
        name="to"
        type="email"
        onChange={handleChange}
        value={formData.to}
        required={true}
        className="m-2 p-1 bg-slate-200 rounded"
      ></input>
      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        name="subject"
        type="text"
        onChange={handleChange}
        value={formData.subject}
        required={true}
        className="m-2 p-1 bg-slate-200 rounded"
      ></input>
      <label htmlFor="html">Message</label>
      <textarea
        id="html"
        name="html"
        required={true}
        rows={6}
        onChange={handleChange}
        value={formData.html}
        className="m-2 bg-slate-200 rounded"
      ></textarea>
      <input
        type="submit"
        value="Submit Message"
        className="bg-blue-300  text-white mt-10 cursor-pointer hover:bg-blue-500  py-5"
      ></input>
    </form>
  );
};

export default EmailForm;
