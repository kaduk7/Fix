import React from "react"


// @notus-pro/react
import Blogs1 from "@notus-pro/react/Blogs1"
import "@notus-pro/react/tailwind.min.css";

import "./assets/styles/tailwind.css";
import Logo from './assets/img/b1.jpg';
import Logo2 from './assets/img/b2.jpg';
import Logo3 from './assets/img/b3.jpg';
import Logo4 from './assets/img/b4.jpg';
import Logo5 from './assets/img/b5.jpg';
import Logo6 from './assets/img/b6.jpg';
import Logo7 from './assets/img/b7.jpg';
import Logo8 from './assets/img/b8.jpg';
import Logo9 from './assets/img/b9.jpg';
import Logo10 from './assets/img/b10.jpg';
import Logo11 from './assets/img/b11.jpg';
import Logo12 from './assets/img/b12.jpg';
import Logo13 from './assets/img/b13.jpg';
import Logo14 from './assets/img/b14.jpg';
import Logo15 from './assets/img/b15.jpg';
import Logo16 from './assets/img/b16.jpg';

const props = {
  heading3: {
    color: "emerald",
    subtitle: "Our latest blogposts",
    title: "Gallery Kegiatan Hizratech",
    description:
      " ",
    alignment: "center",
  },
  cards: [
    {
        image: Logo,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo2,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo3,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo4,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo5,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo6,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo7,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo8,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo9,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo10,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo11,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo12,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo13,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo14,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo15,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: Logo16,
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      
  ],
}

export default function galery1() {
  return (
    <>

      <Blogs1 {...props} />

    </>
  )
}