import "./globals.css";
import { Playfair_Display, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Luis Mercado | Software Engineer",
  description: "Software Engineer based in Sydney Australia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
