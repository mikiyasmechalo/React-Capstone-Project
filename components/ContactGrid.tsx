import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfoGrid = () => {
  const contactItems = [
    {
      city: "Lhoksemawe, Aceh",
      phone: "+62 6943 6956",
      email: "contact@domain.com",
      address: "Jl. Darussalam Hagu selatan",
    },
    {
      city: "Lhoksemawe, Aceh",
      phone: "+62 6943 6956",
      email: "contact@domain.com",
      address: "Jl. Darussalam Hagu selatan",
    },
    {
      city: "Lhoksemawe, Aceh",
      phone: "+62 6943 6956",
      email: "contact@domain.com",
      address: "Jl. Darussalam Hagu selatan",
    },
    {
      city: "Lhoksemawe, Aceh",
      phone: "+62 6943 6956",
      email: "contact@domain.com",
      address: "Jl. Darussalam Hagu selatan",
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-semibold mb-2 text-center lg:text-left">
          Get In Touch
        </h2>
        <p className="text-gray-600 lg:max-w-180 max-w-100 mx-auto text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 md:text-lg ">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className={`${
              index >= 2 ? "hidden md:block" : ""
            } space-y-6 text-center md:text-left`}
          >
            <h3 className="text-2xl font-normal mb-5 md:text-left">
              {item.city}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center mb-2  md:items-start">
                <FaPhoneAlt className="mr-4" />
                <p>{item.phone}</p>
              </div>
              <div className="flex items-center mb-2  md:items-start">
                <FaEnvelope className="mr-4" />
                <p>{item.email}</p>
              </div>
              <div className="flex items-center md:items-start">
                <FaMapMarkerAlt className="mr-4" />
                <p>{item.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoGrid;
