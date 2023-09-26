import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

export const metadata = {
  title: "Kaenova Mahendra Auditama - Data and Machine Learning Engineer",
  description: `Kaenova Mahendra Auditama is a talented 4th-year informatics student with a strong passion for data and machine learning engineering. With expertise in web development and proficiency in programming languages such as Go, Python, and JavaScript, Kaenova excels in building robust applications and integrating frameworks like Next.js and Echo. Collaborative by nature, Kaenova actively seeks opportunities to connect with others and contribute to innovative solutions that improve lives. Discover the possibilities of data-driven innovation with Kaenova Mahendra Auditama. Let's embark on a transformative journey together.`,
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={twMerge(inter.className, "scroll-smooth")}>
      <body>{children}</body>
    </html>
  );
}
