/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    router.push("/login");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const getLinkClassName = (path: string) => {
    const baseClass =
      "flex items-center px-4 py-2 rounded transition duration-200";
    const activeClass = "text-white bg-blue-600"; // Active link style
    const inactiveClass = "text-gray-700 hover:bg-gray-200"; // Inactive link style
    return pathname === path
      ? `${baseClass} ${activeClass}`
      : `${baseClass} ${inactiveClass}`;
  };

  return (
    <div className="fixed w-64 h-full bg-gradient-to-b from-blue-100 to-blue-300 shadow-md">
      <div className="mt-6 text-center">
        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>
      <nav className="mt-4">
        <Link href="/admin" className={getLinkClassName("/admin")}>
          Dashboard
        </Link>
        <Link href="/profile" className={getLinkClassName("/admin/profile")}>
          Profile
        </Link>
        <Link href="/admin/users" className={getLinkClassName("/admin/users")}>
          Users
        </Link>
        <Link
          href="/admin/content"
          className={getLinkClassName("/admin/content")}
        >
          Content
        </Link>
        <Link
          href="/admin/payment"
          className={getLinkClassName("/admin/payment")}
        >
          Payment
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
