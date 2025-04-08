
import Image from "next/image";
const posts = [
  {
    imageSrc: "/hero-2.jpg", // Replace with actual images
    title: "Travel Stories for Now and the Future",
    date: "14 Dec 2022",
  },
  {
    imageSrc: "/hero-2.jpg",
    title: "9 Popular Travel Destinations on Sale in 2022",
    date: "14 Dec 2022",
  },
  {
    imageSrc: "/hero-2.jpg",
    title: "How Are We Going to Travel in 2022?",
    date: "14 Dec 2022",
  },
];

const RecentPosts: React.FC = () => {
  return (
    <div
      className={`xs:p-6 p-2 bg-white rounded-lg drop-shadow-xl max-w-lg`}
    >
      <h2 className="xs:text-4xl text-lg xs:leading-13 font-medium xs:mb-4 mb-2">Recent Post</h2>
      <div className="xs:space-y-4">
        {posts.map((post, index) => (
          <RecentCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;


interface RecentCardProps {
  imageSrc: string;
  title: string;
  date: string;
}

const RecentCard = ({ imageSrc, title, date }: RecentCardProps) => {
  return (
    <div className="flex flex-col xs:flex-row xs:items-center justify-start xs:gap-4 p-2">
      <div className="aspect-video self-start md:h-24 md:w-32 xs:items-center xs:justify-center flex">
        <Image
          src={imageSrc}
          alt={title}
          height={100}
          width={150}
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col xs:gap-3 gap-1 text-left">
        <h3 className="sm:text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-[#343434] sm:text-lg font-light">{date}</p>
      </div>
    </div>
  );
};
