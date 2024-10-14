/* eslint-disable @typescript-eslint/no-explicit-any */
// app/AllBlog.tsx (Assuming this is under the `app` directory in Next.js)

import BlogCart from "./BlogCart";

const AllBlog = async () => {
  let blogs = [];
  let error: string | null = null;

  try {
    const res = await fetch(
      "https://greatest-pet-care-backend.vercel.app/api/post/",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await res.json();
    console.log({ data });

    // Check if data is in the expected format
    if (Array.isArray(data.data)) {
      blogs = data.data; // Assign fetched blogs
    } else {
      throw new Error("Data format is invalid");
    }
  } catch (err: any) {
    error = err.message || "Failed to load blogs.";
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  const renderBlogSection = (startIndex: number, endIndex: number) => {
    const sectionBlogs = blogs.slice(startIndex, endIndex);
    console.log({ sectionBlogs });
    return sectionBlogs.length > 0 ? (
      <div className="grid grid-cols-1 gap-6">
        {sectionBlogs.map((blog: any) => (
          <BlogCart key={blog._id} blog={blog} />
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-600">No blogs available</p>
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* First section of blogs */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
        {renderBlogSection(0, 3)}
      </section>

      {/* Second section of blogs */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">More Blogs</h2>
        {renderBlogSection(3, 6)}
      </section>
    </div>
  );
};

export default AllBlog;
