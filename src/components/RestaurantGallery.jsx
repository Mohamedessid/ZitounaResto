import gal1 from "/assets/images/gal1.jpg";
import gal2 from "/assets/images/gal2.jpg";
import gal3 from "/assets/images/gal3.jpg";
import gal4 from "/assets/images/gal4.jpg";
import gal5 from "/assets/images/gal5.jpg";
import gal6 from "/assets/images/gal6.jpg";

const images = [gal1, gal2, gal3, gal4, gal5, gal6];

export default function RestaurantGallery() {
    return (
      <section id="gallery" className="bg-[#0c0c0c] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Gallery Intro */}
        <div className="md:w-1/3 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-4xl font-semibold text-[#c2a774] mb-4">Restaurant Gallery</h2>
          <h1 className="text-5xl font-bold mb-4">OUR GALLERY</h1>
          <p className="text-lg italic text-gray-400 mb-6">
          
          Take a visual journey through our restaurant’s most iconic moments and dishes.
          </p>
        </div>
  
        {/* Center Section - Gallery Images */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {images.map((img, index) => (
    <div
      key={index}
      className="w-full h-[300px] bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  ))}
</div>

  
        {/* Right Section - Gallery Description */}
        <div className="md:w-1/3 text-center md:text-right mt-10 md:mt-0">
          <h2 className="text-4xl font-semibold text-[#c2a774] mb-4">Experience the Beauty</h2>
          <h1 className="text-5xl font-bold mb-4">VISUAL DELIGHT</h1>
          <p className="text-lg italic text-gray-400 mb-6">
          Perfect place for
          special events
          </p>
        </div>
      </section>
    );
  }
  