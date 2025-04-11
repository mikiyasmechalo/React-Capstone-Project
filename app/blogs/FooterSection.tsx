import {
    FacebookIcon,
    InstagramIcon,
    MailIcon,
    MapPinIcon,
    PhoneIcon,
    TwitterIcon,
    YoutubeIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../../../../components/ui/button";
  import { Card, CardContent } from "../../../../components/ui/card";
  import { Input } from "../../../../components/ui/input";
  
  export const FooterSection = (): JSX.Element => {
    // Footer data for mapping
    const quickLinks = [
      { title: "Home", href: "#" },
      { title: "About Us", href: "#" },
      { title: "Tours", href: "#" },
      { title: "Contact", href: "#" },
    ];
  
    const contactInfo = [
      {
        icon: <MapPinIcon className="w-5 h-5" />,
        text: "732 Despard St, Atlanta",
      },
      { icon: <PhoneIcon className="w-5 h-5" />, text: "+97 888 8888" },
      { icon: <MailIcon className="w-5 h-5" />, text: "info@traveller.com" },
    ];
  
    const socialIcons = [
      { icon: <FacebookIcon className="w-6 h-6" />, href: "#" },
      { icon: <TwitterIcon className="w-6 h-6" />, href: "#" },
      { icon: <InstagramIcon className="w-6 h-6" />, href: "#" },
      { icon: <YoutubeIcon className="w-6 h-6" />, href: "#" },
    ];
  
    return (
      <footer className="relative w-full bg-transparent">
        {/* Subscribe section with background image */}
        <div className="w-full h-[550px] bg-[url(/unsplash-tejfa7vw5e4.svg)] bg-cover bg-center">
          <div className="flex flex-col items-center justify-center pt-[70px]">
            <div className="w-[871px] text-center">
              <h2 className="font-semibold text-6xl text-white tracking-[0] leading-[70px] whitespace-nowrap">
                Subcribe to get special price
              </h2>
              <p className="mt-6 font-medium text-lg text-[#dfdfdf] leading-[34px]">
                Dont wanna miss something? subscribe right now and get special
                promotion and monthly newsletter
              </p>
            </div>
  
            <div className="mt-16 w-[676px] relative">
              <Card className="rounded-[34.5px] border-none">
                <CardContent className="p-0">
                  <div className="relative">
                    <Input
                      className="h-[69px] pl-6 pr-[160px] rounded-[34.5px] font-medium text-xl text-[#9b9b9b] border-none"
                      placeholder="Type your email here"
                    />
                    <Button className="absolute right-[7px] top-[7px] h-[55px] w-[146px] bg-black text-[#dfdfdf] rounded-[27.5px] font-medium text-xl">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
  
        {/* Main footer content */}
        <div className="w-full bg-white py-16">
          <div className="max-w-[1516px] mx-auto flex justify-between px-16">
            {/* Company info */}
            <div className="w-[439px]">
              <h3 className="font-semibold text-2xl text-black leading-[70px]">
                REBEL ROVER
              </h3>
              <p className="font-medium text-lg text-[#6c6c6c] leading-[25px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                pharetra condimentum.
              </p>
            </div>
  
            {/* Contact information */}
            <div className="w-[255px]">
              <h3 className="font-semibold text-2xl text-black text-center leading-[70px] whitespace-nowrap">
                Contact Information
              </h3>
              <div className="mt-4 space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {item.icon}
                    <span className="ml-[26px] font-medium text-lg text-[#6c6c6c] leading-[34px]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Quick links */}
            <div className="w-[126px]">
              <h3 className="font-semibold text-2xl text-black leading-[70px] whitespace-nowrap">
                Quick Link
              </h3>
              <div className="mt-4 space-y-2">
                {quickLinks.map((link, index) => (
                  <div
                    key={index}
                    className="font-medium text-lg text-[#6c6c6c] leading-[34px] whitespace-nowrap"
                  >
                    <a href={link.href}>{link.title}</a>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Social media */}
            <div className="w-[173px]">
              <h3 className="font-semibold text-2xl text-black leading-[70px] whitespace-nowrap">
                Follow Us
              </h3>
              <div className="flex space-x-4 mt-4">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-[#6c6c6c] hover:text-black"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Copyright footer */}
        <div className="w-full h-[121px] bg-black flex items-center justify-center">
          <p className="font-medium text-lg text-[#dfdfdf] text-center leading-[34px]">
            Copyright © All rights reserved (Website Developed &amp; Managed by{" "}
            <span className="font-medium">creativechroma</span>)
          </p>
        </div>
      </footer>
    );
  };
  