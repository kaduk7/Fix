import React from "react"

// @notus-pro/react
import Hero4 from "@notus-pro/react/Hero4"
import Hero5 from "@notus-pro/react/Hero5"
import Blogs1 from "@notus-pro/react/Blogs1"
import Pricing1 from "@notus-pro/react/Pricing1"
import NavbarLinks from "@notus-pro/react/NavbarLinks"
import HeaderVideoTitle from "@notus-pro/react/HeaderVideoTitle"
import PreFooterLarge from "@notus-pro/react/PreFooterLarge"
import FooterSmall from "@notus-pro/react/FooterSmall"
import Projects1 from "@notus-pro/react/Projects1"
import Testimonials1 from "@notus-pro/react/Testimonials1"
import Features5 from "@notus-pro/react/Features5"
import video from './video-1.mp4';

import "@notus-pro/react/tailwind.min.css";

import "./assets/styles/tailwind.css";
// texts as props
const blogs1 = {
  heading3: {
    color: "emerald",
    subtitle: "Our latest blogposts",
    title: "Check the news for this month",
    description:
      "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
    alignment: "center",
  },
  cards: [
    {
      image: "/notus-pro-react/static/media/guitar-play.9166dc41.jpg",
      subtitle: "All the beautiful places",
      title: "Research by Bang & Olufsen on city sounds and music",
      size: "md",
      link: { href: "#pablo" },
    },
    {
      image: "/notus-pro-react/static/media/thomas.955545d6.jpg",
      subtitle: "Spectrum Boats",
      title: "Data Virtualization and Boats Startups",
      size: "md",
      link: { href: "#pablo" },
    },
    {
      image: "/notus-pro-react/static/media/ashim.cd8293b4.jpg",
      subtitle: "Flying on pandemic",
      title: "New Challenges when you want to fly to new areas",
      size: "md",
      link: { href: "#pablo" },
    },
    {
      image: "/notus-pro-react/static/media/dane.5b2e174d.jpg",
      subtitle: "Work from Home",
      title: "How meetings and behaviour are changing",
      size: "md",
      link: { href: "#pablo" },
    },
  ],
}



const projects1 = {
    heading2: {
      color: "teal",
    //   subtitle: "Have you seen us?",
      title: "Bagaimana Proses Pembuatan Jasa Layanan Digital di Hizratech",
      description:
        " ",
      alignment: "center",
      whiteContent: true,
    },
    cards: [
      {
        icon: "fas fa-headphones",
        color: "lightBlue",
        title: "Konsultasi Layanan",
        description:
          "Kita akan saling berkonsultasi tentang kebutuhan website Anda, seperti fitur yang akan dibuat.",
        link: { href: "#pablo", children: "More details..." },
      },
      {
        icon: "fas fa-shopping-cart",
        color: "emerald",
        title: "Pemesanan Layanan",
        description:
          "Setelah berkonsultasi, selanjutnya Anda bisa memesan jasa pembuatan website kami.",
        link: { href: "#pablo", children: "Check more" },
      },
      {
        icon: "fas fa-paper-plane",
        color: "red",
        title: "Pengiriman Konten",
        description:
          "Setelah memesan, Anda bisa mengirim konten untuk kebutuhan website, seperti logo jika dibutuhkan.",
        link: { href: "#pablo", children: "Check more" },
      },
      {
        icon: "fas fa-tools",
        color: "blueGray",
        title: "Pembuatan Website",
        description:
          "Setelah mengirim konten, biarkan kami yang membuat website nya untuk Anda. Anda tinggal duduk manis saja.",
        link: { href: "#pablo", children: "Check more" },
      },
      {
        icon: "fas fa-file-upload",
        color: "orange",
        title: "Upload Website",
        description:
          "Kami akan mengupload nya ke hosting dan domain yang Anda pilih sehingga website Anda sudah bisa diakses.",
        link: { href: "#pablo", children: "Check more" },
      },
      {
        icon: "fas fa-universal-access",
        color: "teal",
        title: "Pemberian Akses",
        description:
          "Kami akan memberikan data login website, hosting, dan lain-lain kepada Anda. Jadi, Anda bisa mengelola website Anda.",
        link: { href: "#pablo", children: "Check more" },
      },
    ],
  }

  const props = {
    heading2badge: {
      // badge: { color: "pink", children: "The fame" },
      title: "Mengapa Harus Jasa Layanan Digital di Hizratech?",
      description:
        " ",
      alignment: "center",
    },
    cards: [
      {
        icon: "fas fa-check",
        color: "lightBlue",
        title: "SEO Friendly",
        description:
          "Jasa layanan digital kami SEO friendly sehingga website Anda mudah ditemukan di mesin pencari.",
        button: { color: "lightBlue", children: "Learn more" },
      },
      {
        icon: "fas fa-campground",
        color: "emerald",
        title: "Harga Murah",
        description:
          "Kami menawarkan layanan digital dengan harga yang murah sehingga Anda dapat menghemat kantong.",
        button: { color: "emerald", children: "Learn more" },
      },
      {
        icon: "fab fa-telegram-plane",
        color: "red",
        title: "Mobile Friendly",
        description:
          "Kami membuat website yang mobile friendly. Desain website Anda akan menyesuaikan ketika dibuka melalui smartphone.",
        button: { color: "red", children: "Learn more" },
      },
      {
        icon: "fas fa-check",
        color: "lightBlue",
        title: "Gratis Hosting dan Domain",
        description:
          "Belum punya hosting? Tenang, kami telah menyediakan hosting dan domain bagi website Anda. Jadi, Anda tidak perlu mengeluarkan biaya lagi.",
        button: { color: "lightBlue", children: "Learn more" },
      },
      {
        icon: "fas fa-campground",
        color: "emerald",
        title: "Gratis Maintenance",
        description:
          "Jasa pembuatan website kami menyediakan gratis maintenance. Kami akan memastikan website Anda berjalan dengan baik dan aman dari serangan hacker.",
        button: { color: "emerald", children: "Learn more" },
      },
      {
        icon: "fab fa-telegram-plane",
        color: "red",
        title: "Sesuai Keinginan",
        description:
          "Anda ingin fitur tambahan pada website Anda? Tentu, kami bisa membuat website dengan fitur sesuai dengan yang Anda inginkan.",
        button: { color: "red", children: "Learn more" },
      },
    ],
  }

const hero4 = {
  heading2badge: {
    // badge: { color: "pink", children: "Lost angels" },
    title: "Mengapa Harus Jasa Layanan Digital di Hizratech?",
    description:
      "",
  },
  leftCardProps: {
    image: "https://demos.creative-tim.com/notus-pro-react/static/media/img-1.f2fd521a.jpg",
    title: "Hizratech",
    description:
      "Jasa pembuatan website kami SEO friendly sehingga website Anda mudah ditemukan di mesin pencari.",
  },
  rightCardInfoIconProps: {
    color: "orange",
    icon: "fas fa-rocket",
    title: "SEO Friendly",
    description:
      "Jasa layanan digital kami SEO friendly sehingga website Anda mudah ditemukan di mesin pencari.",
    gradient: false,
  },
  rightCardBlogImageProps: {
    color: "lightBlue",
    icon: "fas fa-dollar-sign",
    title: "Harga Murah",
    description:
      "Kami menawarkan layanan digital dengan harga yang murah sehingga Anda dapat menghemat kantong.",
    gradient: false,
  },
  rightCardContactUsTitleProps: {
    color: "orange",
    icon: "fas fa-mobile",
    title: "Mobile Friendly",
    description:
      "Kami membuat website yang mobile friendly. Desain website Anda akan menyesuaikan ketika dibuka melalui smartphone.",
    gradient: false,
  },
  rightCardInfoImageProps: {
    color: "emerald",
    icon: "fas fa-globe",
    title: "Gratis Hosting dan Domain",
    description:
      "Belum punya hosting? Tenang, kami telah menyediakan hosting dan domain bagi website Anda. Jadi, Anda tidak perlu mengeluarkan biaya lagi.",
    gradient: false,
  },
  rightCardInfoImage2Props: {
    color: "emerald",
    icon: "fas fa-cogs",
    title: "Gratis Maintenance",
    description:
      "Jasa pembuatan website kami menyediakan gratis maintenance. Kami akan memastikan website Anda berjalan dengan baik dan aman dari serangan hacker.",
    gradient: false,
  },
  rightCardContactUsTitle2Props: {
    color: "lightBlue",
    icon: "fas fa-hand-holding-heart",
    title: "Sesuai Keinginan",
    description:
      "Anda ingin fitur tambahan pada website Anda? Tentu, kami bisa membuat website dengan fitur sesuai dengan yang Anda inginkan.",
    gradient: false,
  },
}



const headervideotitle = {
  video: video,
  title: "Jasa Layanan Digital",
  subtitle:
    "Anda hanya duduk manis, kami yang membuat website untuk Anda",
  buttonColor: "red",
  buttonText: "Konsultasi Gratis",
  buttonIcon: "fas fa-arrow",
  skew: { color: "white" },
}



export default function Layanandigi() {
  return (
    <>
      {/* <NavbarLinks {...navbarlinkslanding2} /> */}
      
      <HeaderVideoTitle {...headervideotitle} />
      <Features5 {...props} />
      <div className="container mx-auto px-4">

        {/* <Hero4 {...hero4} /> */}
        <Projects1 {...projects1} />
        {/* s<Testimonials1 {...testimonials1} /> */}
        {/* <Hero5 {...hero5} /> */}
        <Blogs1 {...blogs1} />
        {/* <Pricing1 {...pricing1} /> */}
      </div>

    </>
  )
}
