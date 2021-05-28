import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="py-12 bg-black px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="cols-span-1 md:cols-span-1 flex justify-end">
          <div className="box-content w-72 pb-8 md:pb-16 pt-2 md:pt-16 pr-8 md:pr-0">
            <h3 className="bg-clip-text text-right bg-gradient-to-b from-blue-400 to-green-500 text-transparent text-5xl font-bold">Let's organise a time to chat!</h3>  
          </div>
        </div>
        <div className="cols-span-1 md:cols-span-1">
          <div className="container justify-center w-50 md:w-80 rounded-md flex box-border bg-gray-800 bg-opacity-25 mx-auto py-3 px-3">
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              <div className="py-3">
                <label className="font-medium text-gray-50" htmlFor="name">Name: </label>
                <input className="bg-white rounded-md"type="text" id="name" required />
              </div>
              <div className="py-3">
                <label className="font-medium text-gray-50" htmlFor="email">Email: </label>
                <input className="bg-white rounded-md" type="email" id="email" required />
              </div>
              <div className="py-3 align-middle">
                <label className="font-medium text-gray-50" htmlFor="message">Message: </label>
                <textarea className="bg-white w-full rounded-md min-h-25" id="message" required />
              </div>
              <button className="self-center ring ring-green-100 text-gray-50 lead border-2 rounded bg-opacity-25 py-2 px-6"type="submit">{status}</button>
            </form>
          </div>
        </div>
      </div>
    </div>  
    
  );
};

export default ContactForm;