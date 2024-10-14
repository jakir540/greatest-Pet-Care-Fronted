/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners"; // For loader

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Tip");
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const postData = { title, coverImage, content, isPremium, category };

    if (!title || !coverImage || !content.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("authToken")
          : null;
      if (!token) {
        throw new Error("No authentication token found.");
      }
      const response = await axios.post(
        "https://greatest-pet-care-backend.vercel.app/api/post/",
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log({ response });
      toast.success("Post created successfully!");
      setTitle("");
      setContent("");
      setCategory("Tip");
      setCoverImage("");
      setIsPremium(false);
      setError("");
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to create post. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image", "code-block"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "background",
    "align",
    "code-block",
  ];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create a New Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-medium mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Enter post title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-medium mb-2"
              htmlFor="coverImage"
            >
              Cover Image URL
            </label>
            <input
              type="text"
              placeholder="Paste cover image URL"
              id="coverImage"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-medium mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              className="h-48"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-medium mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Tip">Tip</option>
              <option value="Story">Story</option>
            </select>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={isPremium}
              onChange={(e) => setIsPremium(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600 rounded"
            />
            <label className="ml-3 text-gray-700 text-lg">
              Premium Content
            </label>
          </div>

          {error && <p className="text-red-600 font-medium">{error}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-[#39835a] text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? (
                <ClipLoader color="#ffffff" size={20} />
              ) : (
                "Create Post"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
