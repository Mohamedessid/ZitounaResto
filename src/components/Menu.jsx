import { useState } from "react";
import image1 from "../images/dish.jpg";
import image2 from "../images/salade.jpg";
import image3 from "../images/pasta.jpg";
import image4 from "../images/cous.jpg";
import image5 from "../images/paella.jpg";
import image6 from "../images/viande.jpg";
import image7 from "../images/chicken.jpg";
import image8 from "../images/cake.jpg";
import image9 from "../images/drink.jpg";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-black text-white font-sans">
      {/* Mobile Sidebar Toggle */}
      <div className="sm:hidden bg-[#0d0d0d] text-white p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#f1c40f]">Menu</h2>
        <button
          className="text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`w-full sm:w-1/4 bg-[#0d0d0d] text-white p-8 sm:sticky top-0 h-screen sm:h-auto sm:block ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-6">
          {[
            "LES ENTREES CHAUDES",
            "LES ENTREES FROIDS",
            "Nos Pâtes",
            "Nos Spécialités Tunisiennes",
            "Nos Spécialités",
            "ENFANTS",
            "Nos Viandes",
            "Nos Volilles",
            "Nos Desserts",
            "Nos Boissons",
          ].map((title, index) => (
            <li
              key={index}
              className="cursor-pointer text-lg font-semibold hover:text-[#f1c40f] transition duration-300"
              onClick={() => {
                setMenuOpen(false);
                document.getElementById(title)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full sm:w-3/4 p-6 sm:p-12">
        {[
          {
            title: "Les Entrées chaudes",
            items: [
              { name: "Plat de Frites", price: "6TND" },
              { name: "Brik au Thon", price: "6.5TND" },
              { name: "Brik au Fruits de Mer", price: "8.5TND" },
              { name: "Calamar Doré", price: "28TND" },
              { name: "Beignets de Crevettes", price: "33TND" },
              { name: "Gratin de Fruits de Mer", price: "35TND" },
              { name: "Poulpe en Sauce", price: "38TND" },
              { name: "Oeufs de Seiches Sautés", price: "40TND" },
              { name: "OJJA aux Fruit de Mer", price: "44TND" },
            ],
            image: image1,
          },
          {
            title: "Les Entrée Froids",
            items: [
              { name: "Salade Mechouia", price: "9.5TND" },
              { name: "Salade Variée", price: "9.5TND" },
              { name: "Salade Tunisienne", price: "9.5TND" },
              { name: "Salade César", price: "22TND" },
              { name: "Salade Tomate Mozzarella", price: "24TND" },
              { name: "Salade Fruits De Mer", price: "32TND" },
              { name: "Salade De Poulpe", price: "35TND" },
              { name: "Salade Zitouna", price: "35TND" },
            ],
            image: image2,
          },
          {
            title: "Nos Pâtes",
            items: [
              { name: "Spaghetti Bolognaise", price: "22TND" },
              { name: "Lasagne Bolognaise", price: "24TND" },
              { name: "The Crazy Chicken", price: "29TND" },
              { name: "Pâtes à la Sauce HULK", price: "28TND" },
              { name: "Tagliatelle à la Créme de Crevettes", price: "34TND" },
              { name: "Lasagne Aux Fruits De Mer", price: "35TND" },
              { name: "Pasta 'The Farme'", price: "35TND" },
              { name: "Pasta 'La Cremozza'", price: "42TND" },
              { name: "Riz aux Fruits De Mer", price: "44TND" },
              { name: "Spaghetti Fruits De Mer", price: "44TND" },
              { name: "Seafood Risotto", price: "49TND" },
              { name: "Pasta Zitouna", price: "48TND" },
            ],
            image: image3,
          },
          {
            title: "Nos Spécialités Tunisiennes",
            items: [{ name: "Poissons à La Sfaxienne", price: "24TND" },
              { name: "Couscous au Poisson", price: "24TND" },
              { name: "Spaghetti D'agneau", price: "28TND" },
              { name: "Couscous D'agneau", price: "28TND" },
              { name: "Coucha D'agneau", price: "28TND" },
              { name: "Kolla D'agneau (2PERS)", price: "75TND" },
              { name: "Kolla Fruits De Mer (2PERS)", price: "78TND" },
            ],
            image: image4,
          },
          {
            title: "Nos Spécialités",
            items: [{ name: "Duo De Filet De Poisson A la Créme", price: "28TND" },
              { name: "Duo De Filet De Poisson Pané", price: "28TND" },
              { name: "Poisson Farci", price: "38TND" },
              { name: "Cocotte de pécheur", price: "44TND" },
              { name: "Fianca zitouna", price: "44TND" },
              { name: "Symphonie Fruits De Mer", price: "44TND" },
              { name: "Paella Espagnole", price: "70TND" },
              { name: "Délices de Mer", price: "84TND" },
              { name: "Trésor Fruits De Mer Zitouna", price: "96TND" },
            ],
            image: image5,
          },
          {
            title: "ENFANTS",
            items: [{ name: "Soupe, Escalope Panée ou Grillé , Pate à la sauce blancheou sauce rouge , Cheese chicken burger+Frites, Un jus +Déssert", price: "24TND" }],
            image: image1,
          },
          {
            title: "Nos Viandes",
            items: [{ name: "Foie D'agneau Grillée", price: "33TND" },
              { name: "Grillade Mixte Royale", price: "37TND" },
              { name: "Cotelette D'agneaux Grillée", price: "38TND" },
              { name: "Filet de Veau Grillée", price: "38TND" },
              { name: "Entrecote Grillée", price: "45TND" },
              { name: "Filet de veau au choix", price: "44TND" },
              { name: "Filet de veau Zitouna", price: "38TND" },
            ],
            image: image6,
          },
          {
            title: "Nos Volilles",
            items: [{ name: "Escalope Grillée", price: "18TND" },
              { name: "Poulet Farci aux Chevrettes", price: "27TND" },
              { name: "Gratin De Poulet", price: "25TND" },
              { name: "Cordon Bleu", price: "25TND" },
              { name: "Poulet Crunshi", price: "23TND" },
              { name: "Escalope ALFREDO", price: "28TND" },
              { name: "Mixte", price: "30TND" },
            ],
            image: image7,
          },
          {
            title: "Nos Desserts",
            items: [{ name: "Sorbet de citron", price: "5TND" },
              { name: "Cheescake aux choix", price: "9.5TND" },
              { name: "Tiramisu", price: "9.5TND" },
              { name: "Fondant au chocolat", price: "7.5TND" },
              { name: "Salade de de fruits", price: "9TND" },
              { name: "Coupe de glace Zitouna", price: "7TND" },
              { name: "panier de fruits (1pers)", price: "12TND" },
            ],
            image: image8,
          },
          {
            title: "Nos Boissons",
            items: [{ name: "eua minérale pétillate", price: "4TND" },
              { name: "eua minérale Safia", price: "4TND" },
              { name: "eua minérale Gazeifiée", price: "4TND" },
              { name: "Boisson Gazeuze (canette)", price: "4.5TND" },
              { name: "Citronade", price: "6TND" },
              { name: "Jus D'orange", price: "6.5TND" },
              { name: "Mojito", price: "8.5TND" },
              { name: "Jus frais au choix", price: "9TND" },
              { name: "Café Lavazza", price: "5TND" },
              { name: "shark", price: "12TND" },

            ],
            image: image9,
          },
        ].map((section, index) => (
          <section key={index} id={section.title} className="mb-12">
            {/* Section Title */}
            <h2 className="text-3xl font-bold mb-6 text-[#f1c40f]">{section.title}</h2>

            {/* Menu Items */}
            <ul className="text-lg">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex justify-between items-center border-b border-gray-600 py-3"
                >
                  <span className="font-semibold">{item.name}</span>
                  <div className="border-t border-gray-600 mx-2 w-8"></div>
                  <span className="text-[#2f762f] font-bold">{item.price}</span>
                </li>
              ))}
            </ul>

            {/* Image Divider */}
            <div className="my-8">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
