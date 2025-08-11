import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Testimonial from './components/testimonial'

export const Route = createFileRoute('/service')({
  component: Service,
})

function Service() {
  const [openFaq, setOpenFaq] = useState(0) // 0 means first FAQ is open by default

  const faqData = [
    {
      id: 0,
      question: "1. How do I know if I need waterproofing?",
      answer: "Common signs include water stains, musty odors, mold growth, or visible cracks in your basement or foundation. If you're seeing any of these, it's best to schedule a free inspection."
    },
    {
      id: 1,
      question: "2. What does your free estimate include?",
      answer: "Our free estimate includes a thorough inspection of your property, identification of water issues, detailed recommendations, and a comprehensive written quote with no hidden fees or pressure to sign up immediately."
    },
    {
      id: 2,
      question: "3. Do you offer warranties?",
      answer: "Yes, we offer comprehensive warranties on all our work. Our waterproofing systems come with lifetime transferable warranties, and we stand behind our craftsmanship with detailed warranty documentation."
    },
    {
      id: 3,
      question: "4. How long does waterproofing take?",
      answer: "The timeline varies depending on the scope of work. Simple repairs might take a day, while full basement waterproofing systems typically take 2-3 days. We'll provide a detailed timeline during your free estimate."
    }
  ]

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? -1 : id) // Close if already open, otherwise open
  }

  
  return(
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
              Services
            </h1>
            
            {/* Paragraph Text */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Intrinsicly predominate backward-compatible potentialities without alternative total linkage. Interactively fabricate cross-unit growth strategies.
            </p>
          </div>
        </div>
      </div>


      {/* Services Section */}

      {/* What Type of Service You Offer Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              What Type of Service You Offer
            </h2>
          </div>
          
          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1: Waterproof Deck Coatings */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/s2.webp" 
                alt="Person using roller to apply coating to deck" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Waterproof Deck Coatings</h3>
                <p className="text-gray-600">
                  Competently extend error-free web-readiness rather than end-to-end results. Appropriately simplify dynamic architectures without.
                </p>
              </div>
            </div>
            
            {/* Service Card 2: Between Slab Waterproofing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/s3.webp" 
                alt="Person using squeegee to spread waterproofing material" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Between Slab Waterproofing</h3>
                <p className="text-gray-600">
                  Competently extend error-free web-readiness rather than end-to-end results. Appropriately simplify dynamic architectures without.
                </p>
              </div>
            </div>
            
            {/* Service Card 3: FLOOR LEVELING */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/s4.webp" 
                alt="Construction worker using trowel to smooth floor" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">FLOOR LEVELING</h3>
                <p className="text-gray-600 mb-4">
                  Competently extend error-free web-readiness rather than end-to-end results. Appropriately simplify dynamic architectures without.
                </p>
              </div>
            </div>
            
            {/* Service Card 4: Below Grade Waterproofing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/s5.webp" 
                alt="Worker using spray gun on corrugated metal" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Below Grade Waterproofing</h3>
                <p className="text-gray-600 mb-4">
                  Competently extend error-free web-readiness rather than end-to-end results. Appropriately simplify dynamic architectures without.
                </p>
              </div>
            </div>
            
            {/* Service Card 5: Planter Waterproofing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/s6.webp" 
                alt="Worker applying coating to concrete planter box" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Planter Waterproofing</h3>
                <p className="text-gray-600 mb-4">
                  Competently extend error-free web-readiness rather than end-to-end results. Appropriately simplify dynamic architectures without.
                </p>
              </div>
            </div>
            
            {/* Service Card 6: POOL DECK COATINGS */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/s7.webp" 
                alt="Swimming pool with textured pool deck" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">POOL DECK COATINGS</h3>
                <p className="text-gray-600 mb-4">
                  Competently extend error-free web-readiness rather than end-to-end results. Appropriately simplify dynamic architectures without.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Emergency Services Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Left Section - Blue Background */}
            <div className="lg:w-1/3 bg-[#00A7E8] p-8 lg:p-12 flex flex-col justify-center relative">
              {/* Light blue strip */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-300"></div>
              
              <div className="text-white relative z-10">
                <p className="text-sm font-semibold uppercase tracking-wide mb-2">EMERGENCY SERVICES</p>
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight">Having an urgent problem and can't wait?</h3>
              </div>
            </div>
            
            {/* Right Section - Contact Form */}
            <div className="lg:w-2/3 bg-gray-800 p-8 lg:p-12">
              <form className="flex flex-col lg:flex-row gap-4 items-end">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Your name *" 
                    className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:ring-2 focus:ring-[#00A7E8] focus:outline-none"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input 
                    type="email" 
                    placeholder="Your Email *" 
                    className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:ring-2 focus:ring-[#00A7E8] focus:outline-none"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input 
                    type="tel" 
                    placeholder="Phone Number *" 
                    className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:ring-2 focus:ring-[#00A7E8] focus:outline-none"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="bg-[#00A7E8] hover:bg-[#0095d1] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 whitespace-nowrap"
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Our Services Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <p className="text-[#00A7E8] font-semibold text-sm uppercase tracking-wide mb-2">
                  Why Choosing Our Services
                </p>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Why Homeowners Trust Waterproofed.com
                </h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                At Waterproofed.com, we combine decades of experience with proven techniques to deliver lasting solutions for every home. Our team is licensed, insured, and highly trained to tackle even the most complex water problems. We don't believe in one-size-fits-all fixes — just honest evaluations, transparent pricing, and work that's built to last. From our lifetime transferable warranties to our local reputation for reliability, everything we do is focused on protecting your home and earning your trust.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00A7E8] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Experience You Can Trust</h3>
                    <p className="text-gray-600 text-sm">With over 30 years in waterproofing, we know how to diagnose and solve even the toughest water problems.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00A7E8] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Lifetime Warranty</h3>
                    <p className="text-gray-600 text-sm">We stand behind our work with warranties that give you lasting peace of mind — and they're fully transferable.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00A7E8] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Honest, Upfront Pricing</h3>
                    <p className="text-gray-600 text-sm">No gimmicks, no pressure. Just clear estimates and straightforward recommendations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00A7E8] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Top-Rated Service</h3>
                    <p className="text-gray-600 text-sm">Hundreds of 5-star reviews and an A+ BBB rating speak for themselves.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00A7E8] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Local & Reliable</h3>
                    <p className="text-gray-600 text-sm">We're not a national chain — we live and work in your community, and we treat your home like our own.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Images and Overlay */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                
                {/* Bottom Image with Video Play Button */}
                <div className="relative">
                  <img 
                    src="/s1.webp" 
                    alt="Waterproofing application process" 
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="w-full  py-16 bg-[#eeeeee]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center border-r border-gray-600">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">1.25k</div>
              <div className="text-gray-800 font-medium">Successful Projects</div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center border-r border-gray-600">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">1.24k</div>
              <div className="text-gray-800 font-medium">Satisfied Customer</div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center border-r border-gray-600">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">250+</div>
              <div className="text-gray-800 font-medium">Expert Plumbers</div>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#00A7E8] mb-2">100%</div>
              <div className="text-gray-800 font-medium">Quality Products</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - About Waterproofing */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <p className="text-[#00A7E8] font-semibold text-sm uppercase tracking-wide mb-2">
                  Frequently Asked Have Any Question?
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                  What to Know About Waterproofing, Our Services, and Your Protection.
                </h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Globally repurpose interdependent products after enterprise alignments. Credibly orchestrate worldwide web services whereas bleeding-edge networks. Interactively target sticky architectures. Holistically aggregate team driven human capital via customer directed interfaces. Seamlessly scale diverse total linkage rather than cross-unit process improvements.
              </p>
              
              <div className="pt-4">
                <button className="bg-[#00A7E8] hover:bg-[#0095d1] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                  ASK QUESTIONS
                </button>
              </div>
            </div>
            
            {/* Right Column - FAQ Accordion */}
            <div className="lg:w-1/2 space-y-4">
              {faqData.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg">
                  <div 
                    className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                      openFaq === faq.id ? 'bg-gray-50 rounded-t-lg' : 'bg-white'
                    }`}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                    <svg 
                      className={`w-5 h-5 text-[#00A7E8] transition-transform duration-200 ${
                        openFaq === faq.id ? 'transform rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                  {openFaq === faq.id && (
                    <div className="p-4 border-t border-gray-200">
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Standard Working Process Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Standard Working Process</h2>
          </div>
          
          {/* Process Steps */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Step 1: Free Inspection & Assessment */}
            <div className="flex flex-col items-center text-center max-w-xs">
              
              {/* Image */}
              <div className="w-auto h-[20rem] p-10 rounded-full  overflow-hidden mb-4">
                <img 
                  src="/w1.webp" 
                  alt="Inspector with clipboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Free Inspection & Assessment</h3>
              <p className="text-gray-600 text-sm">
                When booking, it helps customers when they are shown a calendar. They can then click on the day they want and book from there.
              </p>
            </div>
            
            {/* Arrow 1 */}
            <div className="hidden lg:block">
              <svg className="w-8 h-8 text-[#00A7E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Step 2: Clear, Upfront Estimate */}
            <div className="flex flex-col items-center text-center max-w-xs">
              
              {/* Image */}
              <div className="w-auto h-[20rem] p-10 rounded-full overflow-hidden mb-4">
                <img 
                  src="/w2.webp" 
                  alt="Consultation meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Clear, Upfront Estimate</h3>
              <p className="text-gray-600 text-sm">
                Professionally engage end-to-end channels after functionalized supply chains. Continually underwhelm cooperative.
              </p>
            </div>
            
            {/* Arrow 2 */}
            <div className="hidden lg:block">
              <svg className="w-8 h-8 text-[#00A7E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Step 3: Expert Installation */}
            <div className="flex flex-col items-center text-center max-w-xs">
              
              {/* Image */}
              <div className="w-auto h-[20rem] p-10 rounded-full  overflow-hidden mb-4">
                <img 
                  src="/w3.webp" 
                  alt="Worker with power drill" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Installation</h3>
              <p className="text-gray-600 text-sm">
                Some common plumbing problems include low water pressure, clogged drains, leaky pipes, running toilets, and dripping faucets.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Projects Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div>
              <p className="text-[#00A7E8] font-semibold text-sm uppercase tracking-wide mb-2">
                Latest Projects
              </p>
              <h2 className="text-4xl font-bold text-gray-800">Our Completed Projects</h2>
            </div>
          </div>
          
          {/* Project Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1: Waterproof Deck Coatings */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/t1.webp" 
                  alt="Waterproof deck coatings project" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                  <div className="text-white">
                    <p className="text-[#00A7E8] text-sm font-medium mb-2">Kitchen</p>
                    <h3 className="text-xl font-bold mb-4">Waterproof Deck Coatings</h3>
                  </div>
                  {/* Plus Button */}
                  <button className="absolute bottom-4 right-4 w-12 h-12 bg-[#00A7E8] text-white rounded-lg flex items-center justify-center hover:bg-[#0095d1] transition-colors duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Project 2: Roof Coating Application */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/t2.webp" 
                  alt="Roof coating application project" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                  <div className="text-white">
                    <p className="text-[#00A7E8] text-sm font-medium mb-2">Roofing</p>
                    <h3 className="text-xl font-bold mb-4">Roof Coating Application</h3>
                  </div>
                  {/* Plus Button */}
                  <button className="absolute bottom-4 right-4 w-12 h-12 bg-[#00A7E8] text-white rounded-lg flex items-center justify-center hover:bg-[#0095d1] transition-colors duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Project 3: Tile Roof Treatment */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/t3.webp" 
                  alt="Tile roof treatment project" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                  <div className="text-white">
                    <p className="text-[#00A7E8] text-sm font-medium mb-2">Exterior</p>
                    <h3 className="text-xl font-bold mb-4">Tile Roof Treatment</h3>
                  </div>
                  {/* Plus Button */}
                  <button className="absolute bottom-4 right-4 w-12 h-12 bg-[#00A7E8] text-white rounded-lg flex items-center justify-center hover:bg-[#0095d1] transition-colors duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      <Testimonial/>
    </>
  )
}
