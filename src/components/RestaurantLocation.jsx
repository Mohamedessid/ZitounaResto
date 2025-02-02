
export default function RestaurantLocation() {
  return (
    <section id="about" className="bg-[#0c0c0c] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left Section - Logo and Description */}
      <div className="md:w-1/3 text-center md:text-left">
        <h2 className="text-4xl font-semibold text-[#c2a774] mb-4">About Restaurant</h2>
        <h1 className="text-5xl font-bold mb-4">OUR PHILOSOPHY</h1>
        <p className="text-lg italic text-gray-400 mb-6">
          A place where food, design, and ambiance come together to create a memorable experience.
        </p>
        <p className="text-gray-300 mb-4">
          Experience a unique dining atmosphere with exquisite dishes and an elegant setting.
        </p>
      </div>

      {/* Center Section - Circular Map */}
      <div className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-[#c2a774] shadow-lg">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7798.711248417198!2d10.73679820213693!3d34.73154966991361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002ccedbafed8f%3A0xd76156e00cf03a7a!2sRestaurant%20Zitouna%202!5e0!3m2!1sfr!2stn!4v1738515566266!5m2!1sfr!2stn"
          width="100%" height="100%" style={{ border: 0 }} 
          allowFullScreen loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      {/* Right Section - Opening Hours */}
      <div className="md:w-1/3 text-center md:text-right mt-10 md:mt-0">
        <h2 className="text-4xl font-semibold text-[#c2a774] mb-4">Time of Luxury</h2>
        <h1 className="text-5xl font-bold mb-4">OPENING HOURS</h1>
        <p className="text-lg italic text-gray-400 mb-6">
          Come and experience the classy atmosphere with delicious food and live music.
        </p>
        <div className="text-gray-300 text-lg">
          <p>Monday - Friday: <span className="font-bold">9:00 AM - 10:00 PM</span></p>
          <p>Saturday: <span className="font-bold">10:00 AM - 11:00 PM</span></p>
          <p>Sunday: <span className="font-bold">5:00 PM - 11:00 PM</span></p>
          <p>Holidays: <span className="font-bold text-[#c2a774]">Closed</span></p>
          <p>Happy Hour: <span className="font-bold">6:00 PM - 8:00 PM</span></p>
        </div>
      </div>
    </section>
  );
}
