
import { CandidateData } from './types';

export const portfolioData: CandidateData = {
  basic_info: {
    full_name: "Olamide Samuel Amusan",
    professional_title: "Full-Stack WordPress Developer & Digital Solutions Specialist",
    location: "Ibadan, Nigeria",
    email: "amusanolamide74@gmail.com",
    phone: "+234 814 335 6257",
    links: {
      linkedin: "https://linkedin.com/in/olamide-amusan",
      github: "https://github.com/Osam-74",
      portfolio_project: "https://ecomassign.42web.io/"
    }
  },
  professional_summary: "Results-driven Full-Stack Web Developer & Digital Solutions Specialist with expertise in WordPress custom theme development, e-commerce solutions, and operational workflow optimization. Proven ability to architect dynamic CMS systems using Advanced Custom Fields (ACF), develop responsive mobile-first designs, and integrate WooCommerce for scalable online stores. Combines technical proficiency in PHP, HTML5, CSS3, and JavaScript with strong project coordination skills to deliver comprehensive digital solutions—from custom WordPress development and graphic design to virtual executive assistance and CRM management.",
  technical_skills: {
    "Core Development": ["PHP", "HTML5", "CSS3", "JavaScript (ES6+)", "MySQL", "REST APIs", "Git/GitHub"],
    "WordPress Expertise": ["Custom Theme Development", "Advanced Custom Fields (ACF)", "WooCommerce Integration", "Gutenberg Blocks", "Custom Post Types", "Theme Customization API", "Plugin Development"],
    "E-commerce": ["WooCommerce", "Shopify", "Payment Gateway Integration", "Product Management", "Inventory Systems"],
    "Frontend": ["Responsive/Mobile-First Design", "CSS Flexbox/Grid", "Bootstrap", "Cross-Browser Compatibility", "Figma to Code"],
    "CMS & Platforms": ["WordPress", "Shopify", "Webflow", "cPanel/WHM", "DNS Management", "Website Migration"],
    "Design": ["Figma", "Adobe Photoshop", "Canva Pro", "UI/UX Principles", "Brand Identity Design"]
  },
  work_experience: [
    {
      position: "Chief Operating Officer & Lead Developer",
      company: "Enterprise Republic",
      location: "Oyo, Nigeria",
      period: "October 2022 – August 2025",
      achievements: [
        "Built custom WordPress websites with online store features and member access areas",
        "Successfully moved websites from one server to another with careful planning to avoid any downtime",
        "Created a QR code system that lets guests check in to events quickly, handling over 1,000 people at once",
        "Built custom tools for WordPress that track visitors, sync data automatically, and save time on repetitive tasks",
        "Managed all website hosting, security, and provided support whenever issues came up"
      ]
    },
    {
      position: "Freelance Full-Stack Developer",
      company: "Independent Clients",
      location: "Remote",
      achievements: [
        "Created WordPress websites from scratch, set up online stores, and moved existing sites to new platforms",
        "Built mobile-friendly online store WordPress websites from design mockups",
        "Kept WordPress sites running smoothly by fixing problems, speeding them up, and improving security",
        "Created logos, marketing materials, and social media graphics for client brands"
      ]
    },
    {
      position: "Executive/Virtual Assistant",
      company: "Multiple Clients",
      location: "Remote",
      achievements: [
        "Managed executives' schedules, prepared reports, and coordinated meetings to keep operations running smoothly",
        "Handled professional emails and correspondence with clients and partners to maintain strong business relationships",
        "Organized virtual events and webinars, ensuring everything ran smoothly from start to finish",
        "Created professional presentations, reports, and branded documents using Microsoft Office and Google Suite"
      ]
    }
  ],
  projects: [
    {
      name: "Mobile E-commerce WordPress Theme",
      description: "Custom theme development from Figma design with dynamic content management, WooCommerce integration, and mobile-first responsive implementation",
      technologies: ["PHP", "WordPress", "ACF", "WooCommerce", "JavaScript", "Git"],
      image: "/portfolio/images/placeholder-image-5.png",
      links: {
        live_demo: "https://ecomassign.42web.io/",
        source_code: "https://github.com/Osam-74/shopco-acf",
        video_demo: "https://www.loom.com/share/d1550917e12745bb8f5904d47e67500c"
      }
    },
    {
      name: "MFTP Visitor Pass (Free)",
      description: "Essential visitor pass creation and verification WordPress plugin designed for small-to-medium estates, gated communities, and facilities. Features manual or front-end form visitor pass creation, configurable passcodes with 24-hour expiry, verification interface for security personnel, entry logging with dashboard statistics, role-based permissions for residents and security, and monthly pass limits.",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "Plugin Development"],
      image: "/portfolio/images/mftp-visitor-pass.png",
      links: {
        source_code: "https://github.com/Osam-74"
      }
    },
    {
      name: "E-commerce & POS Integration",
      description: "Complete sales platform for small vendors featuring product management, customer sales tracking, and point-of-sale integration",
      technologies: ["WordPress", "WooCommerce", "Custom PHP", "Inventory Management"]
    },
    {
      name: "Techesite Website Migrations",
      description: "Multiple seamless site migrations with DNS configuration and post-migration optimization",
      technologies: ["cPanel", "DNS Management", "MySQL", "WordPress"],
      image: "/portfolio/images/techesite-migrations.png"
    }
  ],
  education: {
    degree: "Bachelor of Technology in Civil Engineering",
    institution: "Ladoke Akintola University of Technology",
    location: "Ogbomoso, Oyo",
    graduation_date: "February 2020"
  },
  certifications: [
    "Complete WordPress Website Developer Course, Udemy",
    "Professional Diploma of Virtual Executive Assistance, Udemy",
    "Technical Support Fundamentals, Coursera",
    "Graphics Designing with Canva, Udemy",
    "Jobberman Soft Skills Training Certificate",
    "UI/UX Design Course, Athena (Ongoing)"
  ]
};

export const capacitiesData = {
  virtual_assistant: {
    id: "virtual-assistant",
    title: "Virtual Assistant",
    slug: "virtual-assistant",
    overview: "I provide professional virtual assistance to executives, organisations, and programme teams, supporting both day-to-day operations and high-impact events. My experience spans executive support, technical coordination, documentation, and stakeholder communication, often working remotely with senior leaders and distributed teams. I am trusted to handle sensitive information, manage workflows, and support complex programmes with precision and discretion.",
    keySkills: [
      "Executive & Virtual Assistance",
      "Email and Calendar Management",
      "Event & Programme Coordination",
      "CRM & Record Management",
      "Documentation & Reporting",
      "Remote Collaboration"
    ],
    tools: ["Google Workspace (Docs, Sheets, Drive, Calendar, Gmail)", "Microsoft Office Suite", "Remote Collaboration Tools"],
    projects: [
      {
        name: "Executive & Technical Support — Enterprise Republic / Odu'a Investment Foundation",
        description: "Provided direct virtual and technical support to senior leadership and programme teams. Supported documentation, scheduling, presentations, and coordination across multiple initiatives. Worked remotely with executives and stakeholders, including UK-based leadership.",
        technologies: ["Google Workspace", "Microsoft Office", "Remote Coordination"],
        impact: "Supported seamless operations across distributed teams and senior leadership"
      },
      {
        name: "Technical Support — Obafemi Awolowo Prize for Leadership Award (2024)",
        description: "Served on the technical support team for the Obafemi Awolowo Prize for Leadership Award Ceremony. Designed and implemented a QR-based guest check-in and verification system. Managed secure access for 1,000+ high-profile guests, ensuring smooth and controlled entry. Led the creation team for the system and trained a separate verification team for event day operations.",
        technologies: ["QR Technology", "Event Management", "Access Control"],
        impact: "Successfully managed 1,000+ high-profile guests with zero access failures"
      },
      {
        name: "Technical Committee Member — HID Awolowo Foundation Programmes (2024)",
        description: "Provided technical and operational support for HID Awolowo Foundation webinars and events. Supported event logistics, virtual platforms, participant management, and post-event documentation.",
        technologies: ["Virtual Event Platforms", "Google Workspace", "Participant Management"],
        impact: "Improved event logistics and participant management for multiple high-profile programmes"
      },
      {
        name: "Technical Volunteer — Defined Project Launch (Byte Buster Coding Club)",
        description: "Supported the launch of the Defined Project by Odu'a Investment Foundation, which introduced the Byte Buster Coding Club across South-West Nigeria. Assisted with technical setup, coordination, and programme execution.",
        technologies: ["Programme Coordination", "Technical Setup"],
        impact: "Successfully coordinated launch across South-West Nigeria"
      }
    ],
    testimonials: [
      {
        client: "Enterprise Republic",
        feedback: "Professional, reliable, and detail-oriented virtual support that kept our operations running smoothly.",
        role: "Senior Leadership"
      }
    ],
    outcomes: [
      "Successfully supported high-profile leadership events with zero access failures",
      "Improved guest onboarding and verification processes for large-scale programmes",
      "Recognised for professionalism, clarity, and reliability in high-pressure environments"
    ],
    cta: "If you need a dependable virtual assistant with experience supporting executives and high-profile programmes, let's work together."
  },
  wordpress_developer: {
    id: "wordpress-developer",
    title: "Full-Stack WordPress Developer",
    slug: "wordpress-developer",
    overview: "I design and develop WordPress websites and plugins that are functional, scalable, and easy to manage. My work combines front-end design precision with back-end logic, ensuring that organisations can maintain their digital presence without technical complexity. I have built websites for organisations, professionals, and tech teams, as well as custom plugins that solve real operational problems.",
    keySkills: [
      "Custom Theme Development",
      "Plugin Development",
      "WooCommerce Integration",
      "Advanced Custom Fields (ACF)",
      "Website Maintenance & Optimisation",
      "E-commerce Solutions",
      "REST APIs & Database Logic"
    ],
    tools: ["WordPress", "HTML/CSS/JavaScript", "WooCommerce", "ACF", "PHP", "MySQL", "Elementor", "Canva"],
    projects: [
      {
        name: "Enterprise Republic Website",
        description: "Developed and managed the organisation's website and related digital assets.",
        link: "enterpriserepublic.org",
        technologies: ["WordPress", "Custom Theme", "Responsive Design"],
        impact: "Established professional digital presence for tech hub operations"
      },
      {
        name: "Techesight Website",
        description: "Built and maintained a professional website focused on technology and digital services.",
        link: "techesight.com",
        technologies: ["WordPress", "Web Design", "Optimisation"],
        impact: "Created scalable digital platform for tech services"
      },
      {
        name: "Seun Kolade Personal Website",
        description: "Designed and implemented a personal/professional website for academic and leadership visibility.",
        link: "seunkolade.com",
        technologies: ["WordPress", "Personal Branding", "Content Management"],
        impact: "Enhanced professional visibility and leadership presence"
      },
      {
        name: "DeOdevs Website",
        description: "Contributed to website development and structure for a development-focused team.",
        link: "deodevs.com",
        technologies: ["WordPress", "Team Collaboration", "Web Development"],
        impact: "Supported team's digital platform and content structure"
      },
      {
        name: "Custom E-commerce Theme (Figma → WordPress)",
        description: "Built a fully responsive e-commerce WordPress theme from a Figma design. Used Advanced Custom Fields (ACF) to allow non-technical users to manage homepage sections, products, and content dynamically. Focused on clean layout, performance, and ease of content updates.",
        technologies: ["PHP", "WordPress", "ACF", "WooCommerce", "JavaScript"],
        impact: "Delivered functional e-commerce platform with intuitive content management"
      },
      {
        name: "MFTP Visitor Plugin",
        description: "Independently developed a WordPress plugin for visitor check-in and check-out management. Implemented database-driven logic for tracking visit duration and invited guests. Designed for real-world use in offices, hubs, and event environments.",
        technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "Plugin Development"],
        impact: "Created operational solution for managing 1,000+ monthly visitors"
      }
    ],
    testimonials: [
      {
        client: "Enterprise Republic",
        feedback: "Expert WordPress development that transformed our digital presence and streamlined operations.",
        role: "Operations Team"
      }
    ],
    cta: "If you need a WordPress developer who understands both technical depth and real business needs, I'm ready to help."
  },
  administrative_support: {
    id: "administrative-support",
    title: "Administrative / Programme Assistant",
    slug: "administrative-support",
    overview: "As an Administrative and Programme Assistant, I supported the daily operations, programmes, and growth of a functional tech hub while working closely with leadership, staff, interns, and external stakeholders. This role required a blend of administration, technical coordination, people management, and programme execution.",
    keySkills: [
      "Office & Programme Administration",
      "Event & Training Coordination",
      "Website & Digital Platform Management",
      "Social Media Support",
      "Front Desk & Stakeholder Engagement",
      "Reporting & Documentation",
      "Staff & Intern Management"
    ],
    tools: ["Microsoft Office", "Google Workspace", "Social Media Platforms", "WordPress", "Google Analytics"],
    responsibilities: [
      "Managed day-to-day operations of the tech hub",
      "Developed and maintained the hub's website and other sibling organisation websites",
      "Managed social media accounts for the hub and supported digital engagement",
      "Oversaw internet service provision within the hub environment",
      "Coordinated check-in and check-out of users accessing the hub facilities",
      "Provided front desk support, handling enquiries from users, visitors, and partners",
      "Anchored and supported event programmes and tech trainings hosted at the hub",
      "Delivered basic digital and tech skills training to participants",
      "Interned and supervised 20+ students, guiding them through practical learning experiences",
      "Provided guidance and support to co-workers and new hub users"
    ],
    testimonials: [
      {
        client: "Enterprise Republic Tech Hub",
        feedback: "Exceptional administrative and programme support that kept our hub operations smooth and our team aligned.",
        role: "Management Team"
      }
    ],
    outcomes: [
      "Supported smooth daily operations of a multi-user tech hub",
      "Contributed to capacity building through student internships and tech training",
      "Improved organisation and structure of programmes and digital assets",
      "Successfully managed 20+ student interns with structured guidance"
    ],
    cta: "If you need structured administrative and programme support from someone who understands operations, people, and technology, let's connect."
  }
};
