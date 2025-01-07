"use client";
// import ConfirmationModal from "@/app/utils/ComfirmationModal";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Comment {
  _id: string;
  content: string;
  author: {
    username: string;
  };
  createdAt: string;
}

const CreateComment = ({ postId }: { postId: string }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState<string | null>(null);
  console.log(isModalOpen);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/comment/${postId}/comments`
        );
        if (!res.ok) throw new Error("Failed to fetch comments");
        const { data } = await res.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
        toast.error("Failed to load comments");
      }
    };

    fetchComments();
  }, [postId]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/api/comment/${postId}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
          body: JSON.stringify({ content: comment }),
        }
      );

      if (!res.ok) throw new Error("Failed to post comment");

      const { data } = await res.json();
      setComments([...comments, data]);
      setComment("");
      toast.success("Comment posted successfully!");
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error("Failed to post comment");
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (comment: Comment) => {
    setEditingCommentId(comment._id);
    setComment(comment.content);
  };

  const openModal = (commentId: string) => {
    setCommentToDelete(commentId);
    setIsModalOpen(true);
  };

  const handleDeleteClick = async () => {
    if (!commentToDelete) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/comment/${commentToDelete}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (!res.ok) throw new Error("Failed to delete comment");

      setComments(
        comments.filter((comment) => comment._id !== commentToDelete)
      );
      toast.success("Comment deleted successfully!");
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("Failed to delete comment");
    } finally {
      setIsModalOpen(false);
      setCommentToDelete(null);
    }
  };

  console.log(handleDeleteClick);

  const handleUpdateComment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/api/comment/${editingCommentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
          body: JSON.stringify({ content: comment }),
        }
      );

      if (!res.ok) throw new Error("Failed to update comment");

      const updatedComment = await res.json();
      setComments(
        comments.map((c) => (c._id === updatedComment._id ? updatedComment : c))
      );
      setComment("");
      setEditingCommentId(null);
      toast.success("Comment updated successfully!");
    } catch (error) {
      console.error("Error updating comment:", error);
      toast.error("Failed to update comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>
      <form
        onSubmit={editingCommentId ? handleUpdateComment : handleCommentSubmit}
        className="mb-6"
      >
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
          placeholder="Write a comment..."
          rows={4}
        />
        <button
          type="submit"
          className={`mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 ${
            loading || !comment.trim() ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading || !comment.trim()}
        >
          {loading
            ? editingCommentId
              ? "Updating..."
              : "Posting..."
            : editingCommentId
            ? "Update Comment"
            : "Post Comment"}
        </button>
      </form>

      <div className="space-y-6">
        {comments?.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li
                key={comment._id}
                className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <strong className="text-lg text-gray-900">
                    {comment.author.username}
                  </strong>
                  <span className="text-gray-500 text-sm">
                    {new Date(comment.createdAt).toLocaleString()}
                  </span>
                </div>
                <p className="mt-2 text-gray-800">{comment.content}</p>
                <div className="mt-3 flex space-x-3">
                  <button
                    onClick={() => handleEditClick(comment)}
                    className="text-blue-600 hover:underline transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => openModal(comment._id)}
                    className="text-red-600 hover:underline transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>

      {/* {isModalOpen && (
                <ConfirmationModal
                    onConfirm={handleDeleteClick}
                    onCancel={() => setIsModalOpen(false)}
                />
            )} */}
    </div>
  );
};

export default CreateComment;
