import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Testimonial from '../../../components/testimonial'

export const Route = createFileRoute(
  '/_layout/(area)/hollywood-deck-balcony-waterproofing-contractor',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqData = [
    {
      id: 0,
      question: "How often should I waterproof my deck in Hollywood?",
      answer: "Given Hollywood's diverse climate, annual inspections are recommended. A comprehensive waterproofing every 5-10 years, depending on the system and exposure, ensures optimal protection from the elements, preventing costly damage."
    },
    {
      id: 1,
      question: "What is the best waterproofing material for Hollywood?",
      answer: "Fluid-applied elastomeric membranes are ideal for Hollywood. They offer superior flexibility and adhesion, accommodating structural shifts and protecting against water intrusion, which is crucial for the area's varied building types."
    },
    {
      id: 2,
      question: "Can you waterproof over existing surfaces like tile or concrete?",
      answer: "Yes. Our systems are versatile enough to be applied over various existing substrates, including concrete and tile. We ensure proper preparation and adhesion to create a seamless, protective barrier without extensive demolition."
    },
    {
      id: 3,
      question: "Does your work comply with Hollywood building codes and HOA requirements?",
      answer: "Absolutely. We are fully compliant with all local building codes and are experienced in working with HOAs across Hollywood to meet their specific architectural and material guidelines, ensuring a smooth approval process."
    },
    {
      id: 4,
      question: "How long does a typical deck waterproofing project take in Hollywood?",
      answer: "Most residential projects are completed within 3-7 days, depending on the size and complexity of the deck or balcony. Our efficient process ensures minimal disruption while delivering a durable, high-quality finish."
    },
    {
      id: 5,
      question: "Do your waterproofing services come with a warranty?",
      answer: "Yes, we offer comprehensive warranties that cover both materials and labor. Our commitment to quality means you can expect long-lasting protection and peace of mind for your Hollywood property."
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
            Hollywood Deck & Pool Deck Waterproofing
          </h1>
          
          {/* Paragraph Text */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Hollywood’s diverse architectural styles, from classic estates to modern condominiums, demand tailored waterproofing solutions. Our expert coating systems are designed to protect and preserve all outdoor surfaces, ensuring long-lasting durability and aesthetic appeal for your property.
          </p>
        </div>
      </div>
    </div>

    {/* Main Content Section */}
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-8xl">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Protecting Hollywood Properties with High-Performance Deck and Pool Deck Waterproofing Systems
        </h2>
        
        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          Hollywood’s luxurious residences are often adorned with expansive decks and inviting pool areas. These outdoor living spaces are subject to constant exposure to UV rays, temperature fluctuations, and moisture, which can lead to rapid deterioration if not properly protected. Our specialized waterproofing systems ensure these areas remain beautiful, safe, and durable.
        </p>
        
        {/* Service Description Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
          Our systems create a seamless, impenetrable barrier that prevents water intrusion, dry rot, and structural damage, preserving your property’s value and aesthetic appeal. By addressing these vulnerabilities, we extend the lifespan of your decks and pool decks, providing lasting protection against the elements.
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
              Hollywood Treated Experts for Deck Waterproofing, Balcony Protection & Pool Deck Restoration
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
              Balcony Waterproofing & Waterproof Decks in Hollywood
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Our balcony waterproofing services are tailored to protect your property from Hollywood’s varied climate, which includes intense sun, occasional rains, and humidity. We address common issues like hidden leaks, inadequate drainage, and material deterioration, ensuring your outdoor spaces remain protected and beautiful for years.
            </p>
            
            {/* Why Most Balconies Fail */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pool Deck Waterproofing & Waterproof Decks for All Season</h3>
              <p className="text-gray-700 mb-3">
                Hollywood’s pool decks are vital entertainment spaces, but constant exposure to sun, chemicals, and water can lead to cracks, leaks, and an unsafe environment. Our pool deck waterproofing systems utilize advanced coatings that resist UV damage, chemical corrosion, and water intrusion, providing a durable, slip-resistant surface that ensures safety and longevity.
              </p>
            </div>
            
            {/* Water Damage Is Common */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Under-Deck Waterproofing Systems & Pool Deck Waterproofing for Multi-Level Structures</h3>
              <p className="text-gray-700">
                For multi-level properties, under-deck waterproofing is essential to protect lower living areas from water damage. Our specialized systems create an impenetrable barrier beneath elevated decks, balconies, and pool decks, effectively preventing leaks from impacting underlying structures and interiors.
              </p>
            </div>
            
            {/* Weather, Wear, and Poor Drainage */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Concrete Planter Waterproofing & Drain Deck Solutions</h3>
              <p className="text-gray-700 mb-4">
              Decorative planters are a common feature in Hollywood properties, but without proper waterproofing, they can be a significant source of water damage. We install robust planter waterproofing systems with integrated drainage, ensuring that plants thrive while protecting your structure from moisture intrusion, dry rot, and mold.
              </p>
            </div>
            
            {/* Prevent Problems */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Heavy Deck Waterproofing & Sealant Systems</h3>
              <p className="text-gray-700 mb-3">
              For high-traffic or heavily exposed decks, our heavy-duty waterproofing and sealant systems provide maximum protection. These robust applications are designed to withstand extreme wear and environmental stress, ensuring superior durability and long-term performance for even the most demanding Hollywood installations.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:col-span-1">
            <div className=" top-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                src="/Area/Expert Deck and Balcony Waterproofing in Pasadena  Waterproofed.com – 38 Yrs Experience/1.jpg" 
                 alt="Workers performing balcony repair work on concrete floor"
                 className="w-full h-auto object-cover"
                 style={{ minHeight: '500px' }}
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
                 style={{ minHeight: '500px' }} />
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Proven Waterproofing Process for Hollywood Decks and Balconies 
            </h2>
            
            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            With decades of experience, we’ve refined a reliable, multi-step process that ensures maximum protection, longevity, and value. Our method focuses on correct material selection, preparation, and installation—nothing is rushed or overlooked.
            </p>
            
            {/* Waterproof Coating */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Moisture Mapping and Deck Waterproofing Inspection in Hollywood </h3>
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
        Why Homeowners Choose Waterproofed.com for Deck and Balcony Waterproofing in Hollywood? 
        </h2>
        
        {/* Introductory Paragraphs */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Choosing the right contractor means trusting someone with your home’s safety, beauty, and long-term value. Our clients return to us because we combine deep technical skill with a client-first philosophy—and results that last.
          </p>
        </div>
        
        {/* Small Cracks Can Lead to Big Problems */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialized Waterproofing Contractors for Historic and Modern Hollywood Homes</h3>
          <p className="text-gray-700 mb-4">
          Hollywood's diverse architectural landscape, from historic homes in the North of Montana Avenue neighborhood to modern beachfront properties, requires a nuanced approach to waterproofing. We specialize in tailoring solutions that protect and preserve, respecting the unique character of your property while ensuring long-lasting defense against the coastal climate.
          </p>
        </div>
        
        {/* Unsafe Railings */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Deck Waterproofing and Under-Deck Waterproofing Systems That Protect Foundations</h3>
          <p className="text-gray-700 mb-4">
          The persistent moisture from Hollywood's coastal environment can lead to significant water intrusion, threatening not just your deck or balcony, but also subfloors, insulation, and even your home’s foundation. Our advanced waterproofing systems create an impenetrable barrier at the surface, safeguarding your entire structure from the relentless corrosive effects of moisture.
          </p>
        </div>
        
        {/* Complete Integration */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Craftsmanship, Communication, and Guaranteed Balcony Deck Repair Services</h3>
          <p className="text-gray-700 mb-4">
          Our team comprises highly skilled, certified waterproofing specialists who are experts in Hollywood's unique climate and building codes. We pride ourselves on meticulous craftsmanship, transparent communication, and a commitment to completing every project to the highest standards. From initial inspection to final touches, we ensure a seamless and stress-free experience, treating your home with the respect and care it deserves.
          
          Conclusion: Homeowners choose Waterproofed.com for our unparalleled expertise, dedication to quality, and a client-first approach that ensures lasting protection and peace of mind.
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
            Hollywood’s Local Experts in Roof Deck and Balcony Waterproofing Systems 
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            With decades of experience serving Hollywood, we possess an intimate understanding of the city’s unique coastal climate, architectural styles, and stringent building regulations. This local expertise allows us to provide tailored, highly effective, and compliant waterproofing solutions that stand the test of time.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Areas We Serve for Deck and Balcony Waterproofing in Hollywood: North of Montana, Ocean Park, Sunset Park, Wilshire Montana, Pico Neighborhood, Mid-City, and surrounding coastal communities.
            </p>
            
            {/* Flashing Installation Done Right */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get a Free Deck Waterproofing or Balcony Repair Inspection in Hollywood Today</h3>
              <p className="text-gray-700 mb-4">
              Don’t let minor leaks evolve into major structural damage. Our complimentary, no-obligation inspections provide a thorough assessment of your deck, balcony, or planter’s waterproofing needs. We’ll provide a detailed report, answer all your questions, and present a customized, transparent plan to protect your investment. Contact us today to schedule your free inspection and experience why we are the leading waterproofing contractors in Hollywood.
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
                    <p className="text-sm opacity-90">Service Areas: Beverly Hills, Pasadena, Los Angeles, North Hollywood, Hollywood, Sherman Oaks, Burbank, Orange County, and more</p>
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
              Hollywood's Premier Deck, Balcony & Planter Waterproofing Experts
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
