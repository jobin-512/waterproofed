import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Testimonial from '../../../components/testimonial'

export const Route = createFileRoute(
  '/_layout/services/mold-remediation-&-detection',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqData = [
    {
      id: 0,
      question: "How do I know if I have mold in my home in Santa Monica or Los Angeles?",
      answer: "The most common signs of mold include a persistent musty or earthy smell, visible dark spots on walls, ceilings, or floors, water stains, peeling paint or wallpaper, and unexplained allergy symptoms like sneezing, coughing, or itchy eyes that improve when you leave the property. Many mold infestations are hidden behind walls or under flooring — which is why a professional inspection using thermal imaging and air quality testing is the only reliable way to confirm mold presence and its extent."
    },
    {
      id: 1,
      question: "Is mold remediation covered by homeowners insurance in California?",
      answer: "Coverage depends on your specific policy and the cause of the mold. Most California homeowners insurance policies cover mold remediation when it results directly from a covered event — such as a burst pipe or storm damage. However, mold caused by long-term neglect or maintenance failures is often excluded. We recommend contacting your insurer before the inspection. We can provide detailed documentation of our findings to support your claim."
    },
    {
      id: 2,
      question: "How long does mold remediation take in a typical Los Angeles home?",
      answer: "The timeline depends on the size and severity of the infestation. A small, localized mold issue — such as mold in a bathroom or under a kitchen sink — can typically be remediated in one to two days. More extensive infestations affecting multiple rooms or structural elements may take three to seven days. If restoration work (such as replacing drywall or reapplying waterproofing) is needed afterward, that can add additional time. We always provide a timeline estimate before beginning work."
    },
    {
      id: 3,
      question: "Can mold come back after professional remediation?",
      answer: "Yes, mold can return — but only if the underlying moisture problem is not fully resolved. This is the most common failure point of mold remediation companies that don't also address waterproofing. At Southern California Decking, we go beyond remediation: we identify and repair the water intrusion source, whether that's a leaking deck, a failed balcony membrane, damaged flashing, or plumbing issues. When the moisture source is eliminated and the structure is properly dried and waterproofed, mold does not return."
    },
    {
      id: 4,
      question: "Is it safe to stay in my home during mold remediation in Santa Clarita or Hollywood?",
      answer: "For small, contained remediation projects, remaining in the home may be possible depending on the location of the affected area. However, for more extensive infestations — especially those involving black mold, HVAC contamination, or large portions of your living space — we strongly recommend temporary relocation during active remediation. Disturbing mold colonies releases airborne spores, which can aggravate respiratory conditions. We will advise you on the safest approach based on the specific conditions of your property."
    },
    {
      id: 5,
      question: "How much does mold remediation cost in Los Angeles?",
      answer: "Mold remediation costs in the Los Angeles area vary depending on the size of the affected area, the type of mold present, the materials involved, and the complexity of the work. Small bathroom or isolated area remediation can start from a few hundred dollars, while whole-room or structural remediation in larger homes can run several thousand dollars. We always offer a free inspection and provide a clear, no-obligation written estimate before any work begins. There are no surprise charges or hidden fees — just transparent pricing from a team you can trust."
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
            backgroundImage: "url('/Services/Mold Remediation & Detection Services/1.jpg')"
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
              Mold Remediation & Detection Services
            </h1>

            {/* Paragraph Text */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Santa Monica | Santa Clarita | Hollywood | North Hollywood | Acton | Los Angeles & Surrounding Areas
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-8xl">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            Mold Remediation & Detection Services in Los Angeles, CA
          </h2>

          {/* Introductory Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            Living here in the greater Los Angeles area — whether you're in Santa Monica near the coast, tucked into a hillside in Hollywood, or out in the high desert near Acton — one thing we all deal with is moisture. And where there's moisture, there's mold. I've seen it firsthand in countless homes and commercial properties across Southern California: a slow drip under the deck, a poorly sealed balcony letting rainwater seep in, a crawlspace in a Santa Clarita home that never quite dried out after last winter's storms. Left unchecked, mold doesn't just look bad — it can seriously damage your property and affect the health of everyone inside.
          </p>

          {/* Service Description Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
            That's why Southern California Decking (Waterproofed.com), your trusted local waterproofing experts with over 38 years serving this community, now offers comprehensive mold remediation and mold detection services across Los Angeles, Santa Monica, Santa Clarita, Hollywood, North Hollywood, Acton, and all surrounding areas. We're not a national chain. We're your neighbors — and we know this region's unique climate, architecture, and moisture challenges better than anyone.
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
              With Waterproofed.com, you get expert mold detection, certified remediation, and permanent waterproofing solutions
            </h2>
            <p className='text-2xl md:text-3xl font-bold text-white mb-6'>-All in one service!</p>
            
            <a href="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 border border-gray-300">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>

      {/* What Is Mold Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-2">
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Is Mold and Why Is It a Problem in Southern California?
              </h2>

              {/* Introductory Paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Mold is a type of fungus that thrives in damp, poorly ventilated environments. Southern California's climate — while famously sunny — creates surprising pockets of high humidity, especially in coastal communities like Santa Monica and Malibu, low-lying neighborhoods in North Hollywood, and older construction in Hollywood and the LA basin. Seasonal rainstorms, marine layer moisture, and aging plumbing create ideal conditions for mold to take hold.
              </p>

              {/* Common Types of Mold */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Types of Mold Found in Local Properties</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A7E8] font-bold mt-1">•</span>
                    <span><strong>Black mold (Stachybotrys chartarum)</strong> — often found behind walls and under flooring after water intrusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A7E8] font-bold mt-1">•</span>
                    <span><strong>Aspergillus</strong> — common in HVAC systems and bathroom tiles across LA-area homes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A7E8] font-bold mt-1">•</span>
                    <span><strong>Cladosporium</strong> — frequently discovered on decks, balconies, and exterior wood surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A7E8] font-bold mt-1">•</span>
                    <span><strong>Penicillium</strong> — often present in water-damaged insulation and drywall</span>
                  </li>
                </ul>
              </div>

              {/* Health Risks */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Health Risks of Mold Exposure</h3>
                <p className="text-gray-700 mb-3">
                  Mold exposure can trigger respiratory issues, allergic reactions, headaches, and in severe cases, neurological symptoms. For children, the elderly, and those with asthma or compromised immune systems, mold is especially dangerous. Don't wait for visible growth — by the time you see it, the problem is already significant.
                </p>
              </div>

              {/* Climate-Specific Challenges */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">LA's Unique Climate Creates Hidden Dangers</h3>
                <p className="text-gray-700">
                  The LA climate can be deceptive. Salt air from the coast accelerates material degradation. Rain seeps through old stucco and aging waterproofing. UV rays break down protective coatings, leaving structures vulnerable. Marine layer moisture keeps humidity elevated for hours each morning. These conditions create the perfect storm for mold growth in places you'd never think to look.
                </p>
              </div>

              {/* Prevent Problems */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Early Detection Prevents Costly Damage</h3>
                <p className="text-gray-700 mb-3">
                  Repairs after mold damage are expensive — and risky. Mold, dry rot, and structural deterioration can require full reconstruction. Early detection and remediation is faster, safer, and far more affordable. We offer complete property evaluations and custom solutions based on your property's age, material, and exposure.
                </p>
                <p className="text-gray-700">
                  We're not just removing mold — we're restoring peace of mind. Keep reading to explore how our professional detection services find mold before it spreads.
                </p>
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="lg:col-span-1">
            <div className=" top-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/Services/Mold Remediation & Detection Services/2.jpg" 
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

      {/* Professional Mold Detection Services Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/Services/Mold Remediation & Detection Services/3.webp" 
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
                Professional Mold Detection Services — Finding What You Can't See
              </h2>

              {/* Introduction */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Most mold growth in Los Angeles-area homes hides where you'd never think to look — behind drywall in Santa Monica bungalows, beneath the waterproofing membrane of a Hollywood rooftop deck, or inside the wall cavities of a North Hollywood apartment. Our certified technicians use advanced technology to locate mold before it spreads:
              </p>

              {/* Thermal Imaging */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Thermal Imaging Inspection</h3>
                <p className="text-gray-700">
                  We use professional-grade infrared thermal cameras to detect hidden moisture behind walls, under floors, and inside ceilings — all without drilling a single hole. Thermal imaging reveals temperature differentials caused by trapped moisture, giving us a complete picture of what's happening inside your property's structure.
                </p>
              </div>

              {/* Moisture Meter */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Moisture Meter Testing</h3>
                <p className="text-gray-700">
                  Our technicians probe walls, flooring, and structural elements with calibrated moisture meters. A reading above 16% in wood materials or 1% in concrete typically signals problematic moisture accumulation that can feed mold growth.
                </p>
              </div>

              {/* Air Quality */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Air Quality & Spore Sampling</h3>
                <p className="text-gray-700">
                  We collect air samples and surface swabs from your property and send them to a certified lab for analysis. The results tell us exactly which mold species are present, their concentration levels, and whether indoor air quality has been compromised. This is especially critical for multi-family properties in Hollywood and North Hollywood where mold can affect multiple units.
                </p>
              </div>

              {/* Visual Inspection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visual Inspection & Property Assessment</h3>
                <p className="text-gray-700">
                  Our experienced inspectors perform a detailed visual walkthrough of your entire property — from the roof deck and balconies to the basement, crawlspace, and HVAC system. In Santa Clarita and Acton properties, we pay special attention to areas affected by seasonal flooding and sudden weather changes.
                </p>
              </div>

              {/* Conclusion */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Want thorough mold detection? Let us inspect your property before the damage spreads. Your peace of mind starts with a free inspection.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Service Mold Remediation Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-8xl">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Full-Service Mold Remediation — Safe, Effective, and Long-Lasting
          </h2>

          {/* Introductory Paragraph */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center max-w-4xl mx-auto">
              Detection is only half the battle. Once we know where the mold is and what we're dealing with, our team executes a thorough, safe, and certified remediation process:
            </p>
          </div>

          {/* Step 1: Containment */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Containment</h3>
            <p className="text-gray-700 mb-4">
              We seal off the affected area using heavy-duty plastic sheeting and negative air pressure machines. This prevents cross-contamination and stops mold spores from spreading to clean areas of your home or business.
            </p>
          </div>

          {/* Step 2: HEPA Air Filtration */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 2: HEPA Air Filtration</h3>
            <p className="text-gray-700 mb-4">
              Industrial HEPA air scrubbers run continuously during remediation, capturing airborne mold spores down to 0.3 microns. Your indoor air quality is monitored throughout the process.
            </p>
          </div>

          {/* Step 3: Removal */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Removal of Contaminated Materials</h3>
            <p className="text-gray-700 mb-4">
              Affected drywall, insulation, flooring, and structural wood that cannot be salvaged is carefully removed and disposed of in accordance with California state regulations.
            </p>
          </div>

          {/* Step 4: Anti-Microbial Treatment */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 4: Anti-Microbial Treatment</h3>
            <p className="text-gray-700 mb-4">
              We apply EPA-approved anti-microbial and anti-fungal solutions to all affected surfaces, eliminating remaining mold colonies and inhibiting future growth.
            </p>
          </div>

          {/* Step 5: Structural Drying */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 5: Structural Drying</h3>
            <p className="text-gray-700 mb-4">
              Commercial-grade dehumidifiers and air movers dry the structure completely. We don't close up walls until moisture readings confirm the area is fully dry.
            </p>
          </div>

          {/* Step 6: Restoration & Waterproofing */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 6: Restoration & Waterproofing</h3>
            <p className="text-gray-700 mb-4">
              Here's where we go further than any other mold remediation company: we fix the source. If a leaking deck, failed balcony waterproofing, or compromised roof membrane caused the mold, we fix that too — with our industry-leading waterproofing systems. This is the step that prevents mold from ever coming back.
            </p>
          </div>
        </div>
      </div>

      {/* Why LA Homeowners Choose Us Section (with image) */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Los Angeles Homeowners Choose Southern California Decking for Mold Services
              </h2>

              {/* Introductory Paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                There are dozens of mold companies operating in the LA metro. Here's what makes us different:
              </p>

              {/* 38+ Years */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">38+ Years of Local Experience</h3>
                <p className="text-gray-700 mb-4">
                  We've been protecting Southern California properties since before most of our competitors were founded. We know the construction styles, the microclimates, and the most common failure points in every neighborhood we serve.
                </p>
              </div>

              {/* Mold + Waterproofing */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mold + Waterproofing Under One Roof</h3>
                <p className="text-gray-700 mb-4">
                  Most mold companies treat the symptom. We treat the cause. Because we're also Southern California's premier waterproofing specialists, we can identify, remediate, and permanently seal the water intrusion points that allowed mold to grow in the first place.
                </p>
              </div>

              {/* Certified */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Certified & Licensed Technicians</h3>
                <p className="text-gray-700 mb-4">
                  Our team holds relevant industry certifications and complies fully with California OSHA requirements and state mold remediation guidelines.
                </p>
              </div>

              {/* Free Inspection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Free Inspection & Transparent Estimates</h3>
                <p className="text-gray-700 mb-4">
                  We offer no-obligation inspections and provide clear, itemized estimates before any work begins. No hidden fees. No scare tactics. Just honest assessments from people who actually live and work in this community.
                </p>
              </div>

              {/* Serving Your Neighborhood */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Serving Your Neighborhood</h3>
                <p className="text-gray-700">
                  From the oceanfront condos of Santa Monica to the family homes of Santa Clarita, the classic apartment buildings of Hollywood and North Hollywood, and the sprawling ranches of Acton — we know your area and we're close by.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-1">
            <div className=" top-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/Services/Mold Remediation & Detection Services/4.jpg" 
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

      {/* Mold Remediation Service Areas Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-8xl">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Mold Remediation Service Areas Across Southern California
          </h2>

          {/* Service Areas Content */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mold Remediation in Santa Monica</h3>
            <p className="text-gray-700 mb-4">
              Santa Monica's coastal location makes it one of the highest-risk areas in LA County for mold. The marine layer keeps humidity elevated year-round, and the city's mix of older craftsman homes, mid-century apartments, and newer condominiums all present unique moisture management challenges. We regularly serve homeowners and property managers throughout Santa Monica with mold inspections, testing, and full remediation services.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mold Remediation in Santa Clarita</h3>
            <p className="text-gray-700 mb-4">
              Santa Clarita experiences dramatic seasonal weather swings — summer heat followed by winter rains that can overwhelm drainage systems. Our office is right here in Santa Clarita (30035 Bouquet Canyon Rd), meaning we can respond quickly to local homes and commercial properties. From newer tract homes in Valencia to custom estates in Canyon Country, we know Santa Clarita mold issues inside and out.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mold Remediation in Hollywood & North Hollywood</h3>
            <p className="text-gray-700 mb-4">
              The dense urban neighborhoods of Hollywood and North Hollywood are home to thousands of pre-war apartment buildings and aging commercial structures. Many feature flat roofs, poor original waterproofing, and outdated plumbing — all prime conditions for hidden mold colonies. We work extensively with property owners, HOAs, and landlords across both communities.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mold Remediation in Acton</h3>
            <p className="text-gray-700 mb-4">
              Acton sits in a high desert environment where sudden rainstorms and flash flooding can introduce large amounts of water into properties in a short time. Homes in Acton often feature large footprints with multiple moisture entry points — crawlspaces, basements, and expansive decking. Our team understands Acton's unique environmental conditions and provides targeted detection and remediation.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mold Remediation in Los Angeles & Surrounding Areas</h3>
            <p className="text-gray-700">
              Beyond our named service areas, we serve the entire greater Los Angeles region — including Burbank, Glendale, Pasadena, Beverly Hills, Culver City, West Hollywood, Studio City, Sherman Oaks, and more. If you're in Southern California and dealing with mold, call us.
            </p>
          </div>
        </div>
      </div>

      {/* HOA and Property Manager Section (dark bg) */}
      <div className="py-16 px-4 bg-[#1a4a5e] relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-80">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/service/s4.webp')",
            filter: "blur(2px)"
          }}
        ></div>
      </div>

        <div className="container mx-auto max-w-8xl relative z-10">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Mold Remediation for Multi-Unit Properties, HOAs & Commercial Buildings
          </h2>

          {/* Introductory Paragraph */}
          <p className="text-lg text-white leading-relaxed mb-12 text-center max-w-4xl mx-auto">
            Managing multi-unit properties or working with an HOA? We make mold remediation simple, stress-free, and fully compliant. Whether it's one building or an entire complex, we're ready to handle the work.
          </p>

          {/* Two-Column Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Trusted by Property Managers and HOAs Across Los Angeles
                </h3>
                <p className="text-white leading-relaxed mb-4">
                  We've worked with HOAs, property managers, and contractors for decades. From routine mold inspections to emergency remediation, we understand what it takes to get mold projects done fast and done right. No missed deadlines. No loose ends.
                </p>
                <div className="bg-opacity-20 p-4 rounded">
                  <p className="text-white">
                    A property manager in West Hollywood came to us after tenants in three units reported musty smells and respiratory issues. We performed thermal imaging across the entire building, identified hidden mold in shared wall cavities, and remediated all affected areas. Every unit passed air quality testing on the first try. The board was thrilled. So were the residents.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Systems Approved for Multi-Unit and Commercial Use
                </h3>
                <p className="text-white leading-relaxed">
                  We use tested, certified remediation protocols that meet California's strict health and safety codes. Our processes suit apartments, condos, mixed-use buildings, and commercial spaces. They're built for safety, thoroughness, and long-term mold prevention.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Worry-Free Compliance and Documentation
                </h3>
                <p className="text-white leading-relaxed">
                  We take the pressure off your team by managing compliance requirements ourselves. From California OSHA mold guidelines to city-specific rules, we stay up to date so you don't have to. Full documentation provided for every project.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Certified, Warrantied, and Fully Documented
                </h3>
                <p className="text-white leading-relaxed">
                  We provide clear documentation, lab results, remediation reports, and warranty details for every job. Our work is backed by comprehensive warranties and comes with professional results your board will be proud of.
                </p>
              </div>

              <div>
                <p className="text-white leading-relaxed">
                  Waterproofed.com makes mold remediation for HOA projects easier — from paperwork to final clearance testing. Let us take the lead and keep your property protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Grid Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-8xl">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Why Homeowners & Property Managers Choose Waterproofed.com
          </h2>

          {/* Introductory Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
            At Waterproofed.com, we don't just remove mold — we build trust. With every project, we bring deep experience, honest communication, and results that last.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 38 Years */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Over 38 Years of Local Expertise
              </h3>
              <p className="text-gray-700">
                Darren Elliott, our founder and president, has been working in the waterproofing and building protection industry for over 38 years. He knows every detail of how Southern California homes and buildings are built — and how to protect them. From stucco-clad apartments in Burbank to beachfront homes in Malibu, we've seen and solved it all.
              </p>
            </div>

            {/* Licensed */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Licensed, Bonded, and Fully Insured
              </h3>
              <p className="text-gray-700">
                You're fully protected when you work with us. We hold all the proper licenses, carry full insurance, and follow California code to the letter. Our mold remediation technicians are certified and OSHA-compliant. No risks. No guesswork.
              </p>
            </div>

            {/* Advanced Technology */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Advanced Detection Technology
              </h3>
              <p className="text-gray-700">
                We use professional-grade thermal imaging cameras, calibrated moisture meters, and certified lab testing to find mold that other companies miss. Our detection technology provides a complete picture of your property's moisture and mold conditions — without destructive exploration.
              </p>
            </div>

            {/* Fast Service */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Fast, Professional Service with Minimal Disruption
              </h3>
              <p className="text-gray-700">
                We know your time is valuable. That's why we keep every project organized, on time, and on track. Our crews are respectful, clean, and efficient. We're in and out with minimal disruption — no delays, no excuses. Same-day response available.
              </p>
            </div>

            {/* Real References */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Real References from LA and Ventura County Projects
              </h3>
              <p className="text-gray-700">
                Want proof? Just ask. We're proud to share photos and references from actual mold remediation and waterproofing projects throughout Southern California. See our work. Hear from real clients. Feel confident in your decision.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Transparent Pricing & Free Consultations
              </h3>
              <p className="text-gray-700">
                We're honest from day one. You get a clear quote, no hidden fees, and full transparency on costs and scope. Plus, our work is backed by comprehensive warranties. We're here to protect your property — and your peace of mind.
              </p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              At Waterproofed.com, you're getting more than a service. You're getting experience, reliability, and real value.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-8xl">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Ready to Protect Your Home from Mold? Contact Us Today.
          </h2>

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
              If you're seeing signs of mold, smelling something musty, or recently experienced water damage in your Santa Monica, Santa Clarita, Hollywood, North Hollywood, Acton, or Los Angeles property — don't wait. Mold spreads quickly and becomes significantly more expensive to address the longer it's left untreated.
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.6823458766893!2d-118.4418287!3d34.3928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c28a3c1f0baaab%3A0x7a9a9d01e5b2d3e5!2s30035%20Bouquet%20Canyon%20Rd%2C%20Santa%20Clarita%2C%20CA%2091390!5e0!3m2!1sen!2sus!4v1668537783503!5m2!1sen!2sus" width="100%" height="600" allowFullScreen title="Office Location"></iframe>
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
              <p className="text-lg text-[#00A7E8] font-semibold mb-2">Frequently Asked Questions</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mold Remediation & Detection Services in Los Angeles
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Get answers to the most common questions about mold detection, remediation, costs, and prevention for properties in the greater Los Angeles area.
              </p>
              <a href="/contact" className="inline-block bg-[#00A7E8] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg">
                ASK QUESTIONS
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
                        className={`w-5 h-5 transform transition-transform duration-200 flex-shrink-0 ml-2 ${
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
