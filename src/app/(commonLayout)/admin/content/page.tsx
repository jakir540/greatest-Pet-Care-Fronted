"use client";

import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/pages/loadingSpinner";
// import LoadingSkeleton from "../../components/pages/LoadingSkeleton";

interface ContentItem {
  _id: string;
  title: string;
  author: {
    name: string;
  };
  isPublished: boolean;
}

const AdminContentManagement: React.FC = () => {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch user content
  const fetchContent = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://greatest-pet-care-backend.vercel.app/api/post/admin/content",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch content.");
      }
      const data = await response.json();
      setContent(data.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Delete content by ID
  const deleteContent = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `https://greatest-pet-care-backend.vercel.app/api/post/admin/content/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to delete content: ${errorMessage}`);
      }

      // Update state to remove the deleted content
      setContent((prevContent) =>
        prevContent.filter((item) => item._id !== id)
      );
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="md:text-3xl text-2xl text-center font-bold mb-6 text-gray-800">
        Manage User Content
      </h2>
      {content.length > 0 ? (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="p-4 text-left text-sm font-semibold text-gray-700 uppercase">
                  Title
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700 uppercase">
                  Author
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700 uppercase">
                  Published
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {content.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-50">
                  <td className="p-4 text-sm">{item.title}</td>
                  <td className="p-4 text-sm">{item.author.name}</td>
                  <td className="p-4 text-sm">
                    {item.isPublished ? (
                      <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                      <span className="text-red-600 font-semibold">No</span>
                    )}
                  </td>
                  <td className="p-4 text-sm">
                    <button
                      onClick={() => deleteContent(item._id)}
                      className={`px-4 py-2 text-white rounded focus:outline-none transition-all duration-300 ${
                        item.isPublished
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-blue-500 hover:bg-blue-600"
                      }`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600 mt-8">
          No content found.
        </p>
      )}
    </div>
  );
};

export default AdminContentManagement;
