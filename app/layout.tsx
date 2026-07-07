import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  EB_Garamond,
  Parisienne,
  Cinzel,
  Poppins,
} from "next/font/google";

import "./globals.css";

const hero = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-hero",
});

const letter = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-letter",
});

const script = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const birthday = Cinzel({
  subsets: ["latin"],
  variable: "--font-birthday",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Happy Birthday ❤️",
  description: "A cinematic birthday surprise made with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${hero.variable}
          ${letter.variable}
          ${script.variable}
          ${birthday.variable}
          ${body.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}