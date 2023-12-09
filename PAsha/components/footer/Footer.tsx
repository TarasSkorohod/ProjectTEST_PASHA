"use client";
import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import MyMapPage from "@/components/googleMaps/MyMap";
import {BsFacebook, BsInstagram} from "react-icons/bs";
import {CustomInfoWindowContent} from "@/components/googleMaps/GoogleMapComponent";
import {Logo} from "@/components/logo/Logo";

const socialList = [
  {
    icon: FaFacebookSquare,
  },
  {
    icon: FaInstagram,
  },
  {
    icon: FaTwitter,
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative text-[#B3B3B3] bg-[#111827] text-center  dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="flex justify-center">

          <a
              className="mr-6 hover:text-slate-100 text-neutral-600 dark:text-neutral-200 transition"
              href="https://www.instagram.com/capitalupfitters/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
          >
            <BsInstagram
                size={17}
                className="text-slate-100 cursor-pointer hover:text-yellow-500 transition"
            />
          </a>
          <a
              className="mr-6 hover:text-slate-100 text-neutral-600 dark:text-neutral-200 transition"
              href="https://www.facebook.com"
              target="_blank"
          >
            <BsFacebook
                size={17}
                className="text-slate-100 cursor-pointer hover:text-yellow-500 transition"
            />
          </a>

        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className=" text-[#B3B3B3] dark:text-neutral-200 mb-4 flex items-center justify-center  uppercase md:justify-start">
             <Logo />
              Назва компанії
            </h6>
            {/*<p className="text-sm">*/}
            {/*  ВАША ІНФА*/}
            {/*</p>*/}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center  uppercase md:justify-start">
            КОНТАКТИ
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              <a
                className="w-auto h-full text-base  cursor-pointer line"
                href="https://www.google.com/maps/place/%D0%94%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0+%D0%A2%D1%80%D0%BE%D1%8F%D0%BD%D0%B4/@49.4311816,32.0080307,13z/data=!4m15!1m8!3m7!1s0x40d14b866064977f:0xf8dce723a9cbb5d8!2z0KfQtdGA0LrQsNGB0LgsINCn0LXRgNC60LDRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMTgwMDA!3b1!8m2!3d49.4413155!4d32.0643442!16zL20vMDRod3Rz!3m5!1s0x40d14c9dbf9b7861:0xbc334d7c335631fe!8m2!3d49.4509332!4d32.0650497!16s%2Fg%2F1237k8zt?entry=ttu"
              >
               Україна так далі
              </a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <a
                className="w-auto h-full text-base  cursor-pointer line"
                href="mailto:test@test.com"
              >
               test@test.com
              </a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                />
              </svg>
              <a
                className="w-auto h-full text-base   cursor-pointer line"
                href="tel:301-304-141"
              >
                9555499993
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center  uppercase md:justify-start">
              НАШІ ПОСЛУГИ
            </h6>
            <p className="mb-4">
              <Link
                href={`/`}
                className="w-auto h-full text-base   cursor-pointer line"
              >
                ГОЛОВНА
              </Link>
            </p>
            <p className="mb-4">
              <Link
                href={`/about`}
                className="w-auto h-full text-base   cursor-pointer line"
              >
                ПРО НАС
              </Link>
            </p>
            <p className="mb-4">
              <Link
                href={`/our-services/patriot-liner`}
                className="w-auto h-full text-base  cursor-pointer line"
              >
                НАШІ ПОСЛУГИ
              </Link>
            </p>
            <p>
              <Link
                href={`/portfolio`}
                className="w-auto h-full text-base  cursor-pointer line"
              >
                ГАЛАТЕЯ
              </Link>
            </p>
          </div>

          <div className="text-[#B3B3B3]">
            <h6 className=" mb-4 flex justify-center  uppercase md:justify-start">
              <CustomInfoWindowContent />

            </h6>
            <MyMapPage />
          </div>
        </div>
      </div>

      <div className="bg-[#111827] p-6 text-center dark:bg-neutral-700">
        <span>© {new Date().getFullYear()} Авторське право: </span>
        <a className=" text-neutral-600 dark:text-neutral-400" href="/">
          Всі права захищені
        </a>
      </div>
    </footer>
  );
};
