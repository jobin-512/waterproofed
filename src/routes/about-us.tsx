import { createFileRoute } from '@tanstack/react-router'
import Testimonial from '../components/testimonial'

export const Route = createFileRoute('/about-us')({
  component: About,
})

function About() {
  return(
    <>
    <div className="relative w-full h-[500px] lg:h-[750px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-1.webp')"
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Main Content - Centered */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About Us
            </h1>
            
            {/* Paragraph Text */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Intrinsicly predominate backward-compatible potentialities without alternative total linkage. Interactively fabricate cross-unit growth strategies.
            </p>
          </div>
        </div>
      </div>

      {/* About Southern California Decking Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Column - Visuals and Statistics */}
            <div className="lg:w-1/2 relative">

              {/* Main Image */}
              <div className="relative z-10 mb-6">
                <img 
                  src="/about2.webp" 
                  alt="Worker applying coating to roof" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Column - Company Information */}
            <div className="lg:w-1/2 space-y-6">
              {/* Subtitle */}
              <p className="text-[#00A7E8] font-semibold text-sm uppercase tracking-wide">
                About Us Company
              </p>

              {/* Main Heading */}
              <h2 className="text-4xl font-bold text-gray-800">
                About Southern California Decking, Inc
              </h2>

              {/* Descriptive Paragraph */}
              <p className="text-gray-600 leading-relaxed">
              Imagine stepping onto your deck, balcony, or patio not with worry about cracks, leaks, or wear, but with confidence—knowing it's protected by over 38 years of expertise and the highest-quality materials available. That’s the peace of mind Southern California Decking, Inc. has been delivering throughout Santa Clarita, San Fernando Valley, Los Angeles, and across Southern California since day one. What began as a dedicated one-man operation has flourished into a dynamic, trusted industry leader, tackling everything from major commercial projects and school campuses to intimate residential installations and repairs. Our skilled estimators don’t just offer a quote—they match your unique project requirements and vision with precision-engineered solutions, ensuring outstanding aesthetic appeal and lasting structural performance. With a deep portfolio spanning waterproofing membranes for parking structures, balconies, pool decks, and even aircraft hangars, and utilizing top-tier products from industry giants like Dex-O-Tex, Sika, and Tremco, we bring unparalleled craftsmanship and innovation to every job. Plus, with Darren Elliott, our president, personally overseeing operations and available day or night, you’re choosing a partner committed to excellence, clear communication, and real results. Discover why homeowners, HOAs, and commercial property managers continue to trust us for all their coating and waterproofing needs—let’s bring your project to life together!
              </p>

              {/* Location Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Los Angeles</span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Beverly Hills</span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Malibu </span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Pasadena </span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Santa Monica</span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">San Fernando Valley </span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Burbank </span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Calabasas</span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Glendale</span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Hermosa Beach </span>
                </div>


                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Marina Del Rey </span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Pacific Palisades </span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Redondo Beach  </span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Simi Valley</span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Thousand Oaks</span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Hollywood </span>
                </div>


                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Venice</span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Playa Del Rey </span>
                </div>


                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">West Hollywood</span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Santa Clarita</span>
                </div>
              </div>

              {/* Call-to-Action Button */}
              <a href='/contact' className="bg-[#00A7E8] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300 uppercase tracking-wide">
                About More
              </a>
            </div>
          </div>
        </div>
      </section>



    {/* Call-to-Action Section */}
      <div className='container mx-auto max-w-8xl px-4'>
    <div className="bg-[#1a4a5e] rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background Pattern Overlay */}
              <div className="absolute inset-0 opacity-90">
                <div className="w-full h-full" style={{
                  backgroundImage: "/service/s4.webp"
                }}></div>
              </div>
              
              {/* CTA Content */}
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  With Waterproofed.com, you get expert diagnosis, precision workmanship, and peace of mind
                </h2>
                <p className='text-2xl md:text-3xl font-bold text-white mb-6'>-All in one service!</p>
                
                <a href="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 border border-gray-300">
                  Call Now
                </a>
              </div>
            </div>
            </div>
            
          {/* What We Do Section */}
          <section className="w-full bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto space-y-12">
                {/* Intro */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00A7E8]">What We Do</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Southern California Decking, Inc., has been installing waterproofing and deck coatings in the Santa Clarita Valley, San Fernando Valley, Santa Monica, Los Angeles and all over Southern California for over 26 years. During that time we have grown from a tiny, one man concern into a successful and dynamic operation serving major commercial projects, apartment complexes and schools, yet still finding time for individual home owners completing both new installations, maintenance, and repairs. Our estimators match the right product with your particular project, based upon requirements and cost, and we are confident that the end result will be both functionally and aesthetically superior.
                  </p>
                </div>

            {/* Deck Coating & Waterproofing */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-start">
              <div className="md:col-span-1">
                <h3 className="text-3xl font-bold text-gray-800 text-center">Deck Coating & Waterproofing</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We work with traffic bearing waterproofing membranes on parking decks, roofing, pedestrian walkways, decks, balconies and stairways. We work with membranes for below grade, below tile, planters, between slab and waterproofing lagging. We also work with specialty flooring systems around pool decks, in aircraft hangers, garages, ESD laboratory floors and warehouse floors. We are a specialty coatings contractor!
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We are a specialty coatings contractor serving / installing deck coating and waterproofing all over Beverly Hills, Burbank, Calabasas, Glendale, Hermosa Beach, Los Angeles, Malibu, Marina Del Rey, Pacific Palisades, Pasadena, Redondo Beach, San Fernando Valley, Santa Clarita, Santa Monica, Simi Valley, Thousand Oaks, and Venice to name a few.
                </p>
              </div>
            </div>

            {/* Technological Products */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-start">
              <div className="md:col-span-1">
                <h3 className="text-3xl font-bold text-gray-800 text-center">Technological Products</h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  All of our work is completed using the highest level of technological products available, produced by long established manufactures. These include Paraseal (Bentonite), Thoroseal, Heydi, Xypex, Trem-Co, Dex-o-tex, Mer-ko, Seamco, Dessert Brands Sonneborne, Sika, Dur-a-flex, Vulkem, Mameco, Pacific Polymers, Poly Coat, Multi-Chemical Products, UPI, Tufflex, Koba, Grace, Mira, Magnesite, Bituthanes, all epoxy systems and we have the knowledge and experience to work with any product you might care to stipulate.
                </p>
                <p className="text-gray-600 leading-relaxed">We look forward to discussing your particular project with you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full  py-16 bg-[#eeeeee]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Stat 1 */}
            <div className="text-center border-r border-gray-600">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">1.25k</div>
              <div className="text-gray-800 font-medium">Successful Projects</div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center border-r border-gray-600">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">1.24k</div>
              <div className="text-gray-800 font-medium">Satisfied Customer</div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center border-r border-gray-600">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">4.85+</div>
              <div className="text-gray-800 font-medium">Rating</div>
            </div>

            {/* Stat 5 */}
            <div className="text-center border-r border-gray-600">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">20+</div>
              <div className="text-gray-800 font-medium">Skilled Technicians</div>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">100%</div>
              <div className="text-gray-800 font-medium">Quality Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="space-y-3">
              <p className="text-[#00A7E8] font-semibold text-sm uppercase tracking-wide">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Southern California Decking’s Management</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              {/* Sidebar Card */}
              <aside className="lg:col-span-1 space-y-6">
                <img src="/Waterproofedcom is the best deck waterproofing company.jpg" alt="Waterproofed.com is the best deck waterproofing company" />
                <div className="bg-[#eeeeee] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800">Hands-On Leadership</h3>
                  <p className="text-sm text-gray-600 mt-2">President: Darren Elliott</p>
                  <p className="text-sm text-gray-600">38+ years of industry experience</p>
                </div>
              </aside>

              {/* Main Narrative */}
              <div className="lg:col-span-2 space-y-5">
                <p className="text-gray-600 leading-relaxed">
                  Leading Southern California Decking with a hands-on approach honed over 38 years in the industry, President Darren Elliott embodies our company's unwavering commitment to excellence and reliability in every project. His direct involvement ensures that the same expert who started this company decades ago remains personally accessible to clients—available day or night to address questions, provide updates, or offer guidance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Under his stewardship, SCD has not only mastered the complexities of waterproofing and deck coatings but has also emerged as a regional pioneer in sustainable building practices, specializing in advanced low-VOC and environmentally compliant coating systems that protect both properties and the planet.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our dedicated team, comprising more than 20 highly trained technicians and consultants, collectively brings over 100 years of hands-on experience to every job, from historic home restorations to large-scale commercial installations. This depth of knowledge allows us to accurately assess each project’s unique requirements, recommend tailored solutions, and deliver quotes that are not only competitive and transparent but engineered for lasting value and performance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When you partner with SCD, you benefit from nearly four decades of specialized expertise, a customer-centric culture, and an unwavering promise: we don’t just complete projects—we get them done right, building trust and protecting investments across Southern California, one deck at a time.
                </p>

                <div className="pt-2">
                  <a href="/contact" className="inline-block bg-[#00A7E8] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300 uppercase tracking-wide">Speak With Our Team</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial/>
    </>
  )
}