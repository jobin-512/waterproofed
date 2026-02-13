import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Testimonial from '../../../components/testimonial'

export const Route = createFileRoute(
  '/_layout/(area)/santa-clarita-deck-balcony-waterproofing-contractor',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqData = [
    {
      id: 0,
      question: "How often should I waterproof my deck in Santa Clarita?",
      answer: "Santa Clarita's intense sun, dry heat, and occasional heavy rains mean deck sealants and coatings break down faster. We recommend resealing every 2-3 years, or sooner if you notice signs of wear, to ensure continuous protection."
    },
    {
      id: 1,
      question: "What is fluid-applied waterproofing, and why is it effective in Santa Clarita?",
      answer: "Fluid-applied waterproofing creates a seamless, flexible membrane that adheres directly to the surface, protecting against water intrusion and UV damage. In Santa Clarita’s varying temperatures, its elasticity prevents cracking and peeling, offering superior longevity compared to traditional methods."
    },
    {
      id: 2,
      question: "Can you waterproof over an existing deck or balcony?",
      answer: "We always recommend a full inspection to determine the best approach. In some cases, existing materials may be removed and replaced. However, many systems can be applied over existing, well-bonded surfaces, provided the substrate is sound and properly prepared. This can save time and costs."
    },
    {
      id: 3,
      question: "My HOA requires a specific waterproofing system—are you familiar with those requirements?",
      answer: "Absolutely. We work directly with Santa Clarita HOAs and understand their specific requirements for materials, applications, and warranties. We can help you choose a system that meets your HOA’s guidelines and ensures full compliance."
    },
    {
      id: 4,
      question: "How long does a typical deck waterproofing project take?",
      answer: "Most residential projects in Santa Clarita take 3-7 days, depending on the size, complexity, and existing conditions of the deck. We provide a detailed timeline upfront and work efficiently to minimize disruption, ensuring a swift and high-quality completion."
    },
    {
      id: 5,
      question: "Do your warranties cover both materials and labor?",
      answer: "Yes! Our comprehensive warranties cover both material defects and our workmanship, giving you complete peace of mind. We stand behind our work and are committed to your long-term satisfaction and the durability of your waterproofed surfaces."
    },
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
          backgroundImage: "url('/Area/Expert Deck and Balcony Waterproofing in Pasadena  Waterproofed.com – 38 Yrs Experience/banner.jpg')"
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
            Professional Deck Waterproofing Services in Santa Clarita
          </h1>
          
          {/* Paragraph Text */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Santa Clarita’s exceptional climate, with hot, dry summers and cooler, wetter winters, presents unique challenges for outdoor surfaces. Extreme temperature fluctuations, UV exposure, and seasonal moisture can lead to deck and balcony deterioration, including cracking, dry rot, and leaks. This makes specialized waterproofing crucial to protect your investment and maintain the beauty and safety of your home.
          </p>
        </div>
      </div>
    </div>

    {/* Main Content Section */}
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-8xl">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Why Santa Clarita Homes Need Specialized Waterproofing?
        </h2>
        
        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          Santa Clarita’s unique climate—with its hot, dry summers and occasional torrential rains—creates specific challenges for decks and balconies. Without proper waterproofing, sun exposure can lead to material degradation, while unexpected downpours can cause water intrusion, dry rot, and mold. Specialized solutions are crucial to protecting your outdoor living spaces in this environment.
        </p>
        
        {/* Service Description Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
          Our comprehensive waterproofing services address these specific risks, safeguarding your home from costly damage. We provide customized solutions that account for Santa Clarita’s environmental factors, ensuring your decks and balconies remain protected and beautiful for years to come.
        </p>
        
        {/* Call-to-Action Section */}
        <div className="bg-[#1a4a5e] rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background Pattern Overlay */}
          <div className="absolute inset-0 opacity-90">
            <div className="w-full h-full" style={{ backgroundImage: "url('/service/s4.webp')" }}></div>
          </div>
          
          {/* CTA Content */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Our Comprehensive Santa Clarita Waterproofing Services
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
              Deck Waterproofing & Repair
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              We provide comprehensive deck waterproofing and repair services, from initial inspection to final application. Our experts handle everything from minor repairs to full-scale waterproofing system installations, ensuring your deck is protected against leaks, dry rot, and structural damage.
            </p>
            
            {/* Why Most Balconies Fail */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Balcony Waterproofing & Repair</h3>
              <p className="text-gray-700 mb-3">
                We've repaired countless balconies in Santa Clarita suffering from hidden leaks, often originating from failed flashing, inadequate slopes, or deteriorated membranes. Our process involves removing damaged materials, performing necessary flashing repairs, and installing new fluid-applied membranes. We meticulously seal and reinforce every seam, ensuring a dry, stable, and beautiful space. We also specialize in waterproofing balcony decks located over living areas, effectively stopping leaks and preserving underlying structures.
              </p>
            </div>
            
            {/* Water Damage Is Common */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planter Waterproofing & Drainage</h3>
              <p className="text-gray-700">
                Built-in planters enhance aesthetics but often cause water damage. We address leaking planters by removing old soil and hardscape, then installing root-resistant moisture barriers, waterproof liners, and new drainage scuppers to ensure proper slope and drainage. Our solutions protect adjacent walls and decks, transforming your planter into a resilient, long-term feature.
              </p>
            </div>
            
            {/* Weather, Wear, and Poor Drainage */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Other Specialty Services</h3>
              <p className="text-gray-700 mb-4">
              Concrete surfaces, while durable, are prone to hairline cracks from expansion and contraction, allowing water intrusion that causes spalling and corrosion. We restore these surfaces using high-grade polyurethane crack injections and topical sealers that create a robust moisture barrier. For larger areas, we apply full roof deck waterproofing systems, protecting concrete slabs and patios while preserving their aesthetic appeal. We have successfully restored cracked concrete balconies, rooftop gathering areas, and structural supports throughout Santa Clarita.
              </p>
            </div>
            
            {/* Prevent Problems */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Waterproofing Planter Boxes with Drainage and Moisture Barrier Systems</h3>
              <p className="text-gray-700 mb-3">
              Built-in planters add beauty and greenery but are notorious for causing long-term water damage. We treat leaking planters by removing old soil and hardscape layers, then installing root-resistant moisture barrier systems, waterproof liners, and new drainage scuppers.
              
              Proper slope and drainage redirect water away from adjacent walls and decks. Once rebuilt, your planter will protect your home, not threaten it.
              
              Conclusion  
              
              From balcony deck repair to waterproof coatings, our complete service offerings mean you get one trusted team for every component. We solve root problems—not just surface symptoms.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:col-span-1">
            <div className=" top-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/Area/Expert Deck and Balcony Waterproofing in Pasadena  Waterproofed.com – 38 Yrs Experience/1.jpg" 
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
                src="/Area/Expert Deck and Balcony Waterproofing in Pasadena  Waterproofed.com – 38 Yrs Experience/2.jpg" 
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
            Our Proven Waterproofing Process for Pasadena Decks and Balconies 
            </h2>
            
            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            With decades of experience, we’ve refined a reliable, multi-step process that ensures maximum protection, longevity, and value. Our method focuses on correct material selection, preparation, and installation—nothing is rushed or overlooked.
            </p>
            
            {/* Waterproof Coating */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Moisture Mapping and Deck Waterproofing Inspection in Santa Clarita </h3>
              <p className="text-gray-700">
              We begin with a detailed evaluation using moisture detection tools, thermal imaging, and visual inspection. We map moisture paths and identify damage to create a targeted repair plan for your home’s vulnerabilities.
              </p>
            </div>
            
            {/* We Only Use the Best */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Repairing Damage and Preparing for a Waterproof Patio Deck Flooring System </h3>
              <p className="text-gray-700 mb-4">
              We remove old coatings, grind rough patches, re-level concrete, replace rotted or soft wood, and correct slope so water runs off—ensuring adhesion and durability for our coatings.
              </p>
            </div>
            
            {/* Built from the Base Up */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Expert Flashing and Joint Sealing for Deck Waterproofing and Leak Prevention </h3>
              <p className="text-gray-700 mb-4">
              We install new metal flashing at all critical junctions and seal expansion joints and seams with high‑performance polyurethane sealants that remain flexible in changing weather.
              </p>
            </div>

            {/* Built from the Base Up */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 4: Applying Liquid Rubber Deck Coating and Slip-Resistant Waterproof Finishes </h3>
              <p className="text-gray-700 mb-4">
              We apply multi-layer waterproof membranes like Gaco or high‑build liquid rubber systems, then finish with a textured, slip‑resistant topcoat that resists UV and provides safe traction.
              
              Conclusion: Our methodical process ensures long-lasting performance. When applied with our expertise, your patio deck flooring waterproof solution will protect and impress for years to come.
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
        Why Homeowners Choose Waterproofed.com for Deck and Balcony Waterproofing in Santa Clarita? 
        </h2>
        
        {/* Introductory Paragraphs */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Choosing the right contractor means trusting someone with your home’s safety, beauty, and long-term value. Our clients return to us because we combine deep technical skill with a client-first philosophy—and results that last.
          </p>
        </div>
        
        {/* Small Cracks Can Lead to Big Problems */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialized Waterproofing Contractors for Historic and Modern Santa Clarita Homes</h3>
          <p className="text-gray-700 mb-4">
          Santa Clarita’s architectural legacy is one of a kind. From historic properties in Madison Heights to sleek new builds in East Santa Clarita, we understand how to tailor solutions that both protect and preserve. We take care to maintain historic integrity using low-profile coatings and seamless finishes.
          </p>
        </div>
        
        {/* Unsafe Railings */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Deck Waterproofing and Under-Deck Waterproofing Systems That Protect Foundations</h3>
          <p className="text-gray-700 mb-4">
          Water that penetrates your deck or balcony doesn’t just stay there. It travels downward, threatening drywall, subfloors, insulation, and even your foundation. Our solutions prevent water intrusion at the surface level, helping protect the entire structure—from the top deck to the ground footing.
          </p>
        </div>
        
        {/* Complete Integration */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Craftsmanship, Communication, and Guaranteed Balcony Deck Repair Services</h3>
          <p className="text-gray-700 mb-4">
          Every member of our crew is trained, certified, and committed to doing the job right the first time. We explain each step, provide timelines, and maintain clean, respectful worksites. Whether it’s a full restoration or a restore paint deck upgrade, we treat your home with the care it deserves.
          
          Conclusion: Homeowners choose Waterproofed.com because we combine expert solutions with genuine care, professionalism, and passion for detail.
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
            Santa Clarita’s Local Experts in Roof Deck and Balcony Waterproofing Systems 
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We know Santa Clarita because we live and work here. Our experience in the region’s microclimates, home styles, and city regulations helps us deliver faster, smarter, and more cost-effective waterproofing solutions.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Areas We Serve for Deck and Balcony Waterproofing in Santa Clarita and the San Gabriel Valley: Madison Heights, San Rafael, Bungalow Heaven, East Santa Clarita, South Lake, Playhouse District, Altadena, San Marino, and more.
            </p>
            
            {/* Flashing Installation Done Right */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get a Free Deck Waterproofing or Balcony Repair Inspection in Santa Clarita Today</h3>
              <p className="text-gray-700 mb-4">
              Don’t wait for a visible leak to become a structural emergency. Our complimentary inspections provide a clear, no-pressure evaluation of your deck, balcony, or planter. We’ll explain what we find, answer your questions, and offer a custom plan that fits your goals and budget. Call now to book your inspection and discover why we’re the top-rated waterproofing contractors in Santa Clarita.
              </p>
            </div>
            
            
          </div>
          
          {/* Right Column - Image */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/Area/Expert Deck and Balcony Waterproofing in Pasadena  Waterproofed.com – 38 Yrs Experience/3.jpg" 
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
