import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Testimonial from '../../components/testimonial'

export const Route = createFileRoute(
  '/(area)/los-angeles-deck-waterproofing-contractor',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqData = [
    {
      id: 0,
      question: "How often should I waterproof my deck in Los Angeles?",
      answer: "With high-quality elastomeric coatings, a well-installed system should last 10–15 years. Annual inspections are recommended to check for wear from LA's intense sun and weather."
    },
    {
      id: 1,
      question: "What is the best deck and balcony waterproofing material for intense sun?",
      answer: "Elastomeric urethane or acrylic coatings are best. They reflect UV rays, remain flexible to resist cracking, and withstand the thermal expansion of concrete and wood."
    },
    {
      id: 2,
      question: "Can you waterproof over existing tile on a balcony?",
      answer: "We do not recommend it. Tile hides failed membranes and cracks. Proper repair requires removal, substrate preparation, and applying a new seamless membrane for a guaranteed result."
    },
    {
      id: 3,
      question: "My HOA requires a standard; can your deck waterproofing services LA comply?",
      answer: "Absolutely. We work extensively with HOAs across LA and meet or exceed project standards, engineering reports, and building code requirements."
    },
    {
      id: 4,
      question: "How long does a typical deck waterproofing project take?",
      answer: "Most residential projects take 2–4 days. Timeline depends on size, condition, necessary repairs, and weather windows for proper curing."
    },
    {
      id: 5,
      question: "What sets the best deck waterproofing contractor in Los Angeles apart?",
      answer: "Local expertise. Decades in LA teach how to combat damage from intense sun, seasonal rain, and salty air. We use specialized, flexible coatings and proven techniques for a lasting defense."
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
            Los Angeles Deck Waterproofing 
          </h1>
          
          {/* Paragraph Text */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Expert Protection from Sun, Rain & Sea Air. For over 38 years, Waterproofed.com has protected Los Angeles homes—decks, balconies, and planters—from the city’s unique climate.
          </p>
        </div>
      </div>
    </div>

    {/* Main Content Section */}
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-8xl">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Why Los Angeles Homes Demand Specialized Waterproofing
        </h1>
        
        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          The Southern California climate is a silent destroyer. Intense UV breaks down standard coatings, winter rains exploit micro‑cracks, and salty ocean air accelerates corrosion. This relentless cycle is why generic waterproofing fails in LA. Climate‑specific waterproofing is critical to prevent structural wood rot, mold inside walls, and catastrophic leaks that can damage interiors and electrical systems.
        </p>
        
        {/* Service Description Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
          As your local, full‑service contractor, we engineer solutions for Los Angeles architecture and weather. From decks and balconies to planters, rooftops, and walkways—we protect your entire property with systems built to last.
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
            Looking for the Best Deck Waterproofing Contractor in Los Angeles? Well, Your Search Ends Here!
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
            Our Comprehensive Los Angeles Deck & Balcony Waterproofing Services
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
            As your full-service, local waterproofing contractor, we address every vulnerability on your property. Our solutions are engineered for the specific challenges of Los Angeles architecture and weather.
            </p>
            
            {/* Why Most Balconies Fail */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Deck Waterproofing & Coating Systems</h3>
              <p className="text-gray-700 mb-3">
              We specialize in installing seamless, elastomeric membranes on both wood and concrete decks. Unlike simple sealants, our premium systems from brands like Dex-O-Tex and Gaco are specifically formulated to reflect UV rays, resist constant foot traffic, and flex with the thermal expansion of an LA summer. The result is a durable, non-slip surface that blocks 100% of water intrusion and dramatically extends your deck's lifespan.
              </p>
            </div>
            
            {/* Water Damage Is Common */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Balcony Leak Repair & Waterproofing Solutions</h3>
              <p className="text-gray-700">
              Balcony leaks are a primary concern for multi-unit buildings and second-story additions. A leaking balcony can cause tens of thousands of dollars in damage to the interior space below. Our repair process is meticulous: we first identify and correct the underlying slope issue, repair any rotted substructure, install custom-formed flashing, and then apply a high-performance membrane system. We are experts in working with HOAs to meet strict standards and minimize disruption to residents.
              </p>
            </div>
            
            {/* Weather, Wear, and Poor Drainage */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planter Box Waterproofing & Drainage Installation</h3>
              <p className="text-gray-700 mb-4">
              Built-in planters are a quintessential LA feature and a leading cause of leaks. Soil moisture and expanding plant roots constantly attack the waterproofing layer. Our solution involves excavating the planter, applying a heavy-duty, root-penetration resistant membrane, and installing a new drainage system with a weep screed to channel water away from the structure. This protects your deck's integrity while keeping your landscaping vibrant and healthy.
              </p>
            </div>
            
            {/* Prevent Problems */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Expert Waterproofing Services for LA Homes</h3>
              <p className="text-gray-700 mb-3">
              Your entire property deserves protection. We are also specialists in rooftop coating to improve energy efficiency, garage floor sealing, walkway coating, and foundation waterproofing. Our deep local expertise means we understand the soil types in the Valley versus the beach cities and can recommend the ideal solution for your home's location.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:col-span-1">
            <div className=" top-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/service/s1.webp" 
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
                src="/service/s2.webp" 
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
            Our Proven 4-Step Waterproofing Process: The Gold Standard in LA
            </h2>
            
            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We believe a flawless result is born from a rigorous process. Our methodology, refined over nearly four decades, ensures your project is completed on time, on budget, and to the highest standard of excellence.
            </p>
            
            {/* Waterproof Coating */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Comprehensive Inspection & Transparent Quote</h3>
              <p className="text-gray-700">
              Our founder, Darren Elliott, often says, "The solution is in the diagnosis." Our expert will perform a thorough inspection, using moisture meters and core knowledge of LA construction to identify every potential failure point. You will receive a detailed, line-item quote with absolutely no hidden fees, allowing you to make a confident, informed decision.
              </p>
            </div>
            
            {/* We Only Use the Best */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Meticulous Surface Preparation & Structural Repair</h3>
              <p className="text-gray-700 mb-4">
              This is the most critical phase. We never coat over problems. Our crew power washes, then mechanically grinds the surface to achieve a perfect profile for adhesion. Every crack is routed and filled, and any rotted wood or compromised concrete is surgically removed and replaced. We ensure the substrate is sound, clean, and dry before a single drop of coating is applied.
              </p>
            </div>
            
            {/* Built from the Base Up */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Expert Application of Premium Elastomeric Membranes</h3>
              <p className="text-gray-700 mb-4">
              Our factory-trained technicians apply the membrane system with expert precision. We use professional-grade rollers and spray equipment to achieve a consistent, specified mil thickness that guarantees performance. These elastomeric products breathe, stretch, and contract, remaining intact through years of LA's temperature swings.
              </p>
            </div>
            
            {/* Built from the Base Up */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 4: Final Quality Assurance & Warranty Registration</h3>
              <p className="text-gray-700 mb-4">
              We conduct a full flood test on contained areas and a meticulous visual inspection with you, the homeowner, to ensure complete satisfaction. Only then do we consider the job complete. Your project is registered for its full lifetime warranty, covering both materials and labor, giving you unparalleled peace of mind.
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
        Why Waterproofed.com is LA's Most Trusted Waterproofing Contractor
        </h2>
        
        {/* Introductory Paragraphs */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Choosing a contractor is about trust. Our reputation, built over thousands of successful projects across Los Angeles County, is our most valuable asset.
          </p>
        </div>
        
        {/* Small Cracks Can Lead to Big Problems */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">38+ Years of Unmatched Local Expertise</h3>
          <p className="text-gray-700 mb-4">
          Since 1986, Waterproofed.com has been a name synonymous with quality and reliability in Los Angeles. Darren Elliott's hands-on approach means that the expertise gained from solving the most complex leak issues in Pacific Palisades to restoring historic balconies in Hancock Park is baked into every project we undertake. We've seen it all and have the proven solutions.
          </p>
        </div>
        
        {/* Unsafe Railings */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Fully Licensed, Insured & Factory-Certified Crew</h3>
          <p className="text-gray-700 mb-4">
          We are a fully licensed, bonded, and insured contractor. Our technicians are not just laborers; they are certified applicators for the products we use. This protects you from liability and guarantees the installation is performed to the manufacturer's exact specifications, validating your warranty.
          </p>
        </div>
        
        {/* Complete Integration */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Lifetime Warranties & California-Compliant Solutions</h3>
          <p className="text-gray-700 mb-4">
          We stand behind our work for life. Our warranties are among the strongest in the industry because we use the best materials and correct installation methods. We also prioritize environmental and community health by exclusively using low-VOC, eco-friendly coatings that are fully compliant with all South Coast Air Quality Management District (AQMD) regulations.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Proudly Serving Every Corner of Los Angeles County
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            From the ocean breezes of Malibu to the valley heat of Encino, we are your local deck waterproofing experts. We understand the specific architectural styles and environmental challenges in each of our communities.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We provide expert deck coating and waterproofing services to: Santa Monica, Beverly Hills, West Hollywood, Hollywood, Sherman Oaks, Encino, North Hollywood, Burbank, Studio City, Pacific Palisades, Malibu, Downtown LA, and all surrounding areas.
            </p>
            
            {/* Flashing Installation Done Right */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule Your Free, No-Obligation LA Waterproofing Inspection</h3>
              <p className="text-gray-700 mb-4">
              Don't wait for the next rainstorm to discover a leak. Proactive protection is the most cost-effective strategy for any Los Angeles homeowner. Contact us today to schedule your free inspection and detailed estimate. See for yourself why generations of Angelenos have trusted Waterproofed.com to protect their homes.
              </p>
            </div>
            
            
          </div>
          
          {/* Right Column - Image */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/service/s3.webp" 
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
