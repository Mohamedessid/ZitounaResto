import { useState } from "react";
import Logo from '/assets/images/logo.svg';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation Submitted!");
  };

  return (
    <section className="bg-[#0c0c0c] text-white py-10 px-6 md:px-20 min-h-screen flex flex-col items-center justify-center relative">
      {/* Logo */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 ">
        <img
          src={Logo} // Replace with your logo URL or path
          alt="Logo"
          className="w-50" // Adjust size as needed
        />
      </div>

    
      
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg mt-20">
        <div className="mb-4">
          <label className="block mb-2">Nom Complet</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Téléphone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded"
          />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Heure</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Nombre de Personnes</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            min="1"
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-[#2f762f] text-white font-semibold hover:bg-green-700 transition duration-300 rounded"
        >
          Réserver Maintenant
        </button>
      </form>
    </section>
  );
}
