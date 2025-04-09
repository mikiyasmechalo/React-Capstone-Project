 import Image from "next/image"
 import Link from "next/link"
const AboutUsHero = () => {
  return (
    <>
      <div className="relative">
        {/* Image */}
        <Image
          src="/aboutus.png"
          alt="Rebel Rover Intro"
          width={"1920"}
          height={860}
          className="object-cover" // Ensures the image covers the container
        />
        {/* Text on top of the image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <div className="text-5xl font-Poppins font-bold">
            About Us
          </div>
          {/* Breadcrumb (Home > About Us) */}
          <div className="text-10xl font-Poppins mt-5">
            <Link href={"/"}> Home </Link> {'>'} About Us
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsHero