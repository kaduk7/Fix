import React from "react"

// @notus-pro/react
import Projects3 from "@notus-pro/react/Projects3"

const props = {
  heading3: {
    color: "red",
    // subtitle: "Stressing around",
    title: "Why HKS?",
    description:
      " ",
    alignment: "center",
  },
  cards: [
    {
      image: "https://demos.creative-tim.com/notus-pro-react/static/media/portofino-1.424ef03a.jpg",
      title: "Kualitas Terbaik",
      description:
        "Team akan melakukan yang terbaik untuk klean serta mengutamakan kualitas yang tidak merngecewakan klien.",
      icon: "fas fa-check",
      color: "orange",
      // button: { size: "sm", color: "orange", children: "Find more..." },
      alignment: "left",
    },
    {
      image:
        "https://demos.creative-tim.com/notus-pro-react/static/media/tim-marshall-uwBdR69Jxvg-unsplash.d9327d5f.jpg",
      title: "Klien Terpercaya",
      description: "klien sepenuhnya bisa mempercayain hizratech sebagai mitranya,serta hizratech siap untuk menyelesaikan kendala yang dihadapi oleh klien.",
      icon: "fas fa-campground",
      color: "red",
      // button: { size: "sm", color: "red", children: "check out" },
      alignment: "center",
    },
    {
      image:
        "https://demos.creative-tim.com/notus-pro-react/static/media/simon-sun-K9X1klwnNxo-unsplash.3a552db5.jpg",
      title: "Layanan Bervariasi",
      description: "Hizratech menyediakan berbagai jasa layanan sesuai dengan kebutuhan klien.",
      icon: "fab fa-html5",
      color: "emerald",
      // button: { size: "sm", color: "emerald", children: "check out" },
      alignment: "right",
    },
  ],
}

export default function Example() {
  return (
    <>
      <Projects3 {...props} />
    </>
  )
}
