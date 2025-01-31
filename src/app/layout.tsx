import type { Metadata } from "next";
import { Montserrat, Pacifico } from "next/font/google";
import './globals.scss';

const bodyFont = Montserrat({
  subsets: ["latin"],
  variable: '--font-body',
  weight: ['200', '400', '600'],
});

const headerFont = Pacifico({
  subsets: ["latin"],
  variable: '--font-header',
  weight: '400',
});

export const metadata: Metadata = {
  title: "Michelle LeBlanc | Web Development Director | Senior Frontend Engineer",
  description: "Welcome to the portfolio of Michelle LeBlanc, a Web Development Director with extensive experience in frontend development and UI/UX design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headerFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
