
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
  wordpress_developer: {
    id: "wordpress-developer",
    title: "WordPress Developer",
    slug: "wordpress-developer",
    overview: "Full-Stack WordPress Development specializing in custom theme development, WooCommerce integration, and advanced plugin solutions for e-commerce and enterprise platforms.",
    keySkills: [
      "Custom Theme Development",
      "Advanced Custom Fields (ACF)",
      "WooCommerce Integration",
      "Plugin Development",
      "Performance Optimization",
      "Security Hardening",
      "Database Management"
    ],
    tools: ["WordPress", "PHP", "MySQL", "JavaScript", "Git", "cPanel"],
    projects: [
      {
        name: "Mobile E-commerce WordPress Theme",
        description: "Custom theme development from Figma design with dynamic content management, WooCommerce integration, and mobile-first responsive implementation",
        technologies: ["PHP", "WordPress", "ACF", "WooCommerce", "JavaScript"],
        impact: "Delivered a fully functional e-commerce platform handling 1000+ products"
      },
      {
        name: "MFTP Visitor Pass Plugin",
        description: "Custom WordPress plugin for visitor pass management in gated communities with role-based access and real-time verification",
        technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
        impact: "Manages 500+ visitor passes monthly with 99.8% uptime"
      }
    ],
    testimonials: [
      {
        client: "Enterprise Republic",
        feedback: "Olamide delivered an exceptional WordPress solution that transformed our digital presence and streamlined operations.",
        role: "Operations Manager"
      }
    ],
    cta: "Ready to build your WordPress solution? Let's discuss your project."
  },
  virtual_assistant: {
    id: "virtual-assistant",
    title: "Virtual Assistant",
    slug: "virtual-assistant",
    overview: "Professional virtual assistant services specializing in executive support, schedule management, communication coordination, and event organization for busy professionals and executives.",
    keySkills: [
      "Executive Support",
      "Schedule Management",
      "Email & Communication Management",
      "Meeting Coordination",
      "Event Organization",
      "Research & Analysis",
      "Report Preparation"
    ],
    tools: ["Microsoft Office Suite", "Google Workspace", "Calendly", "Slack", "Zoom"],
    responsibilities: [
      "Managed executives' schedules, prepared reports, and coordinated meetings to keep operations running smoothly",
      "Handled professional emails and correspondence with clients and partners to maintain strong business relationships",
      "Organized virtual events and webinars, ensuring everything ran smoothly from start to finish",
      "Created professional presentations, reports, and branded documents using Microsoft Office and Google Suite",
      "Managed confidential information with discretion and accuracy"
    ],
    testimonials: [
      {
        client: "Executive Client",
        feedback: "Olamide's attention to detail and proactive approach freed up my time to focus on strategic initiatives.",
        role: "C-Level Executive"
      }
    ],
    cta: "Need reliable virtual support? Let's talk about your needs."
  },
  administrative_support: {
    id: "administrative-support",
    title: "Administrative Support",
    slug: "administrative-support",
    overview: "Comprehensive administrative support services including data management, workflow optimization, CRM management, and operational efficiency improvement for organizations of all sizes.",
    keySkills: [
      "Data Management",
      "Workflow Optimization",
      "CRM Administration",
      "Document Management",
      "Scheduling",
      "Vendor Coordination",
      "Quality Assurance"
    ],
    tools: ["Microsoft Office", "Google Suite", "Salesforce", "HubSpot", "Asana", "Monday.com"],
    outcomes: [
      "Streamlined operational workflows reducing manual processes by 40%",
      "Implemented CRM systems improving client management efficiency",
      "Managed vendor relationships and procurement processes",
      "Created standardized documentation and procedures",
      "Coordinated cross-team communications and projects"
    ],
    testimonials: [
      {
        client: "Growing Company",
        feedback: "Olamide's administrative expertise brought order to our operations and improved team productivity significantly.",
        role: "Operations Director"
      }
    ],
    cta: "Optimize your operations? Let's streamline your administrative processes."
  }
};
