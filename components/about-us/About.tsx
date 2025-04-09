import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white pb-12">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="mb-8 lg:mb-0">
            <Image
              src="/sarahome.png"
              alt="Person looking at a lake"
              width={500}
              height={400}
              className="h-auto w-full max-h-[530px]"
              style={{
                borderTopLeftRadius: "3rem",
                borderBottomRightRadius: "3rem",
                borderTopRightRadius: "0",
                borderBottomLeftRadius: "0",
              }}
            />
          </div>
          <div className="flex flex-col items-start gap-8">
            <div className="mb-4">
              <Image
                src="/qoute.svg"
                alt="Icon"
                width={500}
                height={400}
                className="h-auto w-auto "
              />
            </div>
            <div className="flex flex-col items-start gap-6">
              <p className="text-[#484848] text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                porttitor sapien et urna tincidunt fringilla. Vivamus at augue
                interdum, blandit arcu quis, laoreet ipsum. In eu ipsum urna.
                Suspendisse suscipit est et neque.
              </p>
              <p className="text-[#484848] text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                porttitor sapien et urna tincidunt fringilla. Vivamus at augue
                interdum, blandit arcu quis, laoreet ipsum. In eu ipsum urna.
                Suspendisse suscipit est et neque.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Siti Sarah
              </h2>
              <p className="mt-3 text-lg text-[#484848]">Founder Travosca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}