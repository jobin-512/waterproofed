import { useState } from "react";

const BlogList = () => {
  const images = [
    "blogs/b1.jpg",
    "blogs/b2.jpg",
    "blogs/b3.jpg",
    "blogs/b4.jpg",
    "blogs/b5.jpg",
    "blogs/b6.jpg",
    "blogs/b7.jpg",
    "blogs/b8.jpg",
    "blogs/b9.jpg",
    "blogs/b10.jpg",
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
    "blogs/b21.jpg",
  ];

  const BLOGS = [
    { id: 25, path: "/blogs/Why-Waterproofing-Is-Your-Best-DefenseAgainst-Mold-in-Southern-California", title: "Why Waterproofing Is Your Best Defense Against Mold in Southern California", image: images[20] },
    { id: 24, path: "/blogs/How-an-Under-Deck-Waterproofing-System-Protects-Your-Home-in-Hollywood", title: "How an Under-Deck Waterproofing System Protects Your Home in Hollywood", image: images[4] },
    { id: 23, path: "/blogs/Stop-Weather-Damage-with-LA-Roof-Deck-Waterproofing", title: "Stop Weather Damage with LA Roof Deck Waterproofing", image: images[3] },
    { id: 22, path: "/blogs/Sant-Monica-Homeowner-Waterproof-Your-Patio-Deck-Now", title: "Sant Monica Homeowners: Waterproof Your Patio Deck Now!", image: images[2] },
    { id: 21, path: "/blogs/Protect-Your-Home-with-Balcony-Roof-Deck-Waterproofing-in-Santa-Monica", title: "Protect Your Home with Balcony & Roof Deck Waterproofing in Santa Monica", image: images[1] },
    { id: 1, path: "/blogs/Which-Waterproofing-Deck-Coating-Wins", title: "Which Waterproofing Deck Coating Wins?", image: images[0] },
    { id: 2, path: "/blogs/How-to-Fix-Peeling-or-Cracked-Waterproof-Deck-Coatings-Liquid-Rubber-vs-Polyurethane", title: "How to Fix Peeling or Cracked Waterproof Deck Coatings: Liquid Rubber vs Polyurethane", image: images[1] },
    { id: 3, path: "/blogs/Why-Waterproof-Deck-Coatings-Are-Essential-for-Outdoor-Living", title: "Why Waterproof Deck Coatings Are Essential for Outdoor Living", image: images[2] },
    { id: 4, path: "/blogs/Why-Waterproofing-Balcony-Decks-Saves-You-Big-Repairs", title: "Why Waterproofing Balcony Decks Saves You Big Repairs", image: images[3] },
    { id: 5, path: "/blogs/How-Waterproofing-Services-Protect-Your-Home-from-Long-Term-Damage", title: "How Waterproofing Services Protect Your Home from Long-Term Damage", image: images[4] },
    { id: 6, path: "/blogs/What-Is-the-Difference-Between-Interior-and-Exterior-Waterproofing-Services", title: "What Is the Difference Between Interior and Exterior Waterproofing Services", image: images[5] },
    { id: 7, path: "/blogs/Why-Summer-Is-the-Best-Time-to-Waterproof-Your-Property", title: "Why Summer Is the Best Time to Waterproof Your Property", image: images[6] },
    { id: 8, path: "/blogs/When-Should-You-Reapply-or-Upgrade-Waterproofing-Solutions", title: "When Should You Reapply or Upgrade Waterproofing Solutions?", image: images[7] },
    { id: 9, path: "/blogs/Why-Commercial-Buildings-Need-Waterproofing-Services", title: "Why Commercial Buildings Need Waterproofing Services", image: images[8] },
    { id: 10, path: "/blogs/Protecting-Your-Home-The-Importance-of-Balcony-Leak-Detection-and-Repair", title: "Protecting Your Home: The Importance of Balcony Leak Detection and Repair", image: images[9] },
    { id: 11, path: "/blogs/Preventing-Water-Intrusion-The-Importance-of-Balcony-Leak-Detection", title: "Preventing Water Intrusion: The Importance of Balcony Leak Detection", image: images[10] },
    { id: 12, path: "/blogs/Safety-and-Aesthetics-The-Importance-of-Timely-Pool-Decking-Repair-in-Santa-Monica", title: "Safety and Aesthetics: The Importance of Timely Pool Decking Repair in Santa Monica", image: images[11] },
    { id: 13, path: "/blogs/Enjoy-Your-Deck-Rain-or-Shine-Waterproofing-Tips-for-Los-Angeles-Homeowners", title: "Enjoy Your Deck, Rain or Shine: Waterproofing Tips for Los Angeles Homeowners", image: images[12] },
    { id: 14, path: "/blogs/DIY-vs-Professional-Help-Understanding-Balcony-Deck-Repair", title: "DIY vs. Professional Help: Understanding Balcony Deck Repair", image: images[13] },
    { id: 15, path: "/blogs/Signs-of-Balcony-Deck-Damage-When-to-Consider-Balcony-Deck-Repair", title: "Signs of Balcony Deck Damage: When to Consider Balcony Deck Repair", image: images[14] },
    { id: 16, path: "/blogs/What-is-Pool-Decking", title: "What is Pool Decking", image: images[15] },
    { id: 17, path: "/blogs/The-Benefits-of-Professional-Deck-Sealant-for-Long-Term-Deck-Protection", title: "The Benefits of Professional Deck Sealant for Long-Term Deck Protection", image: images[16] },
    { id: 18, path: "/blogs/How-to-Choose-the-Best-Deck-Stain", title: "How to Choose the Best Deck Stain", image: images[17] },
    { id: 19, path: "/blogs/What-is-Waterproofing", title: "What is Waterproofing", image: images[18] },
    { id: 20, path: "/blogs/What-is-Epoxy-Flooring", title: "What is Epoxy Flooring", image: images[19] },
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
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <a
                href={blog.path}
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
