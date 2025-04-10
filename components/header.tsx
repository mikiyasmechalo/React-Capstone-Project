import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-header-bg absolute z-[999] w-full text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center ml-[40px]">
        <img
          src="/logo.png" // Corrected to directly reference the public folder
          alt="Rebel Rover Logo"
          className="w-[300px] sm:w-[357px] mr-4"
        />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-x-[50px] mr-[40px] text-sm font-medium">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300 whitespace-nowrap">
          About Us
        </a>

        {/* Package Dropdown */}
        <div className="relative group">
          <div className="hover:text-gray-300 cursor-pointer">Package</div>
          <div className="absolute hidden group-hover:block bg-gray-700 text-white rounded shadow-lg p-2 mt-2 min-w-[140px] z-10">
            <a href="#" className="block px-2 py-1 hover:text-gray-300">
              Package 1
            </a>
            <a href="#" className="block px-2 py-1 hover:text-gray-300">
              Package 2
            </a>
          </div>
        </div>

        {/* Destination */}
        <a href="#" className="hover:text-gray-300">
          Destination
        </a>

        {/* Blog Dropdown */}
        <div className="relative group">
          <div className="hover:text-gray-300 cursor-pointer">Blog</div>
          <div className="absolute hidden group-hover:block bg-gray-700 text-white rounded shadow-lg p-2 mt-2 min-w-[140px] z-10">
            <a href="#" className="block px-2 py-1 hover:text-gray-300">
              Latest Posts
            </a>
            <a href="#" className="block px-2 py-1 hover:text-gray-300">
              Travel Tips
            </a>
          </div>
        </div>

        {/* Contact */}
        <a href="#" className="hover:text-gray-300">
          Contact
        </a>
      </nav>

      {/* Search Icon */}
      <div className="ml-4 mr-[46px] cursor-pointer hover:text-gray-300">
        <FaSearch size={18} />
      </div>
    </header>
  );
};

export default Header;
