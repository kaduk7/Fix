import React from "react"

// @notus-pro/react
import Hero2 from "@notus-pro/react/Hero2"

const props = {
  heading2badge: {
    // badge: { color: "lightBlue", children: "with burned soles" },
    // title: "HIZRATECH?",
    // description:
    //   "Brother, life in est is not like in the west. Over the night, the black clouds appear, but at least I have my poetry for my freedom. The victory is for those that rise after they fall.",
  },
  image:
    "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  infoArea: {
    icon: "fas fa-rocket",
    iconColor: "lightBlue",
    title: "HIZRATECH?",
    description:
      "Hizratech adalah perusahaan yang bergerak dalam development system yang akan mewujudkan sistem digital anda. Hizratech juga menyediakan berbagai jasa layanan publik yang siap membantu klien yang berkaitan dengan teknologi.",
    // list: [
    //   { icon: "fas fa-fingerprint", text: "Carefully crafted components" },
    //   { icon: "fas fa-pager", text: "Amazing page examples" },
    //   { icon: "far fa-paper-plane", text: "Dynamic components" },
    // ],
  },
}

export default function Hizratech() {
  return (
    <>
      <Hero2 {...props} />
    </>
  )
}