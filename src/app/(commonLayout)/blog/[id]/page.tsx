/* eslint-disable @next/next/no-async-client-component */
"use client";

import { ThumbsDownIcon, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import LatestBlog from "../../components/pages/home/LatestBlog";
import CreateComment from "../../components/CreateComment";

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const ProfileAvatar = "https://i.ibb.co/com/KXNrJnf/avatar.jpg";
  try {
    const res = await fetch(
      `https://greatest-pet-care-backend.vercel.app/api/post/${params.id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch post: ${res.statusText}`);
    }

    const { data } = await res.json();

    return (
      <div className="container mx-auto md:grid grid-cols-3 gap-8 py-10">
        {/* Sidebar with Category and Popular Blogs */}
        <div className="hidden md:block pr-8 py-8">
          <div className="sticky top-20 space-y-8">
            <LatestBlog />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-2 bg-white dark:bg-gray-900 shadow-lg rounded-xl px-6 py-8">
          {/* Blog Cover Image */}
          <Image
            height={500}
            width={500}
            src={data?.coverImage}
            alt={data.title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl mb-6 shadow-xl hover:scale-105 transition-all"
          />
          {/* Blog Title */}
          <h1 className="text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            {data.title}
          </h1>
          {/* Author Info */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Link href={`/profile/${data.author._id}`}>
              <Image
                src={
                  data.author.profilePicture?.startsWith("http")
                    ? data.author.profilePicture
                    : ProfileAvatar
                }
                alt={data.author.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-4 border-white shadow-md hover:shadow-xl"
              />
            </Link>
            <div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                By <span className="text-pink-600">{data.author.name}</span>
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {format(new Date(data.createdAt), "MMMM dd, yyyy")}
              </p>
            </div>
          </div>

          {/* Post Content */}
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 mb-8">
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>

          {/* Additional Images (Gallery) */}
          {data.images?.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                More Images
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.images.map((img: string, index: number) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Supplemental Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-all"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="flex justify-between items-center text-sm text-gray-500 py-4 border-t border-b mb-6 dark:text-gray-400 dark:border-gray-700">
            <p className="font-semibold">Author: {data.author.name}</p>
            <p className="font-semibold">Category: {data.category}</p>
          </div>

          {/* Voting and Comment Count */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-6">
              <div className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 cursor-pointer transition-all">
                <ThumbsUp className="w-6 h-6" />
                <span className="text-lg">{data.upvotes}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600 hover:text-red-600 cursor-pointer transition-all">
                <ThumbsDownIcon className="w-6 h-6" />
                <span className="text-lg">{data.downvotes}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Comments:{" "}
              <span className="font-semibold">{data?.comments?.length}</span>
            </p>
          </div>

          {/* Comments Section */}
          <CreateComment postId={params.id} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return (
      <div className="text-center py-10">
        <p className="text-red-600 text-xl font-semibold">
          Error fetching blog details. Please try again later.
        </p>
      </div>
    );
  }
};

export default BlogDetails;
