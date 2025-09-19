import { createFileRoute } from '@tanstack/react-router'
import Testimonial from '../components/testimonial'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
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
              About Us
            </h1>
            
            {/* Paragraph Text */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Waiting for Ivy's Content
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#00A7E8] mb-6">What We Do:</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Southern California Decking, Inc. has over 26 years of experience installing 
                waterproofing and deck coatings throughout the Santa Clarita Valley, San Fernando 
                Valley, Santa Monica, Los Angeles, and surrounding areas.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We have grown from a small operation to a dynamic company serving commercial 
                projects, apartment complexes, schools, and individual homeowners. Our commitment 
                is to match the right product for each project, ensuring both functional and 
                aesthetically superior results.
              </p>
            </div>
            <div className=" rounded-lg h-80 flex items-center justify-center overflow-hidden">
              <img 
                src="/a1.webp" 
                alt="Company Image - 26+ Years Experience" 
                className="w-fit h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deck Coating & Waterproofing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg h-80 flex items-center justify-center order-2 lg:order-1 overflow-hidden">
              <img 
                src="/a1.webp" 
                alt="Service Image - Deck Coating Work" 
                className="w-fit h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#00A7E8] mb-6">Deck Coating & Waterproofing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We work with traffic-bearing waterproofing membranes on parking decks, roofing, 
                pedestrian walkways, decks, balconies, and stairways. We also handle membranes 
                for below-grade applications, below tile, planters, and between slab waterproofing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our specialty flooring systems include pool decks, aircraft hangars, garages, 
                ESD laboratory floors, and warehouse floors. We serve as a specialty coatings 
                contractor across numerous cities in Southern California including Beverly Hills, 
                Burbank, Calabasas, Glendale, Hermosa Beach, Los Angeles, Malibu, Marina Del Rey, 
                Pacific Palisades, Pasadena, Redondo Beach, San Fernando Valley, Santa Clarita, 
                Santa Monica, Simi Valley, Thousand Oaks, and Venice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technological Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#00A7E8] mb-6">Technological Products</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use only high-quality, technologically advanced products from established 
                manufacturers. Our extensive product knowledge includes:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
                <div>
                  <p>• Paraseal (Bentonite)</p>
                  <p>• Thoroseal</p>
                  <p>• Heydi</p>
                  <p>• Xypex</p>
                  <p>• Trem-Co</p>
                  <p>• Dex-o-tex</p>
                  <p>• Mer-ko</p>
                  <p>• Seamco</p>
                  <p>• Dessert Brands Sonneborne</p>
                  <p>• Sika</p>
                  <p>• Dur-a-flex</p>
                  <p>• Vulkem</p>
                </div>
                <div>
                  <p>• Mameco</p>
                  <p>• Pacific Polymers</p>
                  <p>• Poly Coat</p>
                  <p>• Multi-Chemical Products</p>
                  <p>• UPI</p>
                  <p>• Tufflex</p>
                  <p>• Koba</p>
                  <p>• Grace</p>
                  <p>• Mira</p>
                  <p>• Magnesite</p>
                  <p>• Bituthanes</p>
                  <p>• All epoxy systems</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We have knowledge and experience with any product a client might stipulate. 
                Let's discuss your specific project needs.
              </p>
            </div>
            <div className=" rounded-lg h-80 flex items-center justify-center overflow-hidden">
              <img 
                src="/a1.webp" 
                alt="Products Image - Quality Materials" 
                className="w-fit h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SCD Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#00A7E8] mb-6">SCD Management</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 gap-8 items-center">
                <div className="text-left">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Darren Elliott</strong>, President of Southern California Decking, 
                    manages the company and is directly accessible via email or phone.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    With over 26 years in the waterproofing and deck coating business, Darren 
                    leads our company's position in low VOC coatings and applications.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Southern California Decking has over 20 employees with a combined 100+ years 
                    of experience. Our experience ensures competitive and cost-effective price quotes 
                    and that the job is <strong>"DONE CORRECTLY."</strong>
                  </p>
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