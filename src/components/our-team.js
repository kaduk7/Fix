import React from "react";

import Footer2 from "./Footer2.js";
// @notus-pro/react
import Teams1 from "@notus-pro/react/Teams1";
import "@notus-pro/react/tailwind.min.css";

import "./assets/styles/tailwind.css";
import Logo from './assets/img/logo/cew.jpeg';
import Logo2 from './assets/img/logo/cow.jpeg';

const props = {
  heading3: {
    color: "orange",
    title: "Tim Hizratech",
    description:
      " ",
    alignment: "center",
  },
  infoAreas: [
    {
     
      image: Logo,
      
      name: "Aini Latifa Zanil",
      jobTitle: "Direktur",
      
      socialLinks: [
        { icon: "twitter", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: Logo,
      name: "Dina Silvia",
      jobTitle: "Sekretaris",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
      ],
    },
    {
      image: Logo,
      name: "Fatmawati",
      jobTitle: "Supervisor",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
      ],
    },
    {
      image: Logo2,
      name: "Herman",
      jobTitle: "Head Marketing",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: Logo,
      name: "Wahyu Ningsih",
      jobTitle: "Adm & Keuangan",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: Logo,
      name: "Dhea Wistafina",
      jobTitle: "Logistic & Warehouse",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: Logo2,
      name: "Zul Akmal",
      jobTitle: "Programmer",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: Logo2,
      name: "Rizky Yunasrianto",
      jobTitle: "Programmer",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: Logo2,
      name: "Khairul Anuar",
      jobTitle: "Programer",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: Logo2,
      name: "Muhammad Fahrezy",
      jobTitle: "Teknisi",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: Logo2,
      name: "Zaenal Arifin",
      jobTitle: "Teknisi",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "whatsapp", link: "#pablo" },
      ],
    },
    
  ],
}

export default function team() {
  return (
    <>

      <Teams1 {...props} />

    </>
  )
}