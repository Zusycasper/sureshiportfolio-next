export interface ProjectDetail {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  images: string[];    
  heroVideo?: string;   
  showcaseVideo?: string;
  color: string;
  accentColor: string;
  challenge: string;
  solution: string;
  result: string;
}

export const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: "O&M System",
    shortDescription:
      "A centralized O&M web system integrating multiple power plant subsystems into one unified dashboard.",
    fullDescription:
      "The O&M (Operations & Maintenance) System is an enterprise-grade web application designed to streamline operations across power plants. It consolidates nine critical subsystems—including fuel management, boiler and combustion, turbine, water treatment, condenser, and cooling tower systems—into a single, intuitive dashboard. The platform enables real-time monitoring, task management, and performance analysis, improving efficiency and decision-making for plant operators and engineers.",
    features: [
      "Unified dashboard integrating 9 subsystems",
      "Real-time monitoring and status visualization",
      "Interactive charts and performance analytics",
      "User-based access control and secure login",
      "Task scheduling and progress tracking",
      "Responsive interface for desktop and tablet use",
      "Built with React.js, Tailwind CSS, and Figma-based UI design",
    ],

    technologies: [
      "Figma",
      "draw.io",
      "React",
      "Twailwind CSS",
      "Shadcn UI",
    ],
    images: [
      "/projects/omlogin.png",
      // "/portfolio/om-screenshot-1.jpg"
    ],
    heroVideo: "/portfolio/animation-hero-video/om-web.mp4",
    showcaseVideo: "/portfolio/portfolio-completed-video/om.mp4",
    color: "from-[#FFC857] to-[#E86A92]",
    accentColor: "#2B96A8",
    challenge:
      "Creating smooth, real-time visualizations that respond to audio without impacting performance.",
    solution:
      "Implemented efficient Web Audio API integration with requestAnimationFrame for smooth 60fps animations and optimized canvas rendering.",
    result:
      "Achieved 60fps performance with stunning visual feedback that enhances the listening experience.",
  },
{
  id: 2,
  title: "Lunovate Website",
  shortDescription:
    "A culturally inspired website blending modern design with Sri Lankan art and dark mode aesthetics.",
  fullDescription:
    "Lunovate’s website showcases the company’s identity with a unique design that blends Sri Lankan artistry, Katayam patterns, and symbols of prestige. The site features dark mode, smooth animations, and interactive mouse effects to create a modern yet culturally grounded experience. The design was fully prototyped in Figma and implemented with modern web technologies.",
  features: [
    "Culturally inspired visual design with Katayam motifs",
    "Dark mode and smooth scroll animations",
    "Interactive mouse effects and Spline 3D elements",
    "Responsive layout for all devices",
    "Modern contact form with improved UX",
    "Clear presentation of services and brand values"
  ],
  technologies: [
      "Figma",
    "Spline 3D",
    "Framer Motion",
    "React",
    "Tailwind CSS",
    "HTML/CSS/JS"
  ],
  images: ["/projects/lunohero.png"],
  heroVideo: "/portfolio/animation-hero-video/lunovate-web.mp4",
  showcaseVideo: "/portfolio/portfolio-completed-video/lunovate.mp4",
  color: "from-[#1F1F1F] to-[#3A3A3A]", // darker palette to reflect dark mode
  accentColor: "#FFC857",
  challenge:
    "Designing a site that conveys cultural prestige while remaining modern, interactive, and user-friendly.",
  solution:
    "Combined Figma prototypes with animations via Framer Motion and Spline 3D, using Tailwind CSS for responsive layouts and ensuring dark mode consistency.",
  result:
    "Delivered a visually stunning, responsive website with engaging UX, animations, and cultural authenticity, receiving excellent client feedback."
},
{
  id: 3,
  title: "Metana Learning Platform",
  shortDescription:
    "Redesigned learning platform with a clean, intuitive UI and interactive features.",
  fullDescription:
    "Metana is an educational platform that I redesigned to improve usability, visual hierarchy, and overall user experience. The focus was on creating a clear, responsive interface that allows learners to navigate content efficiently while enjoying subtle interactive enhancements. The redesign was fully planned and prototyped in Figma before implementation.",
  features: [
    "Intuitive navigation and clean UI",
    "Responsive design for desktop and mobile",
    "Enhanced course and project showcases",
    "Interactive elements for engagement",
    "Performance-optimized layouts"
  ],
  technologies: [
      "Figma",
    "Wireframing & Prototyping",
    "UI/UX Design Principles",
    "Responsive Web Design"

  ],
  images: ["/projects/landingpagemetana.png"],
  heroVideo: "/portfolio/animation-hero-video/metana-web.mp4",
  showcaseVideo: "/portfolio/portfolio-completed-video/metana.mp4",
  color: "from-[#2B96A8] to-[#FFC857]",
  accentColor: "#E86A92",
  challenge:
    "Improving UI and usability without losing the original platform’s educational focus and functionality.",
  solution:
    "Redesigned layouts, information architecture, and interactive components in Figma to enhance clarity and engagement while maintaining content integrity.",
  result:
    "Delivered a modern, user-friendly learning experience with higher engagement and positive user feedback."
},
{
  id: 4,
  title: "Coconut Plantations Web Tool",
  shortDescription:
    "Stakeholder dashboard for tracking plantations, revenue, and business performance with interactive analytics.",
  fullDescription:
    "The Coconut Plantations Web Tool is a comprehensive platform built for stakeholders to monitor and manage plantation operations. It tracks financials, plantation locations, crop health, and revenue over time. Users can view detailed transaction histories, generate reports by date, and assess plant performance through interactive graphs. Designed in Figma and developed with React, the platform ensures clarity, usability, and efficient decision-making for plantation management.",
  features: [
    "Financial tracking including cash, investment, and profits",
    "Interactive plantation maps with location details",
    "Plant health and revenue graphs over time",
    "Transaction history filtering by date",
    "Detailed plantation records and analytics",
    "Responsive dashboard for web access"
  ],
  technologies: [
      "Figma",
    "Chart.js",
    "React",
    "TypeScript",
    "ShadCN/UI",
  ],
  images: ["/projects/coconutplantation.png"],
  heroVideo: "/portfolio/animation-hero-video/coco-web.mp4",
  showcaseVideo: "/portfolio/portfolio-completed-video/coco.mp4",
  color: "from-[#FFC857] to-[#2B96A8]",
  accentColor: "#E86A92",
  challenge:
    "Designing a clear, data-rich dashboard that presents complex plantation and financial information effectively for stakeholders.",
  solution:
    "Created modular, interactive charts, tables, and maps in a cohesive design system to simplify data exploration and decision-making.",
  result:
    "Enabled stakeholders to track and manage plantations efficiently, improving operational oversight and financial reporting accuracy."
},
{
  id: 5,
  title: "Maintenance Management System",
  shortDescription:
    "Comprehensive web application designed to streamline plant operations and maintenance workflows.",
  fullDescription:
    "The Maintenance Management System (MMS) is an end-to-end web platform built for CO₂ power plant operations. It enables staff to efficiently manage maintenance tasks, monitor equipment performance, and ensure operational reliability. The system integrates multiple subsystems — from the fuel and boiler system to turbine and utility tracking — into one unified dashboard. Designed in Figma and developed with React and TypeScript, it focuses on usability, speed, and clarity for day-to-day plant activities.",
  features: [
    "Centralized maintenance tracking and task assignment",
    "Equipment status and performance monitoring",
    "Automated report generation and analytics",
    "Role-based access control for employees and administrators",
    "Real-time notifications and maintenance scheduling",
    "Interactive dashboards with data visualization"
  ],
  technologies: [
      "Figma",
    "React",
    "TypeScript",
    "ShadCN/UI",
    "Framer Motion"
  ],
  images: ["/projects/mainlogin.png"],
  heroVideo: "/portfolio/animation-hero-video/report-web.mp4",
  showcaseVideo: "/portfolio/portfolio-completed-video/maintanance.mp4",
  color: "from-[#E86A92] to-[#FFC857]",
  accentColor: "#2B96A8",
  challenge:
    "Designing a reliable and scalable system that supports multiple plant operations while maintaining a clean and intuitive interface.",
  solution:
    "Developed modular, component-based architecture with optimized UI design patterns and strong visual hierarchy for operational clarity.",
  result:
    "System successfully adopted across CO₂ plant operations, improving maintenance response time and internal task coordination."
},
{
  id: 6,
  title: "Amazing Party",
  shortDescription:
    "Vibrant event-planning website blending luxury design with full accessibility compliance.",
  fullDescription:
    "Amazing Party is a visually striking event-planning platform designed for Amazing P&E, a company that delivers unforgettable themed parties and experiences. The website showcases various event packages, customizable themes, and an inspiring gallery to help clients visualize their dream celebrations. While focusing on rich visuals and emotion, the design maintains WCAG AAA accessibility standards, ensuring that creativity and inclusivity coexist beautifully.",
  features: [
    "Event package showcase with details and pricing",
    "Custom theme creation and inspiration gallery",
    "Responsive and fully accessible design",
    "Smooth scroll animations and engaging visuals",
    "Contact and booking integration",
    "Client testimonials and past event highlights"
  ],
  technologies: [
      "Figma",
    "Spline 3D",
    "Canva",
    "Maze",
    "Notion"
  ],
  images: ["/projects/amzinghero.png"],
  heroVideo: "/portfolio/animation-hero-video/amazing-party.mp4",
  showcaseVideo: "/portfolio/portfolio-completed-video/amazing.mp4",
  color: "from-[#2B96A8] to-[#E86A92]",
  accentColor: "#FFC857",
  challenge:
    "Designing a high-impact, visually rich party experience website while ensuring accessibility and usability.",
  solution:
    "Used contrast-tested color palettes, semantic structure, and clear navigation paired with elegant visuals to balance inclusivity and style.",
  result:
    "Delivered a memorable brand experience that increased event inquiries and set a new accessibility standard in the client’s industry."
},
{
  id: 7,
  title: "EduLink Website Redesign",
  shortDescription:
    "User-centered redesign of a learning platform focused on clarity, usability, and accessibility.",
  fullDescription:
    "EduLink is a conceptual redesign of the Global EduLink website, created as part of an academic assignment. The goal was to simplify the learning experience through clean layouts, improved navigation, and intuitive user flows. The redesign prioritizes accessibility and minimal animations to ensure learners can focus on content without distractions. The process involved analyzing existing UX pain points and reimagining the platform to deliver a smoother, more engaging learning experience.",
  features: [
    "Streamlined course discovery flow",
    "Simplified dashboard and navigation",
    "Minimalist and distraction-free layout",
    "Accessible color palette and typography",
    "Optimized for desktop and mobile devices",
    "Improved content hierarchy and readability"
  ],
technologies: [
      "Figma",
  "FigJam", "Adobe Illustrator", "Maze", "Notion", "Miro"],
  images: [
    "/projects/edulinkhome.png",
  ],
  heroVideo: "/portfolio/animation-hero-video/edulink-web.mp4",
  showcaseVideo: "/portfolio/portfolio-completed-video/edulink.mp4",
  color: "from-[#FFC857] to-[#E86A92]",
  accentColor: "#2B96A8",
  challenge:
    "Redesigning a complex learning platform to enhance usability while maintaining visual appeal.",
  solution:
    "Developed a clean and structured design system in Figma with intuitive navigation, accessible typography, and balanced spacing to improve the user experience.",
  result:
    "Delivered a modern redesign concept that improved user engagement and simplified the overall learning journey for diverse audiences.",
},
{
  id: 8,
  title: "Strive Agency Website",
  shortDescription:
    "Creative agency website redesign emphasizing visual storytelling and smooth scroll experiences.",
  fullDescription:
    "The Strive Agency Website is a conceptual redesign project for a Canadian creative agency, crafted entirely in Figma. The goal was to elevate the brand’s digital identity through clean layouts, refined typography, and immersive scroll experiences. The design blends motion-inspired storytelling, balanced white space, and modern visual hierarchy to create a premium agency presence. This project served as a personal exploration into interaction flow, brand positioning, and aesthetic consistency across devices.",
  features: [
    "Scroll-triggered motion-inspired sections",
    "Cinematic hero layout with layered composition",
    "Portfolio and testimonial showcase",
    "Responsive grid design for multiple viewports",
    "Modern typography and color balance",
    "Focus on brand storytelling through layout"
  ],
  technologies: [
      "Figma",
    "Wireframing & Prototyping",
    "UI/UX Design Principles",
    "Responsive Web Design"
  ],
  images: [
    "/projects/strive.png",
  ],
  heroVideo: "/portfolio/animation-hero-video/strive-web.mp4",
  showcaseVideo: "/portfolio/portfolio-completed-video/strive.mp4",
  color: "from-[#E86A92] to-[#2B96A8]",
  accentColor: "#FFC857",
  challenge:
    "Redesigning an agency website concept that balances aesthetics with usability while maintaining performance-focused structure.",
  solution:
    "Used Figma’s interactive prototyping features to craft a visually immersive yet practical user experience that enhances engagement and brand recall.",
  result:
    "Delivered a high-impact design concept that visually elevated the agency’s brand story and established a more modern, engaging digital presence.",
},
{
  id: 9,
  title: "BloomingB",
  shortDescription:
    "A skincare eCommerce website designed for a Korean beauty startup in Nepal, featuring elegant aesthetics and effortless navigation.",
  fullDescription:
    "BloomingB is an eCommerce platform created for a Korean skincare startup based in Nepal. The goal was to design a clean, elegant interface that reflects the brand’s focus on natural beauty and simplicity. Each section of the website features subtle, calming color palettes inspired by Korean aesthetics. The homepage highlights three main product lines — Youth Hydrate, Teen Glow, and Premium Elegance — with an intuitive structure inspired by Rare Beauty’s layout but adapted for a smoother, more focused shopping experience. Users can easily browse products, read reviews, contact the brand directly, and make purchases through the integrated buying portal.",
  features: [
    "Product categorization by skincare type",
    "User reviews and testimonials",
    "Direct contact and inquiry options",
    "Integrated eCommerce buying portal",
    "Custom color palette and layout per page",
    "Minimalist, Korean-inspired visual design"
  ],
  technologies: [
    "Figma",
    "Wireframing & Prototyping",
    "eCommerce UX Research",
    "Responsive Web Design"
  ],
  images: [
    "/projects/bloomingbhero.png",
  ],
  heroVideo: "/portfolio/animation-hero-video/blooming-web.mp4",
  showcaseVideo: "/portfolio/portfolio-completed-video/blooming.mp4",
  color: "from-[#2B96A8] to-[#FFC857]",
  accentColor: "#E86A92",
  challenge:
    "Designing a cohesive and elegant visual identity without a predefined color system or brand guidelines.",
  solution:
    "Created a unique design language using subtle color transitions, clean layouts, and intuitive navigation inspired by premium beauty brands.",
  result:
    "Delivered a visually soothing, user-friendly skincare eCommerce experience that enhanced the brand’s online presence and usability.",
},
{
  id: 10,
  title: "Coconut Plantations Tracker Mobile App",
  shortDescription:
    "A mobile app for coconut farmers to track crop deliveries, payments, and market rates in real time.",
  fullDescription:
    "The Coconut Plantations Tracker Mobile App is designed for farmers partnered with CO2’s renewable energy plantation projects in Thailand. It provides a transparent and user-friendly way to track coconut crop deliveries from harvesting to shipment, view payment records, and monitor live market rates per kilogram. Farmers can access their business history, update personal or company details through an admin view, and manage all transactions without relying on third parties. This app ensures reliability and trust throughout the entire crop lifecycle, from planting to payment.",
  features: [
    "Crop delivery and shipment tracking",
    "Real-time payment and transaction history",
    "Live coconut market rate updates",
    "Farmer dashboard with profile management",
    "Business history and performance analytics",
    "Secure, transparent transaction workflow"
  ],
  technologies: [
      "Figma",
    "Wireframing & Prototyping",
    "Blueprint-based system study",
    "Mobile App UI Design Principles"
  ],
  images: [
    "/projects/Cocomobile.png",
  ],
  heroVideo: "/portfolio/animation-hero-video/coco-MOBILE.mp4",
  showcaseVideo: "/portfolio/portfolio-completed-video/coconut-mob.mp4",
  color: "from-[#FFC857] to-[#2B96A8]",
  accentColor: "#E86A92",
  challenge:
    "Designing a system that clearly visualizes crop transactions and payment flow for farmers while maintaining simplicity and trust.",
  solution:
    "Developed an intuitive mobile interface with clear data visualization for crop tracking, shipment status, and payment records. Designed with farmer usability in mind using Figma wireframes and prototypes.",
  result:
    "Delivered a user-friendly app concept that simplifies crop tracking and payment transparency, improving farmer trust and engagement with CO2’s operations.",
},
{
  id: 11,
  title: "Bahrain Travel Guide",
  shortDescription:
    "A comprehensive travel guide app offering curated itineraries, events, and top destinations for Bahrain tourism.",
  fullDescription:
    "Bahrain Travel Guide is a user-centric mobile app designed for travelers exploring Bahrain. It provides curated journeys, top activities, accommodations, events, and cultural insights. Users can filter experiences by categories such as family, government, business, and entertainment. The app also allows saving favorite events or hotels, making calls, and booking directly, ensuring a seamless travel experience from arrival to departure. The interface incorporates Bahrain’s brand colors and a visually engaging UI to enhance usability and traveler engagement.",
  features: [
    "Curated journey types and itineraries",
    "Top activities, hotels, and event listings",
    "Cultural insights and travel tips",
    "Save favorite events or destinations",
    "Direct call and booking functionality",
    "Responsive and eye-catching UI aligned with Bahrain branding"
  ],
  technologies: [
      "Figma",
    "Canva",
    "Wireframe",
    "Prototype",
  ],
  images: [
    "/projects/bharaingSplashscreen.png",
  ],
  heroVideo: "/portfolio/animation-hero-video/bahrain-mobile.mp4",
  showcaseVideo: "/portfolio/portfolio-completed-video/bahrain.mp4",
  color: "from-[#E86A92] to-[#FFC857]",
  accentColor: "#2B96A8",
  challenge:
    "Integrating travel content, event details, and booking functionality while keeping the UI intuitive and visually aligned with Bahrain’s branding.",
  solution:
    "Designed an engaging, easy-to-navigate interface with category filters, direct booking, and favorite-saving features, combined with real-time API data for hotels, events, and cultural information.",
  result:
    "Provides travelers with a seamless planning experience and supports Bahrain Tourism in promoting activities and accommodations effectively.",
},

{
  id: 12,
  title: "CO2 Innovation",
  shortDescription:
    "Sustainable energy company website promoting renewable innovation and environmental engineering solutions.",
  fullDescription:
    "CO2 Innovation is a renewable energy and environmental engineering company based in Yala, Thailand. Built with WordPress and Elementor, the website reflects the brand’s mission to shape a sustainable future through innovative technology. It showcases services in engineering, software, machine learning, and AI, all tailored to energy and environmental projects. Designed with modern UI, dynamic visuals, and structured navigation, the site delivers a professional and engaging digital presence for an emerging leader in clean energy.",
  features: [
    "Dedicated service and industry sections",
    "Interactive world map displaying global office locations",
    "Weekly news and updates module",
    "Social media integration",
    "Custom graphic design and animations",
    "Admin login and CMS management",
    "Optimized UI for renewable energy branding"
  ],
  technologies: [
    "WordPress",
    "Elementor",
    "PHP",
    "MySQL",
    "JavaScript",
    "CSS3"
  ],
  images: [
    "/projects/co2website.png",
  ],
  heroVideo: "/portfolio/animation-hero-video/co2inno.mp4",
  showcaseVideo: "/portfolio/portfolio-completed-video/cov.mp4",
  color: "from-[#2B96A8] to-[#E86A92]",
  accentColor: "#FFC857",
  challenge:
    "Translating a complex renewable energy brand into a clean, engaging, and informative web experience.",
  solution:
    "Developed a visually cohesive WordPress site with Elementor, featuring custom graphics, an interactive world map, structured service layout, and automated update sections aligned with brand guidelines.",
  result:
    "Recognized as one of the top renewable energy websites in Yala, Thailand, with growing traffic and strong client engagement.",
},

{
  id: 13,
  title: "Luxury Holidays Tours",
  shortDescription:
    "Premium travel experience platform for high-end tourists exploring exclusive destinations across Asia and the UAE.",
  fullDescription:
    "Luxury Holidays Tours is a high-end travel platform built with WordPress, offering curated luxury travel experiences across Asia, Dubai, and the UAE. Designed for affluent travelers, the site highlights exclusive destinations, private villas, yachts, and estates with elegant visuals and a seamless booking experience. It integrates direct booking, live chat, and instant WhatsApp support to create a smooth, personalized journey from inquiry to adventure.",
  features: [
    "Luxury destination listings across Asia and UAE",
    "Exclusive private villas, estates, and islands",
    "Integrated booking and inquiry forms",
    "Live chat and WhatsApp support",
    "High-end visual design with immersive imagery",
    "Responsive and SEO-optimized WordPress setup"
  ],
  technologies: [
    "WordPress",
    "PHP",
    "Elementor",
    "MySQL",
    "JavaScript",
    "Live Chat Integration"
  ],
  images: [
    "/projects/luxaryholiday.png",
  ],
  heroVideo: "/portfolio/animation-hero-video/luxury.mp4",
  showcaseVideo: "/portfolio/portfolio-completed-video/luxv.mp4",
  color: "from-[#FFC857] to-[#2B96A8]",
  accentColor: "#E86A92",
  challenge:
    "Standing out among top-tier travel competitors and curating only the most exclusive luxury experiences.",
  solution:
    "Conducted detailed research on premium destinations and designed a visually rich WordPress site with intuitive navigation and integrated real-time support tools.",
  result:
    "Achieved a 60% higher visitor engagement rate and established a strong online presence in the luxury travel segment.",
},

  {
    id: 14,
title: "TourMan Holidays Website",
shortDescription:
  "A travel and tourism website built to showcase top South Asian destinations with curated itineraries and booking options.",
fullDescription:
  "TourMan Holidays is a modern travel and tourism website designed to inspire and assist travelers in planning their perfect getaway across South Asia. Built on WordPress with Elementor, the site features carefully categorized destinations, accommodations, travel packages, tailor-made tours, and seasonal offers. Each itinerary is crafted to highlight the region’s unique culture, nature, and experiences, making it easy for users to explore, compare, and book their next adventure. The design emphasizes visual storytelling, seamless navigation, and responsive accessibility across all devices.",
features: [
  "Comprehensive destination and accommodation listings",
  "Dynamic travel packages and custom tour builder",
  "Promotional offers and seasonal highlights",
  "Mobile-responsive and SEO-optimized design",
  "Interactive photo galleries and rich destination content",
  "Integrated inquiry and booking forms",
],
technologies: ["WordPress", "Elementor", "Canva", "JavaScript", "CSS3", "HTML5"],
images: ["/projects/tourman.png"],
heroVideo: "/portfolio/animation-hero-video/tourman.mp4",
showcaseVideo: "/portfolio/portfolio-completed-video/tmanv.mp4",
color: "from-[#E86A92] to-[#FFC857]",
accentColor: "#2B96A8",
challenge:
  "Standing out in a highly competitive travel industry while creating a user-friendly site that simplifies itinerary discovery and tour customization.",
solution:
  "Conducted research on top-performing travel sites, curated high-quality destinations and packages, and designed a visually rich, responsive layout optimized for exploration and engagement.",
result:
  "Delivered a polished and competitive travel website that enhanced user engagement, improved itinerary visibility, and positioned TourMan Holidays as a trusted name in South Asian tourism.",
  },
];
