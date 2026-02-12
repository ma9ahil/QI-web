import { Inter } from "next/font/google"; // <--- Import Inter
import "./globals.css";

// Configure the font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // We will use this variable in Tailwind
  display: "swap",
});

export const metadata = {
  title: "Quantum Ignitions",
  description: "Turning Ideas Into Reality, Fast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Add the font variable to the body class */}
      <body className={`${inter.variable} font-sans antialiased bg-[#020617]`}>
        {children}
      </body>
    </html>
  );
}