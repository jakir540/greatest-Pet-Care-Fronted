/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import AdminSidebar from "../components/pages/AdminSidebar";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import jwt from "jsonwebtoken"; // Correctly import jsonwebtoken

export default function AdminDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isAdmin, setIsAdmin] = useState(false);

  // useEffect(() => {
  //   const authToken = localStorage.getItem("authToken");

  //   if (!authToken) {
  //     toast.info("You need to log in to access this page.", {
  //       onClose: () => {
  //         router.push("/login"); // Redirect to login
  //       },
  //     });
  //     setIsLoading(false);
  //     return; // Exit early if no token
  //   }

  //   try {
  //     const decodedToken = jwt.decode(authToken); // Use jwt.decode to decode the token
  //     const userRole = decodedToken?.role; // Use optional chaining to safely access role

  //     if (userRole !== "admin") {
  //       toast.error("Admin access only.");
  //       router.push("/"); // Redirect to home or another appropriate page
  //     } else {
  //       setIsAdmin(true);
  //     }
  //   } catch (error) {
  //     toast.error("Error decoding token. Please log in again.");
  //     router.push("/login"); // Redirect to login if there's an error
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, []); // Run only once when the component mounts

  // if (isLoading) {
  //   return <div>Loading...</div>; // Consider adding a spinner here
  // }

  // if (!isAdmin) {
  //   return null; // Alternatively, you can return a message or redirect
  // }

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <div className="flex flex-col flex-1 ml-64">
        <main className="flex-1 overflow-y-auto p-8 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
