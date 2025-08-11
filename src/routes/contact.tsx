import { createFileRoute } from '@tanstack/react-router'
import Testimonial from './components/testimonial'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
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
              Contact us
            </h1>
            
            {/* Paragraph Text */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Intrinsicly predominate backward-compatible potentialities without alternative total linkage. Interactively fabricate cross-unit growth strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Bar */}
      <div className="w-full bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Office Location */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#00A7E8] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Our Office Location</p>
                <p className="text-lg font-bold text-gray-900 underline">427 Montana Ave. Santa Monica CA 90403</p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center space-x-4 bg-[#00A7E8] p-4 rounded-lg">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wide">Have a Question?</p>
                <p className="text-lg font-bold text-white underline">+1 (310) 569-3129</p>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#00A7E8] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Any Question? Email Us!</p>
                <p className="text-lg font-bold text-gray-900 underline">scd@waterproofed.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Request Form Section */}
      <div className="w-full bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Side - Construction Worker Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                {/* Abstract Blue Shapes Background */}
                <div className="absolute inset-0">
                  <div className="w-64 h-64 bg-blue-200 rounded-full absolute -top-8 -left-8 opacity-30"></div>
                  <div className="w-48 h-48 bg-blue-600 rounded-full absolute -bottom-4 -right-4 opacity-40"></div>
                  <div className="w-32 h-32 bg-blue-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
                </div>
                
                {/* Construction Worker Image */}
                <div className="relative z-10">
                  <img 
                    src="/contact.webp" 
                    alt="Construction Worker" 
                    className="w-full max-w-md mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Quote Form */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-8">
                  Get A <span className="text-red-600">Free</span> Quote
                </h2>
                
                <form className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A7E8] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A7E8] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A7E8] focus:border-transparent"
                      />
                    </div>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A7E8] focus:border-transparent appearance-none bg-white">
                        <option value="">Select Service</option>
                        <option value="waterproofing">Waterproofing</option>
                        <option value="roofing">Roofing</option>
                        <option value="decking">Decking</option>
                        <option value="maintenance">Maintenance</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Row 3 - Message */}
                  <div>
                    <textarea 
                      placeholder="Write Message" 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A7E8] focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full bg-[#00A7E8] text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 uppercase tracking-wide"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial/>
      
    </>
  )
}
