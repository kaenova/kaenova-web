export interface Project {
  title: string;
  description: string;
  stack?: string[];
  href?: string;
}

export const projects: Project[] = [
  {
    title: "Astabyte",
    description:
      "Unlock your business potential with AstaByte Consulting. We offer expert IT consulting services, including web and mobile app development, product design, and market research. Trusted by many businesses. Contact us for a free consultation!",
    href: "https://astabyte.id",
  },
  {
    title: "Kerjago",
    description:
      "Elevate your career prospects with expert CV reviews, mock interviews, and comprehensive feedback. Connect with seasoned professionals, enhance your job market readiness, and pursue your dream career confidently. Join us today to unlock your potential!",
    href: "https://kerjago.id",
  },
  {
    title: "Omah Waris",
    description:
      "Experience comfort and affordability at Omah Waris in Yogyakarta. Enjoy clean, fully air-conditioned rooms with 24-hour check-in and free Wi-Fi. Book effortlessly through trusted partners like Agoda and Tiket.com for a delightful stay.",
    href: "https://omahwaris.my.id",
  },
  {
    title: "Headline Detector",
    description:
      "Detect headlines amidst noisy social media data with an accuracy of 99.21%, thanks to our IndoBERTweet model, which outperforms CNN and fastText models. Easily identify and extract crucial information with our efficient tool.",
    href: "https://huggingface.co/kaenova/headline_detector",
  },
  {
    title: "Halliu",
    description:
      "A small-scaled application to share and stream your best moments to the world. It allows users to upload videos, do live streaming, and offers various peripheral features.",
    stack: [
      "Next.js",
      "DaisyUI",
      "Node.js",
      "Express",
      "Sequelize",
      "Nginx RTMP Modules",
      "Scikit-learn",
      "FastAPI",
      "GitHub Actions",
      "Docker-compose",
    ],
    href: "https://halliu.kaenova.my.id",
  },
  {
    title: "HotelBli!",
    description:
      "A hotel recommendation application built with 5 different types of algorithms to provide users with the best experiences for staying in Bali. It covers 100 Bali's hotels from different residences, offering a complete Bali experience and culture.",
    stack: [
      "Continuous Integration and Continuous Delivery (CI/CD)",
      "Docker",
      "Machine Learning",
    ],
    href: "https://github.com/CC22-HO01-TravelokaSigapore-HotelRanks",
  },
  {
    title: "Travelliu",
    description:
      "A multi-platform application for users to share their hiking experiences in Indonesian mountains. It provides web and mobile integration for ease of use.",
    stack: [
      "Continuous Integration and Continuous Delivery (CI/CD)",
      "Docker",
      "Next.js",
      "Machine Learning",
    ],
    href: "https://travelliu.yaudahlah.my.id/",
  },
  {
    title: "Antri.In",
    description:
      "An open-source, localized, and easy-to-implement queue management system. It allows integration with private networks and provides access to everyone.",
    stack: [
      "Go (Programming Language)",
      "Continuous Integration and Continuous Delivery (CI/CD)",
      "Docker",
      "Next.js",
    ],
    href: "https://antriin.kaenova.my.id",
  },
  {
    title: "iTalase",
    description:
      "A mobile application for small and medium businesses to help manage stock records, transactions, and debts with flexible automated reporting.",
    stack: [
      "Go (Programming Language)",
      "Continuous Integration and Continuous Delivery (CI/CD)",
      "Docker",
    ],
    href: "https://gitlab.com/kaenova/italase-backend",
  },
];
