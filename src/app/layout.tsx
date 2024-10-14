import type { Metadata } from "next";

import "./globals.css";
import Providers from "./lib/Providers";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Gretest Pet Care",
  description: "Greate Pet Care Tips , story & tricks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>
          <div>{children}</div>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
