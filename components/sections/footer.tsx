import { InstagramIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0B101D] w-full flex flex-wrap justify-center">
      <div className="max-w-fluid p-5 w-full py-10 flex flex-wrap justify-between items-center">
        <Image src={"/logo.png"} width={220} height={61} alt="logo" />
        <div className="hidden sm:flex gap-6">
          <InstagramIcon size={25} className="text-white/15 cursor-pointer transition hover:text-white"/>
          <LinkedinIcon size={25} className="text-white/15 cursor-pointer transition hover:text-white"/>
        </div>

      <div className="gradientLine !my-12"></div>
        <p className="text-[0.625rem] text-white/50">
        iSAM Securities (UK) Limited is authorised and regulated by the Financial Conduct Authority in the United Kingdom.<br /> Registered office address: 100 Bishopsgate, London, EC2N 4AG. Company Registration Number: 09112124. Firm Reference Number: 629586.<br /> iSAM Securities (Global) Limited is an exempted company incorporated in the Cayman Islands and is a registered person with the Cayman Islands Monetary Authority.<br /> iSAM Securities (HK) Limited is a company authorised and regulated by the Securities and Futures Commission of Hong Kong, holds a Type 3 Regulated Activity (Leveraged Foreign Exchange Trading) license (CE No. BOL486) and has its registered address and principal place of business at Suite 3309, Tower 1, Times Square, 1 Matheson Street, Causeway Bay, Hong Kong.<br /> For clients in Australia: iSAM Securities (UK) Limited is exempt from the requirement to hold an Australian financial services licence under the Corporations Act 2001 (Cth) in respect of the financial services. iSAM Securities (UK) Limited is regulated by the Financial Conduct Authority under laws which differ from Australian laws. Australian Registered Body Number (ARBN) 632 372 993.<br /> No US Persons:<br /> The products and services provided by iSAM Securities (UK) Limited, iSAM Securities (Global) Limited and iSAM Securities (HK) Limited on this website are not available and are not being offered in the United States or to US Persons, and are not intended for distribution to, or use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.<br /> iSAM Securities (USA) Inc. is registered with the Commodity Futures Trading Commission as a commodity pool operator and a commodity trading advisor and is a member of the National Futures Association. Principal place of business: 519 Ada Dr SE, Suite 201, Ada, MI 49301, USA Tel: 1-800-986-9402.<br /> iSAM Securities (UK) Limited, iSAM Securities (HK) Limited and iSAM Securities (Global) Limited and iSAM Securities (USA) Inc. are together “iSAM Securities”.
        </p>
      </div>

      <div className="flex justify-center w-full border-t border-white/15 py-6">
        <p className="max-w-fluid px-5 w-full">©Direct Financial Markets 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
