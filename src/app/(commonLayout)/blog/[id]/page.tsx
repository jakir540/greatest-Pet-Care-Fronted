// "use client";

import { ThumbsDownIcon, ThumbsUp } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import LatestBlog from "../../components/pages/home/LatestBlog";

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const ProfileAvatar = "https://i.ibb.co.com/KXNrJnf/avatar.jpg";
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

    // const { data, previousPostId, nextPostId } = await res.json();
    const { data } = await res.json();

    return (
      <div className="container mx-auto md:grid grid-cols-3 gap-8 py-10">
        {/* Sidebar with Category and Popular Blogs */}
        <div className="hidden md:block pr-8 py-8">
          <div className="sticky top-20 space-y-8">
            {/* <CategorySlider /> */} category slider
            <LatestBlog />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-2 bg-white shadow-lg rounded-lg px-6 py-8">
          {/* Blog Cover Image */}
          <Image
            height={500}
            width={500}
            src={data.coverImage}
            alt={data.title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg mb-6 shadow-md"
          />
          {/* Blog Title */}
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
            {data.title}
          </h1>
          {/* Author Info */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            {/* Profile Picture */}
            <Link href={`/profile/${data.author._id}`}>
              <Image
                src={data.author.profilePicture || ProfileAvatar}
                alt={data.author.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-gray-200 shadow"
              />
            </Link>

            {/* Author Name and Date */}
            <div>
              <p className="text-lg font-semibold text-gray-700">
                By <span className="text-pink-600">{data.author.name}</span>
              </p>
              <p className="text-gray-500">
                {format(new Date(data.createdAt), "MMMM dd, yyyy")}
              </p>
            </div>
          </div>
          {/* Post Content */}
          <div className="text-gray-700 leading-relaxed space-y-6 mb-8">
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
          {/* Additional Info */}
          <div className="flex justify-between items-center text-sm text-gray-500 py-4 border-t border-b mb-6">
            <p className="font-semibold">Author: {data.author.name}</p>
            <p className="font-semibold">Category: {data.category}</p>
          </div>
          {/* Voting and Comment Count */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-6">
              {/* Like Button */}
              <div className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 cursor-pointer">
                <ThumbsUp className="w-6 h-6" />
                <span className="text-lg">{data.upvotes}</span>
              </div>

              {/* Dislike Button */}
              <div className="flex items-center space-x-1 text-gray-600 hover:text-red-600 cursor-pointer">
                <ThumbsDownIcon className="w-6 h-6" />
                <span className="text-lg">{data.downvotes}</span>
              </div>
            </div>

            {/* Comment Count */}
            <p className="text-sm text-gray-500">
              Comments:{" "}
              <span className="font-semibold">
                {/* {data.comments.length} */}
                length
              </span>
            </p>
          </div>
          {/* Comments Section */}
          {/* <Comments postId={params.id} /> */}
          comments
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
