import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GP. | Gundam Plamodel Portfolio",
  description: "Custom Gundam plamodel portfolio - Build, Customize, Create",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
