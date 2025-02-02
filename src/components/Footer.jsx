import { FaFacebook, FaInstagram } from 'react-icons/fa'; 
import Logo from "../images/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
      <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
        <img
          className="w-40 md:w-52 h-auto object-contain transform hover:scale-105 transition duration-500"
          src={Logo}
          alt="zitouna Logo"
        />
      </div>

      <div className="w-full md:w-2/3 flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
        

        <div className="text-center md:text-left w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-[#c2a774] mb-2">Follow Us</h2>
          <div className="w-16 h-1 bg-[#c2a774] mx-auto md:mx-0 mb-4"></div>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://www.facebook.com/restaurantzitouna2" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/restaurant_zitouna2/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          
          </div>
        </div>
        <div className="text-center md:text-left w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-[#c2a774] mb-2">Contact Us</h2>
          <div className="w-16 h-1 bg-[#c2a774] mx-auto md:mx-0 mb-4"></div>
          <div className="text-gray-300">
            <p>Adresse : <span className="font-bold">Route de Soukra km 1, Sfax, Tunisie</span></p>
            <p>Téléphone : <span className="font-bold">+216 20 513 513</span></p>
          </div>
        </div>

        <div className="text-center md:text-left w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-[#c2a774] mb-2">Heures d'ouverture</h2>
          <div className="w-16 h-1 bg-[#c2a774] mx-auto md:mx-0 mb-4"></div>
          <div className="text-gray-300 mb-4">
            <p>Lundi - Vendredi : <span className="font-bold">9:00 AM - 10:00 PM</span></p>
            <p>Samedi : <span className="font-bold">10:00 AM - 11:00 PM</span></p>
            <p>Dimanche : <span className="font-bold">5:00 PM - 11:00 PM</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
