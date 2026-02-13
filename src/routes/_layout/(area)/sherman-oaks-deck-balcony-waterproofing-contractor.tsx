import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Testimonial from '../../../components/testimonial'

export const Route = createFileRoute(
  '/_layout/(area)/sherman-oaks-deck-balcony-waterproofing-contractor',
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
            Deck & Balcony Waterproofing in Sherman Oaks 
          </h1>
          
          {/* Paragraph Text */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Sherman Oaks, a city known for its diverse architectural styles, from classic estates to modern condominiums, demand tailored waterproofing solutions. Our expert coating systems are designed to protect and preserve all outdoor surfaces, ensuring long-lasting durability and aesthetic appeal for your property.
          </p>
        </div>
      </div>
    </div>

    {/* Main Content Section */}
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-8xl">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
           Expert Deck Coating Systems by Southern California Decking
        </h2>
        
        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          Sherman Oaks combines upscale living with vibrant commercial spaces—but it also brings challenges: sun exposure, fluctuating temperatures, and urban moisture that wear down decks, balconies, and patios. At Southern California Decking, we’ve spent more than 38 years perfecting deck waterproofing systems that protect, beautify, and extend the life of outdoor spaces across Los Angeles.
        </p>
        
        {/* Service Description Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
          Whether you’re upgrading your balcony deck, rooftop terrace, pool area, or commercial patio, we deliver the precision, product quality, and craftsmanship that Sherman Oaks properties deserve. With premium solutions like Gaco deck coating, liquid rubber deck coating, and decorative finishes, we’re known as the trusted choice for deck waterproofing in Sherman Oaks and nearby neighborhoods.
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
              Sherman Oaks Treated Experts for Deck Waterproofing, Balcony Protection & Pool Deck Restoration
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
              Protecting Sherman Oaks Homes and Businesses with Professional Waterproofing Services
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Sherman Oaks might not have coastal salt air, but its intense UV rays, temperature shifts, and heavy rains take a toll on outdoor structures. Cracked coatings, bubbling paint, and leaking balconies aren’t just cosmetic—they can lead to serious water intrusion, rot, and costly repairs.
            </p>
            
            {/* Why Most Balconies Fail */}
            <div className="mb-8">
              <p className="text-gray-700 mb-3">
                That’s where we come in. We design waterproofing services in Sherman Oaks that protect wood, concrete, and stucco decks against sun damage, ponding water, and urban pollutants. Every solution we install strengthens your structure, prevents leaks, and enhances long-term value.
              </p>
            </div>
            
            {/* Water Damage Is Common */}
            <div className="mb-8">
              <p className="text-gray-700">
                Conclusion: Your Sherman Oaks property deserves protection that’s as durable as it is beautiful. Our deck waterproofing services, balcony waterproofing, and patio deck flooring waterproof systems keep your spaces safe, seamless, and stunning year-round.
              </p>
            </div>
            
            {/* Weather, Wear, and Poor Drainage */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sherman Oaks’ Premium Deck, Balcony & Pool Deck Waterproofing Services </h3>
              <p className="text-gray-700 mb-4">
              At Southern California Decking, we specialize in residential and commercial deck waterproofing for all property types—from hillside estates to modern office terraces. Each system we install is customized to suit your structure’s design, slope, and use pattern.
              We combine precision craftsmanship with tested materials to ensure your investment stays protected for years to come.
              </p>
            </div>
            
            {/* Prevent Problems */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">UV-Resistant Deck Waterproofing Systems for Urban Durability</h3>
              <p className="text-gray-700 mb-3">
              Sherman Oaks is known for its year-round sunshine—but prolonged exposure can fade, crack, and weaken standard deck coatings. We use deck coating systems that reflect UV rays, reduce surface temperature, and prevent breakdown.Our deck waterproofing contractors in Sherman Oaks apply chemical-resistant membranes that create a tight, breathable seal over your deck or balcony. These membranes protect against peeling, water intrusion, and structural wear.
              </p>
              <p className="text-gray-700 mb-3">Example:A recent project on Ventura Boulevard involved a restaurant rooftop terrace exposed to direct sunlight. Our team installed a Gaco deck coating system that reduced surface heat by 30% and eliminated previous leaks—saving the owner thousands in potential damage.</p>
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
            Our Proven Waterproofing Process for Sherman Oaks Properties
            </h2>
            
            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            After nearly four decades in business, we’ve perfected a detailed process that guarantees performance and reliability. Each step is designed to ensure lasting adhesion, flexibility, and resistance to Los Angeles’ heat and moisture.
            </p>
            
            {/* Waterproof Coating */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Site Inspection and Assessment</h3>
              <p className="text-gray-700">
              We begin every project with a thorough inspection of your deck, balcony, or pool area. We evaluate slope, drainage, cracks, substrate type, and previous coatings to determine the ideal deck waterproofing system for your space.
              </p>
            </div>
            
            {/* We Only Use the Best */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Surface Preparation and Repair</h3>
              <p className="text-gray-700 mb-4">
              Our technicians clean, degrease, and etch surfaces for maximum bond strength. We repair cracks, remove old coatings, and address corrosion or loose flashing to ensure a flawless base. This step prevents peeling and future failure in deck paint services and pool deck coatings.
              </p>
            </div>
            
            {/* Built from the Base Up */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Application of Premium Coating Systems </h3>
              <p className="text-gray-700 mb-4">
              Using industry-leading products like Gaco deck coating, liquid rubber deck coating, and restore paint deck, we create a seamless, flexible waterproof layer that resists UV, moisture, and impact damage. These coatings are available in various colors and textures to match your design goals.
              </p>
            </div>

            {/* Built from the Base Up */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 4: Final Testing and Quality Assurance</h3>
              <p className="text-gray-700 mb-4">
              Before completion, we conduct full performance tests for slip resistance, drainage efficiency, and curing integrity. Our team ensures that your waterproof balcony flooring, patio deck flooring waterproof system, or roof deck waterproofing meets safety and quality standards.
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
              Our process delivers unmatched durability and visual appeal for both residential and commercial properties in Sherman Oaks—ensuring your outdoor spaces remain safe, strong, and beautiful for years to come.
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
        Why Sherman Oaks Chooses Waterproofed.com for Deck Waterproofing and Repairs?
        </h2>
        
        {/* Introductory Paragraphs */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
          When it comes to deck waterproofing contractors near me, experience and trust matter. We’ve served Los Angeles County for nearly four decades, earning a reputation for technical precision and lasting results. From Ventura Boulevard retail spaces to hillside homes off Beverly Glen, property owners rely on us for one reason—we deliver waterproofing that works, rain or shine.

          </p>
        </div>
        
        {/* Small Cracks Can Lead to Big Problems */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialists in Balcony and Roof Deck Waterproofing for Multi-Story Buildings</h3>
          <p className="text-gray-700 mb-4">
          We understand the complex structures of Sherman Oaks condos, offices, and multi-level homes. Our team is trained to install roof deck waterproofing membranes that adapt to movement and expansion without cracking or peeling.
          </p>
        </div>
        
        {/* Unsafe Railings */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Deck Coating Materials and Decorative Finishes</h3>
          <p className="text-gray-700 mb-4">
          We use only the best—Gaco deck coating, liquid rubber deck coating, and decorative concrete coating systems that meet or exceed industry standards. These products provide UV resistance, slip protection, and long-term durability.
          </p>
        </div>
        
        {/* Complete Integration */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Deck Flashing and Pool Deck Repair Services</h3>
          <p className="text-gray-700 mb-4">
          Flashing issues are one of the main causes of leaks in Los Angeles decks. Our deck flashing repair and pool deck repair services near me combine expert diagnosis with premium materials to stop water intrusion before it causes damage.
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
            Serving All of Sherman Oaks with Complete Waterproofing Solutions
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            From classic homes in Chandler Estates to modern townhomes near Ventura Blvd, we know Sherman Oaks—and we know how to protect it. Our waterproofing systems are engineered for LA’s unique combination of sun, heat, and stormwater runoff.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Neighborhoods We Serve: Sherman Oaks Hills, Magnolia Woods, Chandler Estates, Hidden Woods, and surrounding communities in the San Fernando Valley.
            </p>
            
            {/* Flashing Installation Done Right */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get a Free Quote for Deck Waterproofing in Sherman Oaks</h3>
              <p className="text-gray-700 mb-4">
              Don’t let leaks, cracks, or fading compromise your outdoor spaces. Whether it’s balcony waterproofing, pool deck coating near me, or decorative coating for patios, our specialists will design a plan tailored to your property.
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
              Santa Monica's Premier Deck, Balcony & Planter Waterproofing Experts
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

