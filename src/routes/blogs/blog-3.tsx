import { createFileRoute } from '@tanstack/react-router'
import Testimonial from '../components/testimonial'

export const Route = createFileRoute('/blogs/blog-3')({
  component: BlogPage,
})

function BlogPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold leading-tight">
            Why Waterproof Deck Coatings Are Essential for Outdoor Living
          </h1>
          <p className="mt-2 text-sm text-gray-600">July 15, 2025</p>
          <nav className="mt-1 text-xs text-gray-500">
            Home » Blogs » Why Waterproof Deck Coatings Are Essential for Outdoor Living
          </nav>
        </header>

        <article className="prose max-w-none">
          <p>
            At Southern California Decking, we believe that outdoor living spaces should last. You enjoy sunny days and cool nights outside. You sit with your family. You relax. You grill and play. But your deck faces sun, rain, and wind every day. That is why waterproof deck coatings are not just a choice. They are a need.
          </p>
          <p>
            Waterproof deck coatings protect your deck. They make it last longer. They keep it safe. Without them, your deck can rot. It can crack. It can peel. And that is not something anyone wants. In this blog, we explain why waterproof deck coatings matter for outdoor living. We write in simple words so everyone can understand.
          </p>

          <h2 className="mt-10 text-3xl md:text-4xl font-bold">Your Deck Fights the Weather Every Day</h2>
          <p>Your deck needs help. It needs protection. That is what waterproof deck coatings do. The main stressors are:</p>
          <ul className="list-disc pl-6">
            <li><span className="font-semibold">Sun/heat:</span> dries wood and creates cracks.</li>
            <li><span className="font-semibold">Rain/water:</span> seeps into gaps and stays trapped, accelerating breakdown.</li>
            <li><span className="font-semibold">Wind/dirt:</span> dust and grit scratch the surface over time.</li>
          </ul>

          <figure className="my-8">
            <img
              src="/blogs/b5.webp"
              alt="Coated deck standing up to the elements"
              className="w-full rounded object-cover"
            />
          </figure>

          <h2 className="mt-10 text-3xl md:text-4xl font-bold">Without Coating, Deck Damage Grows Fast</h2>
          <p>Damage often starts small and spreads quickly. Common issues include:</p>
          <ul className="list-disc pl-6">
            <li>Wood rot and soft spots</li>
            <li>Rusting fasteners and popped nails</li>
            <li>Peeling paint and widening cracks</li>
            <li>Mold growth where moisture lingers</li>
          </ul>

          <h2 className="mt-10 text-3xl md:text-4xl font-bold">Waterproof Deck Coatings Make Decks Stronger</h2>
          <p>
            Coatings cover every inch, fill small cracks, and form a smooth, protective layer. Water can’t penetrate as easily and the sun is less likely to crack the surface. They help your deck look great and last longer.
          </p>

          <h2 className="mt-10 text-3xl md:text-4xl font-bold">Coatings Come in Many Colors</h2>
          <p>
            Choose tones that match your home—warm browns, modern grays, or something bold. A fresh color elevates your outdoor space while protecting it.
          </p>

          <h2 className="mt-10 text-3xl md:text-4xl font-bold">Easy Cleaning and Care</h2>
          <ul className="list-disc pl-6">
            <li>Most spills wipe up easily</li>
            <li>Routine cleaning with water and a soft brush</li>
            <li>Fewer repaints and board replacements over time</li>
          </ul>

          <figure className="my-8">
            <img
              src="/blogs/b6.webp"
              alt="Clean, protected outdoor deck surface"
              className="w-full rounded object-cover"
            />
          </figure>

          <h2 className="mt-10 text-3xl md:text-4xl font-bold">Good for Wood, Concrete, and More</h2>
          <ul className="list-disc pl-6">
            <li>Wood decks and stairs</li>
            <li>Concrete patios and pool surrounds</li>
            <li>Metal railings and high‑wear areas</li>
          </ul>

          <h2 className="mt-10 text-3xl md:text-4xl font-bold">Keeps Your Family Safe</h2>
          <ul className="list-disc pl-6">
            <li>Added texture for better traction when wet</li>
            <li>Reduces slip risk for kids, pets, and guests</li>
          </ul>

          <h2 className="mt-10 text-3xl md:text-4xl font-bold">Longer Life Means Lower Costs</h2>
          <p>Think of a coating like a raincoat for your deck. One good application protects for years:</p>
          <ul className="list-disc pl-6">
            <li>Fewer major repairs and replacements</li>
            <li>Protects your investment and adds value</li>
          </ul>

          <h2 className="mt-10 text-3xl md:text-4xl font-bold">Peace of Mind in Every Season</h2>
          <p>
            Hot sun, sudden rain, and wind are no match for a properly coated deck. Enjoy your space without worrying about every weather change.
          </p>

          <h2 className="mt-10 text-3xl md:text-4xl font-bold">Professional Application Matters</h2>
          <p>Our process helps coatings last longer and look smoother:</p>
          <ul className="list-disc pl-6">
            <li>Thorough cleaning and surface prep</li>
            <li>Sanding, repairs, and removal of old coatings where needed</li>
            <li>Layered application with correct dry times</li>
            <li>Full‑coverage checks—no bubbles or thin spots</li>
          </ul>

          <h2 className="mt-10 text-3xl md:text-4xl font-bold">Why Choose Southern California Decking</h2>
          <ul className="list-disc pl-6">
            <li>Experienced team using high‑quality materials</li>
            <li>Attentive service: we listen, advise, and deliver on time</li>
            <li>Clean, ready‑to‑enjoy outdoor spaces when we’re done</li>
          </ul>

          <h2 className="mt-10 text-3xl md:text-4xl font-bold">Outdoor Living is an Investment</h2>
          <p>
            Your outdoor space is part of your home and your life. Protecting it with a waterproof coating preserves memories—and value.
          </p>

          <h2 className="mt-10 text-3xl md:text-4xl font-bold">Final Thoughts</h2>
          <p>
            Waterproof deck coatings are a must. They protect, save money, and make outdoor living better and safer. Call Southern California Decking and enjoy peace of mind for years.
          </p>
        </article>
      </div>
      <Testimonial />
    </>
  )
}
