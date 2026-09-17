export const projects = [
  {
    title: "ARISE",
    subtitle: "AR-Integrated Spatial Explorer",
    year: "MAY 2026",
    category: "CAPSTONE",
    description:
      "An Android augmented-reality indoor navigation system combining marker-assisted navigation, contextual information, and a web-based administration system.",
    technologies: ["KOTLIN", "ARCORE", "DJANGO", "MYSQL"],
    featured: true,

    showStudy: true,
    studyHref: "#",
  },

  {
    title: "The Valley Digital",
    subtitle: "Online News Platform",
    year: "FEB 2025",
    category: "WEB APPLICATION",
    description:
      "An online news platform built with a React frontend and Django REST backend, supporting content publishing, media management, search, and deployment on AWS EC2.",
    technologies: ["DJANGO", "REACT", "AWS EC2", "REST API"],
    featured: true,

    showStudy: false,
    studyHref: "#",
  },

  {
    title: "DILG-CAR Recruitment Portal",
    subtitle: "Recruitment and Placement Portal",
    year: "JUL 2025",
    category: "WEB APPLICATION",
    description:
      "A recruitment and placement portal developed during a web development internship, covering applicant registration, PDS and WES generation, examinations, administration, and recruitment workflows.",
    technologies: ["LARAVEL", "PHP", "MYSQL", "TAILWIND CSS"],
    featured: true,

    showStudy: false,
    studyHref: "#",
  },

  {
    title: "IoT Hand-Gesture Robotic Arm",
    subtitle: "Gesture-Controlled Robotic System",
    year: "MAY 2025",
    category: "IOT / ROBOTICS",
    description:
      "A robotic arm controlled through smartphone motion data over Wi-Fi, using a Raspberry Pi Flask server to process accelerometer and gyroscope input and translate it into movement commands.",
    technologies: ["PYTHON", "FLASK", "RASPBERRY PI", "IOT"],
    featured: true,

    showStudy: false,
    studyHref: "#",
  },

  {
    title: "Hand-Gesture Controlled Remote Control Car",
    subtitle: "Wireless Gesture-Controlled Vehicle",
    year: "APR 2025",
    category: "EMBEDDED SYSTEM",
    description:
      "A wireless remote-control car that translates hand movement into vehicle commands using an Arduino-based controller and NRF24L01 wireless communication.",
    technologies: ["C++", "ARDUINO", "NRF24L01"],
    featured: true,

    showStudy: false,
    studyHref: "#",
  },

  {
    title: "Study & Quiz Management System",
    subtitle: "Study and Assessment Platform",
    year: "2025",
    category: "WEB APPLICATION",
    description:
      "A web-based study and quiz management system with study materials, assessment functionality, administrative controls, and a responsive interface.",
    technologies: ["PHP", "LARAVEL", "SQLITE", "TAILWIND CSS"],
    featured: true,

    showStudy: false,
    studyHref: "#",
  },

  {
    title: "Wireless Worms 2.0",
    subtitle: "Vermiculture Monitoring System",
    year: "MAY 2024",
    category: "IOT / MOBILE",
    description:
      "An IoT-based vermiculture monitoring system combining an Android application, Firebase, and ESP8266 hardware to monitor environmental conditions and provide threshold-based notifications.",
    technologies: ["JAVA", "FIREBASE", "ESP8266", "IOT"],
    featured: true,

    showStudy: false,
    studyHref: "#",
  },
] as const;