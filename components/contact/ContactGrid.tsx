import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface ContactInfoProps {
  location: string;
  phone: string;
  email: string;
  address: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ location, phone, email, address }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-medium">{location}</h3>
      <div className="flex flex-col gap-2 text-sm text-gray-700">
        <div className="flex items-center">
          <FaPhoneAlt className="mr-2 text-gray-500" />
          <p>{phone}</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="mr-2 text-gray-500" />
          <p>{email}</p>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-2 text-gray-500" />
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

const ContactInfoGrid: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mt-8 lg:mt-0 mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Get In Touch</h2>
      <p className="text-sm mb-6 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ContactInfo
          location="Lhokseumawe, Aceh"
          phone="+62 6243 6965"
          email="contact@domain.com"
          address="Jl. Darussalam Hagu Selatan"
        />
        <ContactInfo
          location="Lhokseumawe, Aceh"
          phone="+62 6243 6965"
          email="contact@domain.com"
          address="Jl. Darussalam Hagu Selatan"
        />
        <ContactInfo
          location="Lhokseumawe, Aceh"
          phone="+62 6243 6965"
          email="contact@domain.com"
          address="Jl. Darussalam Hagu Selatan"
        />
        <ContactInfo
          location="Lhokseumawe, Aceh"
          phone="+62 6243 6965"
          email="contact@domain.com"
          address="Jl. Darussalam Hagu Selatan"
        />
      </div>
    </div>
  );
};

export default ContactInfoGrid;
