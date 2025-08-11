import { createFileRoute } from '@tanstack/react-router'
import Testimonial from './components/testimonial'

export const Route = createFileRoute('/about')({
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
                Globally disintermediate installed base web services without frictionless platforms. Distinctively pursue low-risk high-yield e-commerce before multimedia based core mindshare. Interactively synthesize. Seamlessly impact parallel core. Proactively optimize mission-critical e-business after integrated niche markets.
              </p>

              {/* Location Badges */}
              <div className="flex flex-wrap gap-4">
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
                  <span className="text-gray-800 font-medium">Burbank</span>
                </div>

                <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                  <div className="w-6 h-6 bg-[#00A7E8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Glendale,</span>
                </div>
              </div>

              {/* Call-to-Action Button */}
              <button className="bg-[#00A7E8] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300 uppercase tracking-wide">
                About More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full  py-16 bg-[#eeeeee]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">250+</div>
              <div className="text-gray-800 font-medium">Expert Plumbers</div>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">100%</div>
              <div className="text-gray-800 font-medium">Quality Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Standard Working Process Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Standard Working Process</h2>
          </div>
          
          {/* Process Steps */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Step 1: Free Inspection & Assessment */}
            <div className="flex flex-col items-center text-center max-w-xs">
              
              {/* Image */}
              <div className="w-auto h-[20rem] p-10 rounded-full  overflow-hidden mb-4">
                <img 
                  src="/w1.webp" 
                  alt="Inspector with clipboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Free Inspection & Assessment</h3>
              <p className="text-gray-600 text-sm">
                When booking, it helps customers when they are shown a calendar. They can then click on the day they want and book from there.
              </p>
            </div>
            
            {/* Arrow 1 */}
            <div className="hidden lg:block">
              <svg className="w-8 h-8 text-[#00A7E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Step 2: Clear, Upfront Estimate */}
            <div className="flex flex-col items-center text-center max-w-xs">
              
              {/* Image */}
              <div className="w-auto h-[20rem] p-10 rounded-full overflow-hidden mb-4">
                <img 
                  src="/w2.webp" 
                  alt="Consultation meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Clear, Upfront Estimate</h3>
              <p className="text-gray-600 text-sm">
                Professionally engage end-to-end channels after functionalized supply chains. Continually underwhelm cooperative.
              </p>
            </div>
            
            {/* Arrow 2 */}
            <div className="hidden lg:block">
              <svg className="w-8 h-8 text-[#00A7E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Step 3: Expert Installation */}
            <div className="flex flex-col items-center text-center max-w-xs">
              
              {/* Image */}
              <div className="w-auto h-[20rem] p-10 rounded-full  overflow-hidden mb-4">
                <img 
                  src="/w3.webp" 
                  alt="Worker with power drill" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Installation</h3>
              <p className="text-gray-600 text-sm">
                Some common plumbing problems include low water pressure, clogged drains, leaky pipes, running toilets, and dripping faucets.
              </p>
            </div>
          </div>
        </div>
      </section>


      <Testimonial/>
    </>
  )
}