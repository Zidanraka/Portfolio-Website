import {
    mobile,
    backend,
    creator,
    web,
    next,
    nuxt,
    electron,
    reactjs,
    vite,
    vue,
    node,
    javascript,
    typescript,
    threejs,
    tailwind,
    postgresql,
    mysql,
    napindo,
    dealvise,
    craigadventure,
    moksaproject,
    desktopnapindo,
    newsportal,
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
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Database Engineer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Next.js",
      icon: next,
    },
    {
      name: "Nuxt.js",
      icon: nuxt,
    },
    {
      name: "Electron.js",
      icon: electron,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vite.js",
      icon: vite,
    },
    {
      name: "Vue.js",
      icon: vue,
    },
    {
      name: "Node.js",
      icon: node,
    },
    {
      name: "Javascript",
      icon: javascript,
    },
    {
      name: "Typescript",
      icon: typescript,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Dealvise",
      icon: dealvise,
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
      title: "Software and Database Engineer",
      company_name: "PT. Napindo Media Ashatama",
      icon: napindo,
      iconBg: "#E6DEDD",
      date: "Aug 2025 - Present",
      points: [
        "Update and maintain database records related to visitors, exhibitors, and internal staffBuilt a full desktop application from scratch for data entry, search, reporting, and label printing (exhibitors & visitors).",
        "Developed Electron and React UI with form validation, role-based menus (Admin vs Limited), and guided user workflows.",
        "Implemented backend services using Express and Prisma, integrating PostgreSQL for persistent storage.",
        "Delivered reporting and label exports via jsreport (PDF / Excel / Word) for operational needs.",
        "Designed Excel import flow with field mapping, validation, and audit logging to reduce input risk.",
        "Integrated Electron IPC, preload bridge to connect UI and backend securely.",
        "Implemented authentication, access control, and audit logs for critical actions and traceability.",
        "Packaged and released Windows builds with auto-update support (LAN/offline update distribution).",
        "Maintained and updated SQL Server records for visitors, exhibitors, and internal staff, including routine data correction, backup scheduling, and restore procedures.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Website News Portal",
      description:
        "A News Portal Website and Editorial CMS developed to support Napindo’s SEO strategy by publishing structured, search-engine-friendly content that helps improve organic visibility, topical authority, and traffic to Napindo’s websites.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Redis",
          color: "pink-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "orange-text-gradient",
        },
      ],
      image: newsportal,
      source_code_link: "https://github.com/",
    },
    {
      name: "Desktop Application Napindo Visitor Software 2",
      description:
        "Napindo Visitor Software 2 is a desktop application designed to streamline visitor, exhibitor, and company data management for exhibition events, featuring data entry, Excel import/export, reporting, and label printing.",
      tags: [
        {
          name: "Electron.js",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Jsreport",
          color: "pink-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "orange-text-gradient",
        },
      ],
      image: desktopnapindo,
      source_code_link: "https://github.com/",
    },
    {
      name: "Website Company Moksa",
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
    {
      name: "Website Game Craig Adventure",
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
  ];
  
  export { services, technologies, experiences, projects };