import React, { useState } from "react";

const Index = ({ tableData, setTableData }) => {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || fullname === "" || message === "") return null;
    setTableData([...tableData, { email, fullname, message }]);
    setEmail("");
    setFullName("");
    setMessage("");
  };

  return (
    <div className="mt-16">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-8">
          <label
            htmlFor=""
            className="text-slate-500 text-sm font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            className="py-4 px-4 border rounded-lg border-slate-400"
            placeholder="John Doe"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-8">
          <label
            htmlFor=""
            className="text-slate-500 text-sm font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            className="py-4 px-4 border rounded-lg border-slate-400"
            placeholder="yourname@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-8">
          <label
            htmlFor=""
            className="text-slate-500 text-sm font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            rows="6"
            className="py-4 px-4 border rounded-lg border-slate-400"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          className="text-white font-semibold w-full bg-blue-500 py-4 px-4 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Index;
