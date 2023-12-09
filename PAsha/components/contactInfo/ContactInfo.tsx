import React, { FC, useEffect } from "react";
import { Logo } from "../logo/Logo";
import { CloseButton } from "../closeButton/CloseButton";
import { motion, AnimatePresence } from "framer-motion";
import { BsInstagram, BsFacebook, BsTwitter, BsFillTelephoneFill } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { TbMailFilled } from "react-icons/tb";
import MyMapPage from "@/components/googleMaps/MyMap";

interface IContactInfo {
  openContactInfo: boolean;
  handleContactInfo: (status: boolean) => void;
}

export const ContactInfo: FC<IContactInfo> = ({ handleContactInfo, openContactInfo }) => {
  useEffect(() => {
    if (openContactInfo) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [openContactInfo]);

  return (
    <div className="absolute">
      <div
        className={`overflow-y-auto z-30 transition duration-[800ms] ease-in-out border-white border-l-[1px] ${
          openContactInfo ? "translate-x-0" : "translate-x-[100%]"
        } fixed min-w-[80px] max-w-[400px] w-full min-h-full top-0 right-0 z-20`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative bg-[#111827] w-full z-20 h-screen border-l-[3px] overflow-y-auto`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center ">
              <Logo />
            </div>
            <div className="w-[80px] h-[80px] flex items-center justify-center bg-[#111827]">
              <CloseButton handleMenu={() => handleContactInfo(false)} />
            </div>
          </div>
          <div className="py-8 px-8">
            {" "}
            <h4 className="uppercase text-[24px] text-start  text-slate-300 mb-8">
              Контактна Інформація
            </h4>
            <div className="py-4">
              <BsFillTelephoneFill
                size={20}
                className="w-auto h-full  text-slate-100  cursor-pointer mb-2"
              />
              <a
                className="w-auto h-full text-base text-slate-100  cursor-pointer line"
                href="tel:0954324444"

              >
                0954324444
              </a>
            </div>
            <div className="py-4">
              <TbMailFilled
                size={20}
                className="w-auto h-full  text-slate-100  cursor-pointer mb-2"
              />
              <a
                className="w-auto h-full text-base text-slate-100  cursor-pointer line"
                href="mailto:test@test.com"
                target="_blank"
              >
                test@test.com
              </a>
            </div>
            <div className="py-4">
              <SiGooglemaps
                size={20}
                className="w-auto h-full  text-slate-100  cursor-pointer mb-2"
              />
              <a
                className="w-auto h-full text-base text-slate-100 cursor-pointer line"
                href="https://www.google.com/maps/place/%D0%91%D1%96%D0%BB%D0%B8%D0%B9+%D0%BB%D0%BE%D1%82%D0%BE%D1%81/@49.4311816,32.0080307,13z/data=!4m15!1m8!3m7!1s0x40d14b866064977f:0xf8dce723a9cbb5d8!2z0KfQtdGA0LrQsNGB0LgsINCn0LXRgNC60LDRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMTgwMDA!3b1!8m2!3d49.4413155!4d32.0643442!16zL20vMDRod3Rz!3m5!1s0x40d14c974c5882e7:0xb62516c54950f32!8m2!3d49.4562165!4d32.052894!16s%2Fg%2F11cn0nf3qg?entry=ttu"
                target="_blank"


              >
               Україна так далі
              </a>
            </div>
            <div className=" border-white border-b-[1px] w-full"></div>
            <MyMapPage />
            <div className="flex items-center gap-4 py-4">
              <a href="https://www.instagram.com/capitalupfitters/?igshid=MzRlODBiNWFlZA%3D%3D">
                <BsInstagram
                  size={17}
                  className="text-slate-100 cursor-pointer  transition"
                  target="_blank"
                />
              </a>
              <a href="https://www.facebook.com/CapitalUpfitters">
                <BsFacebook
                  size={17}
                  className="text-slate-100 cursor-pointer hover:text-yellow-500 transition"
                  target="_blank"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openContactInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
            }}
            className={`fixed top-0 left-0 w-full h-full  backdrop-blur-[4px] z-20`}
            onClick={() => {
              handleContactInfo(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
