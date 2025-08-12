import { useState } from "react";

const BlogList = () => {
  const images = [
    "blogs/b1.webp",
    "blogs/b3.webp",
    "blogs/b5.webp",
    "blogs/b7.webp",
    "blogs/b9.webp",
    "blogs/b10.webp",
    "blogs/b2.webp",
    "blogs/b4.webp",
    "blogs/b6.webp",
    "blogs/b1.webp",
    "blogs/b11.webp",
    "blogs/b12.webp",
    "blogs/b13.webp",
    "blogs/b14.webp",
    "blogs/b15.webp",
    "blogs/b16.webp",
    "blogs/b17.webp",
    "blogs/b18.webp",
    "blogs/b19.webp",
    "blogs/b20.webp",
  ];

  const BLOGS = [
    { id: 1, slug: "blog-1", title: "Which Waterproofing Deck Coating Wins?", image: images[0] },
    { id: 2, slug: "blog-2", title: "How to Fix Peeling or Cracked Waterproof Deck Coatings: Liquid Rubber vs Polyurethane", image: images[1] },
    { id: 3, slug: "blog-3", title: "Why Waterproof Deck Coatings Are Essential for Outdoor Living", image: images[2] },
    { id: 4, slug: "blog-4", title: "Why Waterproofing Balcony Decks Saves You Big Repairs", image: images[3] },
    { id: 5, slug: "blog-5", title: "How Waterproofing Services Protect Your Home from Long-Term Damage", image: images[4] },
    { id: 6, slug: "blog-6", title: "What Is the Difference Between Interior and Exterior Waterproofing Services", image: images[5] },
    { id: 7, slug: "blog-7", title: "Why Summer Is the Best Time to Waterproof Your Property", image: images[6] },
    { id: 8, slug: "blog-8", title: "When Should You Reapply or Upgrade Waterproofing Solutions?", image: images[7] },
    { id: 9, slug: "blog-9", title: "Why Commercial Buildings Need Waterproofing Services", image: images[8] },
    { id: 10, slug: "blog-10", title: "Protecting Your Home: The Importance of Balcony Leak Detection and Repair", image: images[9] },
    { id: 11, slug: "blog-11", title: "Preventing Water Intrusion: The Importance of Balcony Leak Detection", image: images[10] },
    { id: 12, slug: "blog-12", title: "Safety and Aesthetics: The Importance of Timely Pool Decking Repair in Santa Monica", image: images[11] },
    { id: 13, slug: "blog-13", title: "Enjoy Your Deck, Rain or Shine: Waterproofing Tips for Los Angeles Homeowners", image: images[12] },
    { id: 14, slug: "blog-14", title: "DIY vs. Professional Help: Understanding Balcony Deck Repair", image: images[13] },
    { id: 15, slug: "blog-15", title: "Signs of Balcony Deck Damage: When to Consider Balcony Deck Repair", image: images[14] },
    { id: 16, slug: "blog-16", title: "What is Pool Decking", image: images[15] },
    { id: 17, slug: "blog-17", title: "How to Choose the Best Deck Stain", image: images[16] },
    { id: 18, slug: "blog-18", title: "How to Choose the Best Deck Stain", image: images[17] },
    { id: 19, slug: "blog-19", title: "What is Waterproofing", image: images[18] },
    { id: 20, slug: "blog-20", title: "What is Epoxy Flooring", image: images[19] },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  const totalPages = Math.ceil(BLOGS.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = BLOGS.slice(indexOfFirstBlog, indexOfLastBlog);

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <a
                href={`/${blog.slug}`}
                className="inline-block mt-2 text-blue-600 hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded border ${currentPage === 1 ? "text-gray-400 border-gray-300" : "text-blue-600 border-blue-600 hover:bg-blue-50"}`}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 rounded border ${currentPage === index + 1 ? "bg-blue-600 text-white border-blue-600" : "text-blue-600 border-blue-600 hover:bg-blue-50"}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded border ${currentPage === totalPages ? "text-gray-400 border-gray-300" : "text-blue-600 border-blue-600 hover:bg-blue-50"}`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default BlogList;
