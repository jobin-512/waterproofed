import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Testimonial from '../components/testimonial'

export const Route = createFileRoute('/services/deck-waterproofing-coating-repair')({
  component: DeckWaterproofingCoatingRepair,
})

function DeckWaterproofingCoatingRepair() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqData = [
    {
      id: 0,
      question: "Can you waterproof over an old deck coating?",
      answer: "Yes, in many cases we can. First, we check if the existing deck coating is in good shape and works with a new system. If it does, we apply a new deck waterproof layer over it."
    },
    {
      id: 1,
      question: "What types of coating systems do you use?",
      answer: "We work with some of the industry's best waterproofing systems. These includes Gaco, Life Deck, Dex-O-Tex, MiraSEAL, and others. We recommend the best one based on your deck's material, location, and use."
    },
    {
      id: 2,
      question: "How do you manage water drainage on rooftop decks?",
      answer: "Proper drainage is critical. We create the right slope, install custom drains and scuppers, and add flashing where needed to ensure water flows away from your structure — not into it."
    },
    {
      id: 3,
      question: "Do you provide warranties for your waterproofing work?",
      answer: "Absolutely. All of our waterproofing and repair work is backed by labor warranties, plus additional manufacturer warranties depending on the system installed. You will receive all warranty details in writing."
    },
    {
      id: 4,
      question: "How long does the deck waterproofing process take?",
      answer: "Most projects are completed in about 4 to 7 days. The exact time depends on your deck's size, condition, and the type of repairs or coatings needed. We always try to minimize disruption to your routine."
    },
    {
      id: 5,
      question: "Can you match the deck's color to my home's style?",
      answer: "Yes! We offer a wide selection of textures, patterns, and finishes. Whether you want something bold and modern or a look that blends seamlessly with your home's exterior, we will help you choose a finish that complements your space beautifully."
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
            Deck Waterproofing Coating Repair
            </h1>
            
            {/* Paragraph Text */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Intrinsicly predominate backward-compatible potentialities without alternative total linkage. Interactively fabricate cross-unit growth strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-8xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            Best Deck Waterproofing, Coating & Repair Services
          </h1>
          
          {/* Introductory Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            Los Angeles Decks are always exposed to sun, rain and coastal humidity. These natural exposures erode the structure. They cause wood rot, mold, surface cracks, and even foundation damage. But, with proper waterproofing of decks you can save tons of damage.
          </p>
          
          {/* Service Description Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
            Waterproofed.com, offers full-service deck waterproofing, coating, and repair solutions. These services are designed to Southern California's climate and architectural styles. So, whether you are a homeowner in Santa Monica, Pasadena, Malibu, Beverly Hills, or a property manager in Burbank, or overseeing a commercial rooftop lounge in DTLA, our advanced systems and professional team are here to protect your investment for decades.
          </p>
          
          {/* Call-to-Action Section */}
          <div className="bg-[#1a4a5e] rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-90">
              <div className="w-full h-full" style={{
                backgroundImage: "/service/s4.svg"
              }}></div>
            </div>
            
            {/* CTA Content */}
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ready to Protect Your Deck with California's Most Trusted Waterproofing Experts?
              </h2>
              
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 border border-gray-300">
                Call Now for Free Estimate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Deck Restoration Process Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-2">
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Step-by-Step Deck Restoration Process
              </h2>
              
              {/* Introductory Paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Even if it is a rooftop deck or pool deck, we believe every deck deserves a second life. Well, that begins with a thorough, proven waterproofing and coating process. Let me explain it to you!
              </p>
              
              {/* Step 1: Inspection & Assessment */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Inspection & Assessment</h3>
                <p className="text-gray-700 mb-3">
                  Our experts begin with a complimentary on-site inspection. We evaluate deck substrate, visible damage, prior coatings, drainage points, and structural condition.
                </p>
                <p className="text-gray-700 mb-4">
                  Every deck is unique with its own problems, and our approach reflects that.
                </p>
                
                {/* Case Study */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">For Instance Let's Dive into a Case Study:</h4>
                  <p className="text-blue-800">
                    A client in Manhattan Beach had ongoing leaks. Our team provided a customized repair and membrane system.
                  </p>
                </div>
              </div>
              
              {/* Step 2: Surface Preparation */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Surface Preparation</h3>
                <p className="text-gray-700">
                  We clean, sand, and pressure wash the surface to remove dirt, mold, and failed coatings. Prepping the substrate ensures optimal adhesion for the new waterproofing system.
                </p>
              </div>
              
              {/* Step 3: Crack Sealing & Flashing Installation */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Crack Sealing & Flashing Installation</h3>
                <p className="text-gray-700 mb-4">
                  We seal cracks using polyurethane or epoxy sealants and install new metal flashing at joints, corners, thresholds, and wall intersections. This protects high-risk leak points, especially around doors and balcony edges.
                </p>
                
                {/* Pro Tip */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Pro Tip:</h4>
                  <p className="text-yellow-800">
                    Flashing is a critical component. Poor or missing flashing is the top cause of water damage beneath plywood deck systems.
                  </p>
                </div>
              </div>
              
              {/* Step 4: Waterproofing Membrane Application */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">4. Waterproofing Membrane Application</h3>
                <p className="text-gray-700 mb-3">
                  We apply a multi-layer liquid waterproofing system, such as:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li>Gaco Deck Coating</li>
                  <li>Life Deck AL System</li>
                  <li>Dex-O-Tex Neobond</li>
                </ul>
                <p className="text-gray-700">
                  These flexible membranes block water and move with your deck. Also, they work great on plywood, concrete, and mixed surfaces.
                </p>
              </div>
              
              {/* Step 5: Coating & Finishing */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">5. Coating & Finishing</h3>
                <p className="text-gray-700 mb-3">
                  Once the membrane is cured, we apply topcoats in your choice of color and finish. We offer:
                </p>
                <ol className="list-decimal list-inside text-gray-700 mb-4 ml-4">
                  <li>Slip-resistant textures</li>
                  <li>UV-stable finishes</li>
                  <li>Decorative acrylic overlays</li>
                </ol>
                <p className="text-gray-700">
                  From modern grays to natural tan hues, we can match your home's design.
                </p>
              </div>
              
              {/* Step 6: Final Inspection & Maintenance Guidance */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">6. Final Inspection & Maintenance Guidance</h3>
                <p className="text-gray-700">
                  Before completion, we walk through the project with you and provide tips for care and longevity. We also offer periodic deck waterproofing maintenance plans for long-term performance. All you need to do is contact our team and we will resolve all your problems in seconds!
                </p>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:col-span-1">
              <div className=" top-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="/service/s1.svg" 
                    alt="Worker applying deck coating with roller"
                    className="w-full h-auto object-cover"
                    style={{ minHeight: '600px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Expert Deck Repair Services Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/service/s2.svg" 
                  alt="Workers performing deck repair work on concrete floor"
                  className="w-full h-auto object-cover"
                  style={{ minHeight: '500px' }}
                />
              </div>
            </div>
            
            {/* Right Column - Text Content */}
            <div className="order-1 lg:order-2">
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Expert Deck Repair Services
              </h2>
              
              {/* Introduction */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Damaged decks can quickly become safety hazards. At Waterproofed.com, we offer comprehensive deck repair services to address issues before or during the waterproofing process. A well-repaired deck ensures the longevity and integrity of any coating system applied afterward.
              </p>
              
              {/* Repair Capabilities */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our repair capabilities include:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#00A7E8] mr-2">•</span>
                    <span><strong>Stucco repair</strong> on adjoining walls that may be damaged by persistent leaks or water intrusion.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A7E8] mr-2">•</span>
                    <span><strong>Plywood replacement</strong> is done for rotted or delaminated sheathing. This is particularly critical in wood-framed decks as structural integrity is compromised.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A7E8] mr-2">•</span>
                    <span><strong>Joint and seam patching</strong> is done in areas with repetitive movement or past water exposure.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A7E8] mr-2">•</span>
                    <span><strong>Flexible epoxy and polyurethane</strong> application seals all cracks, joints, and gaps to keep water out.</span>
                  </li>
                </ul>
              </div>
              
              {/* Additional Services */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">We also handle:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#00A7E8] mr-2">•</span>
                    <span><strong>Beam and joist sistering</strong> when structural members are compromised</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A7E8] mr-2">•</span>
                    <span><strong>Post-to-deck base repairs</strong> with rust-resistant brackets and anchors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A7E8] mr-2">•</span>
                    <span><strong>Re-sloping of the substrate</strong> to correct improper drainage issues</span>
                  </li>
                </ul>
              </div>
              
              {/* Case Study */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <h4 className="font-semibold text-blue-900 mb-3">Example Case Study:</h4>
                <p className="text-blue-800">
                  In Pasadena, a mid-century home had 40% plywood degradation under tile. We removed the tile, replaced the sheathing, rebuilt the sloped substrate, added new flashing, and applied a waterproof deck coating for plywood – preventing over $20,000 in future water and mold remediation.
                </p>
              </div>
              
              {/* Conclusion */}
              <p className="text-lg text-gray-700 leading-relaxed">
                These repairs help keep your deck safe and looking good. Also, it helps us in protecting the waterproofing system underneath. So, if your deck feels soft, shows cracks, or holds water, this is the time to fix it. If you act early and contact a deck waterproofing contractor it will save you big expenses later.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flashing Installation & Drainage Solutions Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-8xl">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Flashing Installation & Drainage Solutions for Your Deck
          </h2>
          
          {/* Introductory Paragraphs */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Even if it is a rooftop deck or pool deck, we believe every deck deserves a second life. Well, that begins with a thorough, proven waterproofing and coating process. Let me explain it to you!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Flashing and drainage are the unsung heroes of a successful waterproofing system. Without proper water flow management, even the most advanced membranes will fail over time. At Waterproofed.com, we provide meticulous flashing installation and effective drainage solutions tailored to your deck's needs.
            </p>
          </div>
          
          {/* Services Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our services include:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#00A7E8] mr-2">•</span>
                <span><strong>Edge, door threshold, and wall joint flashing:</strong> Installing rust-resistant metals like copper or galvanized steel with precision to stop water seepage.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00A7E8] mr-2">•</span>
                <span><strong>Custom scuppers, drains, and downspouts:</strong> Designing and installing custom drainage solutions to quickly move water off the deck, preventing puddles, staining, and long-term damage.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00A7E8] mr-2">•</span>
                <span><strong>Slope correction and deck leveling:</strong> Fixing poor slopes to ensure water flows away from the structure, extending the waterproofing system's life.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00A7E8] mr-2">•</span>
                <span><strong>Seam sealing and lap reinforcement:</strong> Sealing all seams and overlaps tightly to stop leaks, adding long-term strength.</span>
              </li>
            </ul>
          </div>
          
          {/* Transitional Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Whether it is a balcony in West Hollywood or a rooftop in Sherman Oaks, we tailor our process to your space's layout, use, and weather exposure.
          </p>
          
          {/* Real-World Insight */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Read this Real-World Insight:</h4>
            <p className="text-gray-700">
              One of our projects in Studio City involved a luxury penthouse deck with chronic ponding. We corrected the slope, installed custom scuppers, and sealed every seam before applying the final waterproof membrane. This ensures year-round protection.
            </p>
          </div>
          
          {/* Concluding Paragraphs */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our under-deck waterproofing systems protect the spaces below from water damage. This is essential for elevated decks, cantilevered balconies, and rooftops with finished interiors underneath.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Do not let poor drainage or missing flashing lead to hidden damage. Our team ensures water is guided away from your deck — and your home.
            </p>
          </div>
        </div>
      </div>

      {/* Waterproof Flooring Systems for Decks Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Waterproof Flooring Systems for Decks
              </h2>
              
              {/* Introductory Paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A durable, waterproof surface is not just about preventing leaks. It is also about adding beauty, safety, and long-term value to your outdoor spaces. At Waterproofed.com, we install premium waterproof flooring systems that combine protection with style.
              </p>
              
              {/* First Sub-heading */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our deck flooring systems are designed to:
              </h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#00A7E8] mr-2">•</span>
                  <span>Keep water out with seamless, multi-layer coatings that seal the whole surface.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00A7E8] mr-2">•</span>
                  <span>Reduce slips and wear with textured polymer or acrylic finishes, even in wet or busy areas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00A7E8] mr-2">•</span>
                  <span>Stand up to strong sun and changing temperatures without fading or breaking down.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00A7E8] mr-2">•</span>
                  <span>Handle heavy foot traffic, furniture, and daily outdoor use without cracking or peeling.</span>
                </li>
              </ul>
              
              {/* Second Sub-heading */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                These waterproof surfaces are ideal for a wide variety of applications, including:
              </h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#00A7E8] mr-2">•</span>
                  <span>Residential courtyards and garden patios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00A7E8] mr-2">•</span>
                  <span>Swimming pool decks that need both style and slip-resistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00A7E8] mr-2">•</span>
                  <span>Rooftop decks with areas for entertaining or relaxing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00A7E8] mr-2">•</span>
                  <span>Entry walkways and outdoor stairs where safety and appearance both matter</span>
                </li>
              </ul>
              
              {/* Fire Rating Paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                All our flooring systems meet or exceed Class A fire ratings, making them safe and code-compliant for homes and multi-family buildings across Los Angeles. Choose from a range of finishes, including:
              </p>
              <ul className="space-y-2 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#00A7E8] mr-2">•</span>
                  <span>Decorative flake overlays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00A7E8] mr-2">•</span>
                  <span>Troweled acrylic textures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00A7E8] mr-2">•</span>
                  <span>Smooth or brushed finishes in custom colors</span>
                </li>
              </ul>
              
              {/* Design Guidance Paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Whether you prefer a modern look or a warm, natural tone, our team will guide you in selecting and installing the ideal system for your design and performance needs.
              </p>
              
              {/* Client Testimonial */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Let's Hear from One of Our Clients:</h4>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-blue-800">
                    A client in Brentwood wanted a modern look for their outdoor entertainment deck. We installed a waterproof acrylic system with quartz sand texture, offering elegance and lasting durability that impresses both guests and appraisers.
                  </p>
                </div>
              </div>
              
              {/* Final Statement */}
              <p className="text-lg text-gray-700 leading-relaxed">
                When you choose Waterproofed.com, you get a waterproof flooring solution that both protects and impresses.
              </p>
            </div>
            
            {/* Right Column - Image */}
            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/service/s3.svg" 
                  alt="Three construction workers applying bright light blue waterproof coating on outdoor deck"
                  className="w-full h-auto object-cover"
                  style={{ minHeight: '600px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Waterproofed.com Section */}
      <div className="py-16 px-4 bg-[#1a4a5e] relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-80">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/service/s4.svg')",
              filter: "blur(2px)"
            }}
          ></div>
        </div>
        
        <div className="container mx-auto max-w-8xl relative z-10">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Why Choose Waterproofed.com?
          </h2>
          
          {/* Introductory Paragraph */}
          <p className="text-lg text-white leading-relaxed mb-12 text-center max-w-4xl mx-auto">
            Choosing the right team for deck waterproofing, coating, and repair is crucial for long-term protection and value. At Waterproofed.com, we offer decades of trusted work and quality craftsmanship across Los Angeles County. Here is why homeowners, builders, and property managers choose us again and again:
          </p>
          
          {/* Two-Column Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Over 38 Years of Experience */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Over 38 Years of Experience in LA County
                </h3>
                <p className="text-white leading-relaxed">
                  Our deep local knowledge spans Southern California's varied microclimates, from Redondo Beach to Glendale. With over 38 years of hands-on experience in residential, commercial, and multi-family projects, we provide expert solutions tailored to Los Angeles's unique weather and terrain.
                </p>
              </div>
              
              {/* Licensed, Insured, and Warranty-Backed */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Licensed, Insured, and Warranty-Backed
                </h3>
                <p className="text-white leading-relaxed">
                  We are fully licensed and insured, with all work backed by strong warranties. We adhere to local codes and building regulations to protect your investment. No shortcuts. No compromises.
                </p>
              </div>
              
              {/* Local Knowledge */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Local Knowledge That National Franchises Lack
                </h3>
                <p className="text-white leading-relaxed">
                  Unlike national brands offering broad solutions, we provide local expertise. We understand Los Angeles structures, hillside drainage, and beachfront exposure to ensure the correct system is always applied.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* High-Performance Materials */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  High-Performance Materials Only
                </h3>
                <p className="text-white leading-relaxed">
                  We use only premium systems from trusted brands like Gaco, Dex-O-Tex, Life Deck, BASF, and MiraSEAL. These materials are proven for Southern California's climate, delivering strong adhesion, long-lasting protection, and clean finishes.
                </p>
              </div>
              
              {/* Trained, Certified Applicators */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Trained, Certified Applicators
                </h3>
                <p className="text-white leading-relaxed">
                  Every installer is factory-trained and certified in multiple systems. We follow strict layering processes to eliminate common installation failures. We do not subcontract to unverified labor, ensuring work is handled by trusted, full-time professionals.
                </p>
              </div>
              
              {/* Did You Know? */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Did You Know?
                </h3>
                <p className="text-white leading-relaxed">
                  Improper installation is the #1 reason deck waterproofing systems fail. That is why we invest heavily in prep work, flashing, drainage, and correct application. Skipping steps is never an option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problems We Solve Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-8xl">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Problems We Solve
          </h2>
          
          {/* Introductory Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
            Deck waterproofing issues can manifest in many ways, from obvious leaks to hidden structural damage. Our team identifies and resolves these problems before they become costly disasters. Here are the most common issues we encounter and solve:
          </p>
          
          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Problem 1: Water Leaks */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Water Leaks & Moisture Intrusion
              </h3>
              <p className="text-gray-700 mb-4">
                Persistent leaks that damage ceilings, walls, and structural elements below decks. We identify the source and implement comprehensive waterproofing solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ceiling stains and water damage</li>
                <li>• Mold and mildew growth</li>
                <li>• Structural wood rot</li>
              </ul>
            </div>
            
            {/* Problem 2: Surface Deterioration */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Surface Deterioration & Cracking
              </h3>
              <p className="text-gray-700 mb-4">
                Cracked, peeling, or failing deck coatings that compromise protection and aesthetics. We restore surfaces with durable, long-lasting systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Peeling and flaking coatings</li>
                <li>• Surface cracks and gaps</li>
                <li>• UV damage and fading</li>
              </ul>
            </div>
            
            {/* Problem 3: Poor Drainage */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Poor Drainage & Standing Water
              </h3>
              <p className="text-gray-700 mb-4">
                Improper slopes and inadequate drainage systems that cause water to pool and accelerate deterioration. We correct drainage and ensure proper water flow.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Water ponding on surfaces</li>
                <li>• Clogged or missing drains</li>
                <li>• Improper deck slopes</li>
              </ul>
            </div>
            
            {/* Problem 4: Structural Damage */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Structural Damage & Safety Issues
              </h3>
              <p className="text-gray-700 mb-4">
                Compromised deck structures due to water damage, rot, or failed waterproofing systems. We repair structural elements and restore safety.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Rotted plywood and framing</li>
                <li>• Loose or unsafe railings</li>
                <li>• Compromised structural integrity</li>
              </ul>
            </div>
            
            {/* Problem 5: Failed Flashing */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Failed Flashing & Joint Leaks
              </h3>
              <p className="text-gray-700 mb-4">
                Leaks at critical transition points where decks meet walls, doors, or other structures. We install proper flashing and seal all vulnerable joints.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Wall-to-deck joint leaks</li>
                <li>• Door threshold water entry</li>
                <li>• Missing or corroded flashing</li>
              </ul>
            </div>
            
            {/* Problem 6: Code Compliance */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Code Compliance & HOA Issues
              </h3>
              <p className="text-gray-700 mb-4">
                Non-compliant waterproofing systems that fail inspections or violate building codes. We ensure all work meets local regulations and HOA requirements.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Failed building inspections</li>
                <li>• HOA violation notices</li>
                <li>• Insurance coverage issues</li>
              </ul>
            </div>
          </div>
          
          {/* Call-to-Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Don't let these problems compromise your deck's safety and value. Our expert team can identify and resolve any waterproofing issue.
            </p>
            <button className="bg-[#00A7E8] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0088C7] transition-colors duration-200">
              Get Free Inspection & Quote
            </button>
          </div>
        </div>
      </div>

      {/* What Makes Us the Best Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-8xl">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Makes Us the Best Deck Waterproofing & Coating Company?
          </h2>
          
          {/* Company Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Meet Darren Elliot, president of Southern California Decking (SCD) and the driving force behind Waterproofed.com. With over 38 years of hands-on experience in waterproofing and deck coating, Darren leads our team with a commitment to excellence that's unmatched in the industry. His hands-on, accessible approach means you're not just getting a quote – you're getting direct access to decades of expertise. Our team is available day or night to address your waterproofing needs.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Under Darren's leadership, SCD has become a leader in low VOC coatings and environmentally safe applications. Our team of over 20 skilled professionals brings more than 100 years of combined experience to every project. We provide honest, expert estimates and our mission is simple: to get it right the first time, every time.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Experience the difference of a locally owned, experienced, and accountable company. At Waterproofed.com, you're not just hiring a service – you're partnering with the best in the business.
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
                    backgroundImage: "url('/service/s4.svg')",
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
                
                {/* Call to Action */}
                <h4 className="text-2xl font-bold text-center mb-6">
                  Contact Waterproofed.com Today!
                </h4>
                
                {/* Description */}
                <p className="text-center mb-8 leading-relaxed">
                  Do not wait for water damage to take hold. Whether you need deck coating contractors near me or a full waterproof deck coating for plywood, Waterproofed.com is your trusted partner in Los Angeles.
                </p>
                
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
                      <p className="text-sm opacity-90">Contact us today to schedule your free inspection!</p>
                      <p className="font-semibold">(310) 569-3129</p>
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
                Best Deck Waterproofing, Coating & Repair Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Globally repurpose interdependent products after enterprise alignments. Credibly orchestrate worldwide web services whereas bleeding-edge networks. Interactively target sticky architectures. Holistically aggregate team driven human capital via customer directed interfaces. Seamlessly scale diverse total linkage rather than cross-unit process improvements.
              </p>
              <button className="bg-[#00A7E8] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg">
                ASK QUESTIONS
              </button>
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