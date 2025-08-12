import { createFileRoute } from '@tanstack/react-router'
import {useState} from "react"
import Testimonial from '../../components/testimonial'

export const Route = createFileRoute(
  '/services/planter-waterproofing-coating-repair',
)({
  component: RouteComponent,
})

function RouteComponent() {
    const [openFaq, setOpenFaq] = useState(0)
  
    const faqData = [
      {
        id: 0,
        question: "My planter is leaking into my garage—can you fix that?",
        answer: "Yes, we stop planter leaks at the source using custom waterproofing systems. We also repair any damage caused to ceilings, walls, or foundations below."
      },
      {
        id: 1,
        question: "Do you remove and replant during repairs?",
        answer: "Yes, we carefully remove soil and plants when needed. We replant everything after waterproofing is done, keeping your landscape intact and stress-free."
      },
      {
        id: 2,
        question: "What waterproof liners do you use?",
        answer: "We use reinforced waterproofing membranes designed for planters. They are flexible, root-resistant, and built to handle soil pressure, moisture, and extreme weather conditions."
      },
      {
        id: 3,
        question: "Is planter flashing necessary?",
        answer: "Absolutely. Flashing prevents water from entering at vulnerable joints. It is critical for long-term protection—especially where planters meet walls, doors, or decks."
      },
      {
        id: 4,
        question: "Can waterproofing harm my plants?",
        answer: "No. We use plant-safe, non-toxic systems. Your herbs, flowers, and trees are fully protected—no leaching, no chemicals, just healthy soil and peace of mind."
      },
      {
        id: 5,
        question: "How soon can you start the repair?",
        answer: "We typically schedule repairs within one week of your approval. Urgent leak situations are prioritized. Free estimates are available—just give us a call."
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
            Planter Waterproofing Coating Repair
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
            Planter Waterproofing, Coating & Repair Services
          </h1>
          
          {/* Introductory Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            Built-in planters are a beautiful addition to any home or commercial property. But in Southern California's climate, they can also be one of the most common sources of water intrusion. At Waterproofed.com, we specialize in planter waterproofing, coating, and repair services that protect your deck, stucco walls, and living spaces below.
          </p>
          
          {/* Service Description Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
            From Malibu to Pasadena and Downtown L.A. to Orange County, our expert team has been preventing leaks caused by decorative and structural planters for over 30 years.
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
                Do you see stains, cracks, or soft stucco near your planters?
              </h2>
              
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 border border-gray-300">
                Call us now for a free estimate!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Planter Waterproofing Matters Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-2">
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Planter Waterproofing Matters
              </h2>
              
              {/* Introductory Paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Planters are more than just decorative—they are part of your structure. When improperly sealed, they can become hidden sources of costly water damage. Understanding the risks of unprotected planters is the first step to preventing long-term issues in your deck, balcony, or living space.
              </p>
              
              {/* Planters Can Cause Serious Leaks */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Planters Can Cause Serious Leaks</h3>
                <p className="text-gray-700 mb-3">
                  Planters are constantly exposed to water, soil, and root systems. Without proper waterproofing, moisture seeps into the structure below, damaging concrete decks, rusting rebar, and promoting mold growth.
                </p>
              </div>
              
              {/* What Happens When Planters Are Not Properly Sealed */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens When Planters Are Not Properly Sealed</h3>
                <p className="text-gray-700">
                  We recently worked with a homeowner in Sherman Oaks who had hairline cracks forming on her balcony ceiling. The source? A decorative stucco planter above had no waterproof coating. Water had saturated the walls for years. The damage was extensive—costing thousands in structural repair. A simple waterproofing membrane could have prevented it.
                </p>
              </div>
              
              {/* Conclusion */}
              <div className="mb-8">
                <p className="text-gray-700 mb-3">
                  What seems like a minor planter issue can quickly escalate into major structural repairs. Waterproofing your planters is not just maintenance. In fact, it is protection for your home's foundation, your investment, and your peace of mind. So, read below to know how the best planter waterproofing company waterproofs your site.
                </p>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:col-span-1">
              <div className=" top-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="/service/s1.svg" 
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

      {/* Our Proven Planter Waterproofing Process Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/service/s2.svg" 
                  alt="Workers performing planter repair work on concrete floor"
                  className="w-full h-auto object-cover"
                  style={{ minHeight: '500px' }}
                />
              </div>
            </div>
            
            {/* Right Column - Text Content */}
            <div className="order-1 lg:order-2">
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Proven Planter Waterproofing Process
              </h2>
              
              {/* Introduction */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We do not take shortcuts. Every planter waterproofing job we do follows a strict, proven process that ensures long-term protection.
              </p>
              
              {/* Thorough Inspection & Surface Preparation */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Thorough Inspection & Surface Preparation</h3>
                <p className="text-gray-700">
                  We start with a detailed inspection. We identify cracks, efflorescence, root damage, and any signs of water migration. Then we clean the surface thoroughly and grind down weak areas to ensure the coating bonds perfectly.
                </p>
              </div>
              
              {/* Professional Coating & Membrane Application */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Coating & Membrane Application</h3>
                <p className="text-gray-700 mb-4">
                  We apply a multi-layer waterproofing membrane system that resists root penetration, standing water, and soil pressure. Whether your planter is concrete, block, or framed in wood, we match the system to your structure and use elastomeric, breathable materials that move with the substrate.
                </p>
              </div>
              
              {/* Flashing Installation */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Flashing Installation at Joints and Transitions</h3>
                <p className="text-gray-700 mb-4">
                  Leaks often begin at the joints—where the planter meets walls, doors, or decks. We install corrosion-resistant flashing and seal these transitions tight using high-grade sealants and fabric reinforcement. This is critical for homes near the coast where salt air accelerates corrosion.
                </p>
              </div>
              
              {/* Root Barrier Installation */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Root Barrier Installation to Stop Intrusive Growth</h3>
                <p className="text-gray-700 mb-4">
                  Roots can crack concrete. Our root barrier systems prevent plants from damaging the waterproofing below. We install root barriers that are safe for your plants but tough enough to block aggressive root systems like bamboo or ficus.
                </p>
              </div>
              
              {/* Drainage Enhancements */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <h4 className="font-semibold text-blue-900 mb-3">Drainage Enhancements & Weep Screed Adjustments</h4>
                <p className="text-blue-800">
                  Water needs a clear exit path. We install or correct drains, scuppers, and weep screeds to prevent standing water. In a recent Brentwood apartment complex, poor drainage in rooftop planters caused leaks into multiple units. We re-sloped the planters and installed new drainage trays—problem solved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plant-Safe and Eco-Friendly Materials Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-8xl">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Plant-Safe and Eco-Friendly Materials
          </h2>
          
          {/* Introductory Paragraphs */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Your garden should thrive—without compromising your deck or home. That is why we use waterproofing systems that are as safe for your plants as they are effective at stopping leaks. Every product we apply is carefully selected to balance performance and eco-consciousness.
            </p>
          </div>
          
          {/* Safe for Plants, Pets, and the Environment */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Safe for Plants, Pets, and the Environment</h3>
            <p className="text-gray-700 mb-4">
              Our waterproofing systems are plant-safe and non-toxic. They will not harm your soil or leach chemicals into your garden. That means your herbs, succulents, or citrus trees are protected along with your structure.
            </p>
          </div>
          
          {/* High-Performance, Non-Toxic Waterproofing Systems */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">High-Performance, Non-Toxic Waterproofing Systems</h3>
            <p className="text-gray-700 mb-4">
              We use VOC-compliant, environmentally responsible coatings approved for use in residential and HOA properties. Many of our systems are LEED-friendly and meet California green building standards.
            </p>
            <p className="text-gray-700">
              You can protect your structure without harming your greenery. With our non-toxic, high-performance systems, your planters stay waterproofed.
            </p>
          </div>
        </div>
      </div>

      {/* Compliance & Long-Term Protection Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compliance & Long-Term Protection
              </h2>
              
              {/* Introductory Paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Waterproofing should never create new problems with your HOA or local regulations. That is why we follow Los Angeles building codes, meet HOA guidelines, and back every project with a clear warranty.
              </p>
              
              {/* HOA-Friendly Repairs and Installations */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">HOA-Friendly Repairs and Installations</h3>
                <p className="text-gray-700 mb-4">
                  We handle permitting, noise regulations, and HOA approvals. Our work meets Los Angeles County building codes, and we provide the documentation your management company may request.
                </p>
              </div>
              
              {/* Warranty-Backed Work That Lasts */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Warranty-Backed Work That Lasts</h3>
                <p className="text-gray-700 mb-4">
                  All our planter waterproofing and coating services are backed by warranties ranging from 5 to 15 years. We also offer annual maintenance plans for high-rise buildings and commercial properties with extensive planter systems.
                </p>
                <p className="text-gray-700">
                  When you choose Waterproofed.com, you get more than a quick fix. You get work that lasts, stays compliant, and gives you confidence for years to come—whether for your home, HOA, or commercial property.
                </p>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/service/s3.svg" 
                  alt="Three construction workers applying bright light blue waterproof coating on outdoor planter"
                  className="w-full h-auto object-cover"
                  style={{ minHeight: '600px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Waterproofed.com for Planter Repairs Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-8xl">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Why Choose Waterproofed.com for Planter Repairs
          </h2>
          
          {/* Introductory Paragraphs */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Not all waterproofing contractors understand the unique challenges that come with built-in planters. At Waterproofed.com, planter waterproofing is not just a side service—it is one of our core specialties. Backed by decades of experience in Southern California's toughest climates, we know what it takes to keep your planters watertight, structurally sound, and fully integrated with your property's aesthetic.
            </p>
          </div>
          
          {/* Over 30 Years of Waterproofing Experience */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Over 30 Years of Waterproofing Experience</h3>
            <p className="text-gray-700 mb-4">
              Darren, the founder of Waterproofed.com and President of Southern California Decking, has built a reputation over 38 years for doing things right the first time. He has led thousands of planter repair and coating projects across Los Angeles, Orange County, and the coastal communities. From contemporary homes in the Hollywood Hills to classic bungalows in Santa Monica, Darren and his team bring unmatched local expertise to every job.
            </p>
          </div>
          
          {/* Specialized Techniques for Built-in Planters */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialized Techniques for Built-in Planters</h3>
            <p className="text-gray-700 mb-4">
              We understand planter construction from the inside out—framing, flashing, slope, and soil load. Whether your planter is concrete, block, or framed in wood, we design the waterproofing system to match its structure. On a recent project in Manhattan Beach, we restored a leaking rooftop planter using a custom membrane and root barrier system that blended seamlessly with the client's modern aesthetic.
            </p>
          </div>
          
          {/* Fast, Clean, and Professional Crew */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast, Clean, and Professional Crew</h3>
            <p className="text-gray-700 mb-4">
              Our crews show up on time, work efficiently, and respect your property. We minimize disruption by using quiet tools, dust control barriers, and clean workspaces. At the end of each day, we leave the site tidy and organized—no mess, no hassle. For occupied apartment buildings or commercial properties, this level of care makes all the difference.
            </p>
          </div>
          
          {/* Serving Homes, Apartments & Commercial Properties */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Serving Homes, Apartments & Commercial Properties</h3>
            <p className="text-gray-700 mb-4">
              We work with homeowners, HOAs, builders, and property managers alike. Whether you need a single planter repaired on your patio or dozens of planters across a multi-unit complex, we scale our process to fit the job. We are trusted by clients across Southern California for reliable work, clear communication, and results that last.
            </p>
            <p className="text-gray-700">
              Choosing Waterproofed.com means choosing experience, specialization, and service you can count on. From the first inspection to the final topcoat, we take pride in protecting your property with solutions built to last. If your planters are showing signs of leaks—or if you simply want to make sure they never do—our team is ready to help.
            </p>
          </div>
        </div>
      </div>

      {/* Southern California Decking: Best Planter Waterproofing Company Section */}
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
            Southern California Decking: Best Planter Waterproofing Company
          </h2>
          
          {/* Introductory Paragraph */}
          <p className="text-lg text-white leading-relaxed mb-12 text-center max-w-4xl mx-auto">
            In a crowded market of waterproofing contractors, Southern California Decking sets the standard. With over three decades of hands-on experience and a sharp focus on planter systems, we bring unmatched knowledge, craftsmanship, and customer care to every project. Here is why more homeowners, HOAs, and builders across Los Angeles choose us again and again.
          </p>
          
          {/* Two-Column Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* We use only premium, commercial-grade waterproofing systems */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  We use only premium, commercial-grade waterproofing systems.
                </h3>
                <p className="text-white leading-relaxed mb-4">
                  Every product we apply is designed to perform under pressure—literally. From high-traffic commercial rooftops to residential planter boxes, we rely on professional-grade coatings that resist UV, root intrusion, and extreme moisture exposure.
                </p>
              </div>
              
              {/* Our technicians are factory-trained and certified */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Our technicians are factory-trained and certified.
                </h3>
                <p className="text-white leading-relaxed">
                  We are not just experienced—we are educated. Our team is trained and certified by top waterproofing manufacturers, ensuring every install meets exact specifications and performs as promised.
                </p>
              </div>
              
              {/* We understand the science behind planters */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  We understand the science behind planters.
                </h3>
                <p className="text-white leading-relaxed">
                  Planter waterproofing is more than sealing surfaces. It is about balancing soil volume, irrigation, drainage paths, and structural load. We know how to protect your deck or rooftop without compromising your landscaping or safety.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* We believe in honest pricing and transparency */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  We believe in honest pricing and transparency.
                </h3>
                <p className="text-white leading-relaxed">
                  No hidden fees. No vague quotes. We provide detailed proposals with clear scopes of work, so you know exactly what you are getting—and why it matters.
                </p>
              </div>
              
              {/* Our reputation is built on trust and results */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Our reputation is built on trust and results.
                </h3>
                <p className="text-white leading-relaxed">
                  Homeowners, property managers, and contractors trust us because we deliver what we promise. From five-star reviews to long-standing client relationships, our track record speaks for itself.
                </p>
              </div>
              
              {/* Conclusion */}
              <div>
                <p className="text-white leading-relaxed">
                  At Southern California Decking, planter waterproofing is not just another service. Here, it is a specialty we have perfected. We combine premium materials, certified expertise, and personalized service to give you solutions that last. If you are looking for a waterproofing partner who puts quality and integrity first, you are in the right place.
                </p>
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
                Best Planter Waterproofing, Coating & Repair Services
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
