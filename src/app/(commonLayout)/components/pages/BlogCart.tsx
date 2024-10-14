"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IBlog } from "@/app/utils/types";

const BlogCart = ({ blog }: { blog: IBlog }) => {
  const ProfileAvatar = "https://i.ibb.co.com/KXNrJnf/avatar.jpg";
  console.log({ blog });

  const [truncatedContent, setTruncatedContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    const truncateContent = (content: string, maxLength: number) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = content;
      const plainText = tempDiv.textContent || "";
      return plainText.length > maxLength
        ? `${plainText.substring(0, maxLength)}...`
        : plainText;
    };

    setTruncatedContent(truncateContent(blog.content, 180));
  }, [blog.content]);

  const handleReadMore = () => {
    if (blog.isPremium) {
      const confirmPayment = window.confirm(
        "This content is premium and requires payment. Would you like to proceed?"
      );
      if (confirmPayment) {
        router.push(`/payment?postId=${blog._id}`);
      }
    } else {
      router.push(`/blog/${blog._id}`);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 flex flex-col md:flex-row mb-6">
      <div className="md:w-1/3 w-full mb-4 md:mb-0">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={150}
          height={150}
          className="rounded-lg object-cover w-full h-40 md:h-full"
        />
      </div>

      <div className="md:w-2/3 w-full pl-0 md:pl-4 flex flex-col justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          {blog.title}
          {blog.isPremium && (
            <span className="ml-2 bg-yellow-500 text-white text-xs font-bold px-2 rounded">
              Premium
            </span>
          )}
        </h2>

        <div className="flex items-center gap-3 mb-3">
          <Link href={`/profile/${blog.author._id}`}>
            <Image
              src={blog.author.profilePicture || ProfileAvatar}
              alt={blog.author.name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            image
          </Link>
          <p className="text-gray-600 font-bold">
            By <span className="text-[#F44A72]">{blog.author.name}</span>
          </p>
          <p className="text-gray-500 font-medium">
            {format(new Date(blog.createdAt), "MMMM dd, yyyy")}
          </p>
        </div>

        <p className="text-gray-700 mb-4 font-medium">{truncatedContent}</p>

        <div className="flex justify-between items-center mt-auto">
          <button
            onClick={handleReadMore}
            className="py-2 px-4 bg-[#39835a] text-white rounded-md font-semibold  focus:outline-none focus:ring-2  transition"
          >
            Read More
          </button>

          <div className="flex items-center text-gray-600 space-x-3">
            <div className="flex items-center">
              <ThumbsUp className="w-5 h-5 mr-1" />
              <span>{blog.upvotes}</span>
            </div>
            <div className="flex items-center">
              <ThumbsDown className="w-5 h-5 mr-1" />
              <span>{blog.downvotes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
