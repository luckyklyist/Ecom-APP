"use client"
import { Navbar } from "ui";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <script src="https://cdn.tailwindcss.com"></script>
          <link href="https://cdn.jsdelivr.net/npm/daisyui@3.5.1/dist/full.css" rel="stylesheet" type="text/css" />
          <script src="https://cdn.tailwindcss.com"></script>
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}
