import Navbar from "./components/Navbar";
import "../app/globals.css";
import { Luxurious_Roman } from "next/font/google";
const luxurious_init = Luxurious_Roman({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luxurious",
});
export const metadata = {
  title: "Teddy Pascual",
  description: "Web Portfolio of Teddy Pascual",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={luxurious_init.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
