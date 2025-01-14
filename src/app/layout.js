import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navber";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Node secend project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar></Navbar>

        {children}
      </body>
    </html>
  );
}
