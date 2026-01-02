
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
  professional_summary: "Versatile and results-driven Full-Stack Web Developer & Digital Solutions Specialist with expertise in WordPress custom theme development, e-commerce solutions, and operational workflow optimization. Proven ability to architect dynamic CMS systems using Advanced Custom Fields (ACF), develop responsive mobile-first designs, and integrate WooCommerce for scalable online stores. Combines technical proficiency in PHP, HTML5, CSS3, and JavaScript with strong project coordination skills to deliver comprehensive digital solutions—from custom WordPress development and graphic design to virtual executive assistance and CRM management.",
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
      period: "October 2022 – Present",
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
      period: "Ongoing",
      achievements: [
        "Created WordPress websites from scratch, set up online stores, and moved existing sites to new platforms",
        "Built mobile-friendly online store WordPress websites from design mockups",
        "Kept WordPress sites running smoothly by fixing problems, speeding them up, and improving security",
        "Created logos, marketing materials, and social media graphics for client brands"
      ]
    },
    {
      position: "Freelance Executive/Virtual Assistant",
      company: "Multiple Clients",
      location: "Remote",
      period: "Ongoing",
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
      links: {
        live_demo: "https://ecomassign.42web.io/",
        source_code: "https://github.com/Osam-74/shopco-acf",
        video_demo: "https://www.loom.com/share/d1550917e12745bb8f5904d47e67500c"
      }
    },
    {
      name: "Custom Event Management System",
      description: "Scalable QR-based guest check-in system for large events (1000+ attendees) with registration management and real-time reporting",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "QR Technology"]
    },
    {
      name: "E-commerce & POS Integration",
      description: "Complete sales platform for small vendors featuring product management, customer sales tracking, and point-of-sale integration",
      technologies: ["WordPress", "WooCommerce", "Custom PHP", "Inventory Management"]
    },
    {
      name: "Enterprise Website Migrations",
      description: "Multiple seamless site migrations with DNS configuration and post-migration optimization",
      technologies: ["cPanel", "DNS Management", "MySQL", "WordPress"]
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
