import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SNEAKER LAB | Premium Kicks",
  description: "Premium sneaker shopping - Upgrade your style with trendy kicks",
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
