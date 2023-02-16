import React from "react";

import Footer2 from "./Footer2.js";
// @notus-pro/react
import Teams1 from "@notus-pro/react/Teams1";
import "@notus-pro/react/tailwind.min.css";

import "./assets/styles/tailwind.css";


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
     
      image: "https://temp.hizratech.com/static/media/2.56dc7d63.png",
      
      name: "Aini Latifa Zanil",
      jobTitle: "Direktur",
      
      socialLinks: [
        { icon: "twitter", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Dina Silvia",
      jobTitle: "Sekretaris",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Fatmawati",
      jobTitle: "Supervisor",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
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
      image: "/static/media/2.56dc7d63.png",
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
      image: "/static/media/2.56dc7d63.png",
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
      image: "/static/media/2.56dc7d63.png",
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
      image: "/static/media/2.56dc7d63.png",
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
      image: "/static/media/2.56dc7d63.png",
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
      image: "/static/media/2.56dc7d63.png",
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
      image: "/static/media/2.56dc7d63.png",
      name: "Zaenal Arifin",
      jobTitle: "Teknisi",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "whatsapp", link: "#pablo" },
      ],
    },
    {
      image: "/static/media/2.56dc7d63.png",
      name: "Mr. Yoyok",
      jobTitle: "Kepala Sekolah",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
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