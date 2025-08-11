import { Link } from '@tanstack/react-router'

export default function Testimonial() {
  return(
    <>
    {/* Testimonials Section */}
    <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#00A7E8] font-semibold text-sm uppercase tracking-wide mb-2">
              Testimonials
            </p>
            <h2 className="text-4xl font-bold text-gray-800">
              What Our Customer Says?
            </h2>
          </div>
          
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Testimonial Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gray-300 text-4xl font-serif">
                ""
              </div>
              
              {/* Customer Info */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="/t4.webp" 
                    alt="Ethan David" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Ethan David</h3>
                  <p className="text-[#00A7E8] text-sm">UI/UX Designer</p>
                </div>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6">
                Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets. Distinctively productize.
              </p>
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Bottom Accent Line */}
              <div className="h-1 bg-[#00A7E8] rounded-full"></div>
            </div>
            
            {/* Testimonial Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gray-300 text-4xl font-serif">
                ""
              </div>
              
              {/* Customer Info */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="/t5.webp" 
                    alt="Mason Robert" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Mason Robert</h3>
                  <p className="text-[#00A7E8] text-sm">UI/UX Designer</p>
                </div>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6">
                Enthusiastically matrix visionary e-commerce after enterprise-wide collaboration and idea-sharing. Objectively administrate bleeding-edge best practices through interactive niche markets. Distinctively productize.
              </p>
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Bottom Accent Line */}
              <div className="h-1 bg-[#00A7E8] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>


    {/* New banner */}
    <section className="relative w-full h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/banner.webp" 
            alt="Construction workers on roof" 
            className="w-full h-full object-cover"
          />
          {/* Dark Blue Overlay */}
          <div className="absolute inset-0  bg-opacity-70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          {/* Phone Number */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <svg className="w-6 h-6 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-[#00A7E8] font-semibold text-xl">+1 (310) 569-3129</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            The industry's waterproofing leader that has been installing waterproofing and deck coatings.
          </h1>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog" className="bg-[#00A7E8] hover:bg-[#0095d1] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              BOOK A ONLINE
            </Link>
            <Link to="/blog" className="border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="w-full bg-white py-16 relative">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-100 rounded-full opacity-30"></div>
        
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#00A7E8] font-semibold text-sm uppercase tracking-wide mb-2">
              Blogs
            </p>
            <h2 className="text-4xl font-bold text-gray-800">
              Our Latest News And Articles
            </h2>
          </div>
          
          {/* Blog Post Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Date Tag */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-[#00A7E8] text-white text-sm font-semibold px-3 py-1 rounded">
                July 15, 2025
                </div>
                <img 
                  src="/blogs/b1.webp" 
                  alt="Paint roller and tray on textured wall" 
                  className="w-full h-48 object-cover"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                
                {/* Title */}
                <h3 className="font-bold text-gray-800 text-lg mb-4 leading-tight">
                Which Waterproof Deck Coating Wins?
                </h3>
                
                {/* Read More Button */}
                <Link to="/blog" className="w-full bg-[#00A7E8] hover:bg-[#0095d1] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center">
                  READ MORE
                </Link>
              </div>
            </div>
            
            {/* Blog Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Date Tag */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-[#00A7E8] text-white text-sm font-semibold px-3 py-1 rounded">
                July 15, 2025
                </div>
                <img 
                  src="/blogs/b2.webp" 
                  alt="Construction workers applying coating to roof" 
                  className="w-full h-48 object-cover"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                
                {/* Title */}
                <h3 className="font-bold text-gray-800 text-lg mb-4 leading-tight">
                How to Fix Peeling or Cracked Waterproof Deck Coatings: Liquid Rubber vs Polyurethane
                </h3>
                
                {/* Read More Button */}
                <Link to="/blog" className="w-full bg-[#00A7E8] hover:bg-[#0095D1] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center">
                  READ MORE
                </Link>
              </div>
            </div>
            
            {/* Blog Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Date Tag */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-[#00A7E8] text-white text-sm font-semibold px-3 py-1 rounded">
                  July 15, 2025
                </div>
                <img 
                  src="/blogs/b3.webp" 
                  alt="Person using trowel to spread self-leveling compound" 
                  className="w-full h-48 object-cover"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-bold text-gray-800 text-lg mb-4 leading-tight">
                Why Waterproof Deck Coatings Are Essential for Outdoor Living
                </h3>
                
                {/* Read More Button */}
                <Link to="/blog" className="w-full bg-[#00A7E8] hover:bg-[#0095D1] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center">
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}