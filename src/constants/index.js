import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    mysql,
    bootstrap,
    canva,
    photoshop,
    moksa,
    kominfo,
    napindo,
    tiketkapal,
    craigadventure,
    sambalbini,
    moksaproject,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: mobile,
    },
    {
      title: "Database Engineer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Canva",
      icon: canva,
    },
  ];
  
  const experiences = [
    {
      title: "Event Organizer (Freelance)",
      company_name: "Kominfo",
      icon: kominfo,
      iconBg: "#383E56",
      date: "Dec 2021 - Dec 2021",
      points: [
        "Responsible for Guest COVID Test Activities, before entering the main building Smart City.",
        "Maximizing the guard of the Crew Reporter from Kominfo.",
        "Success to Achieved Handling 900 Merchandise for Guests.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Moksa",
      icon: moksa,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Jun 2025",
      points: [
        "Developed and maintained both frontend and backend components of web applications.",
        "Built responsive, user-friendly interfaces using HTML, CSS, and JavaScript.",
        "Integrated AJAX for dynamic data handling and smooth user experience.",
        "Designed and managed databases to store and retrieve application data efficiently.",
        "Implemented user management systems with authentication and authorization.",
        "Developed an article posting platform with features like article creation, editing, and deletion.",
        "Ensured seamless integration between frontend and backend services via APIs.",
      ],
    },
    {
      title: "Database",
      company_name: "PT. Napindo Media Ashatama",
      icon: napindo,
      iconBg: "#E6DEDD",
      date: "Jun 2025 - Present",
      points: [
        "Update and maintain database records related to visitors, exhibitors, and internal staff.",
        "Conduct routine updates on the SQL Server such as data correction, backup scheduling, and restoring backups.",
        "Modify Visual Basic source code to fix bugs, apply interface changes, or adjust database connection settings.",
        "Assist in generating reports and printing exhibition labels using Crystal Reports.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Craig Adventure",
      description:
        "Web-based platform game that allows users to play at any browser. This game is free to play and there are many challenging levels. This game is inspired by Mario Bros",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: craigadventure,
      source_code_link: "https://github.com/Zidanraka/Game-Platform-HTML-Javascript",
    },
    {
      name: "Tiket Kapal Design",
      description:
        "Re-design Tiket Kapal Application from google playstore. This application allows people to book any transportation tickets",
      tags: [
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: tiketkapal,
      source_code_link: "https://github.com/",
    },
    {
      name: "SambalBini Design",
      description:
        "Design an F&B company profile website. This website allows user to see what menu or promos that SambalBini provide. In this website users also can order and book a table at any franchise.",
      tags: [
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: sambalbini,
      source_code_link: "https://github.com/",
    },
    {
      name: "Moksa",
      description:
        "Design company profile website. This website allows user to see what this company do and provide. In this website admin also can post article in dashboard admin.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text-gradient",
        },
      ],
      image: moksaproject,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };