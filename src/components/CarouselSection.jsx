import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom"; // Import Link for routing

// Image URLs from the public/assets/images folder
const images = [
  "/assets/images/dish1.jpg",
  "/assets/images/dish2.jpg",
  "/assets/images/dish3.jpg",
  "/assets/images/dish4.jpg",
];

export default function CarouselSection() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to cycle through images with a transition
  const changeImage = () => {
    gsap.to(".background", { opacity: 1, duration: 2, onComplete: () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      gsap.fromTo(".background", { opacity: 0.5 }, { opacity: 1, duration: 1 });
    }});
  };

  useEffect(() => {
    const interval = setInterval(() => changeImage(), 3000); // Change image every 3 seconds

    // Animation for title and text
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" }
    );

    return () => clearInterval(interval); // Clear interval on cleanup
  }, []);

  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center bg-black text-white px-6"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Background image with transition */}
      <div
        className="absolute inset-0 background"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Title & Description */}
      <div className="relative text-center z-10">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold">
          Des plats Unique <br /> une ambiance magique
        </h2>
        <p ref={textRef} className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Découvrez notre menu ! Des plats frais et savoureux pour tous les goûts. Laissez-vous tenter et régalez-vous. Bon appétit ! 🍽️
        </p>
        <br />
        {/* Button to lead to the menu */}
        <Link
          to="/menu"
          className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-full text-lg hover:bg-[#2f762f] hover:text-white transition duration-300"
        >
          View Menu
        </Link>
      </div>
    </section>
  );
}
