import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import WrapperContainer from "../Layout/WrapperContainer";

const locations = [
  {
    city: "Indore",
    address: "1206 , Skye Earth Corporate Park",
    location: "Indore , Madhya Pradesh",
    postalCode: "452010",
    phone: "+91 9039383183",
    flagUrl: "https://flagicons.lipis.dev/flags/4x3/in.svg",
    alt: "India Flag",
  },
  {
    city: "Dubai",
    address: "Duja Towers, Sheikh Zayed Road",
    location: "Dubai",
    postalCode: "UAE",
    phone: "+971-522627630",
    flagUrl: "https://flagicons.lipis.dev/flags/4x3/ae.svg",
    alt: "UAE Flag",
  },
  {
    city: "USA",
    address: "5101 34th St #A Lubbock,",
    location: "Texas",
    postalCode: "79410",
    phone: "+1(438) 802-8521",
    flagUrl: "https://flagicons.lipis.dev/flags/4x3/us.svg",
    alt: "USA Flag",
  },
  {
    city: "UK",
    address: "135 Junction Rd, Archway",
    location: "London",
    postalCode: "N19 5PX",
    phone: "+44-7727731075",
    flagUrl: "https://flagicons.lipis.dev/flags/4x3/gb.svg",
    alt: "UK Flag",
  },
];

const contacts = {
  phones: ["+91 9039383183", "+91 8319635887"],
  emails: ["hr@digiflex.ai", "info@digiflex.ai"],
};

const socialLinks = [
  { url: "https://www.instagram.com/questdigiflex", network: "instagram" },
  { url: "https://www.facebook.com/questdigiflex", network: "facebook" },
  { url: "https://x.com/QuestDigiflex", network: "x" },
  { url: "https://linkedin.com/company/quest-digiflex", network: "linkedin" },
  { url: "https://whatsapp.me/9111454949", network: "whatsapp" },
  { url: "https://www.youtube.com/@QuestDigiflex", network: "youtube" },
  { url: "https://in.pinterest.com/questdigiflex/", network: "pinterest" },
  { url: "https://digiflex.quora.com/", network: "quora" },
  { url: "https://medium.com/@questdigiflex", network: "medium" },
];

const FooterContent = () => (
  <footer className="bg-blue-950 text-white">
    <WrapperContainer>
      <div className="container -mt-4">
        <div className="mb-4 max-w-[1240px] mx-auto">
          <Link href="/" className="flex items-center no-underline">
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/digiflex.png"
              width={200}
              height={300}
              alt="logo"
              className="h-6"
              priority
            />
          </Link>
        </div>
        <div className="w-full h-px bg-blue-800 mb-4"></div>



        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-4 max-w-[1275px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1275px] pt-10">
            {locations.map((loc, index) => (
              <div key={index} className=" rounded-none flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold">{loc.city}</h2>
                  <Image
                    src={loc.flagUrl}
                    alt={loc.alt}
                    width={40}
                    height={24}
                    className="h-6 w-10"
                    priority={false}
                  />
                </div>
                <p className="text-sm">{loc.address}</p>
                {loc.location && <p className="text-sm">{loc.location}</p>}
                {loc.postalCode && <p className="text-sm">{loc.postalCode}</p>}
                {loc.phone && (

                  <div className="flex flex-col justify-end h-full">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <a
                        href={`tel:${loc.phone.replace(/[^\d+]/g, "")}`}
                        className="hover:text-blue-300 transition-colors text-gray-200"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </div>


                )}
              </div>
            ))}
          </div>

          <div className="lg:w-72">
            <h2 className="text-xl font-bold mb-4 text-white">Contacts</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                {contacts.phones.map((phone, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="hover:text-blue-300 transition-colors text-gray-200">
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {contacts.emails.map((email, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <a href={`mailto:${email}`} className="hover:text-blue-300 transition-colors text-gray-200">
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>







        <div className="w-full h-px bg-blue-800 mb-3"></div>

        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-2 mb-2 md:mb-0">
            <span className="text-sm text-gray-300">
              2025 Digiflex. All rights reserved
            </span>
            <div className="flex gap-2">
              <Link href="/privacy-policy" className="text-sm hover:text-blue-300 text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm hover:text-blue-300 text-gray-300">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="flex gap-4 mb-2">
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                url={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-300 transition-colors"
                style={{ width: 24, height: 24 }}
              />
            ))}
          </div>
        </div>
      </div>
    </WrapperContainer>
  </footer>
);

export default FooterContent;
