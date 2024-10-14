import AllBlog from "./components/pages/AllBlogs";
import AuthorSection from "./components/pages/home/AuthorSection";
import CategorySection from "./components/pages/home/CategorySection";
import LatestBlog from "./components/pages/home/LatestBlog";
import PetCareSection from "./components/pages/home/PetCareSection";
import TrustSection from "./components/pages/home/TrustSection";

const Posts = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main blog content */}

          {/* Sidebar with Category and Popular Blogs */}
          <div className="hidden md:block p-8">
            {/* Apply sticky positioning with full height */}
            <div className="sticky top-20 space-y-8">
              {/* category section  */}
              <CategorySection />
              <LatestBlog />
            </div>
          </div>
          <div className="col-span-2">
            {" "}
            <AllBlog />
          </div>
        </div>
      </div>

      <div>
        <PetCareSection />
        <AuthorSection />
        <TrustSection />
      </div>
    </>
  );
};

export default Posts;
