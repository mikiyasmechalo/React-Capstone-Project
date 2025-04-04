import RecentCard from "./RecentCard";

import { Poppins } from "@/app/layout";

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
      className={`p-6 bg-white rounded-lg shadow-xl max-w-lg ${Poppins.className} m-3`}
    >
      <h2 className="text-xl font-bold mb-4">Recent Post</h2>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <RecentCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
