/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MenuIcon, XIcon, UserCircleIcon } from "lucide-react";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
// import nextImage from "../../../../assets/logo.png";
import Image from "next/image";
// import ThemeSwitcher from "../pages/ThemeSwitcher";

const Navbar = () => {
  const image = "https://i.ibb.co.com/hsQ7Kb8/logo.png";
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    router.push("/login");
  };

  const handleDashboardRedirect = () => {
    if (user?.role === "admin") {
      router.push("/admin/dashboard"); // Redirect to admin dashboard
    } else if (user?.role === "user") {
      router.push("/user/dashboard"); // Redirect to user dashboard
    }
  };

  const fetchUser = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <nav className="bg-[#FFF9F3] text-[#121416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/">
              <Image
                className="rounded-full"
                src={image}
                alt="Prt logo"
                width={80}
                height={40}
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                >
                  Home
                </Link>
                <Link
                  href="/resources"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            {user && user.role === "user" && (
              <Link
                href="/profile/createPost"
                className="py-2 hidden mr-2 md:flex px-4 bg-[#39835a] text-white rounded-md font-semibold hover:from-red-200 hover:to-red-400"
              >
                Create Post
              </Link>
            )}
            {user ? (
              <div className="relative">
                <div className="md:flex gap-4 justify-center items-center">
                  <button onClick={toggleProfileMenu}>
                    <UserCircleIcon className="h-8 w-8 text-gray-700 hover:text-gray-800" />
                  </button>
                </div>

                {/* Profile dropdown menu */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    {user && user.role === "user" && (
                      <>
                        <Link
                          href="/profile/createPost"
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                        >
                          Create Post
                        </Link>
                        <Link
                          href="/profile/my-post"
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                        >
                          My Post
                        </Link>
                        <Link
                          href="/profile/pdf-generate"
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                        >
                          PDF Generator
                        </Link>
                      </>
                    )}

                    {/* Extra admin links in profile menu */}
                    {user && user.role === "admin" && (
                      <>
                        <button
                          onClick={handleDashboardRedirect}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </button>
                        <Link
                          href="/admin/users"
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                        >
                          User
                        </Link>
                        <Link
                          href="/admin/content"
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                        >
                          Content
                        </Link>
                        <Link
                          href="/admin/payment"
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                        >
                          Payment
                        </Link>
                      </>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium hidden md:flex hover:bg-[#FEF2F2]"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium hidden md:flex hover:bg-[#FEF2F2]"
                >
                  Sign Up
                </Link>
              </>
            )}
            {/* <ThemeSwitcher /> */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-800"
              >
                {isOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
          >
            Blog
          </Link>
          {user ? (
            <>
              <Link
                href="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
              >
                Profile
              </Link>
              <Link
                href="/profile/create-post"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
              >
                Create Post
              </Link>
              <button
                onClick={handleDashboardRedirect}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
              >
                Dashboard
              </button>
              {user.role === "admin" && (
                <>
                  <Link
                    href="/admin/users"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                  >
                    Users
                  </Link>
                  <Link
                    href="/admin/content"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                  >
                    Content
                  </Link>
                  <Link
                    href="/admin/payment"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
                  >
                    Payment
                  </Link>
                </>
              )}
              <button
                onClick={handleLogout}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FEF2F2]"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
