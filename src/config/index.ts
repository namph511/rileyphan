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
        "Produced high-quality 3D character animations for cinematic cutscenes and gameplay sequences, consistently meeting studio-level quality benchmarks",
        "Applied strong acting principles and body mechanics to deliver believable and engaging performances across complex shots",
        "Ensured shot continuity and consistency across sequences by aligning animation with established artistic direction and style guides",
        "Identified and resolved animation and rig-related issues, contributing to smoother team production and fewer downstream problems",
      ],
    },
    {
      company: "Humber College",
      position: "3D Animation Student (Advanced Diploma)",
      startDate: "Sept 2023",
      endDate: "April 2026",
      summary: [
        "Led the animation team for a 19-member 3D short film project, mentoring peers and providing artistic and technical feedback",
        "Directed animation quality and ensured consistency across multiple shots and sequences, maintaining a unified visual narrative",
        "Implemented structured shot tracking and workflow improvements, helping streamline review and approval processes",
        "Collaborated with leaders and cross-functional teams to translate storyboards into polished animation sequences",
      ],
    },
    {
      company: "McDonald's Canada",
      position: "Crew Member",
      startDate: "Aug 2024",
      endDate: "now",
      summary: [
        "Demonstrated strong teamwork and communication in a fast-paced, high-pressure environment",
        "Maintained efficiency and accuracy while handling high customer volume, reinforcing reliability under tight deadlines",
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
      
      linkSource: "https://youtu.be/oiyw21qrh5c",
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
      Hi, I’m Riley Phan, a 3D Character Animator with a strong focus on performance, acting, and storytelling. I specialize in creating expressive, high-quality animations that balance creativity with technical precision. With experience in both production and team leadership, I’m passionate about delivering polished work that meets artistic vision and production demands.
    `,
    image: "/riley-big.jpg",
  },
};

// #5755ff
