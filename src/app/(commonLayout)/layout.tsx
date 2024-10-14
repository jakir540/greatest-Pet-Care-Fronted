import type { Metadata } from "next";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export const metadata: Metadata = {
  title: "Gretest Pet Care",
  description: "Greate Pet Care Tips , story & tricks",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen"> {children}</div>
      <Footer />
    </div>
  );
}
