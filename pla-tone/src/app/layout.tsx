import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GP. | Studio",
  description: "Bespoke Gundam Plamodel Artistry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#eaeaea] text-[#1a1a1a]">
        {children}
      </body>
    </html>
  );
}
