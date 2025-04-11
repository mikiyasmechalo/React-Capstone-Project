import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Define the types for the props
interface ContactInfoProps {
  location: string;
  phone: string;
  email: string;
  address: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ location, phone, email, address }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-normal">{location}</h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center mb-2">
          <FaPhoneAlt className="mr-4" />
          <p>{phone}</p>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="mr-4" />
          <p>{email}</p>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-4" />
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

const ContactInfoGrid: React.FC = () => {
  return (
    <div className="w-full md:w-[580px] mt-[47px] md:mt-0">
      <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
      <p className="text-sm mb-6 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="space-y-6">
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[47px]">
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
    </div>
  );
};

export default ContactInfoGrid;