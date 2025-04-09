import React from 'react';
import Image from 'next/image';

const AboutTeam = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Image */}
        <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
          {/* Replace with your actual image */}
          <Image
            src="/sarahome.png"
            alt="Siti Sarah"
            fill
            className="object-cover"
            priority
          />
          {/* Quote icon overlay */}
        </div>

        {/* Right column - Content */}
        <div className="relative">
          {/* Large number - now more subtle */}
          <span className="text-8xl font-bold text-gray-100 absolute -left-4 -top-8 -z-10">
            66
          </span>

          {/* Quote symbol */}
          <svg
            className="w-12 h-12 text-gray-300 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>

          {/* Testimonial text */}
          <div className="mb-8 space-y-6">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium italic">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              porttitor sapien et uma tincidunt fringilla. Vivamus at augue
              interdum, blandit arcu quis."
            </p>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium italic">
              "Mauris tempor tellus ante, ut fermentum erat gravida vel. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra."
            </p>
          </div>

          {/* Author section */}
          <div className="border-t-2 border-gray-200 pt-6">
            <h3 className="text-2xl font-bold text-gray-900">Siti Sarah</h3>
            <p className="text-xl text-gray-600">Founder Travosca</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
/*const AboutTeam = () => {
  return (
   
      <div className="mt-8 ml-8">
      <div className="">
          <Image
            src="/sarahome.png"
            alt="Siti Sarah"
            width={260}
            height={260}
            className="max-w-xs shadow-lg left-1/3"
  style={{
    borderTopLeftRadius: '2rem',
    borderBottomRightRadius: '2rem',
    borderTopRightRadius: '0',
    borderBottomLeftRadius: '0'
          }}
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Siti Sarah</h3>
          <p className="text-gray-500">Founder & Explorer-in-Chief</p>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam*/
