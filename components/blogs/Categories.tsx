import { Poppins } from "@/app/layout";
import { FaArrowRightLong } from "react-icons/fa6";

const categories = ["Travel", "Tips", "Stories", "Destination"];

const Categories: React.FC = () => {
  return (
    <div className={`p-6 bg-white rounded-lg shadow-lg max-w-lg w-full ${Poppins.className}`}>
      <h2 className="xs:text-4xl text-lg mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="flex items-center justify-between border-b border-[#C4C4C4] py-3 cursor-pointer hover:text-blue-600 transition">
            <span className="flex items-center space-x-4">
              <FaArrowRightLong className="w-4 h-4" />
              <span>{category}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
