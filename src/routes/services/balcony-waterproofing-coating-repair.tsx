import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Testimonial from '../components/testimonial'

export const Route = createFileRoute(
  '/services/balcony-waterproofing-coating-repair',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqData = [
    {
      id: 0,
      question: "My balcony has hairline cracks—is that serious?",
      answer: "Yes. Even minor cracks let in moisture, which leads to rot, mold, and surface breakdown. Sealing them early saves you from expensive structural repairs later."
    },
    {
      id: 1,
      question: "Do you waterproof over tiled balconies?",
      answer: "Only if the tile and substrate are in excellent condition. In most cases, we recommend removing tile and rebuilding the system to ensure long-term waterproof performance."
    },
    {
      id: 2,
      question: "What coating is best for residential balconies?",
      answer: "We recommend Life Deck, Desert Crete, or Westcoat. These are durable, code-compliant systems with attractive finishes ideal for Los Angeles weather and residential balcony conditions."
    },
    {
      id: 3,
      question: "How often should a balcony be resealed?",
      answer: "Typically every 5–7 years, depending on sun, rain, and foot traffic. Resealing regularly prevents deterioration and extends the life of your waterproof coating system."
    },
    {
      id: 4,
      question: "Is your process HOA-compliant?",
      answer: "Yes. We handle many HOA projects and provide everything needed—photos, product specs, and scope—to help you get fast board approval without delays."
    },
    {
      id: 5,
      question: "How long does balcony waterproofing take?",
      answer: "Most balconies are completed in 3–5 days. Timelines vary slightly based on condition and size, but we always finish on schedule without cutting corners."
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
          Balcony Waterproofing Coating Repair
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
          Balcony Waterproofing, Coating & Repair in Los Angeles
        </h1>
        
        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          Your balcony is more than just outdoor space! In fact, it is an investment in your property's value and safety. At Waterproofed.com, we specialize in balcony waterproofing, balcony coating waterproofing, and balcony deck repair across Los Angeles. Backed by 38+ years of hands-on experience, our solutions are designed to last. So, whether you need to protect a new build or restore a failing system.
        </p>
        
        {/* Service Description Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
          We help homeowners, HOAs, and builders stop leaks before they get worse. Our team uses trusted systems, strong coatings, and skilled installation to get lasting results. From minor repairs to full waterproof balcony flooring systems- we handle it all and get it right the first time. Get fast, professional service and long-term protection from LA's most trusted waterproofing experts.
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
              With Waterproofed.com, you get expert diagnosis, precision workmanship, and peace of mind—all in one service!
            </h2>
            
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 border border-gray-300">
              Call Now
            </button>
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
              The Importance of Balcony Waterproofing in Los Angeles
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              A damaged balcony is not just ugly, it is a safety risk. In Los Angeles, intense sun, ocean air, and sudden rain take a toll. That is why balcony waterproofing is not a luxury, it is a must. Let's read more about this below.
            </p>
            
            {/* Why Most Balconies Fail */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Most Balconies Fail Without Waterproofing</h3>
              <p className="text-gray-700 mb-3">
                Cracks, bubbles and leaks are the three things that damage your balcony. Often this destruction begins quietly. Moisture seeps in through small cracks and starts weakening the structure from within. So, by the time you notice stains or soft spots, the damage has already begun. But, do not worry! We can catch the problems early. All you need to do is give us a call and ask for balcony waterproofing contractor.
              </p>
            </div>
            
            {/* Water Damage Is Common */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Water Damage Is Common in LA Homes and Buildings</h3>
              <p className="text-gray-700">
                The LA climate can be brutal on outdoor spaces. Salt air rusts railings. Rain seeps through old stucco. UV rays break down coatings over time. Our balcony waterproofing services protect your balcony from rot, corrosion, and hidden water damage that could cost thousands later.
              </p>
            </div>
            
            {/* Weather, Wear, and Poor Drainage */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Weather, Wear, and Poor Drainage: The Silent Killers</h3>
              <p className="text-gray-700 mb-4">
                Flat or poorly sloped balconies trap water. Clogged drains cause standing water to sit for days. Missing or failed flashing lets rainwater travel toward your walls. We fix the slope, seal every joint, and build drainage into your waterproofing system to stop problems at the source.
              </p>
            </div>
            
            {/* Prevent Problems */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prevent Problems Before They Cost You More</h3>
              <p className="text-gray-700 mb-3">
                Repairs after water damage are expensive—and risky. Mold, dry rot, and framing deterioration can require full reconstruction. Preventative waterproofing is faster, safer, and far more affordable. We offer complete balcony evaluations and custom solutions based on your property's age, material, and exposure.
              </p>
              <p className="text-gray-700">
                We are not just patching surfaces—we are restoring peace of mind. Keep reading to explore how our balcony coating systems protect your investment with long-lasting strength and beautiful finishes.
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

    {/* Learn About Our Balcony Coating Systems Section */}
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-8xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/service/s2.svg" 
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
              Learn About Our Balcony Coating Systems
            </h2>
            
            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              When it comes to protecting your balcony, surface coating alone is not enough. You need a complete system that seals, shields, and lasts. At Waterproofed.com, we install premium balcony coating waterproofing systems that are trusted across Los Angeles.
            </p>
            
            {/* Waterproof Coating */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Waterproof Coating for Wood, Concrete, and Metal</h3>
              <p className="text-gray-700">
                Whether your balcony is wood-framed or concrete, we build a custom solution that works for your structure. Our waterproof balcony flooring systems are multi-layered, flexible, and designed to handle harsh California weather. They protect against water intrusion, sun damage, and daily wear—without bubbling, peeling, or cracking.
              </p>
            </div>
            
            {/* We Only Use the Best */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">We Only Use the Best: Desert Crete, Life Deck & Fiberglass</h3>
              <p className="text-gray-700 mb-4">
                We do not gamble with your property. That is why we work with time-tested brands like Desert Crete, Life Deck, and reinforced fiberglass systems. These systems are not just durable—they are building-code approved and customizable. Smooth, sanded, or troweled textures? You choose. We match finishes to your home's style, and the result is both beautiful and built to last.
              </p>
            </div>
            
            {/* Built from the Base Up */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Built from the Base Up—No Cutting Corners</h3>
              <p className="text-gray-700 mb-4">
                We do not just roll on a coat and call it waterproofing. Our certified team grinds down the old surface, primes it, and builds up each layer with precision. We add reinforcement at stress points, seal joints, and apply topcoats designed to withstand UV, heat, and water. This 5-step system gives you protection that actually holds up—season after season.
              </p>
            </div>
            
            {/* Real Project. Real Results */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h4 className="font-semibold text-blue-900 mb-3">Real Project. Real Results.</h4>
              <p className="text-blue-800">
                A homeowner in Glendale contacted us after her third-story balcony began leaking into the unit below. The water caused mold, damaged drywall, and led to complaints from the HOA. We stripped off the old coating, corrected the slope, replaced the flashing, and installed a Life Deck system from scratch. The leak stopped immediately. No more complaints. Her HOA now uses us for every balcony in the building.
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
          Stucco Wall Repair & Railing Work
        </h2>
        
        {/* Introductory Paragraphs */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Waterproofing service for a balcony means sealing every surface, not just the deck. Most leaks begin where stucco walls meet the floor or around loose, aging railings. That is why we handle the whole system, including wall repairs and railings.
          </p>
        </div>
        
        {/* Small Cracks Can Lead to Big Problems */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Small Cracks Can Lead to Big Problems</h3>
          <p className="text-gray-700 mb-4">
            We see small cracks all the time like hairline stucco cracks around rail posts that go unnoticed. Over time, water seeps in and saturates the framing behind the wall. This causes rot, mold, and costly repairs. We seal every crack and seam, then apply waterproof stucco coatings that breathe and match your walls.
          </p>
        </div>
        
        {/* Unsafe Railings */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Unsafe Railings? We Fix or Replace Them</h3>
          <p className="text-gray-700 mb-4">
            Loose or rusted railings are more than just an eyesore—they are a safety risk. We remove damaged posts, re-anchor or weld new metal railings, and seal around the base to block water. Your balcony will look better, feel safer, and last longer.
          </p>
        </div>
        
        {/* Complete Integration */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Integration for Lasting Protection</h3>
          <p className="text-gray-700 mb-4">
            Where the deck meets the wall is the most vulnerable point of your balcony. We custom flash and seal this critical transition so no water slips in behind the coating. One recent client in Santa Monica had bubbling stucco and a loose railing. Our team removed the damaged areas, re-welded the railing, patched the stucco, and installed a new integrated balcony waterproofing system. The result? No more leaks, and your balcony will look as good as new.
          </p>
          <p className="text-gray-700">
            From the deck to the walls to the rails, we fix everything that keeps water out. No shortcuts. Just solid, clean work that protects your property long-term.
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
              Flashing and Drainage Solutions
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Water damage does not always come from the top. Many leaks start at the edges, thresholds, or joints where water finds even the smallest opening. That is why proper flashing and drainage are non-negotiable in any professional balcony waterproofing job.
            </p>
            
            {/* Flashing Installation Done Right */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flashing Installation Done Right</h3>
              <p className="text-gray-700 mb-4">
                We install custom metal flashing at all critical transitions—along edges, around door thresholds, and where walls meet the deck. We use galvanized steel or copper, depending on your building, and install it with precision. No gaps. No shortcuts. Just a watertight seal that keeps water out, year after year.
              </p>
            </div>
            
            {/* We Design Drainage That Actually Works */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">We Design Drainage That Actually Works</h3>
              <p className="text-gray-700 mb-4">
                Clogged or missing drains are one of the biggest causes of balcony failure in Los Angeles. We fabricate and install custom scuppers, downspouts, and area drains that match your balcony layout. Every system is designed to direct water away from your building—fast and efficiently.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-800">
                  One customer in Burbank had water ponding on a flat balcony after every rain. That water eventually seeped into the interior wall and caused paint to bubble inside her living room. We corrected the slope, added two new scuppers, and rebuilt the waterproof system with fresh flashing. No more pondering. No more interior damage. Problem solved.
                </p>
              </div>
            </div>
            
            {/* We Fix the Slope */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">We Fix the Slope So Water Flows Away</h3>
              <p className="text-gray-700 mb-4">
                Balconies that slope back toward the building are a disaster waiting to happen. We correct bad slopes by re-leveling the surface before waterproofing begins. This ensures that water flows away from the structure—and not into your home.
              </p>
            </div>
            
            {/* Perfect for Older and Retrofit Projects */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect for Older and Retrofit Projects</h3>
              <p className="text-gray-700 mb-4">
                Older buildings are often built with outdated drainage or no flashing at all. We specialize in retrofitting balconies without disturbing your building's structure. Whether your property is 5 years old or 50, we bring it up to modern standards with minimal disruption.
              </p>
              <p className="text-gray-700">
                With Waterproofed.com, your balcony drains right—and stays dry. Let us design a system that protects your property from the ground up.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/service/s3.svg" 
                alt="Three construction workers applying bright light blue waterproof coating on outdoor balcony"
                className="w-full h-auto object-cover"
                style={{ minHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Slip-Resistant Finishes for Balconies Section */}
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-8xl">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Slip-Resistant Finishes for Balconies
        </h2>
        
        {/* Introductory Paragraphs */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A beautiful balcony should also be safe. Slippery surfaces can be dangerous, especially after rain or dew. That is why we use textured, slip-resistant finishes for comfort and code compliance.
          </p>
        </div>
        
        {/* Safety Comes Standard */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Comes Standard</h3>
          <p className="text-gray-700 mb-4">
            We do not believe in "optional" safety. Every balcony waterproofing system we install includes the option for a slip-resistant finish. These textures help prevent slips, falls, and safety issues—especially for families, seniors, and renters.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
            <p className="text-blue-800">
              One client in Studio City had a smooth-coated balcony that became dangerously slick every time it rained. After her son slipped coming back inside, she called us. We installed a textured Desert Crete finish with added grit. It matched her exterior and gave her peace of mind.
            </p>
          </div>
        </div>
        
        {/* Designed for Comfort and Grip */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Designed for Comfort and Grip</h3>
          <p className="text-gray-700 mb-4">
            Our textures are easy on bare feet, but tough enough to grip shoes and sandals. You can choose from trowel, sanded, or knockdown textures. The choice is based on your specific needs and design preferences. Each finish is hand-applied to ensure smoothness. We bring perfect appearance with just the right level of traction.
          </p>
        </div>
        
        {/* Fully Code Compliant */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Fully Code Compliant</h3>
          <p className="text-gray-700 mb-4">
            All of our balcony deck repair and coating systems meet or exceed California building codes and ADA guidelines. If you are working with an HOA, city inspector, or general contractor, we will provide all the specs and documentation you need.
          </p>
        </div>
        
        {/* Style Meets Function */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Style Meets Function</h3>
          <p className="text-gray-700 mb-4">
            Your balcony should look great and feel safe. We offer dozens of color options and can even match your stucco or exterior paint. Whether you prefer a clean, modern look or a warm, rustic feel, we will create a finish that fits your style perfectly.
          </p>
          <p className="text-gray-700">
            Our balcony waterproofing system looks good, feels safe, and is built to last. You get high quality with Southern California Decking. Are you still unsure? Well read the next section to know about our HOA and code compliant balcony coating and waterproofing systems.
          </p>
        </div>
      </div>
    </div>

    {/* HOA and Code-Compliant Balcony Waterproofing Systems Section */}
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
          HOA and Code-Compliant Balcony Waterproofing Systems
        </h2>
        
        {/* Introductory Paragraph */}
        <p className="text-lg text-white leading-relaxed mb-12 text-center max-w-4xl mx-auto">
          Managing multi-unit properties or working with an HOA? We make balcony waterproofing simple, stress-free, and fully code-compliant. So, whether it is one building or an entire complex, we are ready to handle the work as an affordable balcony waterproofing service.
        </p>
        
        {/* Two-Column Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Trusted by Property Managers and HOAs */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Trusted by Property Managers and HOAs Across Los Angeles
              </h3>
              <p className="text-white leading-relaxed mb-4">
                We have worked with HOAs, property managers, and contractors for decades. From routine maintenance to emergency repairs, we understand what it takes to get balcony projects done fast and done right. No missed deadlines. No loose ends.
              </p>
              <div className=" bg-opacity-20 p-4 rounded">
                <p className="text-white">
                  A property manager in West Hollywood came to us after a city inspection flagged five balconies. We handled everything—permits, demo, coatings, flashing, drainage, and railing reinstallation. All balconies passed final inspection on the first visit. The board was thrilled. So were the residents.
                </p>
              </div>
            </div>
            
            {/* Systems Approved for Multi-Unit */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Systems Approved for Multi-Unit and Commercial Use
              </h3>
              <p className="text-white leading-relaxed">
                We use tested, certified waterproofing systems that meet California's strict building codes. Our products suit apartments, condos, mixed-use buildings, and commercial spaces. They are built for safety, durability, and long-term performance of balcony.
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Worry-Free Permits */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Worry-Free Permits, Inspections, and Code Compliance
              </h3>
              <p className="text-white leading-relaxed">
                We take the pressure off your team by managing permits and code requirements ourselves. From SB326 and SB721 inspections to city-specific rules, we stay up to date so you do not have to.
              </p>
            </div>
            
            {/* Certified, Warrantied */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Certified, Warrantied, and Fully Documented
              </h3>
              <p className="text-white leading-relaxed">
                We provide clear documentation, system specs, and warranty details for every job. Our work is backed by up to 8-year warranties and comes with a professional finish your board will be proud of.
              </p>
            </div>
            
            {/* Conclusion */}
            <div>
              <p className="text-white leading-relaxed">
                Waterproofed.com makes HOA projects easier—from paperwork to paint. Let us take the lead and keep your property protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Why Homeowners & Property Managers Choose Waterproofed.com Section */}
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-8xl">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Why Homeowners & Property Managers Choose Waterproofed.com
        </h2>
        
        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
          At Waterproofed.com, we do not just waterproof balconies—we build trust. With every project, we bring deep experience, honest communication, and results that last.
        </p>
        
        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Over 38 Years */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Over 38 Years of Local Waterproofing Expertise
            </h3>
            <p className="text-gray-700">
              Darren Elliott, our founder and president, has been working in the waterproofing and deck coating industry for over 38 years. He knows every detail of how Southern California homes and buildings are built—and how to protect them. From stucco-clad apartments in Burbank to beachfront homes in Malibu, we have seen and solved it all.
            </p>
          </div>
          
          {/* Licensed, Bonded */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Licensed, Bonded, and Fully Insured Contractors
            </h3>
            <p className="text-gray-700">
              You are fully protected when you work with us. We hold all the proper licenses, carry full insurance, and follow California code to the letter. No risks. No guesswork.
            </p>
          </div>
          
          {/* Top-Tier Materials */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Top-Tier Materials and Manufacturer Partnerships
            </h3>
            <p className="text-gray-700">
              We use the best in the business. Our coatings and systems come from industry leaders like Life Specialty Coatings, Westcoat, and Polycoat. These materials offer long-term durability, flexibility, and waterproofing performance that stands up to harsh weather and daily use.
            </p>
          </div>
          
          {/* Fast, Professional Service */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Fast, Professional Service with Minimal Disruption
            </h3>
            <p className="text-gray-700">
              We know your time is valuable. That is why we keep every project organized, on time, and on track. Our crews are respectful, clean, and efficient. We are in and out with minimal disruption—no delays, no excuses.
            </p>
          </div>
          
          {/* Real References */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Real References from Los Angeles and Ventura County Projects
            </h3>
            <p className="text-gray-700">
              Want proof? Just ask. We are proud to share photos and references from actual balcony waterproofing and repair projects throughout Southern California. See our work. Hear from real clients. Feel confident in your decision.
            </p>
          </div>
          
          {/* Transparent Pricing */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Transparent Pricing, Free Consultations, and Long-Term Warranties
            </h3>
            <p className="text-gray-700">
              We are honest from day one. You get a clear quote, no hidden fees, and full transparency on costs and scope. Plus, our work is backed by warranties up to 8 years, depending on your system. We are here to protect your balcony—and your peace of mind.
            </p>
          </div>
        </div>
        
        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            At Waterproofed.com, you are getting more than a service. You are getting experience, reliability, and real value.
          </p>
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
              Best Balcony Waterproofing, Coating & Repair Services
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
