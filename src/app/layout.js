import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/components/Headers";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMdb next",
  description: "This is IMdb clone using Next js and Tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Providers>
          <Headers/>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
