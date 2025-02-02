import { useState } from "react";

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
          {["LES ENTREES CHAUDES", "LES ENTREES FROIDS", "Nos Pâtes", "Nos Spécialités Tunisiennes", "Nos Spécialités", "ENFANTS", "Nos Viandes", "Nos Volilles", "Nos Desserts", "Nos Boissons"].map((title, index) => (
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
            image: "/assets/images/dish.jpg",
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
            image: "/assets/images/salade.jpg",
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
            image: "/assets/images/pasta.jpg",
          },
          {
            title: "Nos Spécialités Tunisiennes",
            items: [
              { name: "Poissons à La Sfaxienne", price: "24TND" },
              { name: "Couscous au Poisson", price: "24TND" },
              { name: "Spaghetti D'agneau", price: "28TND" },
              { name: "Couscous D'agneau", price: "28TND" },
              { name: "Coucha D'agneau", price: "28TND" },
              { name: "Kolla D'agneau (2PERS)", price: "75TND" },
              { name: "Kolla Fruits De Mer (2PERS)", price: "78TND" },
            ],
            image: "/assets/images/cous.jpg",
          },
        ].map((section, index) => (
          <section key={index} id={section.title} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#f1c40f]">{section.title}</h2>
            <ul className="text-lg">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex justify-between items-center border-b border-gray-600 py-3">
                  <span className="font-semibold">{item.name}</span>
                  <div className="border-t border-gray-600 mx-2 w-8"></div>
                  <span className="text-[#2f762f] font-bold">{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="my-8">
              <img src={section.image} alt={section.title} className="w-full h-32 object-cover rounded-lg shadow-lg" />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
