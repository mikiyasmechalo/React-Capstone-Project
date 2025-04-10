import { blogs, BlogsProps } from "@/data/my-blogs";
import Image from "next/image";
import Link from "next/link";

const RecentPosts: React.FC = () => {
  const posts = blogs.slice(2, 6);
  return (
    <div className={`xs:p-6 p-2 bg-white rounded-lg drop-shadow-xl max-w-lg`}>
      <h2 className="xs:text-4xl text-lg xs:leading-13 font-medium xs:mb-4 mb-2">
        Recent Post
      </h2>
      <div className="xs:space-y-4">
        {posts.map((post, index) => (
          <RecentCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;


const RecentCard = ({ id, coverImg, title, date }: BlogsProps) => {
  return (
    <Link href={`/my/blogs/${id}`}>
      <div className="flex flex-col xs:flex-row xs:items-center justify-start xs:gap-4 p-2">
        <div className="aspect-video self-start md:h-24 md:w-32 xs:items-center xs:justify-center flex">
          <Image src={coverImg} alt={title} height={100} width={150} />
        </div>
        <div className="flex flex-col xs:gap-3 gap-1 text-left">
          <h3 className="sm:text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-gray-975 sm:text-lg font-light">{date}</p>
        </div>
      </div>
    </Link>
  );
};
