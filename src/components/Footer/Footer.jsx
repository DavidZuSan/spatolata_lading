import Wave from "./Wave";
import ContactLink from "../ReusableComponents/ContactLink";
import "./footer.css";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
} from "../../assets/icons";

const Footer = () => {
  return (
    <div className="bg-navbar">
      <Wave />
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-montserrat">
          {/* Primera columna */}
          <div className="text-center md:text-left">
            <h3 className="font-bold mb-2 text-burgundy text-2xl">
              Spatolata Srl Impresa Sociale
            </h3>
            <p className="text-darkgray text-lg">P.IVA: 07227730483</p>
            <div className="flex justify-center md:justify-start items-center">
              <ContactLink
                IconComponent={() => (
                  <a
                    href="https://www.instagram.com/spatolatagelato/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                )}
                href="https://www.instagram.com/spatolatagelato/"
                reverseOrder={true}
              >
                Follow Us!
              </ContactLink>

              <ContactLink
                IconComponent={() => (
                  <a
                    href="https://www.facebook.com/spatolatagelato/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                )}
                href="https://www.facebook.com/spatolatagelato/"
                reverseOrder={true}
              ></ContactLink>
            </div>
          </div>

          {/* Segunda columna */}
          <div className="text-center md:text-left">
            <h3 className="font-bold mb-2 text-darkgray text-lg">
              Information and orders:
            </h3>
            <div className="flex justify-center md:justify-start items-center">
              <ContactLink IconComponent={PhoneIcon} href="tel:+39 3488002083">
                +39 3488002083
              </ContactLink>
            </div>
            <hr className="border-t border-burgundy my-2" />
            <div className="flex justify-center md:justify-start items-center">
              <ContactLink
                IconComponent={MailIcon}
                href="mailto:info@spatolata.org"
              >
                info@spatolata.org
              </ContactLink>
            </div>
          </div>

          {/* Tercera columna */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-2">
              <ContactLink
                IconComponent={MapIcon}
                href="https://maps.app.goo.gl/DjJL5CACrA9fzWe69"
              >
                Via Panciroli, 9 42121, Reggio Emilia, Italia
              </ContactLink>
            </div>
            <hr className="border-t border-burgundy my-2 w-full mx-auto md:mx-0" />
            <ul className="no-bullets font-semibold text-darkgray w-full">
              <li className="flex items-center justify-center md:justify-start w-full">
                <ClockIcon />
                <span className="ml-3">Lun: OPENING SOON</span>
              </li>
              <li className="ml-11">Mar: OPENING SOON</li>
              <li className="ml-11">Mer: OPENING SOON</li>
              <li className="ml-11">Mer: OPENING SOON</li>
              <li className="ml-11">Gio: OPENING SOON</li>
              <li className="ml-11">Sab: OPENING SOON</li>
              <li className="ml-11">Dom: OPENING SOON</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
