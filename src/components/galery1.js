import React from "react"


// @notus-pro/react
import Blogs1 from "@notus-pro/react/Blogs1"
import "@notus-pro/react/tailwind.min.css";

import "./assets/styles/tailwind.css";
import Logo from './assets/img/a.jpg';
import Logo2 from './assets/img/b.jpg';
import Logo3 from './assets/img/c.jpg';
import Logo4 from './assets/img/d.jpg';
import Logo5 from './assets/img/e.jpg';
const props = {
  heading3: {
    color: "emerald",
    subtitle: "Gallery Team Hizratech",
    // title: "Gallery Team Hizratech",
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
      // {
      //   image: "/static/media/2.56dc7d63.png",
      //   // subtitle: "Work from Home",
      //   // title: "How meetings and behaviour are changing",
      //   size: "sm",
      //   link: { href: "#pablo" },
      // },
      // {
      //   image: "/static/media/2.56dc7d63.png",
      //   // subtitle: "Work from Home",
      //   // title: "How meetings and behaviour are changing",
      //   size: "sm",
      //   link: { href: "#pablo" },
      // },
      // {
      //   image: "/static/media/2.56dc7d63.png",
      //   // subtitle: "Work from Home",
      //   // title: "How meetings and behaviour are changing",
      //   size: "sm",
      //   link: { href: "#pablo" },
      // },
  ],
}

export default function galery1() {
  return (
    <>
    
      <Blogs1 {...props} />
      
    </>
  )
}