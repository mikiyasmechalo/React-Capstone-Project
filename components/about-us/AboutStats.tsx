 import Image from "next/image";

const StatsSection = () => {
  const stats = [
    {
      number: "126",
      label: "Satisfied Client",
      icon: "/Group.svg",
    },
    {
      number: "230",
      label: "New Traveller",
      icon: "/travler.svg",
    },
    {
      number: "230 +",
      label: "Destination",
      icon: "/destination.svg",
    },
    {
      number: "230 +",
      label: "Award",
      icon: "/award.svg",
    },
  ];

  return (
    <div className="relative py-16 px-4 sm:px-10 lg:py-40">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          
        src="/viewhome.png"
          alt="Platform stats"
          fill
          className="object-cover"
          quality={100}
        
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-0">
        {/* Compact horizontal stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 bg-opacity-90 px-6 py-4 rounded-lg shadow-sm "
            >
              {/* Small icon */}
              <div className="relative w-8 h-8 min-w-[32px]">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Text content */}
              <div>
                <div className="text-2xl font-bold text-white leading-tight">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600 whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional decorative elements */}
        
      </div>
    </div>
  );
};

export default StatsSection;
/*
const AboutStats = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-1/2">
        <Image
          src="/viewhome.png"
          alt="Platform stats"
          width={600}
          height={400}
          className="shadow-md object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Impacting thousands of travelers globally
        </h3>
        <p className="text-gray-600">
          From donations to loyal followers, we’re building a movement of explorers and storytellers.
        </p>
        <div className="flex flex-wrap gap-6 mt-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-red-500">120K+</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-500">$50K+</p>
            <p className="text-gray-500">Donations</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-500">200+</p>
            <p className="text-gray-500">Trips Booked</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStats*/
