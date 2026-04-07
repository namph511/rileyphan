import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Riley Phan - 3D Character Animator",
  author: "Riley Phan",
  description:
    "3D Character Animator based in Toronto, Canada. I specialize in 3D character animation, body mechanics, motion capture.",
  lang: "en",
  siteLogo: "/riley-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/namph511" },
    { text: "Youtube", href: "https://www.youtube.com/@namphan7246" },
    { text: "ArtStation", href: "https://www.artstation.com/namtheblack" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Riley Phan",
    specialty: "3D Character Animator",
    summary:
      "3D Character Animator based in Toronto, Canada. I specialize in 3D character animation, body mechanics, motion capture.",
    email: "namph511@gmail.com",
  },
  experience: [
    {
      company: "Sparx* - A Virtuos Studio",
      position: "Animator",
      startDate: "Nov 2021",
      endDate: "Aug 2023",
      summary: [
        "I animated 3D models, including acting and sequences for cutscenes, movies, and games.",
        "Handling multiple software apps for animation, such as Maya, 3DS Max and Unreal Engine",
        "Follow the director's direction and deliver punctual client notes on-time.",
      ],
    },
    {
      company: "Humber College",
      position: "3D animation student",
      startDate: "Sept 2023",
      endDate: "April 2026",
      summary: [
        "I improved my animation skills and gained a lot of experience in art style.",
        "I led the animation department of a team with 19 people for a 3D animated short film project.",
      ],
    },
    {
      company: "McDonald's Canada",
      position: "Crew Member",
      startDate: "Aug 2024",
      endDate: "now",
      summary: [
        "Provided fast, friendly, and efficient service to customers in a high-paced environment.",
        "Handled high volumes of customers while maintaining accuracy and efficiency.",
      ],
    },
  ],
  projects: [
    {
      name: "The Last Beep - Student 3D Animated Short Film Project",
      summary: "A sudden incident of a cat and its owner in daily life.",
      
      linkSource: "https://humberital-my.sharepoint.com/:v:/g/personal/n01607582_humber_ca/IQCA_TH0vrKrQaV66Ty1UvcxAQ0K9IMws_zW9HaVkp7KlGg?e=XtYgXs",
      image: "/the-last-beep.jpg",
    },
    {
      name: "The King Animation",
      summary: "An extradionary fight scene that might be the greatest in the movie industry.",
      
      linkSource: "https://youtu.be/VormddgbIig",
      image: "/the-king.jpg",
    },
    {
      name: "Marvel's Midnight Suns",
      summary: "A masterpiece triple-A game that I participated in creating.",
      
      linkSource: "https://www.youtube.com/watch?v=ncrWmo6cH_s",
      image: "/marvel-midnight-suns.jpg",
    },
  ],
  about: {
    description: `
      Hi, I’m Riley Phan, a passionate 3D Animator. With a strong background in animation, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, eye-catching animations that not only meet the needs of viewers but also push the boundaries of what’s possible. My projects range from simple to the most complicated animations, all with a focus on performance, punctuality, and scalability.
    `,
    image: "/riley-big.jpg",
  },
};

// #5755ff
