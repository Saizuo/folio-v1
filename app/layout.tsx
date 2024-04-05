import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Saizuo",
  description:
    "Innovative Young Technologist working on projects, currently working at magnimont. Focused on interfaces and experiences, working remotely from New Delhi, India.",
  generator: "Next.js",
  applicationName: "Saizuo",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Saizuo",
    description:
      "An innovative young technologist, currently engaged with Magnimont, diligently works on various projects with a focus on interfaces and user experiences. Operating remotely from New Delhi, India, this individual is committed to delivering exceptional results.",
    url: "",
    siteName: "",
    images: [
      {
        url: "https://raw.githubusercontent.com/Saizuo/Saizuo/main/image%2011.png",
        width: 1200,
        height: 630,
        alt: "Saizuo",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saizuo",
    description:
      "Innovative Young Technologist working on projects, currently working at magnimont. Focused on interfaces and experiences, working remotely from New Delhi, India.",
    creator: "Saizuo",
    creatorId: "1243720976552144897",
    images: [
      "https://raw.githubusercontent.com/Saizuo/Saizuo/main/image%2011.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#000000] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
