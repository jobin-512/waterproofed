import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Testimonial from '../../components/testimonial'

export const Route = createFileRoute(
  '/(area)/malibu-deck-waterproofing-contractor',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqData = [
    {
      id: 0,
      question: "How does salt air accelerate deck deterioration, and how does your process prevent it?",
      answer: "Salt air penetrates wood and concrete, causing corrosion, rust, and decay. Our deck waterproofing system includes salt-resistant primers and sealants that block salt intrusion and protect surfaces from long-term structural damage and surface breakdown."
    },
    {
      id: 1,
      question: "What is the best non-slip coating for a pool deck that gets full sun all day?",
      answer: "We use UV-stable, slip-resistant pool deck coatings that stay cool and safe in full sun. These coatings provide grip for wet feet, resist fading, and are ideal for Malibu’s bright, sunny climate."
    },
    {
      id: 2,
      question: "Can you waterproof a balcony that is constantly exposed to ocean spray and wind?",
      answer: "Yes. We install flexible, marine-grade roof deck waterproofing systems and reinforced membranes that withstand ocean spray, wind, and rain, preventing water intrusion and protecting interiors beneath your balcony from long-term exposure."
    },
    {
      id: 3,
      question: "How do you prevent mold and mildew growth in shady, coastal areas?",
      answer: "We apply antimicrobial coatings, improve drainage, and ensure proper airflow. These steps stop moisture accumulation, which is the root cause of mold and mildew in shaded, high-humidity coastal zones."
    },
    {
      id: 4,
      question: "Do your coatings protect against fading from intense UV exposure?",
      answer: "Absolutely. We use premium coatings like Gaco deck coating and liquid rubber deck coating, engineered to resist UV damage, fading, chalking, and cracking—even under Malibu’s harsh, year-round sun."
    },
    {
      id: 5,
      question: "What is the typical lifespan of a waterproofing system in a harsh coastal environment?",
      answer: "With high-quality materials and proper maintenance, our waterproofing systems typically last 10–20 years. Many applications include long-term or lifetime warranties, depending on location, exposure, and substrate condition."
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
            Coastal Deck & Pool Deck Waterproofing in Malibu 
          </h1>
          
          {/* Paragraph Text */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Malibu’s stunning ocean views come with a price—constant exposure to salt air, UV rays, and marine moisture that wreak havoc on outdoor surfaces. At Waterproofed.com, we’ve spent 38+ years developing and applying advanced deck waterproofing systems specifically for coastal environments like Malibu.
          </p>
        </div>
      </div>
    </div>

    {/* Main Content Section */}
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-8xl">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Protecting Malibu Homes with Salt-Resistant Deck Waterproofing and Pool Deck Coating Systems 
        </h1>
        
        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          Life in Malibu means sun, surf—and salt damage. Homes near the ocean face accelerated deterioration from salty breezes, marine fog, and intense UV exposure. These natural elements can rot wood, crack concrete, and strip coatings faster than in inland communities.
        </p>
        
        {/* Service Description Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
          That’s why our solutions go beyond aesthetics. We protect your decks, balconies, and pools with industrial-grade systems built to withstand the rigors of Malibu’s coastal climate. We don’t just offer a service—we offer protection that preserves your home’s value and functionality for the long haul.
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
              Conclusion: Every Malibu home deserves a defense system as strong as its views are beautiful. Our deck and pool deck waterproofing keeps your outdoor spaces safe, stunning, and fully protected—season after season. 
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
            Malibu's Premium Deck and Pool Deck Waterproofing Services for Coastal Properties 
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
            At Waterproofed.com, we deliver weatherproof, corrosion-resistant coatings that shield your investment from Malibu’s intense marine conditions. Each project is customized to suit your property’s micro-climate, materials, slope, and design.
            </p>
            
            {/* Why Most Balconies Fail */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Salt Air-Resistant Deck Waterproofing Systems for Long-Term Coastal Protection</h3>
              <p className="text-gray-700 mb-3">
              Salt is one of the most destructive elements in coastal regions. It seeps into porous materials and causes swelling, corrosion, and eventual breakdown. We use chemical-resistant sealants that create a hardened, breathable barrier against salt spray.
              
              This process prevents wood rot, deck flashing repair issues, and concrete spalling on walkways and balconies. Our seamless applications resist penetration, stop future corrosion, and keep your decks beautiful and safe in salty air.
              </p>
            </div>
            
            {/* Water Damage Is Common */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Slip-Resistant Pool Deck Coatings for Malibu Pools and Outdoor Living Areas</h3>
              <p className="text-gray-700">
              Pool areas in Malibu need more than waterproofing—they need a surface that’s comfortable underfoot, cool in the sun, and safe when wet. We offer pool deck coatings that are UV-resistant, chlorine-stable, and slip-tested for safety.
              
              Whether you're looking for the best pool deck coating or seeking pool deck repair companies near me, we deliver custom resurfacing solutions using liquid rubber deck coating and other advanced products.
              
              Our clients include modern mansions in Serra Retreat and beachside escapes along Broad Beach—each with specific needs and finishes.
              </p>
            </div>
            
            {/* Weather, Wear, and Poor Drainage */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Oceanfront Balcony Roof Deck Waterproofing and Leak Repair Solutions</h3>
              <p className="text-gray-700 mb-4">
              High winds and rain driven sideways are a normal part of Malibu’s winter storms. They can exploit even the tiniest cracks in balcony surfaces, causing leaks into the rooms below.
              
              We install roof deck waterproofing membranes that flex with building movement, seal seams, and protect vulnerable areas like railing posts and wall joints. If your balcony is leaking or bubbling, we offer full balcony leak detection, membrane installation, and expert deck flashing repair to keep your home’s interiors safe and dry.
              </p>
            </div>
            
            {/* Prevent Problems */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Erosion Control and Under Deck Waterproofing Systems for Malibu Slopes and Bluffs</h3>
              <p className="text-gray-700 mb-3">
              Malibu’s sloped lots and cliffside locations are prone to water runoff and ground shifting. We provide foundation protection systems that prevent erosion from destabilizing your home’s base.
              
              Our crew installs drainage systems, slope stabilizers, and subsurface waterproof membranes that direct water away from structures. This keeps soil in place and prevents damage from saturated ground beneath decks and patios.
              
              Conclusion: From salt-resistant coatings to non-slip pool deck finishes and slope stabilization, our services are designed to handle every coastal challenge your Malibu property can throw at them.
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
            Marine-Grade Deck and Pool Deck Waterproofing Process for Malibu Properties 
            </h2>
            
            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Decades of experience have taught us that you can’t treat coastal properties like inland homes. Our marine-grade waterproofing protocol is engineered for resilience in Malibu’s harshest conditions. It’s a thorough, methodical process designed for maximum adhesion, longevity, and peace of mind.
            </p>
            
            {/* Waterproof Coating */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Site Assessment for Deck and Pool Deck Coating in Malibu’s Coastal Climate </h3>
              <p className="text-gray-700">
              We start with a detailed site visit and environmental analysis. We evaluate salt exposure, sun angle, stormwater flow, and building materials to determine the best deck waterproofing system for your exact location. Homes in Las Flores face different challenges than those near Point Dume, and we tailor our solutions accordingly.
              </p>
            </div>
            
            {/* We Only Use the Best */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Corrosion Control and Surface Prep for Deck Waterproofing and Pool Deck Repair </h3>
              <p className="text-gray-700 mb-4">
              Our prep phase includes rust removal on metal elements, degreasing, power washing, and concrete etching to eliminate salt residue and open pores. This ensures that primers and coatings achieve maximum bond strength. Proper preparation is key to preventing bubbling, peeling, and adhesion failure in pool deck coatings and balcony membranes.
              </p>
            </div>
            
            {/* Built from the Base Up */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Application of UV-Resistant Gaco Deck Coating and Liquid Rubber Systems </h3>
              <p className="text-gray-700 mb-4">
              We apply flexible, industrial-grade membranes like Gaco deck coating or liquid rubber deck coating, designed to reflect UV rays and withstand expansion and contraction cycles without cracking. These coatings offer a “cool touch” feel, resist fading, and are among the best concrete pool deck coatings available today.
              </p>
            </div>

            {/* Built from the Base Up */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 4: Final Testing for Slip Resistance and Safety on All Waterproofed Surfaces </h3>
              <p className="text-gray-700 mb-4">
              Before we sign off, we test all surfaces for slip resistance, drainage, and curing integrity. We ensure that your pool deck coating in Malibu meets national safety standards for traction and water resistance—especially critical for homes with children, guests, or aging residents. 
              
              Conclusion: Our process delivers long-lasting results engineered specifically for Malibu’s intense sun, salty winds, and seismic conditions. When you choose Waterproofed.com, you get craftsmanship built for the coast.
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
        Why Malibu Chooses Us for Deck Waterproofing and Pool Deck Repair Services? 
        </h2>
        
        {/* Introductory Paragraphs */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Not all contractors understand what it takes to waterproof a Malibu property. We’ve specialized in coastal deck waterproofing for nearly four decades. Our crews are trained to address the exact conditions you face—from salt mist to soil slippage.
          </p>
        </div>
        
        {/* Small Cracks Can Lead to Big Problems */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialists in Marine Construction and Under-Deck Waterproofing for Malibu Homes</h3>
          <p className="text-gray-700 mb-4">
          Our installers are trained specifically for marine-grade materials and complex, weather-exposed architecture. We know how to install flashing, membranes, and coatings that last—whether your home sits on stilts or stone.
          </p>
        </div>
        
        {/* Unsafe Railings */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Coastal-Grade Sealants and the Best Pool Deck Coating Systems</h3>
          <p className="text-gray-700 mb-4">
          We don’t cut corners with generic products. We only use premium sealants, membranes, and finishes approved for high-salt, high-UV environments. Products like Gaco deck coating and top-tier liquid rubber deck coatings are part of our standard toolkit. These materials don’t just coat—they protect against chalking, breakdown, and moisture penetration over time.
          </p>
        </div>
        
        {/* Complete Integration */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Bluffside and Beachfront Expertise in Deck Flashing Repair and Erosion Prevention</h3>
          <p className="text-gray-700 mb-4">
          From steep cliffs in Encinal Canyon to beachfront bungalows in Malibu Colony, we’ve waterproofed some of the region’s most complex properties. We work seamlessly with landscape architects and engineers to prevent erosion and manage stormwater—all while protecting the aesthetics of your space.
          
          Conclusion: Our team’s depth of knowledge in coastal construction, materials science, and design integration sets us apart from general contractors. We’re Malibu’s waterproofing experts for a reason.
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
            Serving All Areas of Malibu with Custom Deck Waterproofing and Pool Deck Coating 
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We’re proud to serve the full Malibu coastline, from seaside estates to hillside retreats. We understand the unique microclimates of each area—and how to build for them.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Malibu Areas We Serve for Pool Deck Coatings, Repairs, and Waterproofing 
            
            Zuma Beach, Broad Beach, Point Dume, Malibu Colony, Serra Retreat, Encinal Canyon, Las Flores, Carbon Beach, and all parts of the 90265. 
            
            Conclusion: We live and work in Malibu. That means we’re always nearby, always available, and always prepared to meet the specific needs of your property and location. 
            </p>
            
            {/* Flashing Installation Done Right */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get a Free Consultation for Pool Deck Repair and Deck Waterproofing in Malibu</h3>
              <p className="text-gray-700 mb-4">
              Your Malibu home deserves more than generic waterproofing. It deserves a marine-grade protection plan, tailored to your home’s exposure, slope, materials, and architecture. We offer free site inspections and quotes, expert evaluation of drainage, slope, and materials, recommendations for the best pool deck coating and deck waterproofing system, flexible scheduling, and white-glove service. Call now or click below to secure your inspection. 
              
              Request Your Free Estimate Now 
              
              Conclusion:  Don’t let salt air, UV rays, or moisture erode your peace of mind. We’ll protect your home—beautifully and permanently.
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
