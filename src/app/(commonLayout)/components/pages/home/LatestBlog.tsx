/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

const LatestBlog = async () => {
  try {
    const res = await fetch(
      "https://greatest-pet-care-backend.vercel.app/api/post/",
      {
        cache: "no-store",
      }
    );

    // Log the API response to debug
    const { data: blogs } = await res.json();
    console.log("blogs", blogs);

    return (
      <div className="container mx-auto border border-gray-200 p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Latest Blog </h1>

        <div className="space-y-6">
          {Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.slice(0, 2).map((blog: any) => (
              <Link key={blog._id} href={`/blog/${blog._id}`}>
                <div className="flex gap-4 items-start p-4 rounded-lg hover:bg-gray-100 transition-shadow duration-200 ease-in-out border border-gray-200 shadow-md hover:shadow-lg cursor-pointer">
                  {/* Blog Image */}
                  <div className="w-1/3 overflow-hidden rounded-lg shadow-sm">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      width={150}
                      height={150}
                      className="object-cover w-full h-full transition-transform transform hover:scale-105"
                    />
                  </div>

                  {/* Blog Details */}
                  <div className="w-2/3 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-700 transition-colors duration-200">
                      {blog.title}
                    </h2>

                    <p className="text-gray-600 font-bold mt-2">
                      By{" "}
                      <span className="text-[#39835a]">{blog.author.name}</span>
                    </p>

                    <p className="text-gray-500 text-sm">
                      {format(new Date(blog.createdAt), "MMMM dd, yyyy")}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center text-red-500">
        <p>Failed to load blogs. Please try again later.</p>
      </div>
    );
  }
};

export default LatestBlog;
