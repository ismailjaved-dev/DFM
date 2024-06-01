"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useIsTab } from "@/lib/isMobile";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";

const Navbar = () => {
  const [lightNav, setLightNav] = useState(false);
  const [menuExpanded, setMenuExpanded] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const MotionLink = motion(Link);

  const handleMenu = () => {
    setMenuExpanded(!menuExpanded); // Toggle the current state
  };

  const isTab = useIsTab();

  useEffect(() => {
    isTab ? setMenuExpanded(false) : setMenuExpanded(true);
  }, [isTab]);

  useEffect(() => {
    const LightPages = ["/"]; // Adjust as needed

    // const shouldUseLightNav = LightPages.includes(pathname);
    const shouldUseLightNav = true;
    if (shouldUseLightNav !== lightNav) {
      setLightNav(shouldUseLightNav);
    }

    if (isScrolled) {
      setLightNav(false);
    }
  }, [pathname, isScrolled]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = [
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Products",
      path: "/",
    },
    {
      label: "Trending Shedule",
      path: "/",
    },
    {
      label: "Regulations",
      path: "/",
    },
    {
      label: "Blog",
      path: "/",
    },
  ];

  const prodcutData = (
    <div className="absolute flex flex-col top-[24px] cardBg p-6 gap-2 rounded-xl opacity-0 pointer-events-none">
      <Link
        href="/products/liquidity"
        className="text-sm text-white font-semibold"
      >
        Liquidity
      </Link>
      <Link
        href="/products/technology"
        className="text-sm text-white font-semibold"
      >
        Technology
      </Link>
    </div>
  );

  const regulationsData = (
    <div className="absolute flex flex-col top-[24px] cardBg p-6 gap-2 rounded-xl opacity-0 pointer-events-none">
      <Link
        href="/regulation/regulatory-documents"
        className="text-sm text-nowrap text-white font-semibold"
      >
        Regulatory Documents
      </Link>
      <Link
        href="/regulation/regulatory-information"
        className="text-sm text-nowrap text-white font-semibold"
      >
        Regulatory Information
      </Link>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] px-5">
      <div className="flex flex-col fluid-container gap-3 py-3 ">
        <div
          className={`flex justify-between items-center py-4 p-3 md:py-3 border rounded-xl ${
            lightNav
              ? "bg-surface bg-opacity-5 border-white/0 border-opacity-10 backdrop-blur-sm"
              : " bg-surface bg-opacity-5 border-white border-opacity-10 backdrop-blur-sm"
          } transition-all duration-500`}
        >
          <Link href="/" className="pl-2">
            {/* <Logo variant={lightNav ? 'default' : 'dark'} /> */}
            <Image src={"/logo.svg"} width={200} height={60} alt="" />
          </Link>
          <div
            className={`hidden lg:flex gap-7 transition-all duration-500 ${
              lightNav ? "" : " opacity-0 w-0 overflow-hidden"
            }`}
          >
            {data.map((res, index) => {
              return (
                <div
                  key={index}
                  className={`relative ${
                    res.label === "Products" ? "hoverDD" : ""
                  } ${res.label === "Regulations" ? "hoverDD" : ""}`}
                >
                  <Link
                    href={res.path}
                    className="text-sm text-white font-semibold flex gap-2"
                  >
                    {res.label}
                    {res.label === "Products" ? <ChevronDownIcon /> : ""}
                    {res.label === "Regulations" ? <ChevronDownIcon /> : ""}
                  </Link>
                  {res.label === "Products" ? prodcutData : ""}
                  {res.label === "Regulations" ? regulationsData : ""}
                </div>
              );
            })}
          </div>
          <div className="hidden lg:flex gap-3">
            <Button variant={lightNav ? "outline" : "secondary"}>
              Start Trading
            </Button>
          </div>
          {isTab && (
            <div
              className={`transition-all group h-[4rem] w-[64px] flex justify-center items-center cursor-pointer hover:bg-gray50 rounded-xl relative !border-white !border-opacity-5   ${
                lightNav
                  ? "bg-surface bg-opacity-5 border backdrop-blur-sm"
                  : "bg-surface bg-opacity-5 border backdrop-blur-sm"
              }`}
              onClick={handleMenu}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all duration-150 opacity-100 ${
                  lightNav ? "stroke-white" : "stroke-white"
                } absolute ${menuExpanded ? "!opacity-0" : ""}`}
              >
                <path
                  d="M2.88 8.64001H20.16M2.88 15.36H20.16"
                  strokeWidth="1.92"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all duration-150 absolute opacity-0  ${
                  lightNav ? "stroke-white" : "stroke-white"
                } ${menuExpanded ? "opacity-100" : ""}`}
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  strokeWidth="1.92"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
        <div
          className={`gradientLine my-0 transition-all duration-500 ${
            lightNav ? "" : "opacity-0"
          }`}
        ></div>
        <AnimatePresence mode="sync">
          {menuExpanded && (
            <motion.ul
              className={cn(
                "p-3 rounded-xl border flex gap-3 flex-col lg:flex-row overflow-hidden duration-500 ",
                lightNav
                  ? "lg:!opacity-0 border-white border-opacity-15 bg-surface bg-opacity-5 backdrop-blur-md pointer-events-none"
                  : "border-white border-opacity-15 bg-surface bg-opacity-5 backdrop-blur-md"
              )}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              layout
            >
              {data.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex justify-center items-center w-full relative z-10"
                >
                  <MotionLink
                    href={item.path}
                    className={cn(
                      "w-full text-center font-medium text-sm transition-all py-5",
                      lightNav ? "text-white" : "text-white"
                    )}
                  >
                    <span>{item.label}</span>
                  </MotionLink>
                  {/* {pathname === item.path ? (
                        <motion.div transition={{type: "spring", bounce: 0.15}} layout layoutId='underline' className={cn("absolute rounded-[.3125rem] left-0 bottom-0 bg-surface w-full h-full -z-10", lightNav ? "bg-opacity-15 border border-white border-opacity-5" : "bg-opacity-15 border border-white border-opacity-5")}></motion.div>
                      ) : null} */}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
