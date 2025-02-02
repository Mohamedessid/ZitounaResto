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
          <div className="w-full h-[300px] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/451662301_990764066179087_8089958847794627682_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ABQ67Tn_OYkQ7kNvgGhTfMf&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AYTryTxKHZkYcOuzlW30EAl&oh=00_AYCUxpakLMsS_5nFNWJV3CkXhdHkKybNiTClCmjF2uUHhw&oe=67A56F62')" }}></div>
          <div className="w-full h-[300px] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/450587130_987147303207430_4637862343402365410_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eD3ukrQ9vrcQ7kNvgH0VVwi&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=A2Id2m9kCPlwZE2TwKtt8Qh&oh=00_AYCe48Z2p05UPbzqQGtgk3YY0iWXNbcDoZNTncV0t3OlIg&oe=67A5885E')" }}></div>
          <div className="w-full h-[300px] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/450502810_985743866681107_1840927263390374474_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=N-v2jUEqMG8Q7kNvgGPdvUb&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AcxX6Oj9pLLNoJnA8UBbPCI&oh=00_AYBYgdWXJH9MnHso_kDzL9vco_oNxiYNEHaI6K2Ab7_KHQ&oe=67A58F4A')" }}></div>
          <div className="w-full h-[300px] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/448692834_972467344675426_5608028367845702343_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UoacJPX8RM4Q7kNvgF53gww&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=A4ZjldKsqXUjFUsH2tWCPJ9&oh=00_AYB2inBR8AvsBcWhMERJfBskg2z6K6Y8DQVWjct21Udltg&oe=67A59136')" }}></div>
          <div className="w-full h-[300px] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/448522561_972466601342167_3263906012636265627_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yg-UqfABvjIQ7kNvgFPaKfX&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=ASQN63KeHO7vn4YpcqNOR3g&oh=00_AYDjt2G4VwNAwDlkZArcYaRo_x1yRAlBFVlvVg_pGrBKow&oe=67A57AE8')" }}></div>
          <div className="w-full h-[300px] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/448635120_972466031342224_6531621819744468239_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Y2pCdH3pFo0Q7kNvgEVMxM3&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AY7P3OR5V4IUYTgPWiHGVXD&oh=00_AYD5hshPm89Y7sIOMBi1RbabYEies_bdALx4L-aopBBAfA&oe=67A5708E')" }}></div>
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
  