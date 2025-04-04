import Image from "next/image";

interface Props {
  imageSrc: string;
  title: string;
  date: string;
}

const RecentCard = ({ imageSrc, title, date }: Props) => {
  return (
    <div className="flex items-center space-x-4 p-2 w-fit">
      <div className="relative aspect-video h-24 w-32">
        <Image
          src={imageSrc}
          alt={title}
          fill
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
    </div>
  );
};

export default RecentCard;
