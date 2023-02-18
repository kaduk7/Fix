import React from "react"
import Logo from './programmin-990x500.jpg';
import Logo2 from './layanan.jpg';
import Logo3 from './lep.jpg';
// @notus-pro/react
import Blogs8 from "@notus-pro/react/Blogs8"

const props = {
  heading2: {
    color: "pink",
    // subtitle: "About streets",
    title: "What We Offer",
    description:
      " ",
    alignment: "left",
  },
  cards: [
    {
      image: Logo,
      title: "System Development",
      description:
        "Hizratech bersedia untuk merancang, menguji dan mengimplementasikan aplikasi perangkat lunak baru atau program sesuai dengan kebutuhan klien.",
    //   user: {
    //     image: "/notus-pro-react/static/media/team-4.639c2559.jpg",
    //     name: "Tania Hanks",
    //   },
    //   icon: "fas fa-heart",
    //   text: "2.3K",
    //   link: { href: "#pablo" },
    },
    {
      image: Logo2,
      title: "Layanan Publik",
      description:
        "Hizratech siap untuk melayani klien dalam rangka pemenuhan kebutuhan pelayanan baik di bidang jasa, layanan maupun administratif.",
    //   user: {
    //     image: "/notus-pro-react/static/media/team-1.26905a67.jpg",
    //     name: "Jasmine Tailor",
    //   },
    //   icon: "fas fa-heart",
    //   text: "2.3K",
    //   link: { href: "#pablo" },
    },
    {
      image: Logo3,
      title: "Jual Beli Perangkat Lunak dan Keras",
      description:
        "Hizratech juga menjual berbagai jenis barang perangkat lunak dan keras.",
    //   user: {
    //     image: "/notus-pro-react/static/media/michael.660d3e04.jpg",
    //     name: "Paul Smith",
    //   },
    //   icon: "fas fa-heart",
    //   text: "2.3K",
    //   link: { href: "#pablo" },
    },
  ],
}

export default function Whatoffer() {
  return (
    <>
      <Blogs8 {...props} />
    </>
  )
}