import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Testimonial from '../../components/testimonial'

export const Route = createFileRoute(
  '/(area)/beverly-hills-deck-waterproofing-contractor',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqData = [
    {
      id: 0,
      question: "How do you protect my landscaping during the project?",
      answer: "We use professional coverings and precise techniques to ensure all surrounding areas are fully protected from debris and materials throughout the job."
    },
    {
      id: 1,
      question: "What is the most discreet waterproofing option?",
      answer: "Seamless membrane systems provide invisible protection and can be topped with a decorative coating, preserving your deck's look without visible seams."
    },
    {
      id: 2,
      question: "What is the average timeline for a balcony and deck waterproofing project?",
      answer: "Most projects are completed within 2-4 days, depending on the size, condition, and weather, which can affect drying times."
    },
    {
      id: 3,
      question: "Are the products you use for waterproofing safe for my family and pets?",
      answer: "Yes. We use coatings that are fully compliant with regulations and are certified safe around children and pets after a short curing period."
    },
    {
      id: 4,
      question: "Can Southern California Decking comply with strict HOA guidelines?",
      answer: "Absolutely. We are experienced in working with HOAs and can provide all necessary documentation to meet specific architectural standards."
    },
    {
      id: 5,
      question: "Do you offer color matching for waterproofing coatings?",
      answer: "Yes. We provide a range of custom color options to ensure the new coating complements your home’s existing exterior color scheme."
    }
  ]

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? -1 : id)
  }

  return (
    <>
      {/* Hero Section */}
    <div className="relative w-full h-[500px] lg:h-[750px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Area/Beverly Hills Deck Waterproofing by Waterproofed com/banner.jpg')"
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
            Beverly Hills Deck Waterproofing by Waterproofed.com
          </h1>
          
          {/* Paragraph Text */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Your Best Choice for All Deck Waterproofing Solutions! For nearly four decades, Waterproofed.com has been the trusted name for homeowners who demand the best.
          </p>
        </div>
      </div>
    </div>

    {/* Main Content Section */}
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-8xl">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Why Beverly Hills Homes Need Specialized Protection
        </h2>
        
        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          The environment in Beverly Hills, while ideal for living, presents unique challenges for exterior surfaces. Intense sun can break down inferior coatings, while seasonal rains seek out any weakness to cause hidden damage. This cycle of expansion and contraction can lead to problems far beyond the surface—including damage to underlying structures and the intricate interiors of your home.
        </p>
        
        {/* Service Description Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
          Professional waterproofing is not merely an aesthetic choice; it is a critical measure to maintain the structural integrity and long-term value of your significant investment. Our approach is designed to stop water intrusion at its source, preventing costly repairs and preserving the beauty of your property.
        </p>
        
        {/* Call-to-Action Section */}
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
              Secure Your Home with a Complimentary Consultation
            </h2>
            
            <a href="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 border border-gray-300">
              Call Now for Free Estimate
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* The Importance of Balcony Waterproofing Section */}
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-8xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-2">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Tailored Waterproofing Services for Your Home
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
            As your full-service, local waterproofing contractor, we address every vulnerability on your property. Our solutions are engineered for the specific challenges of Los Angeles architecture and weather.
            </p>
            
            {/* Why Most Balconies Fail */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Solutions for Entertainment Decks</h3>
              <p className="text-gray-700 mb-3">
              We specialize in creating seamless, protective barriers for both wood and concrete decks. Our systems are chosen for their ability to withstand heavy use and extreme weather conditions while maintaining a perfect, non-slip finish. This ensures your deck remains a beautiful and safe centerpiece for entertainment for years to come.
              </p>
            </div>
            
            {/* Water Damage Is Common */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Balcony and Rooftop Terrace Systems</h3>
              <p className="text-gray-700">
              A leak in an elevated space can lead to significant damage below. Our process for balconies and terraces is thorough, addressing drainage, slope, and every potential entry point for water. We ensure a complete seal that protects not just the surface, but the valuable interior spaces beneath it.
              </p>
            </div>
            
            {/* Weather, Wear, and Poor Drainage */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hidden Protection for Landscaped Planters</h3>
              <p className="text-gray-700 mb-4">
              Built-in planters require specialized attention to prevent water from seeping into foundations and walls. Our waterproofing methods are installed beneath the soil and hardscape, functioning invisibly to safeguard your property’s structure without compromising the beauty of your landscaping.
              </p>
            </div>
            
            {/* Prevent Problems */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Durable Coatings for Driveways and Walkways</h3>
              <p className="text-gray-700 mb-3">
              Enhance the safety and appearance of your concrete surfaces. Our coatings provide a durable, non-slip layer that resists staining, weathering, and wear. We offer a variety of finishes to complement the architectural style of your home.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:col-span-1">
            <div className=" top-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/Area/Beverly Hills Deck Waterproofing by Waterproofed com/1.jpg" 
                  alt="Worker applying balcony coating with roller"
                  className="w-full h-auto object-cover"
                  style={{ minHeight: '600px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Learn About Our Balcony Coating Systems Section */}
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-8xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/Area/Beverly Hills Deck Waterproofing by Waterproofed com/2.jpg" 
                alt="Workers performing balcony repair work on concrete floor"
                className="w-full h-auto object-cover"
                style={{ minHeight: '500px' }}
              />
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Detailed Process for Impeccable Results
            </h2>
            
            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We believe that a perfect outcome is the result of a meticulous and proven process. Our method ensures every project meets the highest standards of quality and durability.
            </p>
            
            {/* Waterproof Coating */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Thorough Consultation and Planning</h3>
              <p className="text-gray-700">
              We begin with a comprehensive assessment of your property. This allows us to identify specific needs and develop a clear plan that aligns with your expectations and schedule, ensuring minimal disruption to your routine.
              </p>
            </div>
            
            {/* We Only Use the Best */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exacting Surface Preparation and Repairs</h3>
              <p className="text-gray-700 mb-4">
              The longevity of any application depends entirely on proper preparation. We meticulously clean, repair cracks, and ensure the substrate is perfectly sound and level. This critical step guarantees the strongest possible adhesion and a flawless final appearance.
              </p>
            </div>
            
            {/* Built from the Base Up */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Precision Application of Protective Systems</h3>
              <p className="text-gray-700 mb-4">
              Our certified technicians apply high-performance membranes and coatings with expert skill. We use techniques that ensure even coverage and the correct thickness, resulting in a barrier that is both incredibly effective and visually superior.
              </p>
            </div>

            {/* Built from the Base Up */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Final Inspection and Warranty Assurance</h3>
              <p className="text-gray-700 mb-4">
              We complete every project with a detailed walk-through to ensure your complete satisfaction. We also provide a clear explanation of your warranty coverage, giving you confidence in the long-term protection of your investment.
              </p>
            </div>
            
            {/* Real Project. Real Results */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h4 className="font-semibold text-blue-900 mb-3">Additional Expert Waterproofing Services for LA Homes</h4>
              <p className="text-blue-800">
                We also offer rooftop coatings for energy efficiency, garage floor sealing, walkway coatings, and foundation waterproofing. Our deep local expertise—from Valley soils to beachside environments—means we recommend the ideal solution for your location.
              </p>
            </div>
            
            {/* Conclusion */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Want results like that? Let us protect your balcony before the damage spreads. Your peace of mind starts with a free quote.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Stucco Wall Repair & Railing Work Section */}
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-8xl">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
        Waterproofed.com Is the Standard of Quality for Deck Wateproofing 
        </h2>
        
        {/* Introductory Paragraphs */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our commitment to excellence has made us the preferred choice for discerning homeowners across Beverly Hills.
          </p>
        </div>
        
        {/* Small Cracks Can Lead to Big Problems */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Decades of Local Experience</h3>
          <p className="text-gray-700 mb-4">
          Our deep understanding of local architecture and climate allows us to anticipate and solve problems that less experienced contractors might miss. This expertise ensures that our solutions are not just effective, but are specifically engineered for homes in this region.
          </p>
        </div>
        
        {/* Unsafe Railings */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Commitment to Professionalism and Discretion</h3>
          <p className="text-gray-700 mb-4">
          We recognize the importance of privacy and respect for your property. Our crews are known for their professionalism, maintaining a clean worksite and conducting themselves with the utmost integrity throughout the project.
          </p>
        </div>
        
        {/* Complete Integration */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Unmatched Warranty Protection</h3>
          <p className="text-gray-700 mb-4">
          We confidently back our work with comprehensive warranties that cover both materials and labor. Our commitment to using the best products and correct installation techniques allows us to offer some of the strongest protections in the industry.
          </p>
        </div>
      </div>
    </div>

    {/* Flashing and Drainage Solutions Section */}
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-8xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Serving All of Beverly Hills and Neighboring Communities
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We are proud to provide our services to every neighborhood in Beverly Hills, including Beverly Hills Post Office, Benedict Canyon, Coldwater Canyon, and the adjacent areas of Bel Air and Holmby Hills. Our local presence means we are always nearby and familiar with the unique character of your community.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            
            </p>
            
            {/* Flashing Installation Done Right */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Your Home with a Complimentary Consultation</h3>
              <p className="text-gray-700 mb-4">
              Protecting your investment requires the right partner. Contact Waterproofed.com today to schedule a discreet, no-obligation consultation and detailed estimate. Discover why generations of homeowners have trusted us to preserve their homes.
              </p>
            </div>
            
            
          </div>
          
          {/* Right Column - Image */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/Area/Beverly Hills Deck Waterproofing by Waterproofed com/3.jpg" 
                alt="Three construction workers applying bright light blue waterproof coating on outdoor balcony"
                className="w-full h-auto object-cover"
                style={{ minHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>



    {/* Contact Section */}
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-8xl">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Contact Waterproofed.com Today!
        </h2>
        
        {/* Contact Information */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            Do not wait for water damage to take hold. Whether you need deck coating contractors near me or a full waterproof deck coating for plywood, Waterproofed.com is your trusted partner in Los Angeles.
          </p>
        </div>
        
        {/* Contact and Map Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="bg-[#00A7E8] rounded-lg p-8 text-white relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 opacity-90">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/service/s4.webp')",
                  filter: "blur(2px)"
                }}
              ></div>
            </div>
            
            <div className="relative z-10">
              {/* Company Logo/Name */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <img src="/logo.webp" alt="Southern California Decking" className="w-auto h-16 brightness-0 invert" />
                </div>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Call us at</p>
                    <p className="font-semibold">(310) 569-3129</p>
                    <p className="text-sm opacity-90">for a free inspection.</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">scd@waterproofed.com</p>
                  </div>
                </div>
                
                {/* Service Areas */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#00A7E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Service Areas: Beverly Hills, Pasadena, Los Angeles, North Hollywood, Santa Monica, Sherman Oaks, Burbank, Orange County, and more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-full min-h-[400px] bg-gray-200 flex items-center justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.721273450836!2d-118.50644468483782!3d34.02536482659358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4bf2c0b15f7%3A0xb2e8d43a71f2a45a!2s427%20Montana%20Ave%2C%20Santa%20Monica%2C%20CA%2090403%2C%20USA!5e0!3m2!1sen!2s!4v1668537783503!5m2!1sen!2s" width="100%" height="600" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Frequently Asked Questions Section */}
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-8xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Intro Text */}
          <div>
            <p className="text-lg text-[#00A7E8] font-semibold mb-2">Frequently Asked Have Any Question?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Best Balcony Waterproofing, Coating & Repair Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              
            </p>
            <a href="/contact" className="inline-block bg-[#00A7E8] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg">
              Call Now for Free Estimate
            </a>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full p-5 text-left font-semibold text-gray-900 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200"
                    onClick={() => toggleFaq(item.id)}
                  >
                    <span>{index + 1}. {item.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-200 ${
                        openFaq === item.id ? 'rotate-180' : 'rotate-0'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {openFaq === item.id && (
                    <div className="p-5 pt-0 text-gray-700 bg-white">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <Testimonial />
  </>
  )
}
