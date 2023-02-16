import React from "react"


// @notus-pro/react
import Blogs1 from "@notus-pro/react/Blogs1"
import "@notus-pro/react/tailwind.min.css";

import "./assets/styles/tailwind.css";
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
        image: "/static/media/a.jpg",
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: "/static/media/b.jpg",
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: "/static/media/c.jpg",
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: "/static/media/d.jpg",
        // subtitle: "Work from Home",
        // title: "How meetings and behaviour are changing",
        size: "sm",
        link: { href: "#pablo" },
      },
      {
        image: "/static/media/e.jpg",
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