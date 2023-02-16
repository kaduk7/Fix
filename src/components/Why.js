import React from "react"

// @notus-pro/react
import Features5 from "@notus-pro/react/Features5"

const props = {
  heading2badge: {
    // badge: { color: "pink", children: "The fame" },
    title: "Why HKS?",
    description:
      " ",
    alignment: "center",
  },
  cards: [
    {
      icon: "fas fa-check",
      color: "lightBlue",
      title: "Kualitas Terbaik",
      description:
        "Team akan melakukan yang terbaik untuk klean serta mengutamakan kualitas yang tidak merngecewakan klien.",
      button: { color: "lightBlue", children: "Learn more" },
    },
    {
      icon: "fas fa-campground",
      color: "emerald",
      title: "Klien Terpercaya",
      description:
        "klien sepenuhnya bisa mempercayain hizratech sebagai mitranya,serta hizratech siap untuk menyelesaikan kendala yang dihadapi oleh klien.",
      button: { color: "emerald", children: "Learn more" },
    },
    {
      icon: "fab fa-telegram-plane",
      color: "red",
      title: "Layanan Bervariasi",
      description:
        "Hizratech menyediakan berbagai jasa layanan sesuai dengan kebutuhan klien.",
      button: { color: "red", children: "Learn more" },
    },
  ],
}

export default function Why() {
  return (
    <>
      <Features5 {...props} />
    </>
  )
}
